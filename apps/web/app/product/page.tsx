import React from 'react';
import Link from 'next/link';

export default function ProductDemoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 p-12">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Product Demo</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          The interactive demo for our BCI chip designs is currently in development. 
          Please check back later for updates as we progress through the project stages.
        </p>
      </div>
      
      <div className="flex gap-4">
        <Link href="/" className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-unc hover:text-unc transition-all font-medium">
          Return Home
        </Link>
        <Link href="/research" className="px-6 py-3 bg-unc text-white rounded-lg hover:bg-unc-dark transition-all font-medium shadow-md">
          View Research
        </Link>
      </div>
    </div>
  );
}
