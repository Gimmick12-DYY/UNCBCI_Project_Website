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

type NewsDraft = { title: string; summary: string; peopleIds: string[] };

export default function AdminPage() {
  const people = peopleData as Person[];
  const [draft, setDraft] = useState<NewsDraft>({ title: '', summary: '', peopleIds: [] });
  
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
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500 mt-2">Manage project updates and content.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Editor Column */}
        <div className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-unc/10 flex items-center justify-center text-unc">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Create New Update</h2>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Update Title</label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-unc/20 focus:border-unc transition-all outline-none text-gray-800 placeholder:text-gray-400"
                placeholder="e.g. Breakthrough in neural signal decoding"
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Update Details (Summary)</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-unc/20 focus:border-unc transition-all outline-none text-gray-800 placeholder:text-gray-400 min-h-[120px] resize-y"
                placeholder="Provide a brief summary of the update..."
                value={draft.summary}
                onChange={(e) => setDraft({ ...draft, summary: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Attribute To (Select Team Members)</label>
              <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-xl bg-gray-50/50 p-2 space-y-1">
                {people.map(p => (
                  <label 
                    key={p.id} 
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm ${draft.peopleIds.includes(p.id) ? 'bg-white border-unc/30 shadow-sm ring-1 ring-unc/10' : ''}`}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${draft.peopleIds.includes(p.id) ? 'bg-unc text-white' : 'bg-gray-200 text-transparent'}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
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
        </div>

        {/* Preview Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Live Preview</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-unc/10 text-unc text-xs font-bold uppercase tracking-wider">
                  News Update
                </span>
                <span className="text-gray-400 text-sm">
                  {new Date().toLocaleDateString()}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {draft.title || <span className="text-gray-300 italic">Title will appear here...</span>}
              </h3>
              
              <div className="prose prose-sm max-w-none text-gray-600 mb-6 leading-relaxed">
                {draft.summary || <span className="text-gray-300 italic">Summary details will appear here...</span>}
              </div>

              {selectedPeople.length > 0 && (
                <div className="border-t border-gray-100 pt-6">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Associated Researchers
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {selectedPeople.map(p => (
                      <div key={p.id} className="flex items-center gap-2 pr-3 py-1.5 pl-1.5 rounded-full bg-gray-50 border border-gray-200">
                        <div className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-xs text-gray-500">
                Status: <span className="text-orange-500 font-medium">Draft</span>
              </span>
              <button 
                className="bg-unc text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-unc-dark transition-all shadow-md shadow-unc/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transform active:scale-95" 
                disabled={!draft.title}
              >
                Publish Update
              </button>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 flex gap-3">
            <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-yellow-800 leading-relaxed">
              This interface is a client-side prototype. Data persistence is not yet connected to the backend API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
