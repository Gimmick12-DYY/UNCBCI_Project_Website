import React from 'react';
import Link from 'next/link';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
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

        <HeroVisual />
      </div>
    </section>
  );
}
