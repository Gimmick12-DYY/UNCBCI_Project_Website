import React from 'react';

export const metadata = {
  title: "PI's | UNC BCI Project",
  description: 'Principal Investigators on the NSF BrainScan / UNC BCI Project.',
};

const principalInvestigators = [
  { name: 'Raghavendra Pradyumna Pothukuchi', role: 'PI', institution: 'UNC Chapel Hill' },
  { name: 'Abhishek Bhattacharjee', role: 'PI', institution: 'Princeton University' },
  { name: 'Hitten Zaveri', role: 'PI', institution: 'Yale University' },
];

export default function PisPage() {
  return (
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="section-label mb-3">NSF Grant #2510152</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Principal Investigators</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Lead investigators on this project. Full bios and photos may be added here as they become available.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-3 gap-8">
            {principalInvestigators.map((p) => (
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
    </div>
  );
}
