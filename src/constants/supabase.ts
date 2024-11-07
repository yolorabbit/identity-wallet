import  { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://rtvkveyfwrdszbnyafxg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dmt2ZXlmd3Jkc3pibnlhZnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2ODc4OTEsImV4cCI6MjA0NjI2Mzg5MX0.vHcqKPeT2Wq8_U5giHVEsq8D0x5MUJ-v_Fp74pEbcd0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);