import React from 'react';
import Link from 'next/link';
import partnersData from '../../data/partners.json';
import { PartnerFlipCard } from '../../components/PartnerFlipCard';
import type { PartnerFlipCardProps } from '../../components/PartnerFlipCard';

export const metadata = {
  title: 'Partners | BrainScan',
  description: 'BrainScan collaborators and users in the inter-institutional network.',
};

type PartnerEntry = PartnerFlipCardProps & { id: string };

function lastNameKey(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1] || name;
}

function sortPartners(items: PartnerEntry[]): PartnerEntry[] {
  return [...items].sort((a, b) =>
    lastNameKey(a.name).localeCompare(lastNameKey(b.name), undefined, { sensitivity: 'base' }),
  );
}

function PartnerSection({
  title,
  description,
  partners,
}: {
  title: string;
  description?: string;
  partners: PartnerEntry[];
}) {
  if (partners.length === 0) return null;

  return (
    <section className="py-8 border-b border-gray-100 last:border-0">
      <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
        <span className="w-1 h-6 bg-unc rounded-full"></span>
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-sm max-w-2xl mb-6 ml-4">{description}</p>
      )}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((p) => (
          <PartnerFlipCard
            key={p.id}
            name={p.name}
            subtitle={p.subtitle}
            institution={p.institution}
            logoUrl={p.logoUrl}
            logoScale={p.logoScale}
            description={p.description}
            url={p.url || undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default function PartnersPage() {
  const collaborators = sortPartners(partnersData.collaborators as PartnerEntry[]);
  const users = sortPartners(partnersData.users as PartnerEntry[]);

  return (
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="section-label mb-3">Ecosystem</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Partners</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            BrainScan connects collaborating labs and users nationwide to advance neural interface technology.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <PartnerSection
          title="Collaborators"
          description="Research groups contributing to the BrainScan project. Hover a card to view their institution and details."
          partners={collaborators}
        />
        <PartnerSection
          title="Users"
          description="Labs participating in the BrainScan inter-institutional loan program. Example entries shown below."
          partners={users}
        />
      </div>

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
