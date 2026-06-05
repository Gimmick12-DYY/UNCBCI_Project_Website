import React from 'react';
import peopleData from '../../../data/people.json';
import { PersonCard } from '../../../components';

type Person = {
  id: string;
  name: string;
  preferredName?: string;
  role: string;
  projectRole?: string;
  major?: string;
  bio: string;
  photoUrl?: string;
  affiliation?: string;
};

function lastName(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1] || name;
}

function sortByLastName<T extends { name: string }>(items: T[]): T[] {
  return [...items].sort((a, b) =>
    lastName(a.name).localeCompare(lastName(b.name), undefined, { sensitivity: 'base' }),
  );
}

function AffiliationHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4 mt-8 first:mt-0">
      {children}
    </h3>
  );
}

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

  const pi = sortByLastName(people.filter(p => p.role === 'PI'));
  const partners = sortByLastName(people.filter(p => p.role === 'Partner'));
  const phd = sortByLastName(people.filter(p => p.role === 'PhD'));
  const graduates = people.filter(p => p.role === 'Graduate');
  const uncGrads = sortByLastName(graduates.filter(p => !p.affiliation || p.affiliation === 'UNC'));
  const princetonGrads = sortByLastName(graduates.filter(p => p.affiliation === 'Princeton'));
  const undergraduates = sortByLastName(people.filter(p => p.role === 'Undergraduate'));

  return (
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="section-label mb-3">Team</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Our People</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Meet the dedicated researchers, students, and partners behind the BrainScan project.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-4">
        <Section title="Principal Investigators">
          {pi.map(p => <PersonCard key={p.id} {...p} />)}
        </Section>
        <Section title="Partners">
          {partners.map(p => <PersonCard key={p.id} {...p} />)}
        </Section>
        <Section title="PhD Students">
          {phd.map(p => <PersonCard key={p.id} {...p} />)}
        </Section>
        {(uncGrads.length > 0 || princetonGrads.length > 0) && (
          <section className="py-8 border-b border-gray-100 last:border-0">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-unc rounded-full"></span>
              Graduate Students
            </h2>
            {uncGrads.length > 0 && (
              <>
                <AffiliationHeading>UNC</AffiliationHeading>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {uncGrads.map(p => <PersonCard key={p.id} {...p} />)}
                </div>
              </>
            )}
            {princetonGrads.length > 0 && (
              <>
                <AffiliationHeading>Princeton</AffiliationHeading>
                <p className="text-sm text-gray-500 mb-4 max-w-2xl">
                  Additional Princeton graduate students will be listed here as they join.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {princetonGrads.map(p => <PersonCard key={p.id} {...p} />)}
                </div>
              </>
            )}
          </section>
        )}
        <Section title="Undergraduate Students">
          {undergraduates.map(p => <PersonCard key={p.id} {...p} />)}
        </Section>
      </div>
    </div>
  );
}
