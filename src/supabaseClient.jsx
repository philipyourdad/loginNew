// src/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mlrreqemjmgqtzljexej.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1scnJlcWVtam1ncXR6bGpleGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMjkxMDIsImV4cCI6MjAzMjYwNTEwMn0.0JpLhe2UbQxGuQAbZf_su02lHOgnNIJqgZPGnQovYhQ'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
