import React from 'react';
import people from '../../../data/people.json';

type Person = {
  id: string;
  name: string;
  role: 'PI' | 'Collaborator' | 'PhD' | 'Graduate' | 'Undergraduate';
  bio: string;
  photoUrl?: string;
  affiliation?: string;
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}

function PersonCard({ p }: { p: Person }) {
  return (
    <div className="border rounded p-4">
      <div className="flex items-center gap-3">
        <div className="h-16 w-16 bg-gray-200 rounded" aria-label="photo" />
        <div>
          <div className="font-medium">{p.name}</div>
          {p.affiliation && <div className="text-sm text-gray-600">{p.affiliation}</div>}
        </div>
      </div>
      {p.bio && <p className="text-sm text-gray-700 mt-3">{p.bio}</p>}
    </div>
  );
}

export default function PeoplePage() {
  const roster = people as Person[];
  const byRole = (role: Person['role']) => roster.filter(p => p.role === role);
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">People</h1>

      <Section title="Head Professor & Collaborators">
        {byRole('PI').concat(byRole('Collaborator')).map(p => <PersonCard key={p.id} p={p} />)}
      </Section>

      <Section title="PhD Students">
        {byRole('PhD').map(p => <PersonCard key={p.id} p={p} />)}
      </Section>

      <Section title="Graduate Students">
        {byRole('Graduate').map(p => <PersonCard key={p.id} p={p} />)}
      </Section>

      <Section title="Undergraduate Students">
        {byRole('Undergraduate').map(p => <PersonCard key={p.id} p={p} />)}
      </Section>
    </div>
  );
}




