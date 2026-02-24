import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsById } from '../../../lib/news';
import people from '../../../data/people.json';

export const dynamic = 'force-dynamic';

type Person = {
  id: string;
  name: string;
  role: 'PI' | 'Collaborator' | 'PhD' | 'Graduate' | 'Undergraduate';
  affiliation?: string;
  photoUrl?: string;
};

const roster = people as Person[];

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await getNewsById(id);
  if (!item || item.status !== 'published') return { title: 'Update Not Found' };
  return { title: `${item.title} | UNC BCI Project`, description: item.summary };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await getNewsById(id);

  if (!item || item.status !== 'published') return notFound();

  const linkedPeople = (item.peopleIds || [])
    .map((pid) => roster.find((p) => p.id === pid))
    .filter((p): p is Person => !!p);

  return (
    <article className="max-w-4xl mx-auto space-y-8">
      <header className="space-y-4 border-b border-white/5 pb-8">
        <div className="flex items-center gap-3 text-sm font-mono mb-2">
          <Link href="/news" className="text-unc/60 hover:text-unc transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ../updates
          </Link>
          <span className="text-gray-700">/</span>
          <span className="tag-mono">
            {new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 leading-tight">
          {item.title}
        </h1>
      </header>

      <div className="max-w-none text-gray-400 leading-relaxed">
        {item.summary ? (
          <p className="text-xl text-gray-300 font-light border-l-2 border-unc/30 pl-6 italic my-8">
            {item.summary}
          </p>
        ) : (
          <p className="text-gray-600 italic">No detailed content available for this update.</p>
        )}
        <p className="text-gray-500">
          More details regarding this update will be posted here as the project progresses.
        </p>
      </div>

      {linkedPeople.length > 0 && (
        <div className="mt-12 pt-8 border-t border-white/5">
          <h3 className="text-sm font-mono font-semibold text-gray-300 mb-6 flex items-center gap-2 uppercase tracking-wider">
            <svg className="w-4 h-4 text-unc/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            // related team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {linkedPeople.map((person) => (
              <div key={person.id} className="card-dark flex items-center gap-3 p-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 overflow-hidden">
                  {person.photoUrl ? (
                    <img src={person.photoUrl} alt={person.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-200 text-sm">{person.name}</div>
                  <div className="font-mono text-[10px] text-gray-500">{person.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center pt-12">
        <Link href="/news" className="px-6 py-3 bg-white/5 border border-white/10 text-gray-400 rounded-lg hover:border-unc/30 hover:text-unc transition-all font-mono text-sm hover:shadow-glow-sm">
          &larr; back_to_updates
        </Link>
      </div>
    </article>
  );
}
