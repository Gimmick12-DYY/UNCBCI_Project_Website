import { NextRequest, NextResponse } from 'next/server';
import { getNewsById, updateNewsItem, deleteNewsItem } from '../../../../lib/news';
import { revalidatePath } from 'next/cache';

type RouteContext = { params: Promise<{ id: string }> };

function tryRevalidate(paths: string[]) {
  try {
    paths.forEach(p => revalidatePath(p));
  } catch {
    // best-effort; pages use force-dynamic so they refresh anyway
  }
}

export async function GET(_request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const item = await getNewsById(id);
    if (!item) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch (err) {
    console.error('[GET /api/news/[id]]', err);
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

    tryRevalidate(['/', '/news', `/news/${id}`]);

    return NextResponse.json(updated);
  } catch (err) {
    console.error('[PUT /api/news/[id]]', err);
    const message = err instanceof Error ? err.message : 'Failed to update news item';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const deleted = await deleteNewsItem(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    tryRevalidate(['/', '/news']);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[DELETE /api/news/[id]]', err);
    const message = err instanceof Error ? err.message : 'Failed to delete news item';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
