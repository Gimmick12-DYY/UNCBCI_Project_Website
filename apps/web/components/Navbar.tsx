import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0b1120]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-lg bg-unc/10 border border-unc/20 text-unc flex items-center justify-center font-mono font-bold text-sm tracking-tight transition-all group-hover:bg-unc/20 group-hover:border-unc/40 group-hover:shadow-glow-sm">
            UNC
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-[15px] leading-none text-gray-100 tracking-tight group-hover:text-unc transition-colors">
              BCI Project
            </span>
            <span className="font-mono text-[9px] font-medium text-gray-500 tracking-[0.2em] uppercase mt-1 group-hover:text-unc/60 transition-colors">
              research_lab
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/research">Research</NavLink>
          <NavLink href="/product">Product</NavLink>
          <NavLink href="/people">People</NavLink>
          <Link
            href="/admin"
            className="ml-4 px-4 py-1.5 rounded-md border border-unc/20 text-unc/80 hover:border-unc/50 hover:text-unc hover:bg-unc/5 hover:shadow-glow-sm transition-all font-mono text-xs font-medium tracking-wide"
          >
            ./admin
          </Link>
        </nav>

        <button className="md:hidden text-gray-400 focus:outline-none hover:text-gray-200 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
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
      className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors group"
    >
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-unc transition-all duration-300 group-hover:w-3/4 opacity-0 group-hover:opacity-60"></span>
    </Link>
  );
}
