import React from 'react';
import Link from 'next/link';
import { getPublishedNews } from '../../lib/news';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Updates | UNC BCI Project',
  description: 'Latest news, announcements, and progress from the BrainScan project.',
};

export default async function NewsIndexPage() {
  const items = await getPublishedNews();

  return (
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="section-label mb-3">News</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Project Updates</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Stay informed about our latest research breakthroughs, team announcements, and project milestones.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {items.map((item) => (
            <Link href={`/news/${item.id}`} key={item.id} className="group block">
              <article className="card p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-unc opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"></div>

                <div className="md:w-1/4 flex-shrink-0">
                  <div className="text-xs font-bold text-unc uppercase tracking-wider mb-1">
                    {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date(item.date).toLocaleDateString('en-US', { weekday: 'long' })}
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-unc-dark transition-colors leading-tight">
                    {item.title}
                  </h2>
                  {item.summary && (
                    <p className="text-gray-500 leading-relaxed line-clamp-2 text-sm">{item.summary}</p>
                  )}
                  <div className="pt-1 flex items-center text-sm font-medium text-unc group-hover:text-unc-dark transition-colors">
                    Read more
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
