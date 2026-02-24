import { promises as fs } from 'fs';
import path from 'path';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary?: string;
  peopleIds?: string[];
  status: 'draft' | 'published';
}

/* ── Supabase row ↔ NewsItem mapping ─────────────────────── */

interface NewsRow {
  id: string;
  title: string;
  date: string;
  summary: string | null;
  people_ids: string[];
  status: string;
}

function rowToItem(row: NewsRow): NewsItem {
  return {
    id: row.id,
    title: row.title,
    date: row.date,
    summary: row.summary ?? undefined,
    peopleIds: row.people_ids,
    status: (row.status as NewsItem['status']) || 'published',
  };
}

/* ── Storage backend detection ───────────────────────────── */

const useSupabase = () =>
  !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);

async function getSupabase() {
  const { supabase } = await import('./supabase');
  return supabase;
}

/* ── Local filesystem helpers (development fallback) ─────── */

const LOCAL_PATH = path.join(process.cwd(), 'data', 'news.json');

async function localRead(): Promise<NewsItem[]> {
  try {
    const raw = await fs.readFile(LOCAL_PATH, 'utf-8');
    return JSON.parse(raw) as NewsItem[];
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      'code' in err &&
      (err as NodeJS.ErrnoException).code === 'ENOENT'
    ) {
      return [];
    }
    throw err;
  }
}

async function localWrite(items: NewsItem[]): Promise<void> {
  await fs.writeFile(LOCAL_PATH, JSON.stringify(items, null, 2) + '\n', 'utf-8');
}

/* ── Public API ──────────────────────────────────────────── */

export async function getAllNews(): Promise<NewsItem[]> {
  if (useSupabase()) {
    const sb = await getSupabase();
    const { data, error } = await sb
      .from('news')
      .select('*')
      .order('date', { ascending: false });
    if (error) throw new Error(error.message);
    return (data as NewsRow[]).map(rowToItem);
  }

  const items = await localRead();
  return items.map(item => ({ ...item, status: item.status || 'published' }));
}

export async function getPublishedNews(): Promise<NewsItem[]> {
  if (useSupabase()) {
    const sb = await getSupabase();
    const { data, error } = await sb
      .from('news')
      .select('*')
      .eq('status', 'published')
      .order('date', { ascending: false });
    if (error) throw new Error(error.message);
    return (data as NewsRow[]).map(rowToItem);
  }

  const items = await getAllNews();
  return items
    .filter(item => item.status === 'published')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getNewsById(id: string): Promise<NewsItem | undefined> {
  if (useSupabase()) {
    const sb = await getSupabase();
    const { data, error } = await sb
      .from('news')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      if (error.code === 'PGRST116') return undefined; // not found
      throw new Error(error.message);
    }
    return rowToItem(data as NewsRow);
  }

  const items = await getAllNews();
  return items.find(item => item.id === id);
}

export async function createNewsItem(
  data: Omit<NewsItem, 'id'>,
): Promise<NewsItem> {
  const id = `news-${Date.now()}`;

  if (useSupabase()) {
    const sb = await getSupabase();
    const { data: row, error } = await sb
      .from('news')
      .insert({
        id,
        title: data.title,
        date: data.date,
        summary: data.summary ?? null,
        people_ids: data.peopleIds ?? [],
        status: data.status,
      })
      .select()
      .single();
    if (error) throw new Error(error.message);
    return rowToItem(row as NewsRow);
  }

  const items = await getAllNews();
  const newItem: NewsItem = { ...data, id };
  items.push(newItem);
  await localWrite(items);
  return newItem;
}

export async function updateNewsItem(
  id: string,
  data: Partial<Omit<NewsItem, 'id'>>,
): Promise<NewsItem | null> {
  if (useSupabase()) {
    const sb = await getSupabase();
    const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (data.title !== undefined) updates.title = data.title;
    if (data.summary !== undefined) updates.summary = data.summary ?? null;
    if (data.peopleIds !== undefined) updates.people_ids = data.peopleIds;
    if (data.status !== undefined) updates.status = data.status;
    if (data.date !== undefined) updates.date = data.date;

    const { data: row, error } = await sb
      .from('news')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) {
      if (error.code === 'PGRST116') return null;
      throw new Error(error.message);
    }
    return rowToItem(row as NewsRow);
  }

  const items = await getAllNews();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...data };
  await localWrite(items);
  return items[idx];
}

export async function deleteNewsItem(id: string): Promise<boolean> {
  if (useSupabase()) {
    const sb = await getSupabase();
    const { error, count } = await sb
      .from('news')
      .delete({ count: 'exact' })
      .eq('id', id);
    if (error) throw new Error(error.message);
    return (count ?? 0) > 0;
  }

  const items = await getAllNews();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return false;
  items.splice(idx, 1);
  await localWrite(items);
  return true;
}
