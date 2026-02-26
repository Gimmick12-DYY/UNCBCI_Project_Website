import React from 'react';

export function PersonCard({ name, bio, photoUrl, role, affiliation }: {
  name: string;
  bio: string;
  photoUrl?: string;
  role?: string;
  affiliation?: string;
}) {
  return (
    <div className="card overflow-hidden group h-full flex flex-col">
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
        {photoUrl ? (
          <img src={photoUrl} alt={name} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-300">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-3">
          <h3 className="text-base font-bold text-gray-900 group-hover:text-unc-dark transition-colors">{name}</h3>
          {role && <div className="text-xs font-semibold text-unc uppercase tracking-wider mt-0.5">{role}</div>}
          {affiliation && <div className="text-xs text-gray-400 mt-0.5">{affiliation}</div>}
        </div>
        {bio && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mt-auto">{bio}</p>
        )}
      </div>
    </div>
  );
}
