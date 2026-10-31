import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  tech_stack: string[];
  image_url: string | null;
  featured: boolean;
  sort_order: number;
  created_at: string;
};

export type Member = {
  id: string;
  name: string;
  grade: string;
  role: string | null;
  bio: string | null;
  avatar_url: string | null;
  favorite_tech: string | null;
  sort_order: number;
  created_at: string;
};

export type ScheduleItem = {
  id: string;
  day: string;
  date: string;
  start_time: string;
  end_time: string | null;
  title: string;
  location: string | null;
  description: string | null;
  sort_order: number;
  created_at: string;
};
