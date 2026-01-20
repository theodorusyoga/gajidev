-- GajiDev Seed Data v2 - Expanded Roles (50+ roles)
-- Based on data from NodeFlair, Glassdoor, LinkedIn, Jobstreet, Glints, Kalibrr

DELETE FROM salary_data;

INSERT INTO salary_data (role, experience_level, employment_type, city, company_type, payment_type, salary_min, salary_max, tech_stack, source) VALUES

-- Frontend Developer
('frontend', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 6000000, 12000000, ARRAY['javascript', 'react', 'tailwind'], 'NodeFlair'),
('frontend', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 15000000, 25000000, ARRAY['typescript', 'react', 'nextjs'], 'NodeFlair'),
('frontend', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 28000000, 45000000, ARRAY['typescript', 'react', 'nextjs'], 'Glassdoor'),
('frontend', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 5000000, 10000000, ARRAY['javascript', 'vue'], 'Glints'),
('frontend', 'mid', 'fulltime', 'bandung', 'corporate', 'monthly', 12000000, 20000000, ARRAY['typescript', 'react'], 'Jobstreet'),
('frontend', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 40000000, 70000000, ARRAY['typescript', 'react', 'nextjs'], 'NodeFlair'),

-- React Developer
('react-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['react', 'javascript', 'tailwind'], 'Glints'),
('react-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['react', 'typescript', 'nextjs'], 'NodeFlair'),
('react-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 35000000, 60000000, ARRAY['react', 'typescript', 'nextjs'], 'Glassdoor'),

-- Vue Developer
('vue-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 6000000, 12000000, ARRAY['vue', 'javascript'], 'Glints'),
('vue-developer', 'mid', 'fulltime', 'bandung', 'startup', 'monthly', 14000000, 24000000, ARRAY['vue', 'nuxt', 'typescript'], 'NodeFlair'),
('vue-developer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 28000000, 45000000, ARRAY['vue', 'nuxt', 'typescript'], 'Jobstreet'),

-- Backend Developer
('backend', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['nodejs', 'postgresql'], 'NodeFlair'),
('backend', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['nodejs', 'postgresql', 'redis'], 'NodeFlair'),
('backend', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 50000000, ARRAY['nodejs', 'postgresql', 'redis', 'docker'], 'Glassdoor'),
('backend', 'mid', 'fulltime', 'surabaya', 'corporate', 'monthly', 14000000, 22000000, ARRAY['java', 'spring', 'mysql'], 'Jobstreet'),
('backend', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 80000000, ARRAY['golang', 'kubernetes', 'aws'], 'NodeFlair'),

-- Node.js Developer
('nodejs-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 13000000, ARRAY['nodejs', 'javascript', 'mongodb'], 'Glints'),
('nodejs-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 15000000, 26000000, ARRAY['nodejs', 'typescript', 'postgresql'], 'NodeFlair'),
('nodejs-developer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 30000000, 50000000, ARRAY['nodejs', 'typescript', 'aws'], 'Glassdoor'),

-- Python Developer
('python-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['python', 'django', 'postgresql'], 'Glints'),
('python-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['python', 'fastapi', 'postgresql'], 'NodeFlair'),
('python-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 35000000, 60000000, ARRAY['python', 'fastapi', 'aws'], 'Glassdoor'),

-- Golang Developer
('golang-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 10000000, 18000000, ARRAY['golang', 'postgresql'], 'NodeFlair'),
('golang-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 20000000, 35000000, ARRAY['golang', 'kubernetes', 'redis'], 'NodeFlair'),
('golang-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 85000000, ARRAY['golang', 'kubernetes', 'aws'], 'Glassdoor'),

-- Java Developer
('java-developer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 15000000, ARRAY['java', 'spring', 'mysql'], 'Jobstreet'),
('java-developer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 30000000, ARRAY['java', 'spring', 'postgresql'], 'Glassdoor'),
('java-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 40000000, 70000000, ARRAY['java', 'spring', 'kubernetes'], 'NodeFlair'),

-- PHP Developer
('php-developer', 'junior', 'fulltime', 'jakarta', 'agency', 'monthly', 5000000, 10000000, ARRAY['php', 'laravel', 'mysql'], 'Glints'),
('php-developer', 'mid', 'fulltime', 'bandung', 'startup', 'monthly', 12000000, 20000000, ARRAY['php', 'laravel', 'postgresql'], 'Jobstreet'),
('php-developer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 22000000, 38000000, ARRAY['php', 'laravel', 'redis'], 'NodeFlair'),

-- .NET Developer
('dotnet-developer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 15000000, ARRAY['dotnet', 'mysql'], 'Jobstreet'),
('dotnet-developer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 32000000, ARRAY['dotnet', 'azure'], 'Glassdoor'),
('dotnet-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 38000000, 65000000, ARRAY['dotnet', 'azure', 'kubernetes'], 'NodeFlair'),

-- Fullstack Developer
('fullstack', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 8000000, 15000000, ARRAY['javascript', 'react', 'nodejs'], 'NodeFlair'),
('fullstack', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 18000000, 32000000, ARRAY['typescript', 'react', 'nodejs', 'postgresql'], 'NodeFlair'),
('fullstack', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 35000000, 55000000, ARRAY['typescript', 'nextjs', 'nodejs', 'postgresql'], 'Glassdoor'),
('fullstack', 'mid', 'fulltime', 'bandung', 'startup', 'monthly', 15000000, 25000000, ARRAY['vue', 'laravel', 'mysql'], 'Glints'),
('fullstack', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 50000000, 90000000, ARRAY['typescript', 'react', 'golang', 'kubernetes'], 'NodeFlair'),

-- Software Engineer
('software-engineer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 8000000, 16000000, ARRAY['javascript', 'python'], 'Glints'),
('software-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 20000000, 35000000, ARRAY['java', 'python', 'aws'], 'Glassdoor'),
('software-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 85000000, ARRAY['golang', 'kubernetes', 'aws'], 'NodeFlair'),

-- Mobile Developer
('mobile', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['kotlin', 'swift'], 'Glints'),
('mobile', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['kotlin', 'swift', 'firebase'], 'NodeFlair'),
('mobile', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 35000000, 60000000, ARRAY['kotlin', 'swift'], 'Glassdoor'),

-- iOS Developer
('ios-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 8000000, 15000000, ARRAY['swift'], 'Glints'),
('ios-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 18000000, 30000000, ARRAY['swift', 'firebase'], 'NodeFlair'),
('ios-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 38000000, 65000000, ARRAY['swift'], 'Glassdoor'),

-- Android Developer
('android-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['kotlin'], 'Glints'),
('android-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['kotlin', 'firebase'], 'NodeFlair'),
('android-developer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 32000000, 55000000, ARRAY['kotlin'], 'Glassdoor'),

-- React Native Developer
('react-native', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['react-native', 'javascript'], 'Glints'),
('react-native', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['react-native', 'typescript'], 'NodeFlair'),
('react-native', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 50000000, ARRAY['react-native', 'typescript'], 'Glassdoor'),

-- Flutter Developer
('flutter-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 13000000, ARRAY['flutter'], 'Glints'),
('flutter-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 15000000, 26000000, ARRAY['flutter', 'firebase'], 'NodeFlair'),
('flutter-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 28000000, 48000000, ARRAY['flutter'], 'Glassdoor'),

-- DevOps Engineer
('devops', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 10000000, 18000000, ARRAY['docker', 'aws'], 'Glints'),
('devops', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['docker', 'kubernetes', 'aws'], 'NodeFlair'),
('devops', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 40000000, 65000000, ARRAY['kubernetes', 'terraform', 'aws'], 'Glassdoor'),
('devops', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 55000000, 100000000, ARRAY['kubernetes', 'terraform', 'aws', 'gcp'], 'NodeFlair'),

-- DevSecOps Engineer
('devsecops', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 25000000, 42000000, ARRAY['docker', 'kubernetes', 'aws'], 'NodeFlair'),
('devsecops', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 50000000, 90000000, ARRAY['kubernetes', 'terraform', 'aws'], 'Glassdoor'),

-- Site Reliability Engineer
('sre', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 25000000, 42000000, ARRAY['kubernetes', 'golang', 'aws'], 'NodeFlair'),
('sre', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 55000000, 100000000, ARRAY['kubernetes', 'golang', 'terraform'], 'Glassdoor'),

-- Platform Engineer
('platform-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['kubernetes', 'terraform'], 'NodeFlair'),
('platform-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 50000000, 90000000, ARRAY['kubernetes', 'terraform', 'aws'], 'Glassdoor'),

-- Cloud Engineer
('cloud-engineer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 12000000, 20000000, ARRAY['aws'], 'Jobstreet'),
('cloud-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 22000000, 38000000, ARRAY['aws', 'terraform'], 'NodeFlair'),
('cloud-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 80000000, ARRAY['aws', 'gcp', 'terraform'], 'Glassdoor'),

-- Data Engineer
('data-engineer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 10000000, 18000000, ARRAY['python', 'postgresql'], 'Glints'),
('data-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['python', 'spark', 'airflow'], 'NodeFlair'),
('data-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 50000000, 90000000, ARRAY['python', 'spark', 'kafka', 'aws'], 'Glassdoor'),

-- Data Scientist
('data-scientist', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 12000000, 20000000, ARRAY['python', 'pandas', 'tensorflow'], 'Glints'),
('data-scientist', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 25000000, 42000000, ARRAY['python', 'tensorflow', 'pytorch'], 'NodeFlair'),
('data-scientist', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 50000000, 95000000, ARRAY['python', 'tensorflow', 'pytorch', 'aws'], 'Glassdoor'),

-- Data Analyst
('data-analyst', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 13000000, ARRAY['python', 'pandas'], 'Glints'),
('data-analyst', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 15000000, 26000000, ARRAY['python', 'pandas'], 'Jobstreet'),
('data-analyst', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 28000000, 45000000, ARRAY['python', 'pandas', 'spark'], 'NodeFlair'),

-- Machine Learning Engineer
('ml-engineer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 12000000, 22000000, ARRAY['python', 'tensorflow'], 'Glints'),
('ml-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 28000000, 48000000, ARRAY['python', 'tensorflow', 'pytorch'], 'NodeFlair'),
('ml-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 55000000, 110000000, ARRAY['python', 'tensorflow', 'pytorch', 'aws'], 'Glassdoor'),

-- AI Engineer
('ai-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 50000000, ARRAY['python', 'tensorflow', 'pytorch'], 'NodeFlair'),
('ai-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 60000000, 120000000, ARRAY['python', 'pytorch', 'aws'], 'Glassdoor'),

-- QA Engineer
('qa', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 6000000, 11000000, ARRAY['javascript'], 'Glints'),
('qa', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 13000000, 22000000, ARRAY['javascript', 'python'], 'NodeFlair'),
('qa', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 24000000, 40000000, ARRAY['javascript', 'python'], 'Glassdoor'),

-- QA Automation Engineer
('qa-automation', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 8000000, 14000000, ARRAY['javascript', 'python'], 'Glints'),
('qa-automation', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['javascript', 'python'], 'NodeFlair'),
('qa-automation', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 30000000, 50000000, ARRAY['javascript', 'python'], 'Glassdoor'),

-- Security Engineer
('security-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 22000000, 38000000, ARRAY['python', 'aws'], 'NodeFlair'),
('security-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 85000000, ARRAY['python', 'aws', 'kubernetes'], 'Glassdoor'),

-- Database Administrator
('dba', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 30000000, ARRAY['postgresql', 'mysql'], 'Jobstreet'),
('dba', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 32000000, 55000000, ARRAY['postgresql', 'mysql', 'redis'], 'NodeFlair'),

-- Tech Lead
('tech-lead', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 40000000, 65000000, ARRAY['typescript', 'react', 'nodejs'], 'NodeFlair'),
('tech-lead', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 60000000, 110000000, ARRAY['golang', 'kubernetes', 'aws'], 'Glassdoor'),

-- Engineering Manager
('engineering-manager', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 50000000, 80000000, ARRAY['typescript', 'aws'], 'NodeFlair'),
('engineering-manager', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 75000000, 140000000, ARRAY['golang', 'kubernetes', 'aws'], 'Glassdoor'),

-- Software Architect
('architect', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 45000000, 75000000, ARRAY['java', 'aws', 'kubernetes'], 'NodeFlair'),
('architect', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 70000000, 130000000, ARRAY['golang', 'kubernetes', 'aws'], 'Glassdoor'),

-- Solutions Architect
('solutions-architect', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 50000000, 85000000, ARRAY['aws', 'terraform'], 'NodeFlair'),
('solutions-architect', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 80000000, 150000000, ARRAY['aws', 'gcp', 'kubernetes'], 'Glassdoor'),

-- CTO
('cto', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 70000000, 120000000, ARRAY['typescript', 'aws'], 'NodeFlair'),
('cto', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 100000000, 200000000, ARRAY['golang', 'kubernetes', 'aws'], 'Glassdoor'),

-- Blockchain Developer
('blockchain', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 25000000, 45000000, ARRAY['javascript', 'rust'], 'NodeFlair'),
('blockchain', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 50000000, 100000000, ARRAY['rust', 'golang'], 'Glassdoor'),

-- Game Developer
('game-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 13000000, ARRAY['javascript'], 'Glints'),
('game-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 15000000, 28000000, ARRAY['javascript'], 'NodeFlair'),
('game-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 50000000, ARRAY['javascript'], 'Glassdoor'),

-- Freelance roles
('frontend', 'mid', 'freelance', 'remote', 'agency', 'hourly', 150000, 300000, ARRAY['react', 'typescript'], 'Community'),
('backend', 'mid', 'freelance', 'remote', 'agency', 'hourly', 175000, 350000, ARRAY['nodejs', 'postgresql'], 'Community'),
('fullstack', 'senior', 'freelance', 'remote', 'foreign', 'hourly', 300000, 600000, ARRAY['typescript', 'nextjs', 'nodejs'], 'Community'),
('mobile', 'mid', 'freelance', 'remote', 'agency', 'hourly', 175000, 350000, ARRAY['flutter'], 'Community'),

-- Contract roles
('devops', 'senior', 'contract', 'jakarta', 'corporate', 'monthly', 45000000, 70000000, ARRAY['kubernetes', 'aws'], 'Jobstreet'),
('data-engineer', 'senior', 'contract', 'jakarta', 'corporate', 'monthly', 50000000, 80000000, ARRAY['spark', 'python', 'aws'], 'NodeFlair'),
('security-engineer', 'senior', 'contract', 'jakarta', 'corporate', 'monthly', 50000000, 85000000, ARRAY['python', 'aws'], 'Glassdoor');
