import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Partners | BrainScan',
  description: 'The BrainScan ecosystem: research groups, university partners, and users.',
};

const neuroscienceGroups = [
  {
    name: 'Brain-Spine-Machine Interfaces Lab',
    pi: 'Yadav Lab',
    institution: '',
    url: '',
    description: 'Research on brain-spine-machine interfaces for neural rehabilitation and motor control.',
  },
  {
    name: 'Hantman Lab',
    pi: 'Hantman Lab',
    institution: '',
    url: '',
    description: 'Investigating neural circuits underlying skilled motor behaviors.',
  },
];

const computerEngGroups = [
  {
    name: 'Krishna Lab',
    pi: 'Krishna Lab',
    institution: '',
    url: '',
    description: 'Research at the intersection of computing systems and emerging technologies.',
  },
];

const universityPartners = [
  { name: 'University of North Carolina', short: 'UNC', logo: '/logos/Interlocking_NC_CarolinaBlue_Navy_rgb.png' },
  { name: 'Princeton University', short: 'Princeton', logo: '/logos/princeton.svg', scale: 2.6 },
  { name: 'Yale University', short: 'Yale', logo: '/logos/yale.svg', scale: 0.85 },
  { name: 'Stanford University', short: 'Stanford', logo: '/logos/stanford.svg', scale: 2 },
  { name: 'University of Connecticut', short: 'UConn', logo: '/logos/uconn.svg' },
  { name: 'University of Kentucky', short: 'UKY', logo: '/logos/kentucky.svg' },
  { name: 'Iowa State University', short: 'Iowa State', logo: '/logos/iowa-state.svg' },
  { name: 'North Carolina A&T University', short: 'NC A&T', logo: '/logos/ncat.svg' },
];

function GroupCard({ group: g }: { group: { name: string; pi: string; institution: string; url: string; description: string } }) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-1">{g.name}</h3>
      <p className="text-sm text-unc font-semibold mb-1">{g.pi}</p>
      {g.institution && <p className="text-xs text-gray-400 mb-3">{g.institution}</p>}
      <p className="text-sm text-gray-500 leading-relaxed mb-3">{g.description}</p>
      {g.url && (
        <a
          href={g.url}
          target="_blank"
          rel="noreferrer"
          className="text-unc font-medium text-sm hover:text-unc-dark inline-flex items-center gap-1 group"
        >
          Visit lab page
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default function PartnersPage() {
  return (
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="section-label mb-3">Ecosystem</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Partners</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            BrainScan connects research groups, universities, and users nationwide to advance neural interface technology.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="section-label mb-8">Research Groups</p>

        <h2 className="font-serif text-2xl text-gray-900 mb-5">Neuroscience</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {neuroscienceGroups.map((g) => (
            <GroupCard key={g.name} group={g} />
          ))}
        </div>

        <h2 className="font-serif text-2xl text-gray-900 mb-5">Computer Engineering</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {computerEngGroups.map((g) => (
            <GroupCard key={g.name} group={g} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Inter-Institutional Network</p>
            <h2 className="font-serif text-3xl text-gray-900 mb-4">University Partners</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              BrainScan will be made available to multiple labs nationwide through an inter-institutional loan program,
              along with documentation, video tutorials, board design files, and software.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {universityPartners.map((u) => (
              <div key={u.short} className="card p-5 text-center flex flex-col items-center justify-between">
                <div className="w-full h-16 flex items-center justify-center mb-3 overflow-hidden">
                  <img
                    src={u.logo}
                    alt={`${u.name} logo`}
                    className="max-h-16 max-w-[80%] object-contain"
                    style={u.scale ? { transform: `scale(${u.scale})` } : undefined}
                  />
                </div>
                <div>
                  <div className="text-base font-bold text-gray-900 mb-1">{u.short}</div>
                  <div className="text-xs text-gray-500 leading-tight">{u.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="font-serif text-2xl text-gray-900 mb-4">Want to partner with us?</h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-8">
          Get in touch with our team to discuss research partnerships, BrainScan access, becoming a user, or other opportunities.
        </p>
        <Link href="/people" className="btn-primary">
          Contact the Team
        </Link>
      </section>
    </div>
  );
}
