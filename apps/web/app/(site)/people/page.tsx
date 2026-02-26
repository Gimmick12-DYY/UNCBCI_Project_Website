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
    <section className="py-8 border-b border-gray-100 last:border-0">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-1 h-6 bg-unc rounded-full"></span>
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="section-label mb-3">Team</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Our People</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Meet the dedicated researchers, students, and collaborators behind the UNC BCI Project.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-4">
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
