import { createClient } from '@supabase/supabase-js'
import { loadEnvFile } from 'node:process';

loadEnvFile();
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)