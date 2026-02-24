import React from 'react';
import Link from 'next/link';
import { getPublishedNews } from '../../lib/news';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'All Updates | UNC BCI Project',
  description: 'Latest news, announcements, and progress from the UNC Brain-Computer Interface Project.',
};

export default async function NewsIndexPage() {
  const items = await getPublishedNews();

  return (
    <div className="space-y-12">
      <div className="relative overflow-hidden bg-surface-raised border border-white/5 rounded-xl p-8 md:p-12 text-center">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-unc/30 to-transparent"></div>
        <p className="font-mono text-xs text-unc/50 mb-3 tracking-widest uppercase relative z-10">// updates</p>
        <h1 className="text-4xl font-bold text-gray-100 mb-4 relative z-10">Project Updates</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto relative z-10">
          Stay informed about our latest research breakthroughs, team announcements, and project milestones.
        </p>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-unc/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-unc/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-5">
          {items.map((item) => (
            <Link href={`/news/${item.id}`} key={item.id} className="group block">
              <article className="card-dark p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-unc opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                <div className="md:w-1/4 flex-shrink-0">
                  <div className="tag-mono mb-1">
                    {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="font-mono text-[10px] text-gray-600">
                    {new Date(item.date).toLocaleDateString('en-US', { weekday: 'long' })}
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <h2 className="text-xl font-semibold text-gray-100 group-hover:text-unc transition-colors leading-tight">
                    {item.title}
                  </h2>

                  {item.summary && (
                    <p className="text-gray-500 leading-relaxed line-clamp-2 text-sm">
                      {item.summary}
                    </p>
                  )}

                  <div className="pt-2 flex items-center font-mono text-xs text-unc/60 group-hover:text-unc/90 transition-colors">
                    read_more
                    <svg className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
