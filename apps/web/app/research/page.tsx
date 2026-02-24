import React from 'react';
import publications from '../../data/publications.json';

type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue?: string;
  year?: number;
  url?: string;
};

export default function ResearchPage() {
  const pubs = (publications as Publication[]).sort((a, b) => (b.year || 0) - (a.year || 0));

  return (
    <div className="space-y-12">
      <div className="relative overflow-hidden bg-surface-raised border border-white/5 rounded-xl p-8 md:p-12 text-center">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-unc/30 to-transparent"></div>
        <p className="font-mono text-xs text-unc/50 mb-3 tracking-widest uppercase relative z-10">// research</p>
        <h1 className="text-4xl font-bold text-gray-100 mb-4 relative z-10">Research & Publications</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto relative z-10">
          Our team publishes cutting-edge research in neural engineering, signal processing, and machine learning.
        </p>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-unc/5 rounded-full blur-3xl"></div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
          <div className="w-1.5 h-6 bg-unc/50 rounded-full"></div>
          <h2 className="text-xl font-semibold text-gray-200">Selected Publications</h2>
        </div>
        <div className="grid gap-5">
          {pubs.map((p) => (
            <article key={p.id} className="card-dark p-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-200 mb-2 leading-tight">
                  <a href={p.url || '#'} className="hover:text-unc transition-colors">
                    {p.title}
                  </a>
                </h3>
                <div className="text-sm text-gray-400 mb-1">
                  {p.authors.join(', ')}
                </div>
                <div className="font-mono text-xs text-gray-600 flex items-center gap-2">
                  {p.venue && <span className="text-unc/60">{p.venue}</span>}
                  {p.venue && p.year && <span className="text-gray-700">|</span>}
                  {p.year && <span>{p.year}</span>}
                </div>
              </div>

              {p.url && (
                <div className="flex-shrink-0 self-start md:self-center">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-unc/20 text-unc/70 rounded-lg hover:bg-unc/10 hover:border-unc/40 hover:text-unc transition-all font-mono text-xs"
                  >
                    view_paper
                    <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
