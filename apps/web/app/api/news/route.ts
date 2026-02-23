import { NextRequest, NextResponse } from 'next/server';
import { getAllNews, getPublishedNews, createNewsItem } from '../../../lib/news';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const all = request.nextUrl.searchParams.get('all') === 'true';
    const items = all ? await getAllNews() : await getPublishedNews();
    return NextResponse.json(items);
  } catch {
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

    revalidatePath('/');
    revalidatePath('/news');

    return NextResponse.json(newItem, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create news item' }, { status: 500 });
  }
}
