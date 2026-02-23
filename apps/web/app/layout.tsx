import './globals.css';
import { Navbar, Footer } from '../components';
import React from 'react';

export const metadata = {
  title: 'UNC BCI Project',
  description: 'Project website for the UNC Brain-Computer-Interface Project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

