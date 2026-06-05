export type PersonRole = 'PI' | 'Partner' | 'PhD' | 'Graduate' | 'Undergraduate';

export interface Person {
  id: string;
  name: string;
  role: PersonRole;
  bio: string;
  photoUrl?: string;
  affiliation?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string; // ISO string
  summary?: string;
  peopleIds?: string[];
  status: 'draft' | 'published';
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue?: string;
  year?: number;
  url?: string;
}
