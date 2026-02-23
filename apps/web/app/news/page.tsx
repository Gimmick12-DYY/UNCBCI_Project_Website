import React from 'react';
import Link from 'next/link';
import news from '../../data/news.json';

type NewsItem = {
  id: string;
  title: string;
  date: string; // ISO string
  summary?: string;
  peopleIds?: string[];
};

export const metadata = {
  title: 'All Updates',
};

export default function NewsIndexPage() {
  const items = (news as NewsItem[]).slice().sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">All Updates</h1>
        <p className="text-gray-600 text-sm">Project announcements and progress logs.</p>
      </div>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="border rounded p-4 hover:bg-gray-50">
            <div className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</div>
            <Link href={`/news/${item.id}`} className="font-medium text-blue-600 hover:underline">
              {item.title}
            </Link>
            {item.summary && <p className="text-gray-700 text-sm mt-1">{item.summary}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
