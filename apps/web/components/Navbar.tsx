import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-unc-dark text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-unc-dark/20 transition-all group-hover:scale-105 group-hover:rotate-3">
            UNC
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none text-gray-900 tracking-tight group-hover:text-unc-dark transition-colors">
              BCI Project
            </span>
            <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mt-0.5 group-hover:text-unc transition-colors">
              Research Lab
            </span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/research">Research</NavLink>
          <NavLink href="/product">Product</NavLink>
          <NavLink href="/people">People</NavLink>
          <NavLink href="/admin" variant="secondary">Admin</NavLink>
        </nav>

        {/* Mobile menu button (simple implementation) */}
        <button className="md:hidden text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function NavLink({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }) {
  const baseStyles = "text-sm font-medium transition-colors duration-200 relative group";
  
  if (variant === 'secondary') {
    return (
      <Link href={href} className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-unc hover:text-unc transition-all text-sm font-medium">
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={`${baseStyles} text-gray-600 hover:text-unc-dark`}>
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-unc transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
    </Link>
  );
}
