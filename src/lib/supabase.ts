import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  thumbnail_url: string | null;
  author: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
  tags: string[];
  read_time: number;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  thumbnail_url: string;
  tech_stack: string[];
  role: string;
  timeline: string;
  project_url: string | null;
  github_url: string | null;
  screenshots: string[];
  challenges: string | null;
  outcomes: string | null;
  is_featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type Experience = {
  id: string;
  slug: string;
  company: string;
  position: string;
  short_description: string;
  full_description: string;
  thumbnail_url: string | null;
  start_date: string;
  end_date: string | null;
  location: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  is_featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
};
