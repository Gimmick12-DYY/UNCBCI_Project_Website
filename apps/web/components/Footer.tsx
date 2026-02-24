import React from 'react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#080c16]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-unc/60 animate-pulse"></div>
              <h3 className="font-mono text-sm font-semibold tracking-wide text-gray-200">UNC_BCI_PROJECT</h3>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm text-sm">
              Exploring the frontiers of Brain-Computer Interfaces at the University of North Carolina.
            </p>
            <p className="font-mono text-xs text-gray-600 mt-4">
              &gt; status: <span className="text-green-500/70">active</span> | build: {new Date().getFullYear()}.02
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">// nav</h4>
            <ul className="space-y-2">
              <li><a href="/research" className="text-gray-400 hover:text-unc text-sm transition-colors">/research</a></li>
              <li><a href="/product" className="text-gray-400 hover:text-unc text-sm transition-colors">/product</a></li>
              <li><a href="/people" className="text-gray-400 hover:text-unc text-sm transition-colors">/people</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">// contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Professor Raghav</li>
              <li className="text-gray-500">University of North Carolina</li>
              <li><a href="mailto:contact@uncbci.edu" className="text-unc/70 hover:text-unc transition-colors font-mono text-xs">contact@uncbci.edu</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
          <p>&copy; {new Date().getFullYear()} UNC BCI Project</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors">privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
