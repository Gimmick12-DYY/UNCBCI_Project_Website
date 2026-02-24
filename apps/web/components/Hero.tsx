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
          <div className="w-64 h-64 bg-gradient-to-tr from-unc to-purple-600 rounded-full opacity-20 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <svg className="w-full max-w-sm h-auto text-white opacity-80" viewBox="0 0 300 240" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Brain outline */}
            <path d="M128 38 C94 36, 62 54, 52 82 C42 108, 46 134, 58 152 C50 162, 50 176, 60 184 C70 192, 86 190, 94 180 C104 190, 120 194, 136 188 C150 194, 168 190, 178 176 C192 160, 198 136, 194 110 C190 82, 170 52, 138 40 Z" strokeWidth="2" />
            {/* Central sulcus */}
            <path d="M136 48 C130 82, 140 122, 130 174" opacity="0.4" />
            {/* Lateral sulcus */}
            <path d="M66 114 C88 122, 110 110, 134 118 C152 124, 168 114, 186 120" opacity="0.4" />
            {/* Superior frontal fold */}
            <path d="M82 74 C104 82, 118 70, 142 78" opacity="0.4" />
            {/* Inferior fold */}
            <path d="M76 148 C96 156, 110 144, 130 150" opacity="0.4" />

            {/* Electrode nodes on brain surface */}
            <circle cx="96" cy="70" r="4.5" fill="currentColor" opacity="0.9" />
            <circle cx="158" cy="74" r="4.5" fill="currentColor" opacity="0.9" />
            <circle cx="78" cy="114" r="4.5" fill="currentColor" opacity="0.9" />
            <circle cx="164" cy="118" r="4.5" fill="currentColor" opacity="0.9" />
            <circle cx="112" cy="150" r="4.5" fill="currentColor" opacity="0.9" />
            <circle cx="122" cy="92" r="4.5" fill="currentColor" opacity="0.9" />

            {/* Pulsing ring around center electrode */}
            <circle cx="122" cy="92" r="10" opacity="0.25" strokeWidth="1">
              <animate attributeName="r" values="8;14;8" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2.5s" repeatCount="indefinite" />
            </circle>

            {/* Dashed connection lines from brain to chip */}
            <path d="M158 74 L202 54 L232 54" strokeDasharray="4 3" opacity="0.5" />
            <path d="M164 118 L202 108 L232 96" strokeDasharray="4 3" opacity="0.5" />
            <path d="M136 188 L202 170 L232 142" strokeDasharray="4 3" opacity="0.5" />

            {/* Microchip / BCI processor */}
            <rect x="232" y="72" width="40" height="44" rx="5" strokeWidth="1.8" opacity="0.9" />
            <rect x="242" y="82" width="20" height="24" rx="2" opacity="0.35" />
            {/* Chip pins */}
            <line x1="232" y1="84" x2="224" y2="84" opacity="0.5" />
            <line x1="232" y1="94" x2="224" y2="94" opacity="0.5" />
            <line x1="232" y1="104" x2="224" y2="104" opacity="0.5" />
            <line x1="272" y1="84" x2="280" y2="84" opacity="0.5" />
            <line x1="272" y1="94" x2="280" y2="94" opacity="0.5" />
            <line x1="272" y1="104" x2="280" y2="104" opacity="0.5" />
            <line x1="242" y1="72" x2="242" y2="64" opacity="0.5" />
            <line x1="252" y1="72" x2="252" y2="64" opacity="0.5" />
            <line x1="262" y1="72" x2="262" y2="64" opacity="0.5" />
            <line x1="242" y1="116" x2="242" y2="124" opacity="0.5" />
            <line x1="252" y1="116" x2="252" y2="124" opacity="0.5" />
            <line x1="262" y1="116" x2="262" y2="124" opacity="0.5" />

            {/* Neural signal waveform (EEG style) */}
            <path d="M48 218 L68 218 L76 202 L82 232 L88 206 L94 228 L100 212 L106 222 L114 218 L138 218" opacity="0.45" strokeWidth="1.2" />
            <path d="M162 218 L182 218 L190 204 L196 230 L202 208 L208 226 L214 214 L220 222 L228 218 L252 218" opacity="0.45" strokeWidth="1.2" />

            {/* Animated signal pulse traveling along connection */}
            <circle r="3" fill="currentColor" opacity="0.7">
              <animateMotion dur="3s" repeatCount="indefinite" path="M158 74 L202 54 L232 54 L232 72" />
            </circle>
            <circle r="3" fill="currentColor" opacity="0.7">
              <animateMotion dur="3.5s" repeatCount="indefinite" path="M164 118 L202 108 L232 96" />
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
}
