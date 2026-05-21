import { promises as fs } from 'fs';
import path from 'path';
import type { SupabaseClient } from '@supabase/supabase-js';
import fallbackNews from '../data/news.json';

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

function normalizeItems(items: NewsItem[]): NewsItem[] {
  return items.map(item => ({ ...item, status: item.status || 'published' }));
}

function sortByDateDesc(items: NewsItem[]): NewsItem[] {
  return [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/* ── Storage backend detection ───────────────────────────── */

const useSupabase = () =>
  !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);

async function getSupabase(): Promise<SupabaseClient> {
  const { supabase } = await import('./supabase');
  return supabase;
}

async function withSupabase<T>(
  query: (
    sb: SupabaseClient,
  ) => PromiseLike<{ data: T | null; error: { message: string; code?: string } | null }>,
): Promise<T | null> {
  if (!useSupabase()) return null;

  try {
    const sb = await getSupabase();
    const { data, error } = await query(sb);
    if (error) {
      console.warn('[news] Supabase query failed, using local fallback:', error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.warn('[news] Supabase unavailable, using local fallback:', err);
    return null;
  }
}

/* ── Local filesystem helpers (development fallback) ─────── */

const LOCAL_PATH = path.join(process.cwd(), 'data', 'news.json');

async function getLocalNews(): Promise<NewsItem[]> {
  try {
    const raw = await fs.readFile(LOCAL_PATH, 'utf-8');
    return normalizeItems(JSON.parse(raw) as NewsItem[]);
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      'code' in err &&
      (err as NodeJS.ErrnoException).code === 'ENOENT'
    ) {
      return normalizeItems(fallbackNews as NewsItem[]);
    }
    console.warn('[news] Failed to read local news.json, using bundled fallback:', err);
    return normalizeItems(fallbackNews as NewsItem[]);
  }
}

async function localWrite(items: NewsItem[]): Promise<void> {
  await fs.writeFile(LOCAL_PATH, JSON.stringify(items, null, 2) + '\n', 'utf-8');
}

/* ── Public API ──────────────────────────────────────────── */

export async function getAllNews(): Promise<NewsItem[]> {
  const data = await withSupabase(sb =>
    sb.from('news').select('*').order('date', { ascending: false }).then(r => r),
  );

  if (data) {
    return (data as NewsRow[]).map(rowToItem);
  }

  return getLocalNews();
}

export async function getPublishedNews(): Promise<NewsItem[]> {
  const data = await withSupabase(sb =>
    sb
      .from('news')
      .select('*')
      .eq('status', 'published')
      .order('date', { ascending: false })
      .then(r => r),
  );

  if (data) {
    return (data as NewsRow[]).map(rowToItem);
  }

  const items = await getLocalNews();
  return sortByDateDesc(items.filter(item => item.status === 'published'));
}

export async function getNewsById(id: string): Promise<NewsItem | undefined> {
  const data = await withSupabase(sb =>
    sb.from('news').select('*').eq('id', id).single().then(r => r),
  );

  if (data) {
    return rowToItem(data as NewsRow);
  }

  const items = await getLocalNews();
  return items.find(item => item.id === id);
}

export async function createNewsItem(
  data: Omit<NewsItem, 'id'>,
): Promise<NewsItem> {
  const id = `news-${Date.now()}`;

  if (useSupabase()) {
    try {
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
      if (!error && row) {
        return rowToItem(row as NewsRow);
      }
      if (error) {
        console.warn('[news] Supabase insert failed:', error.message);
      }
    } catch (err) {
      console.warn('[news] Supabase insert unavailable:', err);
    }
  }

  const items = await getLocalNews();
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
    try {
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
      if (!error && row) {
        return rowToItem(row as NewsRow);
      }
      if (error?.code === 'PGRST116') return null;
      if (error) {
        console.warn('[news] Supabase update failed:', error.message);
      }
    } catch (err) {
      console.warn('[news] Supabase update unavailable:', err);
    }
  }

  const items = await getLocalNews();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...data };
  await localWrite(items);
  return items[idx];
}

export async function deleteNewsItem(id: string): Promise<boolean> {
  if (useSupabase()) {
    try {
      const sb = await getSupabase();
      const { error, count } = await sb
        .from('news')
        .delete({ count: 'exact' })
        .eq('id', id);
      if (!error) {
        return (count ?? 0) > 0;
      }
      console.warn('[news] Supabase delete failed:', error.message);
    } catch (err) {
      console.warn('[news] Supabase delete unavailable:', err);
    }
  }

  const items = await getLocalNews();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return false;
  items.splice(idx, 1);
  await localWrite(items);
  return true;
}
