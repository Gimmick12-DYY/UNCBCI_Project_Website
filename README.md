# UNC BCI Project Website (Monorepo)

This repo contains the project website initialized as a monorepo for clean separation between frontend and shared code.

Structure:
- apps/web: Next.js 14 + TypeScript + Tailwind website (App Router)
- packages/core: Shared types and data (JSON) for People, News, Publications
- packages/ui: Shared UI components (Navbar, Footer, Card, PersonCard)

Getting started:
1) Install Node 18+.
2) Install dependencies: run 
pm install at repo root (will install workspaces).
3) Dev: 
pm run dev (runs apps/web).
4) Build: 
pm run build; Start: 
pm run start.

Vercel:
- In Vercel, set the project Root Directory to pps/web.
- Or run ercel link from pps/web to create .vercel project files.

Note: Initial data lives in packages/core/data/*.json and is served via API routes and imported directly into server components.
