import { NextRequest, NextResponse } from 'next/server';
import { getAllNews, getPublishedNews, createNewsItem } from '../../../lib/news';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

function tryRevalidate(paths: string[]) {
  try {
    paths.forEach(p => revalidatePath(p));
  } catch {
    // best-effort; pages use force-dynamic so they refresh anyway
  }
}

export async function GET(request: NextRequest) {
  try {
    const all = request.nextUrl.searchParams.get('all') === 'true';
    const items = all ? await getAllNews() : await getPublishedNews();
    return NextResponse.json(items);
  } catch (err) {
    console.error('[GET /api/news]', err);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, summary, peopleIds, status } = body;

    if (!title?.trim()) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const newItem = await createNewsItem({
      title: title.trim(),
      date: new Date().toISOString(),
      summary: summary?.trim() || undefined,
      peopleIds: peopleIds || [],
      status: status || 'published',
    });

    tryRevalidate(['/', '/news']);

    return NextResponse.json(newItem, { status: 201 });
  } catch (err) {
    console.error('[POST /api/news]', err);
    const message = err instanceof Error ? err.message : 'Failed to create news item';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
