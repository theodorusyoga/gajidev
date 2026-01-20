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
  tech_stack TEXT[] DEFAULT '{}',
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
  status TEXT DEFAULT 'pending',
  approval_type TEXT,
  is_suspicious BOOLEAN DEFAULT FALSE,
  suspicious_reason TEXT,
  approved_by UUID,
  approved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: salary_comparisons (Analytics for percentile comparison feature)
CREATE TABLE IF NOT EXISTS salary_comparisons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_salary BIGINT NOT NULL,
  percentile DECIMAL(5,2),
  role TEXT NOT NULL,
  experience_level TEXT,
  employment_type TEXT,
  city TEXT,
  company_type TEXT,
  payment_type TEXT NOT NULL,
  tech_stack TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: feedback (User feedback submissions)
CREATE TABLE IF NOT EXISTS feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE salary_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE salary_comparisons ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read for salary_data
CREATE POLICY "Allow public read" ON salary_data
  FOR SELECT USING (true);

-- Policy: Allow public read for salary_comparisons
CREATE POLICY "Allow public read comparisons" ON salary_comparisons
  FOR SELECT USING (true);

-- Policy: Allow anonymous insert for salary_data (for auto-approved submissions)
CREATE POLICY "Allow anonymous insert salary_data" ON salary_data
  FOR INSERT WITH CHECK (true);

-- Policy: Allow anonymous insert for submissions
CREATE POLICY "Allow anonymous insert" ON submissions
  FOR INSERT WITH CHECK (true);

-- Policy: Allow anonymous insert for salary_comparisons (analytics)
CREATE POLICY "Allow anonymous insert comparisons" ON salary_comparisons
  FOR INSERT WITH CHECK (true);

-- Policy: Allow anonymous insert for feedback
CREATE POLICY "Allow anonymous insert feedback" ON feedback
  FOR INSERT WITH CHECK (true);

-- Policy: Allow admin to read and update submissions (using JWT claim)
CREATE POLICY "Allow admin read" ON submissions
  FOR SELECT USING (auth.jwt() ->> 'email' = 'theo@typescriptheo.dev');

CREATE POLICY "Allow admin update" ON submissions
  FOR UPDATE USING (auth.jwt() ->> 'email' = 'theo@typescriptheo.dev');

-- Policy: Allow admin to insert into salary_data (using JWT claim)
CREATE POLICY "Allow admin insert salary_data" ON salary_data
  FOR INSERT WITH CHECK (auth.jwt() ->> 'email' = 'theo@typescriptheo.dev');

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_salary_data_role ON salary_data(role);
CREATE INDEX IF NOT EXISTS idx_salary_data_experience ON salary_data(experience_level);
CREATE INDEX IF NOT EXISTS idx_salary_data_city ON salary_data(city);
CREATE INDEX IF NOT EXISTS idx_salary_data_employment ON salary_data(employment_type);
CREATE INDEX IF NOT EXISTS idx_salary_data_tech_stack ON salary_data USING GIN(tech_stack);
CREATE INDEX IF NOT EXISTS idx_submissions_role ON submissions(role);

-- Function to insert submission and auto-approve to salary_data in a single transaction
CREATE OR REPLACE FUNCTION insert_submission_with_auto_approval(
  p_role TEXT,
  p_years_of_experience INT,
  p_employment_type TEXT,
  p_city TEXT,
  p_company_type TEXT,
  p_payment_type TEXT,
  p_salary BIGINT,
  p_tech_stack TEXT[],
  p_is_suspicious BOOLEAN,
  p_suspicious_reason TEXT
)
RETURNS TABLE (submission_id UUID, salary_data_id UUID) AS $$
DECLARE
  v_submission_id UUID;
  v_salary_data_id UUID;
  v_experience_level TEXT;
BEGIN
  -- Determine experience level
  v_experience_level := CASE
    WHEN p_years_of_experience <= 2 THEN 'junior'
    WHEN p_years_of_experience <= 5 THEN 'mid'
    ELSE 'senior'
  END;

  -- Insert into submissions
  INSERT INTO submissions (
    role, years_of_experience, employment_type, city, company_type,
    payment_type, salary, tech_stack, status, approval_type,
    is_suspicious, suspicious_reason
  ) VALUES (
    p_role, p_years_of_experience, p_employment_type, p_city, p_company_type,
    p_payment_type, p_salary, p_tech_stack,
    CASE WHEN p_is_suspicious THEN 'pending' ELSE 'approved' END,
    CASE WHEN p_is_suspicious THEN NULL ELSE 'auto' END,
    p_is_suspicious, p_suspicious_reason
  ) RETURNING submissions.id INTO v_submission_id;

  -- If not suspicious, also insert into salary_data
  IF NOT p_is_suspicious THEN
    INSERT INTO salary_data (
      role, experience_level, years_min, years_max, employment_type,
      city, company_type, payment_type, salary_min, salary_max,
      tech_stack, source, currency
    ) VALUES (
      p_role, v_experience_level, p_years_of_experience, p_years_of_experience,
      p_employment_type, p_city, p_company_type, p_payment_type,
      p_salary, p_salary, p_tech_stack, 'Community', 'IDR'
    ) RETURNING salary_data.id INTO v_salary_data_id;
  END IF;

  RETURN QUERY SELECT v_submission_id, v_salary_data_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Grant execute permission to anonymous users
GRANT EXECUTE ON FUNCTION insert_submission_with_auto_approval(TEXT, INT, TEXT, TEXT, TEXT, TEXT, BIGINT, TEXT[], BOOLEAN, TEXT) TO anon;

-- Grant necessary table permissions to the function owner (postgres role)
GRANT INSERT ON submissions TO postgres;
GRANT INSERT ON salary_data TO postgres;
