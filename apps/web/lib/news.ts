import { promises as fs } from 'fs';
import path from 'path';
import { put, list } from '@vercel/blob';
import initialData from '../data/news.json';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary?: string;
  peopleIds?: string[];
  status: 'draft' | 'published';
}

const LOCAL_PATH = path.join(process.cwd(), 'data', 'news.json');
const BLOB_KEY = 'news.json';

const useBlob = () => !!process.env.BLOB_READ_WRITE_TOKEN;

/* ── Vercel Blob helpers ─────────────────────────────────── */

async function blobRead(): Promise<{ found: boolean; items: NewsItem[] }> {
  const { blobs } = await list({ prefix: BLOB_KEY, limit: 1 });
  if (blobs.length === 0) return { found: false, items: [] };
  const res = await fetch(blobs[0].url);
  return { found: true, items: await res.json() };
}

async function blobWrite(items: NewsItem[]): Promise<void> {
  await put(BLOB_KEY, JSON.stringify(items, null, 2), {
    access: 'public',
    addRandomSuffix: false,
  });
}

/* ── Local filesystem helpers ────────────────────────────── */

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

/* ── Unified read / write ────────────────────────────────── */

async function readAll(): Promise<NewsItem[]> {
  if (useBlob()) {
    const { found, items } = await blobRead();
    if (found) return items;
    // First access on Vercel: seed blob from the bundled JSON
    const seed = (initialData as unknown as NewsItem[]).map(item => ({
      ...item,
      status: (item.status as NewsItem['status']) || 'published',
    }));
    await blobWrite(seed);
    return seed;
  }
  return localRead();
}

async function writeAll(items: NewsItem[]): Promise<void> {
  if (useBlob()) {
    await blobWrite(items);
  } else {
    await localWrite(items);
  }
}

/* ── Public API ──────────────────────────────────────────── */

export async function getAllNews(): Promise<NewsItem[]> {
  const items = await readAll();
  return items.map(item => ({
    ...item,
    status: item.status || 'published',
  }));
}

export async function getPublishedNews(): Promise<NewsItem[]> {
  const items = await getAllNews();
  return items
    .filter(item => item.status === 'published')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getNewsById(id: string): Promise<NewsItem | undefined> {
  const items = await getAllNews();
  return items.find(item => item.id === id);
}

export async function createNewsItem(data: Omit<NewsItem, 'id'>): Promise<NewsItem> {
  const items = await getAllNews();
  const newItem: NewsItem = { ...data, id: `news-${Date.now()}` };
  items.push(newItem);
  await writeAll(items);
  return newItem;
}

export async function updateNewsItem(
  id: string,
  data: Partial<Omit<NewsItem, 'id'>>,
): Promise<NewsItem | null> {
  const items = await getAllNews();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...data };
  await writeAll(items);
  return items[idx];
}

export async function deleteNewsItem(id: string): Promise<boolean> {
  const items = await getAllNews();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return false;
  items.splice(idx, 1);
  await writeAll(items);
  return true;
}
