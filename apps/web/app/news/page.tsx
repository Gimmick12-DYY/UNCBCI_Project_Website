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
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-unc-dark via-unc to-unc-light"></div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 relative z-10">Project Updates</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto relative z-10">
          Stay informed about our latest research breakthroughs, team announcements, and project milestones.
        </p>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-unc-light rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-unc-light rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid gap-6">
          {items.map((item) => (
            <Link href={`/news/${item.id}`} key={item.id} className="group block">
              <article className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col md:flex-row gap-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-unc opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="text-sm font-bold text-unc uppercase tracking-wider mb-1">
                    {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    {new Date(item.date).toLocaleDateString('en-US', { weekday: 'long' })}
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-unc-dark transition-colors leading-tight">
                    {item.title}
                  </h2>
                  
                  {item.summary && (
                    <p className="text-gray-600 leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                  )}
                  
                  <div className="pt-2 flex items-center text-sm font-medium text-unc group-hover:text-unc-dark transition-colors">
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
