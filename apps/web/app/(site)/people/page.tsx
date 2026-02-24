import React from 'react';
import peopleData from '../../../data/people.json';
import { PersonCard } from '../../../components';

type Person = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl?: string;
  affiliation?: string;
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  if (React.Children.count(children) === 0) return null;

  return (
    <section className="py-8 border-b border-white/5 last:border-0">
      <h2 className="text-lg font-semibold text-gray-200 mb-6 flex items-center gap-3">
        <span className="w-1.5 h-6 bg-unc/50 rounded-full"></span>
        {title}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </section>
  );
}

export default function PeoplePage() {
  const people = peopleData as Person[];

  const pi = people.filter(p => p.role === 'PI');
  const collaborators = people.filter(p => p.role === 'Collaborator');
  const phd = people.filter(p => p.role === 'PhD');
  const graduates = people.filter(p => p.role === 'Graduate');
  const undergraduates = people.filter(p => p.role === 'Undergraduate');

  return (
    <div className="space-y-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="font-mono text-xs text-unc/50 mb-3 tracking-widest uppercase">// team</p>
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Our Team</h1>
        <p className="text-lg text-gray-400">
          Meet the dedicated researchers, students, and collaborators behind the UNC BCI Project.
        </p>
      </div>

      <div className="space-y-4">
        <Section title="Principal Investigator">
          {pi.map(p => <PersonCard key={p.id} {...p} />)}
        </Section>

        <Section title="Collaborators">
          {collaborators.map(p => <PersonCard key={p.id} {...p} />)}
        </Section>

        <Section title="PhD Students">
          {phd.map(p => <PersonCard key={p.id} {...p} />)}
        </Section>

        <Section title="Graduate Students">
          {graduates.map(p => <PersonCard key={p.id} {...p} />)}
        </Section>

        <Section title="Undergraduate Students">
          {undergraduates.map(p => <PersonCard key={p.id} {...p} />)}
        </Section>
      </div>
    </div>
  );
}
