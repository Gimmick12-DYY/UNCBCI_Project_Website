import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="border rounded p-4 bg-white">{children}</div>;
}
