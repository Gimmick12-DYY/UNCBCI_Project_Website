import { NextRequest, NextResponse } from 'next/server';
import { getNewsById, updateNewsItem, deleteNewsItem } from '../../../../lib/news';
import { revalidatePath } from 'next/cache';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const item = await getNewsById(id);
    if (!item) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch news item' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, summary, peopleIds, status } = body;

    const updated = await updateNewsItem(id, {
      ...(title !== undefined && { title: title.trim() }),
      ...(summary !== undefined && { summary: summary.trim() || undefined }),
      ...(peopleIds !== undefined && { peopleIds }),
      ...(status !== undefined && { status }),
    });

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    revalidatePath('/');
    revalidatePath('/news');
    revalidatePath(`/news/${id}`);

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update news item' }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const deleted = await deleteNewsItem(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    revalidatePath('/');
    revalidatePath('/news');

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete news item' }, { status: 500 });
  }
}
