'use client';

import React, { useState } from 'react';

function PanelCard({
  label,
  gradient,
  imageUrl,
  imagePosition = 'center',
  footerRight,
  className = '',
}: {
  label: string;
  gradient: string;
  imageUrl?: string;
  imagePosition?: string;
  footerRight?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${imageUrl ? 'bg-gray-900' : gradient} ${className}`}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
        />
      )}
      <div className={`absolute inset-0 bg-gradient-to-t ${imageUrl ? 'from-black/70 via-black/20' : 'from-black/50 via-transparent'} to-transparent`} />
      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
        <span className="text-white text-sm font-medium">{label}</span>
        {footerRight}
      </div>
    </div>
  );
}

export function HeroVisual() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* System image — fills entire area */}
      <div className="absolute inset-0 bg-gray-100 border border-gray-200">
        {/* Replace with system image when available: imageUrl="/images/system.jpg" */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
          <svg className="w-12 h-12 mb-2 opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
          <span className="text-sm font-medium">BrainScan System</span>
        </div>
        <div
          className={`absolute inset-0 bg-black/0 transition-colors duration-300 ${hovered ? 'bg-black/30' : ''}`}
        />
      </div>

      {!hovered && (
        <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
          <span className="text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
            Hover to explore components
          </span>
        </div>
      )}

      {/* Three panels — appear on hover */}
      <div
        className={`absolute inset-0 p-4 grid grid-cols-2 grid-rows-2 gap-4 transition-all duration-300 ${
          hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98] pointer-events-none'
        }`}
      >
        <PanelCard
          label="Neural Interfacing"
          gradient="bg-gradient-to-br from-slate-600 to-slate-800"
          className="min-h-0"
        />
        <PanelCard
          label="Hardware Design"
          gradient="bg-gradient-to-br from-amber-700 to-orange-900"
          imageUrl="/images/hardware-design.avif"
          className="min-h-0"
        />
        <PanelCard
          label="Data Processing"
          gradient="bg-gradient-to-br from-cyan-800 to-teal-900"
          imageUrl="/images/data-processing.jpg"
          imagePosition="center 35%"
          className="min-h-0 col-span-2"
          footerRight={
            <div className="flex items-center gap-2 shrink-0">
              <span className="flex items-center gap-1 text-white/70 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                128 Ch
              </span>
              <span className="flex items-center gap-1 text-white/70 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                30kHz
              </span>
            </div>
          }
        />
      </div>
    </div>
  );
}
