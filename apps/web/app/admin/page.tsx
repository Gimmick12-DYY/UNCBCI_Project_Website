'use client';
import React, { useMemo, useState } from 'react';
import people from '../../data/people.json';

type Person = {
  id: string;
  name: string;
  role: 'PI' | 'Collaborator' | 'PhD' | 'Graduate' | 'Undergraduate';
  bio: string;
  photoUrl?: string;
  affiliation?: string;
};

type NewsDraft = { title: string; summary: string; peopleIds: string[] };

export default function AdminPage() {
  const roster = people as Person[];
  const [draft, setDraft] = useState<NewsDraft>({ title: '', summary: '', peopleIds: [] });
  const selected = useMemo(() => new Set(draft.peopleIds), [draft.peopleIds]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-medium">Update Title</label>
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="e.g. New publication accepted"
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          />

          <label className="block text-sm font-medium">Update Details</label>
          <textarea
            className="border rounded px-3 py-2 w-full min-h-[120px]"
            placeholder="Add a short description of this update (optional)"
            value={draft.summary}
            onChange={(e) => setDraft({ ...draft, summary: e.target.value })}
          />

          <div className="space-y-2">
            <div className="text-sm font-medium">Attribute To</div>
            <div className="max-h-64 overflow-auto border rounded p-2 space-y-1">
              {roster.map(p => (
                <label key={p.id} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selected.has(p.id)}
                    onChange={(e) => {
                      const s = new Set(selected);
                      if (e.target.checked) s.add(p.id); else s.delete(p.id);
                      setDraft({ ...draft, peopleIds: Array.from(s) });
                    }}
                  />
                  <span>{p.name} - {p.role}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-medium">Preview</div>
          <div className="border rounded p-4">
            <div className="font-medium">{draft.title || 'Untitled update'}</div>
            {draft.summary && <p className="text-sm text-gray-700 mt-2">{draft.summary}</p>}
            <div className="text-sm text-gray-600 mt-1">People: {roster.filter(p => selected.has(p.id)).map(p => p.name).join(', ') || 'None'}</div>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500">Note: This is a local-only draft UI. Persisting data will be added later.</p>
    </div>
  );
}
