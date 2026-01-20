-- Seed data for salary_data table
-- 108 entries covering: 7 roles × 3 experience levels × city variations

INSERT INTO salary_data (role, experience_level, years_min, years_max, employment_type, city, company_type, payment_type, salary_min, salary_max, tech_stack, source) VALUES

-- ==================== FRONTEND DEVELOPER ====================
-- Junior (0-2 years)
('frontend', 'junior', 0, 2, 'fulltime', 'jakarta', 'startup', 'monthly', 8000000, 15000000, ARRAY['javascript', 'react', 'tailwind'], 'Glassdoor'),
('frontend', 'junior', 0, 2, 'fulltime', 'jakarta', 'corporate', 'monthly', 10000000, 18000000, ARRAY['typescript', 'react'], 'Glassdoor'),
('frontend', 'junior', 0, 2, 'fulltime', 'bandung', 'startup', 'monthly', 6000000, 12000000, ARRAY['javascript', 'vue'], 'NodeFlair'),
('frontend', 'junior', 0, 2, 'fulltime', 'surabaya', 'startup', 'monthly', 5500000, 11000000, ARRAY['javascript', 'angular'], 'NodeFlair'),
('frontend', 'junior', 0, 2, 'fulltime', 'yogyakarta', 'startup', 'monthly', 5000000, 10000000, ARRAY['javascript', 'react'], 'NodeFlair'),
('frontend', 'junior', 0, 2, 'freelance', 'remote', 'agency', 'hourly', 75000, 150000, ARRAY['javascript', 'react'], 'Community'),
('frontend', 'junior', 0, 2, 'contract', 'jakarta', 'foreign', 'monthly', 12000000, 20000000, ARRAY['typescript', 'react', 'nextjs'], 'Glassdoor'),

-- Mid-level (3-5 years)
('frontend', 'mid', 3, 5, 'fulltime', 'jakarta', 'startup', 'monthly', 15000000, 28000000, ARRAY['typescript', 'react', 'nextjs'], 'Glassdoor'),
('frontend', 'mid', 3, 5, 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 35000000, ARRAY['typescript', 'react', 'tailwind'], 'Glassdoor'),
('frontend', 'mid', 3, 5, 'fulltime', 'jakarta', 'foreign', 'monthly', 25000000, 45000000, ARRAY['typescript', 'react', 'nextjs'], 'Glassdoor'),
('frontend', 'mid', 3, 5, 'fulltime', 'bandung', 'startup', 'monthly', 12000000, 22000000, ARRAY['typescript', 'vue', 'nuxt'], 'NodeFlair'),
('frontend', 'mid', 3, 5, 'fulltime', 'surabaya', 'corporate', 'monthly', 11000000, 20000000, ARRAY['typescript', 'react'], 'NodeFlair'),
('frontend', 'mid', 3, 5, 'fulltime', 'yogyakarta', 'startup', 'monthly', 10000000, 18000000, ARRAY['javascript', 'react'], 'NodeFlair'),
('frontend', 'mid', 3, 5, 'freelance', 'remote', 'agency', 'hourly', 150000, 300000, ARRAY['typescript', 'react'], 'Community'),
('frontend', 'mid', 3, 5, 'contract', 'jakarta', 'foreign', 'monthly', 28000000, 45000000, ARRAY['typescript', 'react', 'nextjs'], 'Glassdoor'),

-- Senior (5+ years)
('frontend', 'senior', 5, 99, 'fulltime', 'jakarta', 'startup', 'monthly', 25000000, 45000000, ARRAY['typescript', 'react', 'nextjs'], 'Glassdoor'),
('frontend', 'senior', 5, 99, 'fulltime', 'jakarta', 'corporate', 'monthly', 30000000, 55000000, ARRAY['typescript', 'react', 'nextjs'], 'Glassdoor'),
('frontend', 'senior', 5, 99, 'fulltime', 'jakarta', 'foreign', 'monthly', 40000000, 70000000, ARRAY['typescript', 'react', 'nextjs'], 'Michael Page'),
('frontend', 'senior', 5, 99, 'fulltime', 'bandung', 'startup', 'monthly', 20000000, 38000000, ARRAY['typescript', 'vue', 'nuxt'], 'NodeFlair'),
('frontend', 'senior', 5, 99, 'fulltime', 'surabaya', 'corporate', 'monthly', 18000000, 35000000, ARRAY['typescript', 'react'], 'NodeFlair'),
('frontend', 'senior', 5, 99, 'freelance', 'remote', 'agency', 'hourly', 300000, 600000, ARRAY['typescript', 'react', 'nextjs'], 'Community'),
('frontend', 'senior', 5, 99, 'contract', 'remote', 'foreign', 'monthly', 45000000, 80000000, ARRAY['typescript', 'react', 'nextjs'], 'Community'),

-- ==================== BACKEND DEVELOPER ====================
-- Junior (0-2 years)
('backend', 'junior', 0, 2, 'fulltime', 'jakarta', 'startup', 'monthly', 9000000, 16000000, ARRAY['nodejs', 'postgresql'], 'Glassdoor'),
('backend', 'junior', 0, 2, 'fulltime', 'jakarta', 'corporate', 'monthly', 11000000, 19000000, ARRAY['java', 'spring', 'mysql'], 'Glassdoor'),
('backend', 'junior', 0, 2, 'fulltime', 'bandung', 'startup', 'monthly', 7000000, 13000000, ARRAY['python', 'django'], 'NodeFlair'),
('backend', 'junior', 0, 2, 'fulltime', 'surabaya', 'startup', 'monthly', 6000000, 12000000, ARRAY['nodejs', 'mongodb'], 'NodeFlair'),
('backend', 'junior', 0, 2, 'fulltime', 'yogyakarta', 'startup', 'monthly', 5500000, 11000000, ARRAY['php', 'laravel'], 'NodeFlair'),
('backend', 'junior', 0, 2, 'freelance', 'remote', 'agency', 'hourly', 80000, 160000, ARRAY['nodejs', 'postgresql'], 'Community'),
('backend', 'junior', 0, 2, 'contract', 'jakarta', 'foreign', 'monthly', 14000000, 22000000, ARRAY['golang', 'postgresql'], 'Glassdoor'),

-- Mid-level (3-5 years)
('backend', 'mid', 3, 5, 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 30000000, ARRAY['nodejs', 'postgresql', 'redis'], 'Glassdoor'),
('backend', 'mid', 3, 5, 'fulltime', 'jakarta', 'corporate', 'monthly', 20000000, 38000000, ARRAY['java', 'spring', 'postgresql'], 'Glassdoor'),
('backend', 'mid', 3, 5, 'fulltime', 'jakarta', 'foreign', 'monthly', 28000000, 50000000, ARRAY['golang', 'kubernetes', 'aws'], 'Glassdoor'),
('backend', 'mid', 3, 5, 'fulltime', 'bandung', 'startup', 'monthly', 13000000, 24000000, ARRAY['python', 'fastapi', 'postgresql'], 'NodeFlair'),
('backend', 'mid', 3, 5, 'fulltime', 'surabaya', 'corporate', 'monthly', 12000000, 22000000, ARRAY['java', 'spring', 'mysql'], 'NodeFlair'),
('backend', 'mid', 3, 5, 'fulltime', 'yogyakarta', 'startup', 'monthly', 11000000, 20000000, ARRAY['nodejs', 'mongodb'], 'NodeFlair'),
('backend', 'mid', 3, 5, 'freelance', 'remote', 'agency', 'hourly', 180000, 350000, ARRAY['nodejs', 'postgresql'], 'Community'),
('backend', 'mid', 3, 5, 'contract', 'jakarta', 'foreign', 'monthly', 30000000, 50000000, ARRAY['golang', 'kubernetes'], 'Glassdoor'),

-- Senior (5+ years)
('backend', 'senior', 5, 99, 'fulltime', 'jakarta', 'startup', 'monthly', 28000000, 50000000, ARRAY['nodejs', 'postgresql', 'redis', 'docker'], 'Glassdoor'),
('backend', 'senior', 5, 99, 'fulltime', 'jakarta', 'corporate', 'monthly', 35000000, 60000000, ARRAY['java', 'spring', 'kubernetes'], 'Glassdoor'),
('backend', 'senior', 5, 99, 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 80000000, ARRAY['golang', 'kubernetes', 'aws'], 'Michael Page'),
('backend', 'senior', 5, 99, 'fulltime', 'bandung', 'startup', 'monthly', 22000000, 42000000, ARRAY['python', 'fastapi', 'aws'], 'NodeFlair'),
('backend', 'senior', 5, 99, 'fulltime', 'surabaya', 'corporate', 'monthly', 20000000, 38000000, ARRAY['java', 'spring', 'kubernetes'], 'NodeFlair'),
('backend', 'senior', 5, 99, 'freelance', 'remote', 'agency', 'hourly', 350000, 700000, ARRAY['golang', 'kubernetes'], 'Community'),
('backend', 'senior', 5, 99, 'contract', 'remote', 'foreign', 'monthly', 50000000, 90000000, ARRAY['golang', 'kubernetes', 'aws'], 'Community'),

-- ==================== FULLSTACK DEVELOPER ====================
-- Junior (0-2 years)
('fullstack', 'junior', 0, 2, 'fulltime', 'jakarta', 'startup', 'monthly', 8500000, 16000000, ARRAY['javascript', 'react', 'nodejs'], 'Glassdoor'),
('fullstack', 'junior', 0, 2, 'fulltime', 'jakarta', 'corporate', 'monthly', 10000000, 18000000, ARRAY['typescript', 'react', 'nodejs'], 'Glassdoor'),
('fullstack', 'junior', 0, 2, 'fulltime', 'bandung', 'startup', 'monthly', 6500000, 13000000, ARRAY['vue', 'laravel', 'mysql'], 'NodeFlair'),
('fullstack', 'junior', 0, 2, 'fulltime', 'surabaya', 'startup', 'monthly', 6000000, 12000000, ARRAY['javascript', 'react', 'nodejs'], 'NodeFlair'),
('fullstack', 'junior', 0, 2, 'fulltime', 'yogyakarta', 'startup', 'monthly', 5500000, 11000000, ARRAY['javascript', 'react', 'nodejs'], 'NodeFlair'),
('fullstack', 'junior', 0, 2, 'freelance', 'remote', 'agency', 'hourly', 85000, 170000, ARRAY['javascript', 'react', 'nodejs'], 'Community'),

-- Mid-level (3-5 years)
('fullstack', 'mid', 3, 5, 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 32000000, ARRAY['typescript', 'react', 'nodejs', 'postgresql'], 'Glassdoor'),
('fullstack', 'mid', 3, 5, 'fulltime', 'jakarta', 'corporate', 'monthly', 20000000, 40000000, ARRAY['typescript', 'react', 'nodejs', 'postgresql'], 'Glassdoor'),
('fullstack', 'mid', 3, 5, 'fulltime', 'jakarta', 'foreign', 'monthly', 30000000, 55000000, ARRAY['typescript', 'nextjs', 'nodejs', 'postgresql'], 'Glassdoor'),
('fullstack', 'mid', 3, 5, 'fulltime', 'bandung', 'startup', 'monthly', 14000000, 26000000, ARRAY['vue', 'laravel', 'mysql'], 'NodeFlair'),
('fullstack', 'mid', 3, 5, 'fulltime', 'surabaya', 'corporate', 'monthly', 13000000, 24000000, ARRAY['typescript', 'react', 'nodejs'], 'NodeFlair'),
('fullstack', 'mid', 3, 5, 'freelance', 'remote', 'agency', 'hourly', 200000, 400000, ARRAY['typescript', 'react', 'nodejs'], 'Community'),

-- Senior (5+ years)
('fullstack', 'senior', 5, 99, 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 55000000, ARRAY['typescript', 'nextjs', 'nodejs', 'postgresql'], 'Glassdoor'),
('fullstack', 'senior', 5, 99, 'fulltime', 'jakarta', 'corporate', 'monthly', 38000000, 65000000, ARRAY['typescript', 'react', 'nodejs', 'postgresql'], 'Glassdoor'),
('fullstack', 'senior', 5, 99, 'fulltime', 'jakarta', 'foreign', 'monthly', 50000000, 90000000, ARRAY['typescript', 'nextjs', 'nodejs', 'kubernetes'], 'Michael Page'),
('fullstack', 'senior', 5, 99, 'fulltime', 'bandung', 'startup', 'monthly', 25000000, 45000000, ARRAY['vue', 'laravel', 'mysql'], 'NodeFlair'),
('fullstack', 'senior', 5, 99, 'freelance', 'remote', 'agency', 'hourly', 400000, 800000, ARRAY['typescript', 'nextjs', 'nodejs'], 'Community'),
('fullstack', 'senior', 5, 99, 'contract', 'remote', 'foreign', 'monthly', 55000000, 100000000, ARRAY['typescript', 'nextjs', 'nodejs', 'kubernetes'], 'Community'),

-- ==================== MOBILE DEVELOPER ====================
-- Junior (0-2 years)
('mobile', 'junior', 0, 2, 'fulltime', 'jakarta', 'startup', 'monthly', 7500000, 14000000, ARRAY['kotlin', 'swift'], 'NodeFlair'),
('mobile', 'junior', 0, 2, 'fulltime', 'jakarta', 'corporate', 'monthly', 9000000, 16000000, ARRAY['kotlin', 'swift', 'firebase'], 'Glassdoor'),
('mobile', 'junior', 0, 2, 'fulltime', 'bandung', 'startup', 'monthly', 6000000, 11000000, ARRAY['flutter'], 'NodeFlair'),
('mobile', 'junior', 0, 2, 'fulltime', 'surabaya', 'startup', 'monthly', 5500000, 10000000, ARRAY['react-native'], 'NodeFlair'),
('mobile', 'junior', 0, 2, 'freelance', 'remote', 'agency', 'hourly', 70000, 140000, ARRAY['flutter'], 'Community'),

-- Mid-level (3-5 years)
('mobile', 'mid', 3, 5, 'fulltime', 'jakarta', 'startup', 'monthly', 15000000, 28000000, ARRAY['kotlin', 'swift', 'firebase'], 'NodeFlair'),
('mobile', 'mid', 3, 5, 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 35000000, ARRAY['kotlin', 'swift'], 'Glassdoor'),
('mobile', 'mid', 3, 5, 'fulltime', 'jakarta', 'foreign', 'monthly', 25000000, 48000000, ARRAY['kotlin', 'swift', 'firebase'], 'Glassdoor'),
('mobile', 'mid', 3, 5, 'fulltime', 'bandung', 'startup', 'monthly', 12000000, 22000000, ARRAY['flutter', 'firebase'], 'NodeFlair'),
('mobile', 'mid', 3, 5, 'freelance', 'remote', 'agency', 'hourly', 180000, 350000, ARRAY['flutter'], 'Community'),

-- Senior (5+ years)
('mobile', 'senior', 5, 99, 'fulltime', 'jakarta', 'startup', 'monthly', 28000000, 50000000, ARRAY['kotlin', 'swift'], 'NodeFlair'),
('mobile', 'senior', 5, 99, 'fulltime', 'jakarta', 'corporate', 'monthly', 35000000, 60000000, ARRAY['kotlin', 'swift'], 'Glassdoor'),
('mobile', 'senior', 5, 99, 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 80000000, ARRAY['kotlin', 'swift'], 'Michael Page'),
('mobile', 'senior', 5, 99, 'fulltime', 'bandung', 'startup', 'monthly', 22000000, 42000000, ARRAY['flutter'], 'NodeFlair'),
('mobile', 'senior', 5, 99, 'freelance', 'remote', 'agency', 'hourly', 350000, 700000, ARRAY['flutter'], 'Community'),

-- ==================== DEVOPS ENGINEER ====================
-- Junior (0-2 years)
('devops', 'junior', 0, 2, 'fulltime', 'jakarta', 'startup', 'monthly', 9000000, 16000000, ARRAY['docker', 'aws'], 'NodeFlair'),
('devops', 'junior', 0, 2, 'fulltime', 'jakarta', 'corporate', 'monthly', 11000000, 18000000, ARRAY['docker', 'kubernetes'], 'Glassdoor'),
('devops', 'junior', 0, 2, 'fulltime', 'bandung', 'startup', 'monthly', 7500000, 14000000, ARRAY['docker', 'aws'], 'NodeFlair'),
('devops', 'junior', 0, 2, 'fulltime', 'surabaya', 'startup', 'monthly', 7000000, 13000000, ARRAY['docker', 'aws'], 'NodeFlair'),
('devops', 'junior', 0, 2, 'contract', 'jakarta', 'foreign', 'monthly', 14000000, 22000000, ARRAY['docker', 'kubernetes', 'aws'], 'Glassdoor'),

-- Mid-level (3-5 years)
('devops', 'mid', 3, 5, 'fulltime', 'jakarta', 'startup', 'monthly', 18000000, 35000000, ARRAY['docker', 'kubernetes', 'aws'], 'NodeFlair'),
('devops', 'mid', 3, 5, 'fulltime', 'jakarta', 'corporate', 'monthly', 22000000, 42000000, ARRAY['docker', 'kubernetes', 'terraform'], 'Glassdoor'),
('devops', 'mid', 3, 5, 'fulltime', 'jakarta', 'foreign', 'monthly', 30000000, 55000000, ARRAY['kubernetes', 'terraform', 'aws'], 'Glassdoor'),
('devops', 'mid', 3, 5, 'fulltime', 'bandung', 'startup', 'monthly', 15000000, 28000000, ARRAY['docker', 'kubernetes'], 'NodeFlair'),
('devops', 'mid', 3, 5, 'freelance', 'remote', 'agency', 'hourly', 220000, 450000, ARRAY['docker', 'kubernetes'], 'Community'),

-- Senior (5+ years)
('devops', 'senior', 5, 99, 'fulltime', 'jakarta', 'startup', 'monthly', 35000000, 60000000, ARRAY['kubernetes', 'terraform', 'aws'], 'NodeFlair'),
('devops', 'senior', 5, 99, 'fulltime', 'jakarta', 'corporate', 'monthly', 42000000, 75000000, ARRAY['kubernetes', 'terraform', 'aws'], 'Glassdoor'),
('devops', 'senior', 5, 99, 'fulltime', 'jakarta', 'foreign', 'monthly', 55000000, 100000000, ARRAY['kubernetes', 'terraform', 'aws', 'gcp'], 'Michael Page'),
('devops', 'senior', 5, 99, 'fulltime', 'bandung', 'startup', 'monthly', 28000000, 50000000, ARRAY['kubernetes', 'terraform'], 'NodeFlair'),
('devops', 'senior', 5, 99, 'freelance', 'remote', 'agency', 'hourly', 450000, 900000, ARRAY['kubernetes', 'terraform'], 'Community'),

-- ==================== DATA ENGINEER / SCIENTIST ====================
-- Junior (0-2 years)
('data', 'junior', 0, 2, 'fulltime', 'jakarta', 'startup', 'monthly', 8000000, 15000000, ARRAY['python', 'pandas'], 'NodeFlair'),
('data', 'junior', 0, 2, 'fulltime', 'jakarta', 'corporate', 'monthly', 10000000, 18000000, ARRAY['python', 'pandas', 'tensorflow'], 'Glassdoor'),
('data', 'junior', 0, 2, 'fulltime', 'bandung', 'startup', 'monthly', 6500000, 12000000, ARRAY['python', 'spark'], 'NodeFlair'),
('data', 'junior', 0, 2, 'fulltime', 'surabaya', 'startup', 'monthly', 6000000, 11000000, ARRAY['python', 'pandas'], 'NodeFlair'),
('data', 'junior', 0, 2, 'contract', 'jakarta', 'foreign', 'monthly', 13000000, 22000000, ARRAY['python', 'tensorflow'], 'Glassdoor'),

-- Mid-level (3-5 years)
('data', 'mid', 3, 5, 'fulltime', 'jakarta', 'startup', 'monthly', 18000000, 35000000, ARRAY['python', 'spark', 'airflow'], 'NodeFlair'),
('data', 'mid', 3, 5, 'fulltime', 'jakarta', 'corporate', 'monthly', 22000000, 45000000, ARRAY['python', 'tensorflow', 'pytorch'], 'Glassdoor'),
('data', 'mid', 3, 5, 'fulltime', 'jakarta', 'foreign', 'monthly', 32000000, 60000000, ARRAY['python', 'spark', 'kafka', 'aws'], 'Glassdoor'),
('data', 'mid', 3, 5, 'fulltime', 'bandung', 'startup', 'monthly', 15000000, 28000000, ARRAY['python', 'spark'], 'NodeFlair'),
('data', 'mid', 3, 5, 'freelance', 'remote', 'agency', 'hourly', 250000, 500000, ARRAY['python', 'pandas'], 'Community'),

-- Senior (5+ years)
('data', 'senior', 5, 99, 'fulltime', 'jakarta', 'startup', 'monthly', 35000000, 65000000, ARRAY['python', 'spark', 'kafka', 'aws'], 'NodeFlair'),
('data', 'senior', 5, 99, 'fulltime', 'jakarta', 'corporate', 'monthly', 45000000, 80000000, ARRAY['python', 'tensorflow', 'pytorch', 'aws'], 'Glassdoor'),
('data', 'senior', 5, 99, 'fulltime', 'jakarta', 'foreign', 'monthly', 60000000, 120000000, ARRAY['python', 'tensorflow', 'pytorch', 'aws'], 'Michael Page'),
('data', 'senior', 5, 99, 'fulltime', 'bandung', 'startup', 'monthly', 30000000, 55000000, ARRAY['python', 'spark', 'aws'], 'NodeFlair'),
('data', 'senior', 5, 99, 'freelance', 'remote', 'agency', 'hourly', 500000, 1000000, ARRAY['python', 'spark'], 'Community'),

-- ==================== QA ENGINEER ====================
-- Junior (0-2 years)
('qa', 'junior', 0, 2, 'fulltime', 'jakarta', 'startup', 'monthly', 6500000, 12000000, ARRAY['javascript'], 'NodeFlair'),
('qa', 'junior', 0, 2, 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 14000000, ARRAY['javascript', 'python'], 'Glassdoor'),
('qa', 'junior', 0, 2, 'fulltime', 'bandung', 'startup', 'monthly', 5500000, 10000000, ARRAY['javascript'], 'NodeFlair'),
('qa', 'junior', 0, 2, 'fulltime', 'surabaya', 'startup', 'monthly', 5000000, 9000000, ARRAY['javascript'], 'NodeFlair'),
('qa', 'junior', 0, 2, 'contract', 'jakarta', 'foreign', 'monthly', 10000000, 16000000, ARRAY['javascript', 'python'], 'Glassdoor'),

-- Mid-level (3-5 years)
('qa', 'mid', 3, 5, 'fulltime', 'jakarta', 'startup', 'monthly', 12000000, 22000000, ARRAY['javascript', 'python'], 'NodeFlair'),
('qa', 'mid', 3, 5, 'fulltime', 'jakarta', 'corporate', 'monthly', 15000000, 28000000, ARRAY['javascript', 'python'], 'Glassdoor'),
('qa', 'mid', 3, 5, 'fulltime', 'jakarta', 'foreign', 'monthly', 20000000, 38000000, ARRAY['javascript', 'python'], 'Glassdoor'),
('qa', 'mid', 3, 5, 'fulltime', 'bandung', 'startup', 'monthly', 10000000, 18000000, ARRAY['javascript'], 'NodeFlair'),
('qa', 'mid', 3, 5, 'freelance', 'remote', 'agency', 'hourly', 120000, 250000, ARRAY['javascript'], 'Community'),

-- Senior (5+ years)
('qa', 'senior', 5, 99, 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 40000000, ARRAY['javascript', 'python'], 'NodeFlair'),
('qa', 'senior', 5, 99, 'fulltime', 'jakarta', 'corporate', 'monthly', 28000000, 50000000, ARRAY['javascript', 'python'], 'Glassdoor'),
('qa', 'senior', 5, 99, 'fulltime', 'jakarta', 'foreign', 'monthly', 38000000, 65000000, ARRAY['javascript', 'python'], 'Michael Page'),
('qa', 'senior', 5, 99, 'fulltime', 'bandung', 'startup', 'monthly', 18000000, 35000000, ARRAY['javascript'], 'NodeFlair'),
('qa', 'senior', 5, 99, 'freelance', 'remote', 'agency', 'hourly', 250000, 500000, ARRAY['javascript'], 'Community');
