import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and/or anon key are missing from environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Filament = {
  id: string;
  user_id: string;
  spool_name: string;
  photo_url?: string;
  brand?: string;
  material?: string;
  color?: string;
  remaining_percent?: number;
  in_use?: boolean;
  low_stock_threshold?: number;
  created_at?: string;
};

export type Printer = {
  id: string;
  user_id: string;
  name: string;
  status?: string;
  current_filament_id?: string;
  created_at?: string;
};