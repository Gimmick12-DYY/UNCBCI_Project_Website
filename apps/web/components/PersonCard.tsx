'use client';

import React, { useState } from 'react';

export function PersonCard({ name, bio, photoUrl, role, affiliation }: {
  name: string;
  bio: string;
  photoUrl?: string;
  role?: string;
  affiliation?: string;
}) {
  const [showBio, setShowBio] = useState(false);

  return (
    <div
      className="card overflow-hidden group relative h-80"
      onMouseEnter={() => setShowBio(true)}
      onMouseLeave={() => setShowBio(false)}
    >
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
        {photoUrl ? (
          <img src={photoUrl} alt={name} className="w-full h-full object-cover object-[center_25%]" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-300">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 group-hover:text-unc-dark transition-colors leading-tight">{name}</h3>
        {role && <div className="text-xs font-semibold text-unc uppercase tracking-wider mt-1">{role}</div>}
        {affiliation && <div className="text-xs text-gray-400 mt-0.5">{affiliation}</div>}
      </div>

      {bio && (
        <div
          className={`absolute inset-0 bg-white/95 backdrop-blur-sm p-5 flex flex-col justify-center transition-opacity duration-200 ${
            showBio ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <h3 className="text-base font-bold text-gray-900 mb-1">{name}</h3>
          {role && <div className="text-xs font-semibold text-unc uppercase tracking-wider mb-3">{role}</div>}
          <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
        </div>
      )}
    </div>
  );
}
