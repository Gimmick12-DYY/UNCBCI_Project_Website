import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Collaborators | UNC BCI Project',
  description: 'The BrainScan ecosystem: research groups and university partners.',
};

const researchGroups = [
  {
    name: 'The Infinite Brain Research Group',
    pi: 'Raghavendra Pradyumna Pothukuchi',
    institution: 'University of North Carolina at Chapel Hill',
    url: 'https://www.cs.unc.edu/~raghav/',
    description: 'Building computers that can directly talk to the brain, and think like the mind. The lab develops BCI processors, cognitive modeling platforms, and brain-inspired computing systems.',
  },
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
  { name: 'Yale University', short: 'Yale', logo: '/logos/yale.svg', scale: 1.8 },
  { name: 'Stanford University', short: 'Stanford', logo: '/logos/stanford.svg', scale: 2 },
  { name: 'University of Connecticut', short: 'UConn', logo: '/logos/uconn.svg' },
  { name: 'University of Kentucky', short: 'UKY', logo: '/logos/kentucky.svg' },
  { name: 'Iowa State University', short: 'Iowa State', logo: '/logos/iowa-state.svg' },
  { name: 'North Carolina A&T University', short: 'NC A&T', logo: '/logos/ncat.svg' },
];

const pis = [
  { name: 'Raghavendra Pradyumna Pothukuchi', role: 'PI', institution: 'UNC Chapel Hill' },
  { name: 'Abhishek Bhattacharjee', role: 'PI', institution: 'Yale University' },
  { name: 'Rajit Manohar', role: 'PI', institution: 'Yale University' },
  { name: 'Hitten Zaveri', role: 'PI', institution: 'Yale University' },
];

export default function CollaboratorsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="section-label mb-3">Ecosystem</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Collaborators</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            BrainScan connects research groups and universities nationwide to advance neural interface technology.
          </p>
        </div>
      </section>

      {/* Research Groups */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="section-label mb-6">Research Groups</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {researchGroups.map((g) => (
            <div key={g.name} className="card p-6">
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
          ))}
        </div>
      </section>

      {/* University network */}
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

      {/* Principal Investigators */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="section-label mb-2">NSF Grant #2510152</p>
            <h2 className="font-serif text-3xl text-gray-900">Principal Investigators</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {pis.map((p) => (
              <div key={p.name} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto mb-3 flex items-center justify-center text-gray-400">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{p.name}</h3>
                <p className="text-xs text-unc font-semibold">{p.role}</p>
                <p className="text-xs text-gray-400 mt-0.5">{p.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="font-serif text-2xl text-gray-900 mb-4">Want to collaborate?</h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-8">
          Get in touch with our team to discuss research partnerships, access to BrainScan, or other opportunities.
        </p>
        <Link href="/people" className="btn-primary">
          Contact the Team
        </Link>
      </section>
    </div>
  );
}
