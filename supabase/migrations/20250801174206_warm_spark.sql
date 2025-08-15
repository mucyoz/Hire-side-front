/*
  # Initial Database Schema for Hireside Chat

  1. New Tables
    - `job_seekers`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text, unique)
      - `phone` (text)
      - `location` (text)
      - `industry` (text)
      - `target_role` (text)
      - `experience_level` (text)
      - `employment_type` (text)
      - `skills` (text)
      - `ready_to_interview` (boolean)
      - `resume_url` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `employers`
      - `id` (uuid, primary key)
      - `company_name` (text)
      - `contact_name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `industry` (text)
      - `position_title` (text)
      - `positions_count` (text)
      - `urgency` (text)
      - `requirements` (text)
      - `event_format` (text)
      - `preferred_day` (text)
      - `preferred_time` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text, optional)
      - `message` (text)
      - `submission_type` (text)
      - `created_at` (timestamp)

    - `email_logs`
      - `id` (uuid, primary key)
      - `recipient_email` (text)
      - `email_type` (text)
      - `subject` (text)
      - `status` (text)
      - `error_message` (text, optional)
      - `sent_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated access
*/

-- Job Seekers Table
CREATE TABLE IF NOT EXISTS job_seekers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  industry text NOT NULL,
  target_role text NOT NULL,
  experience_level text NOT NULL,
  employment_type text NOT NULL,
  skills text,
  ready_to_interview boolean DEFAULT true,
  resume_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Employers Table
CREATE TABLE IF NOT EXISTS employers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  industry text NOT NULL,
  position_title text NOT NULL,
  positions_count text NOT NULL,
  urgency text NOT NULL,
  requirements text,
  event_format text,
  preferred_day text,
  preferred_time text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  submission_type text DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

-- Email Logs Table
CREATE TABLE IF NOT EXISTS email_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  recipient_email text NOT NULL,
  email_type text NOT NULL,
  subject text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  error_message text,
  sent_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE job_seekers ENABLE ROW LEVEL SECURITY;
ALTER TABLE employers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since these are lead generation forms)
CREATE POLICY "Allow public insert on job_seekers"
  ON job_seekers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public insert on employers"
  ON employers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public insert on contact_submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Admin policies for authenticated users
CREATE POLICY "Allow authenticated read on job_seekers"
  ON job_seekers
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read on employers"
  ON employers
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read on contact_submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read on email_logs"
  ON email_logs
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow service role all on email_logs"
  ON email_logs
  FOR ALL
  TO service_role
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_job_seekers_email ON job_seekers(email);
CREATE INDEX IF NOT EXISTS idx_job_seekers_created_at ON job_seekers(created_at);
CREATE INDEX IF NOT EXISTS idx_employers_email ON employers(email);
CREATE INDEX IF NOT EXISTS idx_employers_created_at ON employers(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_email_logs_recipient ON email_logs(recipient_email);
CREATE INDEX IF NOT EXISTS idx_email_logs_status ON email_logs(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_job_seekers_updated_at
    BEFORE UPDATE ON job_seekers
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_employers_updated_at
    BEFORE UPDATE ON employers
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();