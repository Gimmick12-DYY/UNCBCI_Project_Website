import React from 'react';
import Link from 'next/link';
import { getPublishedNews } from '../lib/news';
import { Hero } from '../components';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const allNews = await getPublishedNews();
  const items = allNews.slice(0, 3);

  return (
    <div className="space-y-16">
      <Hero />

      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-unc/50 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-100 tracking-tight">Latest Updates</h2>
          </div>
          <Link href="/news" className="font-mono text-xs text-unc/70 hover:text-unc transition-colors flex items-center gap-2 group">
            view_all
            <span className="transform transition-transform group-hover:translate-x-1 text-base">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link href={`/news/${item.id}`} key={item.id} className="block group">
              <div className="card-dark p-6 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l hud-corner"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r hud-corner"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l hud-corner"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r hud-corner"></div>

                <div className="tag-mono mb-3">
                  {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-3 group-hover:text-unc transition-colors leading-snug">
                  {item.title}
                </h3>
                {item.summary && (
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {item.summary}
                  </p>
                )}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="font-mono text-xs text-gray-600 group-hover:text-unc/70 transition-colors flex items-center gap-2">
                    read_more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-raised border border-white/5 rounded-xl p-8 md:p-12 text-center my-12 mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-unc/5 to-transparent"></div>
        <div className="relative z-10">
          <p className="font-mono text-xs text-unc/50 mb-3 tracking-widest uppercase">// collaboration</p>
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Interested in our work?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
            Our research spans neural engineering, machine learning, and hardware design. Check out our publications or contact us for collaboration.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/research" className="inline-block bg-unc/10 text-unc border border-unc/20 font-semibold py-3 px-8 rounded-lg hover:bg-unc/20 hover:border-unc/40 hover:shadow-glow transition-all text-sm">
              Explore Publications
            </Link>
            <Link href="/people" className="inline-block bg-white/5 text-gray-300 border border-white/10 font-semibold py-3 px-8 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all text-sm">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
