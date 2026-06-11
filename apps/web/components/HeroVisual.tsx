'use client';

import React, { useState } from 'react';

const SYSTEM_IMAGE_URL = '/images/brainscan-system.png';

type AspectPanel = {
  label: string;
  gradient: string;
  imageUrl?: string;
  imagePosition?: string;
  footerRight?: React.ReactNode;
  gridClass: string;
  collapseTransform: string;
  delay: string;
  hintPosition: string;
};

const aspects: AspectPanel[] = [
  {
    label: 'Neural Interfacing',
    gradient: 'bg-gradient-to-br from-slate-600 to-slate-800',
    gridClass: 'col-start-1 row-start-1',
    collapseTransform: 'translate-x-[55%] translate-y-[45%] scale-[0.35]',
    delay: '0ms',
    hintPosition: 'top-[22%] left-[25%]',
  },
  {
    label: 'Hardware Design',
    gradient: 'bg-gradient-to-br from-amber-700 to-orange-900',
    imageUrl: '/images/hardware-design.avif',
    gridClass: 'col-start-2 row-start-1',
    collapseTransform: 'translate-x-[-55%] translate-y-[45%] scale-[0.35]',
    delay: '90ms',
    hintPosition: 'top-[22%] left-[75%]',
  },
  {
    label: 'Data Processing',
    gradient: 'bg-gradient-to-br from-cyan-800 to-teal-900',
    imageUrl: '/images/data-processing.jpg',
    imagePosition: 'center 35%',
    gridClass: 'col-span-2 row-start-2',
    collapseTransform: 'translate-y-[-40%] scale-[0.35]',
    delay: '180ms',
    hintPosition: 'top-[72%] left-1/2 -translate-x-1/2',
    footerRight: (
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
    ),
  },
];

function PanelCard({
  label,
  gradient,
  imageUrl,
  imagePosition = 'center',
  footerRight,
}: {
  label: string;
  gradient: string;
  imageUrl?: string;
  imagePosition?: string;
  footerRight?: React.ReactNode;
}) {
  return (
    <div className={`relative h-full w-full rounded-2xl overflow-hidden shadow-lg ${imageUrl ? 'bg-gray-900' : gradient}`}>
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
  const hasSystemImage = Boolean(SYSTEM_IMAGE_URL);
  const showSchematic = !hasSystemImage && !hovered;

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200/80"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Unified system view */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${
          hasSystemImage ? 'bg-white' : 'bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200'
        } ${hovered ? 'scale-105 blur-[2px]' : 'scale-100 blur-0'}`}
      >
        {hasSystemImage ? (
          <img
            src={SYSTEM_IMAGE_URL}
            alt="BrainScan head-mounted neural interface with exploded view of BrainScan board, adapter, headstage, and probe"
            className="absolute inset-0 w-full h-full object-contain p-3"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
            <div
              className={`relative transition-all duration-500 ${hovered ? 'opacity-20 scale-90' : 'opacity-100 scale-100'}`}
            >
              <svg className="w-14 h-14 mb-2 opacity-50" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              <span className="text-sm font-semibold tracking-wide text-gray-500">BrainScan System</span>
            </div>
          </div>
        )}

        {/* Schematic lines & nodes — placeholder only */}
        {showSchematic && (
          <>
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 300"
              preserveAspectRatio="none"
            >
              <line x1="200" y1="150" x2="100" y2="65" stroke="rgb(79 124 186 / 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="200" y1="150" x2="300" y2="65" stroke="rgb(79 124 186 / 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="200" y1="150" x2="200" y2="215" stroke="rgb(79 124 186 / 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="200" cy="150" r="6" fill="rgb(79 124 186 / 0.15)" stroke="rgb(79 124 186 / 0.4)" strokeWidth="1.5" />
            </svg>
            {aspects.map((aspect) => (
              <div
                key={aspect.label}
                className={`absolute ${aspect.hintPosition} -translate-x-1/2 -translate-y-1/2`}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-unc/40 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-unc/60 ring-2 ring-white/80" />
                </span>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Frosted overlay on deconstruct */}
      <div
        className={`absolute inset-0 bg-unc-dark/0 backdrop-blur-0 transition-all duration-500 pointer-events-none ${
          hovered ? 'bg-unc-dark/25 backdrop-blur-sm' : ''
        }`}
      />

      {/* Aspect panels — expand from system core */}
      <div className="absolute inset-0 p-4 grid grid-cols-2 grid-rows-2 gap-4">
        {aspects.map((aspect) => (
          <div
            key={aspect.label}
            className={`${aspect.gridClass} min-h-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              hovered
                ? 'opacity-100 scale-100 translate-x-0 translate-y-0'
                : `opacity-0 pointer-events-none ${aspect.collapseTransform}`
            }`}
            style={{ transitionDelay: hovered ? aspect.delay : '0ms' }}
          >
            <PanelCard
              label={aspect.label}
              gradient={aspect.gradient}
              imageUrl={aspect.imageUrl}
              imagePosition={aspect.imagePosition}
              footerRight={aspect.footerRight}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
