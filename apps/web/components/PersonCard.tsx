'use client';

import React, { useState } from 'react';

function displayName(name: string, preferredName?: string) {
  if (!preferredName) return name;
  const parts = name.trim().split(/\s+/);
  const lastName = parts.length > 1 ? parts[parts.length - 1] : '';
  return lastName ? `${preferredName} ${lastName}` : preferredName;
}

export function PersonCard({
  name,
  preferredName,
  bio,
  photoUrl,
  projectRole,
  major,
  affiliation,
  websiteUrl,
}: {
  name: string;
  preferredName?: string;
  bio: string;
  photoUrl?: string;
  role?: string;
  projectRole?: string;
  major?: string;
  affiliation?: string;
  websiteUrl?: string;
}) {
  const [showBio, setShowBio] = useState(false);
  const shownName = displayName(name, preferredName);

  const nameContent = websiteUrl ? (
    <a
      href={websiteUrl}
      target="_blank"
      rel="noreferrer"
      className="hover:text-unc transition-colors inline-flex items-center gap-1.5 group/link"
      onClick={(e) => e.stopPropagation()}
    >
      {shownName}
      <svg className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  ) : (
    shownName
  );

  return (
    <div
      className="card overflow-hidden group relative h-96"
      onMouseEnter={() => setShowBio(true)}
      onMouseLeave={() => setShowBio(false)}
    >
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
        {photoUrl ? (
          <img src={photoUrl} alt={shownName} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-300">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 group-hover:text-unc-dark transition-colors leading-tight">
          {nameContent}
        </h3>
        {projectRole && <div className="text-xs font-semibold text-unc uppercase tracking-wider mt-1">{projectRole}</div>}
        {affiliation && <div className="text-xs text-gray-400 mt-0.5">{affiliation}</div>}
      </div>

      {bio && (
        <div
          className={`absolute inset-0 bg-white/95 backdrop-blur-sm p-5 flex flex-col justify-center transition-opacity duration-200 ${
            showBio ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <h3 className="text-base font-bold text-gray-900 mb-1">{nameContent}</h3>
          {major && <div className="text-xs font-semibold text-unc uppercase tracking-wider mb-3">{major}</div>}
          <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-unc font-medium text-sm hover:text-unc-dark inline-flex items-center gap-1"
            >
              Visit website
              <span aria-hidden>&rarr;</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
