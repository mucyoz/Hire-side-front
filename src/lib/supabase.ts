import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface JobSeeker {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  location: string;
  industry: string;
  target_role: string;
  experience_level: string;
  employment_type: string;
  skills?: string;
  ready_to_interview?: boolean;
  resume_url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Employer {
  id?: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone?: string;
  industry: string;
  position_title: string;
  positions_count: string;
  urgency: string;
  requirements?: string;
  event_format?: string;
  preferred_day?: string;
  preferred_time?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  submission_type?: string;
  created_at?: string;
}

export interface EmailLog {
  id?: string;
  recipient_email: string;
  email_type: string;
  subject: string;
  status: 'pending' | 'sent' | 'failed';
  error_message?: string;
  sent_at?: string;
}