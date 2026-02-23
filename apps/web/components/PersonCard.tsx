import React from 'react';

export function PersonCard({ name, bio, photoUrl, role, affiliation }: {
  name: string;
  bio: string;
  photoUrl?: string;
  role?: string;
  affiliation?: string;
}) {
  return (
    <div className="border rounded p-4">
      <div className="flex items-center gap-3">
        <div className="h-16 w-16 bg-gray-200 rounded" aria-label="photo" />
        <div>
          <div className="font-medium">{name}</div>
          {affiliation && <div className="text-sm text-gray-600">{affiliation}</div>}
          {role && <div className="text-xs text-gray-500">{role}</div>}
        </div>
      </div>
      {bio && <p className="text-sm text-gray-700 mt-3">{bio}</p>}
    </div>
  );
}
