import React from 'react';

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="font-semibold">UNC BCI Project</a>
        <nav className="flex gap-4 text-sm">
          <a href="/publications" className="text-gray-700 hover:text-black">Publications</a>
          <a href="/product" className="text-gray-700 hover:text-black">Product</a>
          <a href="/people" className="text-gray-700 hover:text-black">People</a>
          <a href="/admin" className="text-gray-700 hover:text-black">Admin</a>
        </nav>
      </div>
    </header>
  );
}

