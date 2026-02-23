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
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our team publishes cutting-edge research in neural engineering, signal processing, and machine learning.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Selected Publications</h2>
        <div className="grid gap-6">
          {pubs.map((p) => (
            <article key={p.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  <a href={p.url || '#'} className="hover:text-unc-dark transition-colors">
                    {p.title}
                  </a>
                </h3>
                <div className="text-gray-700 font-medium mb-1">
                  {p.authors.join(', ')}
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  {p.venue && <span className="font-semibold text-unc">{p.venue}</span>}
                  {p.venue && p.year && <span>•</span>}
                  {p.year && <span>{p.year}</span>}
                </div>
              </div>
              
              {p.url && (
                <div className="flex-shrink-0 self-start md:self-center">
                  <a 
                    href={p.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-unc text-unc rounded-lg hover:bg-unc hover:text-white transition-all text-sm font-medium"
                  >
                    View Paper
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
