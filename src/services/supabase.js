import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://albgurqotvrijowiyzyu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsYmd1cnFvdHZyaWpvd2l5enl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwODczMDAsImV4cCI6MjAzMzY2MzMwMH0.XHU86oyfSXJf1TQL-TSRpRM65Ql6y5JeWCzfLAMIplA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
