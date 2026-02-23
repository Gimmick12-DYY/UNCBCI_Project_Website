import React from 'react';

export function PersonCard({ name, bio, photoUrl, role, affiliation }: {
  name: string;
  bio: string;
  photoUrl?: string;
  role?: string;
  affiliation?: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 h-full flex flex-col">
      <div className="relative h-48 bg-gradient-to-tr from-gray-100 to-gray-200">
        {photoUrl ? (
          <img src={photoUrl} alt={name} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-300">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span className="text-white text-sm font-medium">View Profile</span>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-unc-dark transition-colors">{name}</h3>
          {role && <div className="text-sm font-semibold text-unc uppercase tracking-wider">{role}</div>}
          {affiliation && <div className="text-sm text-gray-500 mt-1">{affiliation}</div>}
        </div>
        
        {bio && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mt-auto">
            {bio}
          </p>
        )}
      </div>
    </div>
  );
}
