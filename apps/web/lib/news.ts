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

const DATA_PATH = path.join(process.cwd(), 'data', 'news.json');

export async function getAllNews(): Promise<NewsItem[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8');
    const items = JSON.parse(raw) as NewsItem[];
    return items.map(item => ({
      ...item,
      status: item.status || 'published',
    }));
  } catch (err: unknown) {
    if (err instanceof Error && 'code' in err && (err as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw err;
  }
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

async function saveAllNews(items: NewsItem[]): Promise<void> {
  await fs.writeFile(DATA_PATH, JSON.stringify(items, null, 2) + '\n', 'utf-8');
}

export async function createNewsItem(data: Omit<NewsItem, 'id'>): Promise<NewsItem> {
  const items = await getAllNews();
  const newItem: NewsItem = {
    ...data,
    id: `news-${Date.now()}`,
  };
  items.push(newItem);
  await saveAllNews(items);
  return newItem;
}

export async function updateNewsItem(id: string, data: Partial<Omit<NewsItem, 'id'>>): Promise<NewsItem | null> {
  const items = await getAllNews();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...data };
  await saveAllNews(items);
  return items[idx];
}

export async function deleteNewsItem(id: string): Promise<boolean> {
  const items = await getAllNews();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return false;
  items.splice(idx, 1);
  await saveAllNews(items);
  return true;
}
