import React from 'react';

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
        (c) {new Date().getFullYear()} UNC BCI Project
      </div>
    </footer>
  );
}


