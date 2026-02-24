import React from 'react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-raised border border-white/5 rounded-xl p-8 md:p-14 text-center md:text-left">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-surface-raised to-[#0b1120] z-0"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-unc/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -left-16 w-48 h-48 bg-unc/5 rounded-full blur-2xl"></div>

      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-6">
          <p className="font-mono text-xs text-unc/50 tracking-widest uppercase">&gt; neural_engineering_lab</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-gray-100">
            Advancing <span className="text-unc">Brain-Computer Interfaces</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mb-8">
            Pioneering neural engineering research led by Professor Raghav at the University of North Carolina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/research" className="bg-unc/10 text-unc border border-unc/20 font-semibold py-3 px-8 rounded-lg hover:bg-unc/20 hover:border-unc/40 hover:shadow-glow transition-all inline-block text-sm">
              Explore Research
            </Link>
            <Link href="/people" className="bg-white/5 border border-white/10 text-gray-300 font-semibold py-3 px-8 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all inline-block text-sm">
              Meet the Team
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center relative">
          <div className="w-72 h-72 bg-unc/5 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <svg className="w-full max-w-md h-auto text-unc" viewBox="0 0 420 300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <pattern id="hero-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <clipPath id="eeg-clip">
                <rect x="28" y="256" width="200" height="38" />
              </clipPath>
            </defs>

            <rect width="420" height="300" fill="url(#hero-grid)" opacity="0.06" stroke="none" />

            {/* Brain outline */}
            <path d="
              M70 155
              C64 135, 58 112, 62 90
              C66 68, 78 50, 100 42
              C114 36, 130 33, 148 36
              C154 30, 158 34, 162 32
              C168 34, 178 40, 192 52
              C208 68, 218 90, 220 114
              C222 138, 216 158, 206 174
              C198 186, 188 192, 176 194
              C160 198, 140 200, 120 196
              C100 192, 82 182, 74 168
              Z
            " strokeWidth="1.8" opacity="0.85" />

            {/* Cerebellum */}
            <path d="
              M206 174
              C214 182, 222 194, 216 206
              C210 216, 198 220, 188 218
              C182 222, 172 220, 166 214
              C158 210, 154 200, 158 194
              C162 198, 176 194, 176 194
            " strokeWidth="1.5" opacity="0.7" />
            <path d="M170 200 C178 206, 190 208, 200 204" opacity="0.25" strokeWidth="0.8" />
            <path d="M166 210 C176 214, 188 215, 198 212" opacity="0.25" strokeWidth="0.8" />

            {/* Brain stem */}
            <path d="M188 218 C184 230, 180 242, 178 252" strokeWidth="1.5" opacity="0.55" />
            <path d="M178 252 C176 248, 172 246, 170 250" strokeWidth="1" opacity="0.35" />

            {/* Sulci and gyri */}
            <path d="M162 40 C156 72, 166 110, 158 155 C155 168, 152 180, 148 190" opacity="0.3" strokeWidth="1.2" />
            <path d="M78 145 C96 152, 118 142, 142 148 C162 154, 180 146, 200 155" opacity="0.3" strokeWidth="1.2" />
            <path d="M96 62 C114 70, 130 58, 150 66" opacity="0.22" strokeWidth="0.9" />
            <path d="M90 84 C110 92, 126 80, 148 88" opacity="0.22" strokeWidth="0.9" />
            <path d="M84 106 C102 114, 118 102, 138 110" opacity="0.22" strokeWidth="0.9" />
            <path d="M170 60 C186 68, 198 58, 212 66" opacity="0.22" strokeWidth="0.9" />
            <path d="M174 82 C190 90, 202 80, 216 88" opacity="0.22" strokeWidth="0.9" />
            <path d="M176 106 C192 114, 204 104, 218 110" opacity="0.22" strokeWidth="0.9" />
            <path d="M74 126 C90 134, 106 122, 124 130" opacity="0.22" strokeWidth="0.9" />
            <path d="M80 170 C96 178, 112 168, 130 176" opacity="0.22" strokeWidth="0.9" />
            <path d="M88 186 C102 192, 114 184, 130 190" opacity="0.22" strokeWidth="0.9" />
            <path d="M186 130 C200 136, 210 128, 218 132" opacity="0.22" strokeWidth="0.9" />
            <path d="M196 160 C206 166, 212 158, 218 162" opacity="0.22" strokeWidth="0.9" />

            {/* Electrodes with crosshairs */}
            <circle cx="108" cy="72" r="5" fill="currentColor" opacity="0.85" />
            <line x1="101" y1="72" x2="115" y2="72" strokeWidth="0.6" opacity="0.35" />
            <line x1="108" y1="65" x2="108" y2="79" strokeWidth="0.6" opacity="0.35" />

            <circle cx="140" cy="105" r="5" fill="currentColor" opacity="0.85" />
            <line x1="133" y1="105" x2="147" y2="105" strokeWidth="0.6" opacity="0.35" />
            <line x1="140" y1="98" x2="140" y2="112" strokeWidth="0.6" opacity="0.35" />

            <circle cx="192" cy="86" r="5" fill="currentColor" opacity="0.85" />
            <line x1="185" y1="86" x2="199" y2="86" strokeWidth="0.6" opacity="0.35" />
            <line x1="192" y1="79" x2="192" y2="93" strokeWidth="0.6" opacity="0.35" />

            <circle cx="86" cy="145" r="5" fill="currentColor" opacity="0.85" />
            <line x1="79" y1="145" x2="93" y2="145" strokeWidth="0.6" opacity="0.35" />
            <line x1="86" y1="138" x2="86" y2="152" strokeWidth="0.6" opacity="0.35" />

            <circle cx="200" cy="152" r="5" fill="currentColor" opacity="0.85" />
            <line x1="193" y1="152" x2="207" y2="152" strokeWidth="0.6" opacity="0.35" />
            <line x1="200" y1="145" x2="200" y2="159" strokeWidth="0.6" opacity="0.35" />

            <circle cx="102" cy="176" r="5" fill="currentColor" opacity="0.85" />
            <line x1="95" y1="176" x2="109" y2="176" strokeWidth="0.6" opacity="0.35" />
            <line x1="102" y1="169" x2="102" y2="183" strokeWidth="0.6" opacity="0.35" />

            {/* Pulsing rings */}
            <circle cx="140" cy="105" r="10" opacity="0.2" strokeWidth="0.8">
              <animate attributeName="r" values="8;16;8" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.25;0.02;0.25" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="192" cy="86" r="10" opacity="0.15" strokeWidth="0.6">
              <animate attributeName="r" values="7;13;7" dur="3.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.18;0.02;0.18" dur="3.2s" repeatCount="indefinite" />
            </circle>

            {/* Channel labels */}
            <text x="108" y="59" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.35" strokeWidth="0" fontFamily="monospace">Fp1</text>
            <text x="140" y="92" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.35" strokeWidth="0" fontFamily="monospace">C3</text>
            <text x="192" y="73" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.35" strokeWidth="0" fontFamily="monospace">P4</text>
            <text x="74" y="140" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.35" strokeWidth="0" fontFamily="monospace">T3</text>
            <text x="212" y="148" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.35" strokeWidth="0" fontFamily="monospace">O1</text>
            <text x="102" y="163" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.35" strokeWidth="0" fontFamily="monospace">F7</text>

            {/* Connections */}
            <path d="M192 86 C240 84, 275 94, 306 102" strokeDasharray="4 3" opacity="0.3" />
            <path d="M200 152 C248 146, 280 128, 306 114" strokeDasharray="4 3" opacity="0.3" />
            <path d="M206 174 C248 168, 282 148, 306 126" strokeDasharray="4 3" opacity="0.3" />

            {/* Signal pulses */}
            <circle r="3.5" fill="currentColor" opacity="0.65">
              <animateMotion dur="2s" repeatCount="indefinite" path="M192 86 C240 84, 275 94, 306 102" />
            </circle>
            <circle r="3" fill="currentColor" opacity="0.55">
              <animateMotion dur="2.8s" repeatCount="indefinite" path="M200 152 C248 146, 280 128, 306 114" />
            </circle>
            <circle r="2.5" fill="currentColor" opacity="0.45">
              <animateMotion dur="3.4s" repeatCount="indefinite" path="M206 174 C248 168, 282 148, 306 126" />
            </circle>

            {/* Microchip */}
            <rect x="306" y="86" width="54" height="56" rx="6" strokeWidth="1.8" opacity="0.85" />
            <rect x="318" y="98" width="30" height="32" rx="3" opacity="0.25" />
            <line x1="326" y1="98" x2="326" y2="130" opacity="0.1" strokeWidth="0.6" />
            <line x1="340" y1="98" x2="340" y2="130" opacity="0.1" strokeWidth="0.6" />
            <line x1="318" y1="108" x2="348" y2="108" opacity="0.1" strokeWidth="0.6" />
            <line x1="318" y1="118" x2="348" y2="118" opacity="0.1" strokeWidth="0.6" />

            {/* Chip pins */}
            <line x1="306" y1="102" x2="296" y2="102" opacity="0.45" />
            <line x1="306" y1="114" x2="296" y2="114" opacity="0.45" />
            <line x1="306" y1="126" x2="296" y2="126" opacity="0.45" />
            <line x1="360" y1="102" x2="370" y2="102" opacity="0.45" />
            <line x1="360" y1="114" x2="370" y2="114" opacity="0.45" />
            <line x1="360" y1="126" x2="370" y2="126" opacity="0.45" />
            <line x1="320" y1="86" x2="320" y2="76" opacity="0.45" />
            <line x1="333" y1="86" x2="333" y2="76" opacity="0.45" />
            <line x1="346" y1="86" x2="346" y2="76" opacity="0.45" />
            <line x1="320" y1="142" x2="320" y2="152" opacity="0.45" />
            <line x1="333" y1="142" x2="333" y2="152" opacity="0.45" />
            <line x1="346" y1="142" x2="346" y2="152" opacity="0.45" />

            {/* Frequency readout */}
            <text x="376" y="103" fontSize="7" fill="currentColor" opacity="0.3" strokeWidth="0" fontFamily="monospace">δ 2–4 Hz</text>
            <text x="376" y="115" fontSize="7" fill="currentColor" opacity="0.3" strokeWidth="0" fontFamily="monospace">θ 4–8 Hz</text>
            <text x="376" y="127" fontSize="7" fill="currentColor" opacity="0.3" strokeWidth="0" fontFamily="monospace">α 8–13Hz</text>
            <text x="320" y="166" fontSize="8" fill="currentColor" opacity="0.3" strokeWidth="0" fontFamily="monospace">BCI-01</text>

            {/* Animated EEG */}
            <text x="30" y="262" fontSize="7" fill="currentColor" opacity="0.28" strokeWidth="0" fontFamily="monospace">EEG OUTPUT</text>
            <g clipPath="url(#eeg-clip)" opacity="0.4">
              <path
                d="M28 278 L40 278 L45 264 L50 292 L55 268 L60 288 L65 274 L70 282 L80 278 L92 278 L97 264 L102 292 L107 268 L112 288 L117 274 L122 282 L132 278 L144 278 L149 264 L154 292 L159 268 L164 288 L169 274 L174 282 L184 278 L196 278 L201 264 L206 292 L211 268 L216 288 L221 274 L226 282 L236 278 L248 278 L253 264 L258 292 L263 268 L268 288 L273 274 L278 282 L288 278 L300 278"
                strokeWidth="1.3" fill="none" stroke="currentColor"
              >
                <animateTransform attributeName="transform" type="translate" values="0,0;-52,0" dur="2s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
