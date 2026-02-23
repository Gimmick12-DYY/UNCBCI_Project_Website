import React from 'react';
import Link from 'next/link';
import news from '../data/news.json';
import { Hero } from '../components';

type NewsItem = {
  id: string;
  title: string;
  date: string; // ISO string
  summary?: string;
  peopleIds?: string[];
};

export default function Page() {
  const items = (news as NewsItem[]).slice(0, 3); // Show top 3 recent news

  return (
    <div className="space-y-16">
      <Hero />
      
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Latest Updates</h2>
          <Link href="/news" className="text-unc font-medium hover:text-unc-dark transition-colors flex items-center gap-1 group">
            View All News 
            <span className="transform transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link href={`/news/${item.id}`} key={item.id} className="block group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  <div className="text-sm font-medium text-unc mb-2 uppercase tracking-wide">
                    {new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-unc-dark transition-colors">
                    {item.title}
                  </h3>
                  {item.summary && (
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-3 mb-4 flex-grow">
                      {item.summary}
                    </p>
                  )}
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <span className="text-xs font-semibold text-gray-400 group-hover:text-gray-600 transition-colors flex items-center gap-2">
                      Read full update
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-unc-light rounded-2xl p-8 md:p-12 text-center my-12 mx-4">
        <h2 className="text-2xl font-bold text-unc-dark mb-4">Interested in our work?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Our research spans neural engineering, machine learning, and hardware design. Check out our publications or contact us for collaboration.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/research" className="inline-block bg-unc text-white font-bold py-3 px-8 rounded-full hover:bg-unc-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Explore Publications
          </Link>
          <Link href="/people" className="inline-block bg-white text-unc font-bold py-3 px-8 rounded-full border border-unc hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Meet the Team
          </Link>
        </div>
      </section>
    </div>
  );
}
