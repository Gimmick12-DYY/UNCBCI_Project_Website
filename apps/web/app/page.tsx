import React from 'react';
import news from '../data/news.json';

type NewsItem = {
  id: string;
  title: string;
  date: string; // ISO string
  summary?: string;
  peopleIds?: string[];
};

export default function Page() {
  const items = (news as NewsItem[]).slice(0, 5);
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">UNC BCI Project</h1>
        <p className="text-gray-600">Overview of the Brain-Computer-Interface project led by Professor Raghav at UNC.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent News</h2>
        <ul className="space-y-3">
          {items.map(item => (
            <li key={item.id} className="border rounded p-4">
              <div className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</div>
              <div className="font-medium">{item.title}</div>
              {item.summary && <p className="text-gray-700 text-sm mt-1">{item.summary}</p>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}



