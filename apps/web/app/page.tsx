import React from 'react';
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
          <a href="/research" className="text-unc font-medium hover:text-unc-dark transition-colors">
            View All News &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
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
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">
                    Read more
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-unc-light rounded-2xl p-8 md:p-12 text-center my-12">
        <h2 className="text-2xl font-bold text-unc-dark mb-4">Interested in our work?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Our research spans neural engineering, machine learning, and hardware design. Check out our publications or contact us for collaboration.
        </p>
        <a href="/research" className="inline-block bg-unc text-white font-bold py-3 px-8 rounded-full hover:bg-unc-dark transition-colors shadow-lg">
          Explore Publications
        </a>
      </section>
    </div>
  );
}
