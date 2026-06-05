import React from 'react';
import Link from 'next/link';
import resourcesData from '../../data/resources.json';

export const metadata = {
  title: 'Resources | BrainScan',
  description: 'Software, documentation, and hardware design files from the BrainScan project.',
};

type ResourceItem = {
  id: string;
  title: string;
  description: string;
  url?: string;
  version?: string;
  tag?: string;
};

function ResourceCard({ item }: { item: ResourceItem }) {
  return (
    <article className="card p-6 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.title}</h3>
          {item.version && (
            <span className="text-xs font-semibold text-unc uppercase tracking-wider">{item.version}</span>
          )}
          {item.tag && (
            <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{item.tag}</span>
          )}
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
      </div>
      {item.url && (
        <div className="flex-shrink-0 self-start md:self-center">
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:border-unc hover:text-unc transition-all text-sm font-medium"
          >
            Download
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </article>
  );
}

function ResourceSection({
  title,
  description,
  items,
  emptyMessage,
}: {
  title: string;
  description: string;
  items: ResourceItem[];
  emptyMessage: string;
}) {
  return (
    <section className="py-8 border-b border-gray-100 last:border-0">
      <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
        <span className="w-1 h-6 bg-unc rounded-full" />
        {title}
      </h2>
      <p className="text-gray-500 text-sm max-w-2xl mb-6 ml-4">{description}</p>
      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map((item) => (
            <ResourceCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="card p-8 text-center text-gray-400 text-sm">{emptyMessage}</div>
      )}
    </section>
  );
}

export default function ResourcesPage() {
  const software = resourcesData.software as ResourceItem[];
  const hardware = resourcesData.hardware as ResourceItem[];

  return (
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="section-label mb-3">Open Science</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Software tools, documentation, and hardware design files from the BrainScan project will be shared here
            as they become available.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <ResourceSection
          title="Software"
          description="High-level interfaces, compiler frameworks, simulators, and other software for BrainScan and BrainCore."
          items={software}
          emptyMessage="Software resources will be posted here as they are released."
        />
        <ResourceSection
          title="Hardware"
          description="Board design files, schematics, and hardware documentation for the BrainScan instrument."
          items={hardware}
          emptyMessage="Hardware design files will be posted here as they are released."
        />
      </div>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center border-t border-gray-100">
        <p className="text-gray-500 max-w-lg mx-auto mb-8">
          BrainScan will also be distributed through our inter-institutional loan program. Documentation and video
          tutorials will be hosted on this site.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/why" className="btn-primary">
            About BrainScan
          </Link>
          <Link href="/partners" className="btn-outline">
            Partners
          </Link>
        </div>
      </section>
    </div>
  );
}
