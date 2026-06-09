import React from 'react';
import Link from 'next/link';
import applicationsData from '../../data/applications.json';

export const metadata = {
  title: 'Applications | BrainScan',
  description:
    'Research activities enabled by BrainScan: working memory, social neuroscience, retinal circuits, and microelectronics reliability across labs nationwide.',
};

type Theme = {
  title: string;
  description: string;
};

type CommittedLab = {
  institution: string;
  pi: string;
  research: string;
};

type UseCaseSpecs = {
  goal: string;
  animal: string;
  brainRegions: string;
  sensors: string;
  closedLoop: string;
  portability: string;
  computation: string;
};

type UseCase = {
  id: string;
  title: string;
  lab: string;
  institution: string;
  summary: string;
  specs: UseCaseSpecs;
  paragraphs: string[];
};

function SpecGrid({ specs }: { specs: UseCaseSpecs }) {
  const entries: { label: string; value: string }[] = [
    { label: 'Goal', value: specs.goal },
    { label: 'Animal model', value: specs.animal },
    { label: 'Brain regions', value: specs.brainRegions },
    { label: 'Sensors', value: specs.sensors },
    { label: 'Closed-loop latency', value: specs.closedLoop },
    { label: 'Portability', value: specs.portability },
    { label: 'Computation', value: specs.computation },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-3 mb-8 p-5 rounded-xl bg-gray-50 border border-gray-100">
      {entries.map((entry) => (
        <div key={entry.label}>
          <dt className="text-xs font-semibold text-unc uppercase tracking-wider mb-1">{entry.label}</dt>
          <dd className="text-sm text-gray-600 leading-relaxed">{entry.value}</dd>
        </div>
      ))}
    </div>
  );
}

function UseCaseSection({ useCase, index }: { useCase: UseCase; index: number }) {
  return (
    <article id={useCase.id} className="scroll-mt-24">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="text-xs font-bold text-unc uppercase tracking-widest">Use Case {index + 1}</span>
        <span className="text-gray-300">|</span>
        <span className="text-sm font-semibold text-gray-700">{useCase.lab}</span>
        <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">{useCase.institution}</span>
      </div>
      <h3 className="font-serif text-2xl text-gray-900 mb-4 leading-snug">{useCase.title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6 font-medium">{useCase.summary}</p>
      <SpecGrid specs={useCase.specs} />
      <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
        {useCase.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export default function ApplicationPage() {
  const themes = applicationsData.themes as Theme[];
  const committedLabs = applicationsData.committedLabs as CommittedLab[];
  const useCases = applicationsData.useCases as UseCase[];

  return (
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="section-label mb-3">Use Cases</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">Applications</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            BrainScan is designed as a general-purpose neural interface for cutting-edge neuroscience and
            brain-computer interface research—combining high throughput, low power, and real-time closed-loop control.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="section-label mb-2">Nationwide Research</p>
            <h2 className="font-serif text-2xl text-gray-900">Research activities to be enabled</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
            <p>{applicationsData.intro}</p>
            <p>{applicationsData.requirements}</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-10">
            <p className="section-label mb-2">Committed Labs</p>
            <h2 className="font-serif text-3xl text-gray-900 mb-3">Nationwide user network</h2>
            <p className="text-gray-500 text-sm max-w-2xl">
              Research laboratories already committed to using BrainScan through the inter-institutional loan program.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 pr-4 font-semibold text-gray-900">Institution</th>
                  <th className="pb-3 pr-4 font-semibold text-gray-900">PI</th>
                  <th className="pb-3 font-semibold text-gray-900">Research enabled by BrainScan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {committedLabs.map((lab) => (
                  <tr key={`${lab.institution}-${lab.pi}`} className="align-top">
                    <td className="py-4 pr-4 text-gray-700 font-medium whitespace-nowrap">{lab.institution}</td>
                    <td className="py-4 pr-4 text-unc font-medium whitespace-nowrap">{lab.pi}</td>
                    <td className="py-4 text-gray-500 leading-relaxed">{lab.research}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link href="/partners" className="text-unc font-medium hover:text-unc-dark transition-colors text-sm inline-flex items-center gap-1 group">
              View all partners
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="section-label mb-2">Research Themes</p>
          <h2 className="font-serif text-3xl text-gray-900">What labs will study</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {themes.map((theme) => (
            <div key={theme.title} className="card p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{theme.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{theme.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-14">
            <p className="section-label mb-2">In Depth</p>
            <h2 className="font-serif text-3xl text-gray-900">Four use cases</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
              Each example illustrates experiments that are impractical with today&apos;s neural interfaces but become
              feasible with BrainScan&apos;s bandwidth, programmability, and power efficiency.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {useCases.map((useCase) => (
              <a
                key={useCase.id}
                href={`#${useCase.id}`}
                className="text-xs font-medium text-gray-500 hover:text-unc border border-gray-200 hover:border-unc/30 px-3 py-1.5 rounded-full transition-colors"
              >
                {useCase.lab}
              </a>
            ))}
          </div>

          <div className="space-y-20">
            {useCases.map((useCase, index) => (
              <div key={useCase.id}>
                <UseCaseSection useCase={useCase} index={index} />
                {index < useCases.length - 1 && <hr className="mt-20 border-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center border-t border-gray-100">
        <h2 className="font-serif text-2xl text-gray-900 mb-4">Learn more about the system</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Explore the technical background behind BrainScan, our publications, and the labs participating as
          partners and users.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/why" className="btn-primary">
            About BrainScan
          </Link>
          <Link href="/publications" className="btn-outline">
            Publications
          </Link>
          <Link href="/partners" className="btn-outline">
            Partners
          </Link>
        </div>
      </section>
    </div>
  );
}
