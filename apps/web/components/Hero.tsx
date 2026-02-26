import React from 'react';
import Link from 'next/link';

function ImageCard({ label, gradient, delay }: { label: string; gradient: string; delay?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${gradient} group cursor-pointer`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></div>
      <div className="absolute bottom-4 left-4">
        <span className="text-white text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="section-label">
            Product &middot; Neuroengineering
          </div>

          <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] tracking-tight">
            Advancing{' '}
            <span className="text-unc">Brain-Computer Interfaces</span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
            Pioneering neural engineering research led by Professor Raghav at the University of North Carolina. Building BrainScan &mdash; the next-generation instrument for high-bandwidth real-time neural interfacing.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/research" className="btn-primary">
              Explore Research
            </Link>
            <Link href="/people" className="btn-secondary">
              Meet the Team
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ImageCard
            label="Neural Imaging"
            gradient="bg-gradient-to-br from-slate-600 to-slate-800"
          />
          <ImageCard
            label="Hardware Design"
            gradient="bg-gradient-to-br from-amber-700 to-orange-900"
          />
          <div className="col-span-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[2/1] bg-gradient-to-br from-cyan-800 to-teal-900 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-sm font-medium">Signal Processing</span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <span className="flex items-center gap-1 text-white/70 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>128 Ch
                </span>
                <span className="flex items-center gap-1 text-white/70 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>30kHz
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
