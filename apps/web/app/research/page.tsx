import React from 'react';
import publications from '../data/publications.json';

type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue?: string;
  year?: number;
  url?: string;
};

export default function ResearchPage() {
  const pubs = publications as Publication[];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Research & Publications</h1>
      <ul className="space-y-4">
        {pubs.map(p => (
          <li key={p.id} className="border rounded p-4">
            <div className="font-medium">{p.title}</div>
            <div className="text-sm text-gray-600">
              {p.authors.join(', ') + (p.venue ? ' - ' + p.venue : '') + (p.year ? ' (' + p.year + ')' : '')}
            </div>
            {p.url && (
              <a className="text-blue-600 text-sm" href={p.url} target="_blank" rel="noreferrer">Link</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


