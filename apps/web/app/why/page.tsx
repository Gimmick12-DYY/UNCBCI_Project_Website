import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Why BrainScan | UNC BCI Project',
  description: 'BrainScan: An Instrument for High-Bandwidth Real-Time Closed-Loop Neural Interfacing, funded by NSF MRI Grant #2510152.',
};

const keyFeatures = [
  {
    title: 'Unprecedented Throughput',
    description: 'Process over 100 megabits per second of neural data on-device, enabling interfacing with multiple brain regions simultaneously.',
    stat: '>100 Mbps',
  },
  {
    title: 'Ultra-Low Power',
    description: 'Consume under 1 watt of power, making the system amenable for portable use without tethering.',
    stat: '<1 W',
  },
  {
    title: 'Real-Time Closed-Loop',
    description: 'Support millisecond-scale closed loops involving analysis of large volumes of brain data with high programmability.',
    stat: 'ms-scale',
  },
  {
    title: 'Highly Programmable',
    description: 'Unlike current neural interfaces, BrainScan is designed to support many neuroscience studies through flexible software.',
    stat: 'Flexible',
  },
];

const timeline = [
  { year: '2025', label: 'Project begins (October)', active: true },
  { year: '2026', label: 'BrainCore chip iterations & ex vivo testing' },
  { year: '2027', label: 'Pilot rodent study validation' },
  { year: '2028', label: 'Validated BCI system delivered to labs nationwide' },
];

export default function WhyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <a
            href="https://www.nsf.gov/awardsearch/show-award?AWD_ID=2510152"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-unc/10 text-unc text-sm font-semibold mb-6 hover:bg-unc/15 transition-colors"
          >
            <span>NSF MRI Grant #2510152</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            Why BrainScan?
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            The National Science Foundation awarded a Major Research Instrumentation (MRI) grant for
            &ldquo;Development of BrainScan: An Instrument for High-Bandwidth Real-Time Closed-Loop Neural Interfacing.&rdquo;
          </p>
        </div>
      </section>

      {/* Overview (Writeup 1) */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="section-label mb-2">Project Overview</p>
            <h2 className="font-serif text-2xl text-gray-900">BrainScan &amp; BrainCore</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
            <p>
              This project is developing an implantable brain-computer interface (BCI) built around a custom chip
              that processes over 100 megabits per second of neural data while consuming under 1 W of power.
              No such platform exists today in academia or industry.
            </p>
            <p>
              The project spans three years beginning October 2025 and aims to deliver a validated BCI system
              to neuroscience labs across the country by 2028.
            </p>
          </div>
        </div>
      </section>

      {/* Key capabilities */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Capabilities</p>
            <h2 className="font-serif text-3xl text-gray-900">What sets BrainScan apart</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {keyFeatures.map((f) => (
              <div key={f.title} className="card p-8">
                <div className="text-3xl font-bold text-unc mb-2 font-mono">{f.stat}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NSF Abstract (Writeup 2) */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="section-label mb-2">NSF Abstract</p>
            <h2 className="font-serif text-2xl text-gray-900">Technical Details</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed text-[15px]">
            <p>
              BrainScan is a neural interface that enables direct real-time bidirectional communication between
              biological neurons in the brain and the digital world. The centerpiece of BrainScan is BrainCore,
              a bespoke chip designed for neural interfacing. BrainCore enables an energy efficiency that is
              orders of magnitude superior to the state of the art.
            </p>
            <p>
              Unlike current neural interfaces, BrainScan will be highly programmable to support many neuroscience
              studies centered on millisecond-scale closed loops involving analysis of large volumes of brain data.
              BrainScan&rsquo;s form factor and power dissipation will make it amenable for portable use,
              eschewing the need for tethering.
            </p>
            <p>
              BrainScan&rsquo;s development will encompass both the hardware and software. The bulk of hardware
              design would target the BrainCore chip, which uses multiple hardware accelerators for neural data
              processing, operating, unusually, in distinct clock domains, and the integration of peripheral
              off-the-shelf components for storage, wireless communication, and power.
            </p>
            <p>
              Software design includes an intuitive interface in a high-level language familiar to neuroscientists
              along with a compiler framework. Together, BrainScan will process about a hundred megabits per second
              of neural data below 1 watt of power. This ability will be validated in a pilot rodent study.
            </p>
            <p>
              With a transformative redesign of neural interfaces to read and electrically stimulate orders of
              magnitude more neurons than is currently feasible, BrainScan will enable cutting-edge neuroscience research
              and mark a leap in the nation&rsquo;s interest in building high-precision and high-bandwidth neural interfaces
              that may one day help augment human cognition and decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Roadmap</p>
            <h2 className="font-serif text-3xl text-gray-900">Project Timeline</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex-1 relative">
                <div className="flex items-center md:flex-col md:items-center gap-4 md:gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    t.active
                      ? 'bg-unc text-white shadow-md shadow-unc/30'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {t.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-[calc(50%+20px)] right-0 h-px bg-gray-200 z-0"></div>
                  )}
                  <p className="text-sm text-gray-600 md:text-center max-w-[180px]">{t.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="font-serif text-3xl text-gray-900 mb-4">Open to the community</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          BrainScan will be made available to multiple labs nationwide through an inter-institutional loan program.
          Board design files, software, and high-level simulators for the BrainCore chip will be shared
          with the community. Written documentation and video tutorials will be hosted on this website.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/partners" className="btn-primary">
            View Partners
          </Link>
          <a
            href="https://www.nsf.gov/awardsearch/show-award?AWD_ID=2510152"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            NSF Award Details &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
