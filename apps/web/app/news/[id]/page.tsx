import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import news from '../../../data/news.json';
import people from '../../../data/people.json';

type NewsItem = {
  id: string;
  title: string;
  date: string; // ISO
  summary?: string;
  peopleIds?: string[];
};

type Person = {
  id: string;
  name: string;
  role: 'PI' | 'Collaborator' | 'PhD' | 'Graduate' | 'Undergraduate';
  affiliation?: string;
};

const roster = people as Person[];
const items = news as NewsItem[];

export async function generateStaticParams() {
  return items.map((n) => ({ id: n.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const item = items.find((n) => n.id === params.id);
  if (!item) return { title: 'Update Not Found' };
  return { title: item.title, description: item.summary };
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const item = items.find((n) => n.id === params.id);
  if (!item) return notFound();
  const peopleNames = (item.peopleIds || [])
    .map((id) => roster.find((p) => p.id === id)?.name)
    .filter(Boolean) as string[];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</div>
        <h1 className="text-3xl font-bold">{item.title}</h1>
      </div>

      {item.summary && (
        <p className="text-gray-700 leading-relaxed">{item.summary}</p>
      )}

      <div className="text-sm text-gray-600">
        <span className="font-medium">People:</span>{' '}
        {peopleNames.length ? peopleNames.join(', ') : 'None'}
      </div>

      <div>
        <Link href="/news" className="text-blue-600 text-sm hover:underline">Back to all updates</Link>
      </div>
    </div>
  );
}
