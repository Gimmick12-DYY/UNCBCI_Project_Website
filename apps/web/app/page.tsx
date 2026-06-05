import React from 'react';
import Link from 'next/link';
import { getPublishedNews } from '../lib/news';
import { Hero } from '../components';

export const dynamic = 'force-dynamic';

const icons = {
  throughput: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  power: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
    </svg>
  ),
  realtime: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
    </svg>
  ),
  portable: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  ),
};

const capabilities = [
  { stat: '>100 Mbps', label: 'Neural data throughput', icon: icons.throughput },
  { stat: '<1 W', label: 'Power consumption', icon: icons.power },
  { stat: 'Real-Time', label: 'Closed-loop interfacing', icon: icons.realtime },
  { stat: 'Portable', label: 'Untethered operation', icon: icons.portable },
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
                <div className="w-10 h-10 rounded-xl bg-unc/10 text-unc flex items-center justify-center mx-auto mb-3">{cap.icon}</div>
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

      {/* Principal Investigators */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="section-label mb-2">NSF Grant #2510152</p>
            <h2 className="font-serif text-3xl text-gray-900">Principal Investigators</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { name: 'Abhishek Bhattacharjee', role: 'PI', institution: 'Princeton University' },
              {
                name: 'Raghavendra Pradyumna Pothukuchi',
                role: 'PI',
                institution: 'UNC Chapel Hill',
                photoUrl: '/people/raghav-pothukuchi.jpg',
              },
              { name: 'Hitten Zaveri', role: 'PI', institution: 'Yale University' },
            ].map((p) => (
              <div key={p.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-100 mx-auto mb-3 overflow-hidden flex items-center justify-center text-gray-400">
                  {'photoUrl' in p && p.photoUrl ? (
                    <img src={p.photoUrl} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{p.name}</h3>
                <p className="text-xs text-unc font-semibold">{p.role}</p>
                <p className="text-xs text-gray-400 mt-0.5">{p.institution}</p>
              </div>
            ))}
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
            Explore our research or get in touch to partner with us.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/publications" className="inline-block bg-white text-unc-dark font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-sm">
              Explore Publications
            </Link>
            <Link href="/partners" className="inline-block border border-white/30 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-all">
              View Partners
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
