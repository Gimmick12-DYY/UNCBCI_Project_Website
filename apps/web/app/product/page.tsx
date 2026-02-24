import React from 'react';
import Link from 'next/link';

export default function ProductDemoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 bg-surface-raised border border-white/5 rounded-xl p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-unc/20 to-transparent"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-unc/5 rounded-full blur-3xl"></div>

      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-600 relative z-10">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto space-y-4 relative z-10">
        <p className="font-mono text-xs text-unc/50 tracking-widest uppercase">// product</p>
        <h1 className="text-4xl font-bold text-gray-100">Product Demo</h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          The interactive demo for our BCI chip designs is currently in development.
          Please check back later for updates as we progress through the project stages.
        </p>
      </div>

      <div className="flex gap-4 relative z-10">
        <Link href="/" className="px-6 py-3 bg-white/5 border border-white/10 text-gray-400 rounded-lg hover:border-unc/30 hover:text-unc transition-all font-mono text-sm">
          return_home
        </Link>
        <Link href="/research" className="px-6 py-3 bg-unc/10 text-unc border border-unc/20 rounded-lg hover:bg-unc/20 hover:border-unc/40 hover:shadow-glow-sm transition-all font-semibold text-sm">
          View Research
        </Link>
      </div>
    </div>
  );
}
