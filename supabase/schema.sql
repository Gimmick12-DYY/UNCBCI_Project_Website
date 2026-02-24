-- News updates table for the UNC BCI Project website.
-- Run this once in the Supabase SQL Editor (Dashboard → SQL Editor → New query).

CREATE TABLE IF NOT EXISTS news (
  id         TEXT PRIMARY KEY,
  title      TEXT NOT NULL,
  date       TIMESTAMPTZ NOT NULL DEFAULT now(),
  summary    TEXT,
  people_ids TEXT[] NOT NULL DEFAULT '{}',
  status     TEXT NOT NULL DEFAULT 'published'
               CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Seed with initial data (skip if rows already exist)
INSERT INTO news (id, title, date, summary, people_ids, status)
VALUES
  (
    'news-1',
    'Project kickoff meeting held',
    '2024-09-01T00:00:00.000Z',
    'Initial planning and scope discussion among team members.',
    ARRAY['raghav-1', 'collab-1'],
    'published'
  ),
  (
    'news-2',
    'First data collection session completed',
    '2024-10-15T00:00:00.000Z',
    'Collected baseline neural signal datasets.',
    ARRAY['phd-1', 'grad-1', 'ug-1'],
    'published'
  )
ON CONFLICT (id) DO NOTHING;
