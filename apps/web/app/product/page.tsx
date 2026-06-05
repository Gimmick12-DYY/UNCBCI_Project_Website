import React from 'react';
import Link from 'next/link';

const specs = [
  { label: 'Neural Channels', value: '128+' },
  { label: 'Data Throughput', value: '>100 Mbps' },
  { label: 'Power Budget', value: '<1 W' },
  { label: 'Clock Domains', value: 'Multiple' },
  { label: 'Interface', value: 'Bidirectional' },
  { label: 'Programmability', value: 'High-level language' },
];

export default function ProductPage() {
  return (
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="section-label mb-3">Technology</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">BrainScan &amp; BrainCore</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            The hardware and software platform for next-generation neural interfacing.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <p className="section-label mb-2">Hardware</p>
            <h2 className="font-serif text-2xl text-gray-900">BrainCore Chip</h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-gray-600 leading-relaxed">
            <p>
              BrainCore is a bespoke chip designed for neural interfacing that uses multiple hardware accelerators
              for neural data processing, operating in distinct clock domains. It integrates peripheral off-the-shelf
              components for storage, wireless communication, and power.
            </p>
            <p>
              BrainCore enables energy efficiency that is orders of magnitude superior to the state of the art,
              processing about a hundred megabits per second of neural data below 1 watt of power.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {specs.map((s) => (
            <div key={s.label} className="card p-6 text-center">
              <div className="text-2xl font-bold text-unc font-mono mb-1">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <p className="section-label mb-2">Software</p>
              <h2 className="font-serif text-2xl text-gray-900">Compiler &amp; Tools</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Software design includes an intuitive interface in a high-level language familiar to neuroscientists
                along with a compiler framework. BrainScan is designed to be the foundation for a standardized
                computational platform for neural interface research and industry.
              </p>
              <p>
                This will help neuroscientists and clinicians transcend the limitations of current neural interfaces
                that support only narrow classes of experiments, and the fragmented software ecosystem they have led to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 text-sm mb-4">Interactive demo coming soon</p>
        <div className="flex justify-center gap-4">
          <Link href="/why" className="btn-primary">
            Learn More
          </Link>
          <Link href="/publications" className="btn-outline">
            View Publications
          </Link>
        </div>
      </section>
    </div>
  );
}
