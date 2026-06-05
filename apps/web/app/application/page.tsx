import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Application | BrainScan',
  description: 'Applications of BrainScan: high-bandwidth real-time closed-loop neural interfacing for neuroscience and brain-computer interface research.',
};

const applications = [
  {
    title: 'Closed-Loop Neuroscience',
    description:
      'Run millisecond-scale closed-loop experiments that analyze large volumes of neural data in real time, enabling studies that are impractical with today\'s tethered, lower-bandwidth interfaces.',
  },
  {
    title: 'Multi-Region Neural Interfacing',
    description:
      'Interface with multiple brain regions simultaneously thanks to on-device processing of over 100 Mbps of neural data, supporting richer models of distributed neural activity.',
  },
  {
    title: 'High-Density Recording & Stimulation',
    description:
      'Support high-density electrode arrays with near-probe signal processing, reading and electrically stimulating far more neurons than current academic or industrial platforms allow.',
  },
  {
    title: 'Portable & Untethered Studies',
    description:
      'Conduct experiments without tethering to external compute. BrainScan\'s sub-watt power budget and compact form factor enable portable, untethered neural interfacing in the lab and beyond.',
  },
  {
    title: 'Motor & Rehabilitation Research',
    description:
      'Advance brain-spine-machine interface research, skilled motor behavior studies, and neural rehabilitation experiments that depend on reliable bidirectional brain communication.',
  },
  {
    title: 'Programmable Research Platform',
    description:
      'Adapt BrainScan to diverse study protocols through flexible software, a high-level interface for neuroscientists, and a compiler framework—without rebuilding hardware for each experiment.',
  },
];

const useCases = [
  {
    audience: 'Neuroscience Labs',
    detail: 'Validate hypotheses in rodent and other model systems using a programmable, high-bandwidth instrument shared across institutions.',
  },
  {
    audience: 'BCI Hardware Researchers',
    detail: 'Explore custom chip architectures, embedded systems, and real-time signal processing pipelines built around the BrainCore platform.',
  },
  {
    audience: 'Inter-Institutional Users',
    detail: 'Access BrainScan through the loan program with documentation, tutorials, board design files, and software to accelerate adoption nationwide.',
  },
];

export default function ApplicationPage() {
  return (
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="section-label mb-3">Use Cases</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            Applications
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            BrainScan is designed as a general-purpose neural interface for cutting-edge neuroscience and
            brain-computer interface research—combining high throughput, low power, and real-time closed-loop control.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-4">
          <div className="md:col-span-1">
            <p className="section-label mb-2">Overview</p>
            <h2 className="font-serif text-2xl text-gray-900">What BrainScan enables</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
            <p>
              BrainScan provides direct, real-time bidirectional communication between biological neurons and
              digital systems. Its custom BrainCore chip processes neural data on-device with energy efficiency
              orders of magnitude beyond the state of the art.
            </p>
            <p>
              That combination opens application areas that today&apos;s neural interfaces cannot support—from
              portable closed-loop studies to experiments spanning multiple brain regions at once.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Application Areas</p>
            <h2 className="font-serif text-3xl text-gray-900">Where BrainScan applies</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="card p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="section-label mb-2">Who It&apos;s For</p>
          <h2 className="font-serif text-3xl text-gray-900">Research communities</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((item) => (
            <div key={item.audience} className="card p-6 text-center">
              <h3 className="text-base font-bold text-unc mb-3">{item.audience}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center border-t border-gray-100">
        <h2 className="font-serif text-2xl text-gray-900 mb-4">Learn more about the system</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Explore the technical background behind BrainScan, our publications, and how labs can participate
          as collaborators or users.
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
