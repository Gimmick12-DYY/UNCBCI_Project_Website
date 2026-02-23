import { NextResponse } from 'next/server';
import news from '../../../data/news.json';

export function GET() {
  return NextResponse.json(news);
}



