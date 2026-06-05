import React from 'react';
import Link from 'next/link';

function ImageCard({
  label,
  gradient,
  footerRight,
}: {
  label: string;
  gradient: string;
  footerRight?: React.ReactNode;
}) {
  return (
    <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${gradient} group cursor-pointer`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></div>
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
        <span className="text-white text-sm font-medium">{label}</span>
        {footerRight}
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
            Slogan placeholder
          </div>

          <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] tracking-tight">
            Advancing{' '}
            <span className="text-unc">Brain-Computer Interfaces</span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
            BrainScan is the next-generation instrument for high-bandwidth real-time closed-loop neural interfacing. The project is led by Principal Investigators Abhishek Bhattacharjee, Raghavendra Pradyumna Pothukuchi, and Hitten Zaveri.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/why" className="btn-primary">
              Explore System
            </Link>
            <Link href="/people" className="btn-secondary">
              Meet the Team
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ImageCard
            label="Neural Interfacing"
            gradient="bg-gradient-to-br from-slate-600 to-slate-800"
          />
          <ImageCard
            label="Hardware Design"
            gradient="bg-gradient-to-br from-amber-700 to-orange-900"
          />
          <ImageCard
            label="Data Processing"
            gradient="bg-gradient-to-br from-cyan-800 to-teal-900"
            footerRight={
              <div className="flex items-center gap-2 shrink-0">
                <span className="flex items-center gap-1 text-white/70 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>128 Ch
                </span>
                <span className="flex items-center gap-1 text-white/70 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>30kHz
                </span>
              </div>
            }
          />
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-50 border border-dashed border-gray-200"
            aria-label="System image placeholder"
          />
        </div>
      </div>
    </section>
  );
}
