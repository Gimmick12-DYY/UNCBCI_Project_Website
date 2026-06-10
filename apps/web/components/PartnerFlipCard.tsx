'use client';

import React, { useState } from 'react';

export type PartnerFlipCardProps = {
  name: string;
  subtitle?: string;
  institution?: string;
  logoUrl: string;
  logoScale?: number;
  description: string;
  url?: string;
};

export function PartnerFlipCard({
  name,
  subtitle,
  institution,
  logoUrl,
  logoScale = 1,
  description,
  url,
}: PartnerFlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const scale = Math.min(logoScale, 1.4);

  return (
    <div
      className="card overflow-hidden group relative h-96"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="relative h-full flex flex-col">
        <div className="relative flex-1 bg-gradient-to-br from-unc-dark to-unc p-5 flex flex-col min-h-0">
          <div className="flex items-start gap-4">
            <div className="w-[4.5rem] h-[4.5rem] shrink-0 bg-white rounded-xl flex items-center justify-center p-2.5 shadow-sm overflow-hidden">
              <img
                src={logoUrl}
                alt={`${institution || name} logo`}
                className="max-h-full max-w-full object-contain"
                style={{ transform: scale !== 1 ? `scale(${scale})` : undefined }}
              />
            </div>
            <div className="min-w-0 pt-0.5">
              <h3 className="text-lg font-bold text-white leading-tight">{name}</h3>
              {subtitle && (
                <p className="text-sm font-semibold text-white/80 mt-1">{subtitle}</p>
              )}
              {institution && (
                <p className="text-xs font-medium text-white/60 uppercase tracking-wider mt-2">{institution}</p>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 bg-white">
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{description}</p>
          <p className="text-xs text-gray-400 mt-2">Hover for details</p>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-white/97 backdrop-blur-sm transition-opacity duration-200 flex flex-col justify-center p-6 ${
          flipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-14 h-14 shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-2 overflow-hidden border border-gray-100">
            <img
              src={logoUrl}
              alt=""
              className="max-h-full max-w-full object-contain"
              style={{ transform: scale !== 1 ? `scale(${scale})` : undefined }}
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-gray-900 leading-tight">{name}</h3>
            {subtitle && (
              <p className="text-xs font-semibold text-unc uppercase tracking-wider mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>
        {institution && <p className="text-xs text-gray-400 mb-3">{institution}</p>}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 text-unc font-medium text-sm hover:text-unc-dark inline-flex items-center gap-1"
          >
            Visit site
            <span aria-hidden>&rarr;</span>
          </a>
        )}
      </div>
    </div>
  );
}
