import React from 'react';
import Link from 'next/link';
import { getPublishedNews } from '../lib/news';
import { Hero } from '../components';

export const dynamic = 'force-dynamic';

const capabilities = [
  { stat: '>100 Mbps', label: 'Neural data throughput', icon: '⚡' },
  { stat: '<1 W', label: 'Power consumption', icon: '🔋' },
  { stat: 'Real-Time', label: 'Closed-loop interfacing', icon: '🔄' },
  { stat: 'Portable', label: 'Untethered operation', icon: '📡' },
];

export default async function Page() {
  const allNews = await getPublishedNews();
  const items = allNews.slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Why BrainScan summary */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Why This System</p>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
              No such platform exists today
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              BrainScan is developing an implantable brain-computer interface built around BrainCore &mdash;
              a bespoke chip that achieves energy efficiency orders of magnitude superior to the state of the art.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.stat} className="text-center p-6 rounded-2xl bg-gray-50/80 border border-gray-100">
                <div className="text-3xl mb-3">{cap.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{cap.stat}</div>
                <div className="text-sm text-gray-500">{cap.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/why" className="text-unc font-medium hover:text-unc-dark transition-colors text-sm inline-flex items-center gap-1 group">
              Learn more about BrainScan
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest updates */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="section-label mb-2">News</p>
            <h2 className="font-serif text-3xl text-gray-900">Latest Updates</h2>
          </div>
          <Link href="/news" className="text-unc font-medium hover:text-unc-dark transition-colors text-sm inline-flex items-center gap-1 group">
            View all
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link href={`/news/${item.id}`} key={item.id} className="block group">
              <div className="card p-6 h-full flex flex-col">
                <div className="text-xs font-semibold text-unc uppercase tracking-wide mb-3">
                  {new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-unc-dark transition-colors leading-snug">
                  {item.title}
                </h3>
                {item.summary && (
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {item.summary}
                  </p>
                )}
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-unc transition-colors flex items-center gap-1">
                    Read more &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-unc-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Interested in our work?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            BrainScan will be made available to multiple labs nationwide through an inter-institutional loan program.
            Explore our research or get in touch for collaboration.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/research" className="inline-block bg-white text-unc-dark font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-sm">
              Explore Publications
            </Link>
            <Link href="/collaborators" className="inline-block border border-white/30 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-all">
              View Collaborators
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
