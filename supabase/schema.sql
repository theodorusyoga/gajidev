-- Schema for GajiDev - Indonesia Developer Salary Calculator

-- Table: salary_data (Pre-seeded from research)
CREATE TABLE IF NOT EXISTS salary_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  role TEXT NOT NULL,
  experience_level TEXT NOT NULL,
  years_min INT,
  years_max INT,
  employment_type TEXT NOT NULL,
  city TEXT,
  company_type TEXT,
  payment_type TEXT NOT NULL,
  salary_min BIGINT NOT NULL,
  salary_max BIGINT NOT NULL,
  currency TEXT DEFAULT 'IDR',
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: submissions (Anonymous user submissions)
CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  role TEXT NOT NULL,
  years_of_experience INT NOT NULL,
  employment_type TEXT NOT NULL,
  city TEXT,
  company_type TEXT,
  payment_type TEXT NOT NULL,
  salary BIGINT NOT NULL,
  tech_stack TEXT[],
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE salary_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read for salary_data
CREATE POLICY "Allow public read" ON salary_data
  FOR SELECT USING (true);

-- Policy: Allow anonymous insert for submissions
CREATE POLICY "Allow anonymous insert" ON submissions
  FOR INSERT WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_salary_data_role ON salary_data(role);
CREATE INDEX IF NOT EXISTS idx_salary_data_experience ON salary_data(experience_level);
CREATE INDEX IF NOT EXISTS idx_salary_data_city ON salary_data(city);
CREATE INDEX IF NOT EXISTS idx_salary_data_employment ON salary_data(employment_type);
