import './globals.css';
import { Navbar, Footer } from '../components';
import React from 'react';
import { Inter, JetBrains_Mono, DM_Serif_Display } from 'next/font/google';

/*
 * Typography — all loaded via next/font/google (Open Source, no licensing issues, optimized for performance)
 *
 *   Sans  (body text):   Inter              → CSS var --font-inter    → Tailwind: font-sans
 *   Serif (headings):    DM Serif Display   → CSS var --font-dm-serif → Tailwind: font-serif
 *   Mono  (code/labels): JetBrains Mono     → CSS var --font-mono     → Tailwind: font-mono
 */

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
});

export const metadata = {
  title: 'BrainScan | UNC BCI Project',
  description: 'BrainScan: An Instrument for High-Bandwidth Real-Time Closed-Loop Neural Interfacing — Infinite Brain Lab at UNC Chapel Hill',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
