import React from 'react';

import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-unc-dark text-white rounded-2xl shadow-xl p-8 md:p-12 text-center md:text-left">
      <div className="absolute inset-0 bg-gradient-to-r from-unc-dark to-unc opacity-50 z-0"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-unc rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -left-16 w-48 h-48 bg-purple-500 rounded-full opacity-10 blur-2xl animate-bounce"></div>
      
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Advancing <span className="text-unc-light">Brain-Computer Interfaces</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg mb-8">
            Pioneering neural engineering research led by Professor Raghav at the University of North Carolina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/research" className="bg-white text-unc-dark font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 inline-block">
              Explore Research
            </Link>
            <Link href="/people" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-unc-dark transition-all transform hover:-translate-y-1 inline-block">
              Meet the Team
            </Link>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center items-center relative">
          {/* Abstract representation of brain waves or technology */}
          <div className="w-64 h-64 bg-gradient-to-tr from-unc to-purple-600 rounded-full opacity-20 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <svg className="w-full max-w-sm h-auto text-white opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
