import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-unc-dark flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                <circle cx="20" cy="20" r="20" fill="#13294B" />
                <text x="20" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" fontFamily="serif">UNC</text>
              </svg>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="font-bold text-base leading-none text-gray-900 tracking-tight group-hover:text-unc-dark transition-colors">
                BCI Project
              </span>
              <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mt-0.5">
                Infinite Brain Lab
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/why">Why BrainScan</NavLink>
          <NavLink href="/research">Research</NavLink>
          <NavLink href="/collaborators">Collaborators</NavLink>
          <NavLink href="/people">People</NavLink>
          <Link
            href="/admin"
            className="text-sm text-gray-400 italic hover:text-unc transition-colors"
          >
            /Admin
          </Link>
        </nav>

        <button className="md:hidden text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-unc transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
