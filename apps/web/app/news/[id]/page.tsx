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
    <div className="max-w-4xl mx-auto px-6 py-12">
      <article className="space-y-8">
        <header className="space-y-4 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-3 text-sm">
            <Link href="/news" className="text-unc hover:text-unc-dark transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Updates
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400 uppercase tracking-wide text-xs font-semibold">
              {new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
            {item.title}
          </h1>
        </header>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          {item.summary ? (
            <p className="text-xl text-gray-500 border-l-4 border-unc pl-6 italic my-8">
              {item.summary}
            </p>
          ) : (
            <p className="text-gray-400 italic">No detailed content available for this update.</p>
          )}
          <p>More details regarding this update will be posted here as the project progresses.</p>
        </div>

        {linkedPeople.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-5 h-5 text-unc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Related Team Members
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {linkedPeople.map((person) => (
                <div key={person.id} className="card flex items-center gap-3 p-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden">
                    {person.photoUrl ? (
                      <img src={person.photoUrl} alt={person.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{person.name}</div>
                    <div className="text-xs text-gray-400">{person.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center pt-12">
          <Link href="/news" className="btn-outline">
            &larr; Back to Updates
          </Link>
        </div>
      </article>
    </div>
  );
}
