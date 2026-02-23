'use client';
import React, { useMemo, useState } from 'react';
import peopleData from '../../data/people.json';

type Person = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl?: string;
  affiliation?: string;
};

type NewsDraft = { title: string; peopleIds: string[] };

export default function AdminPage() {
  const people = peopleData as Person[];
  const [draft, setDraft] = useState<NewsDraft>({ title: '', peopleIds: [] });
  
  const handleTogglePerson = (id: string) => {
    setDraft(prev => {
      const newIds = prev.peopleIds.includes(id) 
        ? prev.peopleIds.filter(pid => pid !== id)
        : [...prev.peopleIds, id];
      return { ...prev, peopleIds: newIds };
    });
  };

  const selectedPeople = people.filter(p => draft.peopleIds.includes(p.id));

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">Manage project updates and content.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Create New Update</h2>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Update Title</label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-unc focus:border-unc transition-colors outline-none"
              placeholder="e.g. New publication accepted in Nature"
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Attribute To (Select Team Members)</label>
            <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg bg-gray-50 divide-y divide-gray-100">
              {people.map(p => (
                <label 
                  key={p.id} 
                  className={`flex items-center gap-3 p-3 cursor-pointer transition-colors hover:bg-white ${draft.peopleIds.includes(p.id) ? 'bg-unc-light/30' : ''}`}
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-unc rounded border-gray-300 focus:ring-unc"
                    checked={draft.peopleIds.includes(p.id)}
                    onChange={() => handleTogglePerson(p.id)}
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{p.name}</div>
                    <div className="text-xs text-gray-500">{p.role}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-800">Preview</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[200px] flex flex-col">
            <div className="flex-1">
              <div className="text-sm text-unc font-bold uppercase tracking-wider mb-2">
                {new Date().toLocaleDateString()}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {draft.title || <span className="text-gray-400 italic">Untitled Update</span>}
              </h3>
              
              {selectedPeople.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedPeople.map(p => (
                    <span key={p.id} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {p.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-50 flex justify-end">
              <button className="bg-unc text-white px-4 py-2 rounded-lg font-medium hover:bg-unc-dark transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled={!draft.title}>
                Publish Update
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
        <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm text-yellow-800">
          This is a client-side prototype. Changes made here are not currently saved to the database.
        </p>
      </div>
    </div>
  );
}
