import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-unc-dark flex items-center justify-center">
                <span className="text-white text-[7px] font-bold font-sans">Logo</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900">BrainScan</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              BrainScan: An Instrument for High-Bandwidth Real-Time Closed-Loop Neural Interfacing.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Supported by NSF Major Research Instrumentation Grant{' '}
              <a
                href="https://www.nsf.gov/awardsearch/show-award?AWD_ID=2510152"
                target="_blank"
                rel="noreferrer"
                className="text-unc hover:text-unc-dark transition-colors"
              >
                #2510152
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Pages</h4>
            <ul className="space-y-2">
              <li><a href="/why" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About BrainScan</a></li>
              <li><a href="/application" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Application</a></li>
              <li><a href="/publications" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Publications</a></li>
              <li><a href="/resources" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Resources</a></li>
              <li><a href="/people" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">People</a></li>
              <li><a href="/partners" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Partners</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.cs.unc.edu/~raghav/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Prof. Pothukuchi
                </a>
              </li>
              <li>
                <a href="https://www.nsf.gov/awardsearch/show-award?AWD_ID=2510152" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  NSF Award
                </a>
              </li>
              <li>
                <a href="https://www.unc.edu" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  UNC Chapel Hill
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} BrainScan. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Website by{' '}
            <a
              href="https://www.yuyangdeng.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-unc transition-colors"
            >
              Yuyang Deng
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
