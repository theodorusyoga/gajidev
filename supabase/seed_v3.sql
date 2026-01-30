-- GajiDev Seed Data v3 - Expanded with 500+ entries
-- Based on data from NodeFlair, Glassdoor, LinkedIn, Indeed, Levels.fyi, Tech in Asia
-- Last updated: January 2025

INSERT INTO salary_data (role, experience_level, employment_type, city, company_type, payment_type, salary_min, salary_max, tech_stack, source) VALUES

-- FRONTEND DEVELOPER
('frontend', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 6000000, 12000000, ARRAY['javascript', 'react', 'tailwind'], 'NodeFlair'),
('frontend', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 7000000, 14000000, ARRAY['javascript', 'react', 'css'], 'Glassdoor'),
('frontend', 'junior', 'fulltime', 'jakarta', 'foreign', 'monthly', 10000000, 18000000, ARRAY['typescript', 'react', 'tailwind'], 'LinkedIn'),
('frontend', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 5000000, 10000000, ARRAY['javascript', 'vue'], 'Indeed'),
('frontend', 'junior', 'fulltime', 'bandung', 'corporate', 'monthly', 6000000, 11000000, ARRAY['javascript', 'react'], 'Glassdoor'),
('frontend', 'junior', 'fulltime', 'surabaya', 'startup', 'monthly', 5000000, 9000000, ARRAY['javascript', 'vue'], 'Indeed'),
('frontend', 'junior', 'fulltime', 'yogyakarta', 'startup', 'monthly', 4500000, 8500000, ARRAY['javascript', 'react'], 'Tech in Asia'),
('frontend', 'junior', 'fulltime', 'medan', 'startup', 'monthly', 4500000, 8000000, ARRAY['javascript', 'vue'], 'Indeed'),
('frontend', 'junior', 'fulltime', 'semarang', 'corporate', 'monthly', 5000000, 9000000, ARRAY['javascript', 'react'], 'Glassdoor'),
('frontend', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 15000000, 25000000, ARRAY['typescript', 'react', 'nextjs'], 'NodeFlair'),
('frontend', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 28000000, ARRAY['typescript', 'react', 'redux'], 'Glassdoor'),
('frontend', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 25000000, 40000000, ARRAY['typescript', 'react', 'nextjs'], 'Levels.fyi'),
('frontend', 'mid', 'fulltime', 'bandung', 'startup', 'monthly', 12000000, 20000000, ARRAY['typescript', 'vue', 'nuxt'], 'NodeFlair'),
('frontend', 'mid', 'fulltime', 'bandung', 'corporate', 'monthly', 14000000, 22000000, ARRAY['typescript', 'react'], 'Indeed'),
('frontend', 'mid', 'fulltime', 'surabaya', 'startup', 'monthly', 11000000, 18000000, ARRAY['typescript', 'react'], 'Tech in Asia'),
('frontend', 'mid', 'fulltime', 'surabaya', 'corporate', 'monthly', 13000000, 20000000, ARRAY['typescript', 'angular'], 'Glassdoor'),
('frontend', 'mid', 'fulltime', 'yogyakarta', 'startup', 'monthly', 10000000, 17000000, ARRAY['typescript', 'react'], 'Indeed'),
('frontend', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 28000000, 45000000, ARRAY['typescript', 'react', 'nextjs'], 'NodeFlair'),
('frontend', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 32000000, 50000000, ARRAY['typescript', 'react', 'graphql'], 'Glassdoor'),
('frontend', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 75000000, ARRAY['typescript', 'react', 'nextjs'], 'Levels.fyi'),
('frontend', 'senior', 'fulltime', 'bandung', 'startup', 'monthly', 22000000, 38000000, ARRAY['typescript', 'react', 'nextjs'], 'NodeFlair'),
('frontend', 'senior', 'fulltime', 'bandung', 'corporate', 'monthly', 25000000, 40000000, ARRAY['typescript', 'react'], 'LinkedIn'),
('frontend', 'senior', 'fulltime', 'surabaya', 'corporate', 'monthly', 22000000, 36000000, ARRAY['typescript', 'react'], 'Glassdoor'),
('frontend', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 50000000, 85000000, ARRAY['typescript', 'react', 'nextjs'], 'Levels.fyi'),

-- REACT DEVELOPER
('react-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['react', 'javascript', 'tailwind'], 'NodeFlair'),
('react-developer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 15000000, ARRAY['react', 'javascript', 'css'], 'Glassdoor'),
('react-developer', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 6000000, 12000000, ARRAY['react', 'javascript'], 'Indeed'),
('react-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['react', 'typescript', 'nextjs'], 'NodeFlair'),
('react-developer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 30000000, ARRAY['react', 'typescript', 'redux'], 'Glassdoor'),
('react-developer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 25000000, 42000000, ARRAY['react', 'typescript', 'nextjs'], 'Levels.fyi'),
('react-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 50000000, ARRAY['react', 'typescript', 'nextjs'], 'NodeFlair'),
('react-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 80000000, ARRAY['react', 'typescript', 'nextjs'], 'Levels.fyi'),

-- VUE DEVELOPER
('vue-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 6000000, 12000000, ARRAY['vue', 'javascript'], 'NodeFlair'),
('vue-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 14000000, 24000000, ARRAY['vue', 'nuxt', 'typescript'], 'NodeFlair'),
('vue-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 26000000, 42000000, ARRAY['vue', 'nuxt', 'typescript'], 'NodeFlair'),

-- ANGULAR DEVELOPER
('angular-developer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 7000000, 13000000, ARRAY['angular', 'typescript'], 'Glassdoor'),
('angular-developer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 16000000, 28000000, ARRAY['angular', 'typescript', 'rxjs'], 'Glassdoor'),
('angular-developer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 30000000, 50000000, ARRAY['angular', 'typescript', 'rxjs'], 'Glassdoor'),

-- BACKEND DEVELOPER
('backend', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['nodejs', 'postgresql'], 'NodeFlair'),
('backend', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 15000000, ARRAY['java', 'mysql'], 'Glassdoor'),
('backend', 'junior', 'fulltime', 'jakarta', 'foreign', 'monthly', 12000000, 20000000, ARRAY['nodejs', 'postgresql'], 'LinkedIn'),
('backend', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 6000000, 12000000, ARRAY['nodejs', 'mongodb'], 'Indeed'),
('backend', 'junior', 'fulltime', 'surabaya', 'startup', 'monthly', 5500000, 11000000, ARRAY['nodejs', 'mongodb'], 'Tech in Asia'),
('backend', 'junior', 'fulltime', 'yogyakarta', 'startup', 'monthly', 5000000, 10000000, ARRAY['php', 'mysql'], 'Indeed'),
('backend', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['nodejs', 'postgresql', 'redis'], 'NodeFlair'),
('backend', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 20000000, 32000000, ARRAY['java', 'spring', 'postgresql'], 'Glassdoor'),
('backend', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 28000000, 45000000, ARRAY['golang', 'postgresql', 'redis'], 'Levels.fyi'),
('backend', 'mid', 'fulltime', 'bandung', 'startup', 'monthly', 14000000, 24000000, ARRAY['nodejs', 'postgresql'], 'NodeFlair'),
('backend', 'mid', 'fulltime', 'surabaya', 'corporate', 'monthly', 14000000, 22000000, ARRAY['java', 'spring', 'mysql'], 'Glassdoor'),
('backend', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 50000000, ARRAY['nodejs', 'postgresql', 'redis', 'docker'], 'NodeFlair'),
('backend', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 35000000, 55000000, ARRAY['java', 'spring', 'kubernetes'], 'Glassdoor'),
('backend', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 50000000, 85000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),
('backend', 'senior', 'fulltime', 'bandung', 'startup', 'monthly', 25000000, 42000000, ARRAY['nodejs', 'postgresql', 'redis'], 'NodeFlair'),
('backend', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 55000000, 95000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),

-- NODE.JS DEVELOPER
('nodejs-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 13000000, ARRAY['nodejs', 'javascript', 'mongodb'], 'NodeFlair'),
('nodejs-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 15000000, 26000000, ARRAY['nodejs', 'typescript', 'postgresql'], 'NodeFlair'),
('nodejs-developer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 25000000, 42000000, ARRAY['nodejs', 'typescript', 'aws'], 'LinkedIn'),
('nodejs-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 28000000, 48000000, ARRAY['nodejs', 'typescript', 'aws'], 'NodeFlair'),
('nodejs-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 75000000, ARRAY['nodejs', 'typescript', 'aws'], 'Levels.fyi'),

-- PYTHON DEVELOPER
('python-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['python', 'django', 'postgresql'], 'NodeFlair'),
('python-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['python', 'fastapi', 'postgresql'], 'NodeFlair'),
('python-developer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 26000000, 45000000, ARRAY['python', 'fastapi', 'aws'], 'LinkedIn'),
('python-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 52000000, ARRAY['python', 'fastapi', 'aws'], 'NodeFlair'),
('python-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 48000000, 80000000, ARRAY['python', 'fastapi', 'aws'], 'Levels.fyi'),

-- GOLANG DEVELOPER
('golang-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 10000000, 18000000, ARRAY['golang', 'postgresql'], 'NodeFlair'),
('golang-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 20000000, 35000000, ARRAY['golang', 'kubernetes', 'redis'], 'NodeFlair'),
('golang-developer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 32000000, 55000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),
('golang-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 38000000, 65000000, ARRAY['golang', 'kubernetes', 'aws'], 'NodeFlair'),
('golang-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 55000000, 95000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),

-- JAVA DEVELOPER
('java-developer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 15000000, ARRAY['java', 'spring', 'mysql'], 'Glassdoor'),
('java-developer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 30000000, ARRAY['java', 'spring', 'postgresql'], 'Glassdoor'),
('java-developer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 28000000, 48000000, ARRAY['java', 'spring', 'kubernetes'], 'LinkedIn'),
('java-developer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 35000000, 58000000, ARRAY['java', 'spring', 'kubernetes'], 'Glassdoor'),
('java-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 48000000, 80000000, ARRAY['java', 'spring', 'kubernetes'], 'Levels.fyi'),

-- PHP DEVELOPER
('php-developer', 'junior', 'fulltime', 'jakarta', 'agency', 'monthly', 5000000, 10000000, ARRAY['php', 'laravel', 'mysql'], 'Indeed'),
('php-developer', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 5000000, 9500000, ARRAY['php', 'laravel'], 'Indeed'),
('php-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 12000000, 20000000, ARRAY['php', 'laravel', 'postgresql'], 'NodeFlair'),
('php-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['php', 'laravel', 'redis'], 'NodeFlair'),

-- .NET DEVELOPER
('dotnet-developer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 15000000, ARRAY['dotnet', 'mysql'], 'Glassdoor'),
('dotnet-developer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 32000000, ARRAY['dotnet', 'azure'], 'Glassdoor'),
('dotnet-developer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 35000000, 58000000, ARRAY['dotnet', 'azure', 'kubernetes'], 'Glassdoor'),
('dotnet-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 48000000, 80000000, ARRAY['dotnet', 'azure', 'kubernetes'], 'Levels.fyi'),

-- RUBY DEVELOPER
('ruby-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 13000000, ARRAY['ruby', 'rails', 'postgresql'], 'NodeFlair'),
('ruby-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['ruby', 'rails', 'redis'], 'NodeFlair'),
('ruby-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 50000000, ARRAY['ruby', 'rails', 'aws'], 'NodeFlair'),

-- FULLSTACK DEVELOPER
('fullstack', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 8000000, 15000000, ARRAY['javascript', 'react', 'nodejs'], 'NodeFlair'),
('fullstack', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 7000000, 13000000, ARRAY['javascript', 'react', 'nodejs'], 'Indeed'),
('fullstack', 'junior', 'fulltime', 'surabaya', 'startup', 'monthly', 6500000, 12000000, ARRAY['javascript', 'vue', 'laravel'], 'Tech in Asia'),
('fullstack', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 18000000, 32000000, ARRAY['typescript', 'react', 'nodejs', 'postgresql'], 'NodeFlair'),
('fullstack', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 30000000, 50000000, ARRAY['typescript', 'react', 'nodejs', 'aws'], 'Levels.fyi'),
('fullstack', 'mid', 'fulltime', 'bandung', 'startup', 'monthly', 15000000, 25000000, ARRAY['vue', 'laravel', 'mysql'], 'Indeed'),
('fullstack', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 35000000, 55000000, ARRAY['typescript', 'nextjs', 'nodejs', 'postgresql'], 'NodeFlair'),
('fullstack', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 55000000, 95000000, ARRAY['typescript', 'react', 'golang', 'kubernetes'], 'Levels.fyi'),
('fullstack', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 60000000, 110000000, ARRAY['typescript', 'nextjs', 'nodejs', 'aws'], 'Levels.fyi'),

-- SOFTWARE ENGINEER
('software-engineer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 8000000, 16000000, ARRAY['javascript', 'python'], 'NodeFlair'),
('software-engineer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 10000000, 18000000, ARRAY['java', 'python'], 'Glassdoor'),
('software-engineer', 'junior', 'fulltime', 'jakarta', 'foreign', 'monthly', 14000000, 24000000, ARRAY['python', 'golang'], 'LinkedIn'),
('software-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 20000000, 35000000, ARRAY['typescript', 'python', 'aws'], 'NodeFlair'),
('software-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 25000000, 42000000, ARRAY['java', 'python', 'aws'], 'Glassdoor'),
('software-engineer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 35000000, 58000000, ARRAY['golang', 'python', 'kubernetes'], 'Levels.fyi'),
('software-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 40000000, 65000000, ARRAY['typescript', 'golang', 'kubernetes'], 'NodeFlair'),
('software-engineer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 48000000, 75000000, ARRAY['java', 'python', 'aws'], 'Glassdoor'),
('software-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 60000000, 100000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),
('software-engineer', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 70000000, 120000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),

-- MOBILE DEVELOPER
('mobile', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['kotlin', 'swift'], 'NodeFlair'),
('mobile', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 6000000, 12000000, ARRAY['kotlin', 'swift'], 'Indeed'),
('mobile', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['kotlin', 'swift', 'firebase'], 'NodeFlair'),
('mobile', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 28000000, 45000000, ARRAY['kotlin', 'swift', 'firebase'], 'LinkedIn'),
('mobile', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 32000000, 52000000, ARRAY['kotlin', 'swift'], 'NodeFlair'),
('mobile', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 48000000, 80000000, ARRAY['kotlin', 'swift'], 'Levels.fyi'),

-- iOS DEVELOPER
('ios-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 8000000, 15000000, ARRAY['swift'], 'NodeFlair'),
('ios-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 18000000, 30000000, ARRAY['swift', 'firebase'], 'NodeFlair'),
('ios-developer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 30000000, 50000000, ARRAY['swift', 'firebase'], 'LinkedIn'),
('ios-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 35000000, 55000000, ARRAY['swift'], 'NodeFlair'),
('ios-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 50000000, 85000000, ARRAY['swift'], 'Levels.fyi'),

-- ANDROID DEVELOPER
('android-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['kotlin'], 'NodeFlair'),
('android-developer', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 6000000, 12000000, ARRAY['kotlin'], 'Indeed'),
('android-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['kotlin', 'firebase'], 'NodeFlair'),
('android-developer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 28000000, 45000000, ARRAY['kotlin', 'firebase'], 'LinkedIn'),
('android-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 32000000, 52000000, ARRAY['kotlin'], 'NodeFlair'),
('android-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 48000000, 78000000, ARRAY['kotlin'], 'Levels.fyi'),

-- REACT NATIVE DEVELOPER
('react-native', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 14000000, ARRAY['react-native', 'javascript'], 'NodeFlair'),
('react-native', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['react-native', 'typescript'], 'NodeFlair'),
('react-native', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 28000000, 45000000, ARRAY['react-native', 'typescript'], 'LinkedIn'),
('react-native', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 50000000, ARRAY['react-native', 'typescript'], 'NodeFlair'),
('react-native', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 75000000, ARRAY['react-native', 'typescript'], 'Levels.fyi'),

-- FLUTTER DEVELOPER
('flutter-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 13000000, ARRAY['flutter', 'dart'], 'NodeFlair'),
('flutter-developer', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 6000000, 11000000, ARRAY['flutter', 'dart'], 'Indeed'),
('flutter-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 15000000, 26000000, ARRAY['flutter', 'dart', 'firebase'], 'NodeFlair'),
('flutter-developer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 26000000, 42000000, ARRAY['flutter', 'dart', 'firebase'], 'LinkedIn'),
('flutter-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 28000000, 48000000, ARRAY['flutter', 'dart'], 'NodeFlair'),
('flutter-developer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 42000000, 70000000, ARRAY['flutter', 'dart'], 'Levels.fyi'),

-- DEVOPS ENGINEER
('devops', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 10000000, 18000000, ARRAY['docker', 'aws'], 'NodeFlair'),
('devops', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 12000000, 20000000, ARRAY['docker', 'jenkins'], 'Glassdoor'),
('devops', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['docker', 'kubernetes', 'aws'], 'NodeFlair'),
('devops', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 28000000, 45000000, ARRAY['kubernetes', 'terraform', 'jenkins'], 'Glassdoor'),
('devops', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 38000000, 60000000, ARRAY['kubernetes', 'terraform', 'aws'], 'Levels.fyi'),
('devops', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 40000000, 65000000, ARRAY['kubernetes', 'terraform', 'aws'], 'NodeFlair'),
('devops', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 48000000, 75000000, ARRAY['kubernetes', 'terraform', 'gcp'], 'Glassdoor'),
('devops', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 60000000, 100000000, ARRAY['kubernetes', 'terraform', 'aws', 'gcp'], 'Levels.fyi'),
('devops', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 70000000, 120000000, ARRAY['kubernetes', 'terraform', 'aws'], 'Levels.fyi'),

-- DEVSECOPS ENGINEER
('devsecops', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['docker', 'kubernetes', 'aws'], 'NodeFlair'),
('devsecops', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 28000000, 48000000, ARRAY['kubernetes', 'terraform', 'aws'], 'Glassdoor'),
('devsecops', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 42000000, 68000000, ARRAY['kubernetes', 'terraform', 'aws'], 'NodeFlair'),
('devsecops', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 65000000, 110000000, ARRAY['kubernetes', 'terraform', 'aws'], 'Levels.fyi'),

-- SITE RELIABILITY ENGINEER (SRE)
('sre', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 25000000, 42000000, ARRAY['kubernetes', 'golang', 'aws'], 'NodeFlair'),
('sre', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 42000000, 68000000, ARRAY['kubernetes', 'golang', 'aws'], 'Levels.fyi'),
('sre', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 48000000, 75000000, ARRAY['kubernetes', 'golang', 'terraform'], 'NodeFlair'),
('sre', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 70000000, 120000000, ARRAY['kubernetes', 'golang', 'terraform'], 'Levels.fyi'),

-- PLATFORM ENGINEER
('platform-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['kubernetes', 'terraform'], 'NodeFlair'),
('platform-engineer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 40000000, 65000000, ARRAY['kubernetes', 'terraform', 'aws'], 'Levels.fyi'),
('platform-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 45000000, 72000000, ARRAY['kubernetes', 'terraform', 'aws'], 'NodeFlair'),
('platform-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 65000000, 110000000, ARRAY['kubernetes', 'terraform', 'aws'], 'Levels.fyi'),

-- CLOUD ENGINEER
('cloud-engineer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 10000000, 18000000, ARRAY['aws'], 'NodeFlair'),
('cloud-engineer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 12000000, 20000000, ARRAY['aws', 'terraform'], 'Glassdoor'),
('cloud-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['aws', 'terraform'], 'NodeFlair'),
('cloud-engineer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 38000000, 62000000, ARRAY['aws', 'gcp', 'terraform'], 'Levels.fyi'),
('cloud-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 42000000, 68000000, ARRAY['aws', 'gcp', 'terraform'], 'NodeFlair'),
('cloud-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 58000000, 100000000, ARRAY['aws', 'gcp', 'terraform'], 'Levels.fyi'),

-- INFRASTRUCTURE ENGINEER
('infrastructure', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 10000000, 18000000, ARRAY['linux', 'aws'], 'Glassdoor'),
('infrastructure', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 22000000, 38000000, ARRAY['linux', 'aws', 'terraform'], 'Glassdoor'),
('infrastructure', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 40000000, 65000000, ARRAY['linux', 'aws', 'kubernetes'], 'Glassdoor'),

-- SYSTEM ADMINISTRATOR
('system-admin', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 6000000, 12000000, ARRAY['linux'], 'Indeed'),
('system-admin', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 14000000, 24000000, ARRAY['linux', 'aws'], 'Glassdoor'),
('system-admin', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 26000000, 42000000, ARRAY['linux', 'aws'], 'Glassdoor'),

-- NETWORK ENGINEER
('network-engineer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 7000000, 13000000, ARRAY['cisco'], 'Indeed'),
('network-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 16000000, 28000000, ARRAY['cisco', 'aws'], 'Glassdoor'),
('network-engineer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 30000000, 50000000, ARRAY['cisco', 'aws'], 'Glassdoor'),

-- DATA ENGINEER
('data-engineer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 10000000, 18000000, ARRAY['python', 'postgresql'], 'NodeFlair'),
('data-engineer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 12000000, 20000000, ARRAY['python', 'spark'], 'Glassdoor'),
('data-engineer', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 9000000, 16000000, ARRAY['python', 'postgresql'], 'Indeed'),
('data-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['python', 'spark', 'airflow'], 'NodeFlair'),
('data-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 28000000, 45000000, ARRAY['python', 'spark', 'kafka'], 'Glassdoor'),
('data-engineer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 38000000, 62000000, ARRAY['python', 'spark', 'aws'], 'Levels.fyi'),
('data-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 42000000, 68000000, ARRAY['python', 'spark', 'kafka', 'aws'], 'NodeFlair'),
('data-engineer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 50000000, 80000000, ARRAY['python', 'spark', 'kafka'], 'Glassdoor'),
('data-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 65000000, 110000000, ARRAY['python', 'spark', 'kafka', 'aws'], 'Levels.fyi'),
('data-engineer', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 75000000, 130000000, ARRAY['python', 'spark', 'kafka', 'aws'], 'Levels.fyi'),

-- DATA (General)
('data', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 9000000, 16000000, ARRAY['python', 'postgresql'], 'NodeFlair'),
('data', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 20000000, 35000000, ARRAY['python', 'spark'], 'NodeFlair'),
('data', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 38000000, 62000000, ARRAY['python', 'spark', 'aws'], 'NodeFlair'),

-- DATA SCIENTIST
('data-scientist', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 12000000, 20000000, ARRAY['python', 'pandas', 'tensorflow'], 'NodeFlair'),
('data-scientist', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 14000000, 24000000, ARRAY['python', 'pandas', 'scikit-learn'], 'Glassdoor'),
('data-scientist', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 10000000, 18000000, ARRAY['python', 'pandas'], 'Indeed'),
('data-scientist', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 25000000, 42000000, ARRAY['python', 'tensorflow', 'pytorch'], 'NodeFlair'),
('data-scientist', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 30000000, 50000000, ARRAY['python', 'tensorflow', 'spark'], 'Glassdoor'),
('data-scientist', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 42000000, 70000000, ARRAY['python', 'pytorch', 'aws'], 'Levels.fyi'),
('data-scientist', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 48000000, 78000000, ARRAY['python', 'tensorflow', 'pytorch', 'aws'], 'NodeFlair'),
('data-scientist', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 55000000, 90000000, ARRAY['python', 'pytorch', 'spark'], 'Glassdoor'),
('data-scientist', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 70000000, 120000000, ARRAY['python', 'tensorflow', 'pytorch', 'aws'], 'Levels.fyi'),

-- DATA ANALYST
('data-analyst', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 13000000, ARRAY['python', 'pandas'], 'NodeFlair'),
('data-analyst', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 15000000, ARRAY['python', 'excel'], 'Glassdoor'),
('data-analyst', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 6000000, 11000000, ARRAY['python', 'excel'], 'Indeed'),
('data-analyst', 'junior', 'fulltime', 'surabaya', 'corporate', 'monthly', 6000000, 11000000, ARRAY['python', 'excel'], 'Indeed'),
('data-analyst', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 15000000, 26000000, ARRAY['python', 'pandas', 'tableau'], 'NodeFlair'),
('data-analyst', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 30000000, ARRAY['python', 'pandas', 'powerbi'], 'Glassdoor'),
('data-analyst', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 25000000, 42000000, ARRAY['python', 'pandas', 'tableau'], 'LinkedIn'),
('data-analyst', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 28000000, 45000000, ARRAY['python', 'pandas', 'spark'], 'NodeFlair'),
('data-analyst', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 32000000, 52000000, ARRAY['python', 'pandas', 'tableau'], 'Glassdoor'),
('data-analyst', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 42000000, 68000000, ARRAY['python', 'pandas', 'spark'], 'Levels.fyi'),

-- MACHINE LEARNING ENGINEER
('ml-engineer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 12000000, 22000000, ARRAY['python', 'tensorflow'], 'NodeFlair'),
('ml-engineer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 15000000, 26000000, ARRAY['python', 'pytorch'], 'Glassdoor'),
('ml-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 28000000, 48000000, ARRAY['python', 'tensorflow', 'pytorch'], 'NodeFlair'),
('ml-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 35000000, 58000000, ARRAY['python', 'tensorflow', 'aws'], 'Glassdoor'),
('ml-engineer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 48000000, 80000000, ARRAY['python', 'pytorch', 'kubernetes'], 'Levels.fyi'),
('ml-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 52000000, 85000000, ARRAY['python', 'tensorflow', 'pytorch', 'aws'], 'NodeFlair'),
('ml-engineer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 60000000, 100000000, ARRAY['python', 'pytorch', 'kubernetes'], 'Glassdoor'),
('ml-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 80000000, 140000000, ARRAY['python', 'tensorflow', 'pytorch', 'aws'], 'Levels.fyi'),

-- AI ENGINEER
('ai-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 50000000, ARRAY['python', 'tensorflow', 'pytorch'], 'NodeFlair'),
('ai-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 38000000, 62000000, ARRAY['python', 'pytorch', 'aws'], 'Glassdoor'),
('ai-engineer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 52000000, 85000000, ARRAY['python', 'pytorch', 'kubernetes'], 'Levels.fyi'),
('ai-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 55000000, 90000000, ARRAY['python', 'pytorch', 'aws'], 'NodeFlair'),
('ai-engineer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 68000000, 110000000, ARRAY['python', 'pytorch', 'kubernetes'], 'Glassdoor'),
('ai-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 90000000, 160000000, ARRAY['python', 'pytorch', 'aws'], 'Levels.fyi'),

-- BI DEVELOPER
('bi-developer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 14000000, ARRAY['tableau', 'powerbi'], 'Glassdoor'),
('bi-developer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 16000000, 28000000, ARRAY['tableau', 'powerbi', 'python'], 'Glassdoor'),
('bi-developer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 30000000, 48000000, ARRAY['tableau', 'powerbi', 'python'], 'Glassdoor'),

-- ANALYTICS ENGINEER
('analytics-engineer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 10000000, 18000000, ARRAY['python', 'dbt'], 'NodeFlair'),
('analytics-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['python', 'dbt', 'spark'], 'NodeFlair'),
('analytics-engineer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 35000000, 58000000, ARRAY['python', 'dbt', 'spark'], 'Levels.fyi'),
('analytics-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 40000000, 65000000, ARRAY['python', 'dbt', 'spark'], 'NodeFlair'),
('analytics-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 55000000, 92000000, ARRAY['python', 'dbt', 'spark'], 'Levels.fyi'),

-- QA ENGINEER
('qa', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 6000000, 11000000, ARRAY['javascript'], 'NodeFlair'),
('qa', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 7000000, 13000000, ARRAY['javascript', 'selenium'], 'Glassdoor'),
('qa', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 5000000, 10000000, ARRAY['javascript'], 'Indeed'),
('qa', 'junior', 'fulltime', 'surabaya', 'startup', 'monthly', 5000000, 9500000, ARRAY['javascript'], 'Tech in Asia'),
('qa', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 13000000, 22000000, ARRAY['javascript', 'python'], 'NodeFlair'),
('qa', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 16000000, 26000000, ARRAY['javascript', 'selenium', 'python'], 'Glassdoor'),
('qa', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 22000000, 38000000, ARRAY['javascript', 'cypress'], 'LinkedIn'),
('qa', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 24000000, 40000000, ARRAY['javascript', 'python'], 'NodeFlair'),
('qa', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 28000000, 45000000, ARRAY['javascript', 'python', 'selenium'], 'Glassdoor'),
('qa', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 38000000, 62000000, ARRAY['javascript', 'cypress', 'playwright'], 'Levels.fyi'),

-- QA AUTOMATION ENGINEER
('qa-automation', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 8000000, 14000000, ARRAY['javascript', 'python'], 'NodeFlair'),
('qa-automation', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 9000000, 16000000, ARRAY['java', 'selenium'], 'Glassdoor'),
('qa-automation', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['javascript', 'python', 'cypress'], 'NodeFlair'),
('qa-automation', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 20000000, 32000000, ARRAY['java', 'selenium', 'appium'], 'Glassdoor'),
('qa-automation', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 28000000, 45000000, ARRAY['javascript', 'cypress', 'playwright'], 'LinkedIn'),
('qa-automation', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 50000000, ARRAY['javascript', 'python', 'cypress'], 'NodeFlair'),
('qa-automation', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 35000000, 55000000, ARRAY['java', 'selenium', 'appium'], 'Glassdoor'),
('qa-automation', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 75000000, ARRAY['javascript', 'cypress', 'playwright'], 'Levels.fyi'),

-- SDET
('sdet', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 9000000, 16000000, ARRAY['java', 'selenium'], 'Glassdoor'),
('sdet', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 20000000, 34000000, ARRAY['java', 'selenium', 'python'], 'Glassdoor'),
('sdet', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 32000000, 52000000, ARRAY['javascript', 'cypress', 'python'], 'LinkedIn'),
('sdet', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 38000000, 60000000, ARRAY['java', 'selenium', 'python'], 'Glassdoor'),
('sdet', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 50000000, 82000000, ARRAY['javascript', 'cypress', 'python'], 'Levels.fyi'),

-- TEST ENGINEER
('test-engineer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 7000000, 13000000, ARRAY['javascript'], 'Glassdoor'),
('test-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 15000000, 25000000, ARRAY['javascript', 'selenium'], 'Glassdoor'),
('test-engineer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 28000000, 45000000, ARRAY['javascript', 'selenium', 'python'], 'Glassdoor'),

-- SECURITY ENGINEER
('security-engineer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 12000000, 20000000, ARRAY['python', 'linux'], 'Glassdoor'),
('security-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['python', 'aws'], 'NodeFlair'),
('security-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 28000000, 48000000, ARRAY['python', 'aws', 'linux'], 'Glassdoor'),
('security-engineer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 40000000, 65000000, ARRAY['python', 'aws', 'kubernetes'], 'LinkedIn'),
('security-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 42000000, 68000000, ARRAY['python', 'aws', 'kubernetes'], 'NodeFlair'),
('security-engineer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 50000000, 80000000, ARRAY['python', 'aws', 'kubernetes'], 'Glassdoor'),
('security-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 65000000, 110000000, ARRAY['python', 'aws', 'kubernetes'], 'Levels.fyi'),

-- PENETRATION TESTER
('penetration-tester', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 22000000, 38000000, ARRAY['python', 'linux'], 'Glassdoor'),
('penetration-tester', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 40000000, 65000000, ARRAY['python', 'linux'], 'Glassdoor'),
('penetration-tester', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 55000000, 90000000, ARRAY['python', 'linux'], 'LinkedIn'),

-- SECURITY ANALYST
('security-analyst', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 10000000, 18000000, ARRAY['python', 'linux'], 'Glassdoor'),
('security-analyst', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 20000000, 35000000, ARRAY['python', 'linux', 'aws'], 'Glassdoor'),
('security-analyst', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 35000000, 58000000, ARRAY['python', 'linux', 'aws'], 'Glassdoor'),

-- DATABASE ADMINISTRATOR
('dba', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 15000000, ARRAY['postgresql', 'mysql'], 'Glassdoor'),
('dba', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 30000000, ARRAY['postgresql', 'mysql', 'redis'], 'Glassdoor'),
('dba', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 28000000, 45000000, ARRAY['postgresql', 'mysql', 'mongodb'], 'LinkedIn'),
('dba', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 32000000, 55000000, ARRAY['postgresql', 'mysql', 'redis'], 'Glassdoor'),
('dba', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 45000000, 75000000, ARRAY['postgresql', 'mysql', 'mongodb'], 'Levels.fyi'),

-- DATABASE ENGINEER
('database-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 20000000, 35000000, ARRAY['postgresql', 'mysql'], 'Glassdoor'),
('database-engineer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 38000000, 62000000, ARRAY['postgresql', 'mysql', 'mongodb'], 'Glassdoor'),

-- PRODUCT ENGINEER
('product-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['typescript', 'react', 'nodejs'], 'NodeFlair'),
('product-engineer', 'mid', 'fulltime', 'jakarta', 'foreign', 'monthly', 35000000, 58000000, ARRAY['typescript', 'react', 'golang'], 'Levels.fyi'),
('product-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 42000000, 68000000, ARRAY['typescript', 'react', 'nodejs'], 'NodeFlair'),
('product-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 58000000, 95000000, ARRAY['typescript', 'react', 'golang'], 'Levels.fyi'),

-- UX ENGINEER
('ux-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 18000000, 32000000, ARRAY['typescript', 'react', 'figma'], 'NodeFlair'),
('ux-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 35000000, 55000000, ARRAY['typescript', 'react', 'figma'], 'NodeFlair'),
('ux-engineer', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 48000000, 78000000, ARRAY['typescript', 'react', 'figma'], 'Levels.fyi'),

-- UI ENGINEER
('ui-engineer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 13000000, ARRAY['javascript', 'react', 'css'], 'NodeFlair'),
('ui-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 16000000, 28000000, ARRAY['typescript', 'react', 'css'], 'NodeFlair'),
('ui-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 48000000, ARRAY['typescript', 'react', 'css'], 'NodeFlair'),

-- TECH LEAD
('tech-lead', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 40000000, 65000000, ARRAY['typescript', 'react', 'nodejs'], 'NodeFlair'),
('tech-lead', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 48000000, 75000000, ARRAY['java', 'spring', 'aws'], 'Glassdoor'),
('tech-lead', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 65000000, 110000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),
('tech-lead', 'senior', 'fulltime', 'bandung', 'startup', 'monthly', 35000000, 55000000, ARRAY['typescript', 'react', 'nodejs'], 'NodeFlair'),
('tech-lead', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 75000000, 130000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),

-- ENGINEERING MANAGER
('engineering-manager', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 50000000, 80000000, ARRAY['typescript', 'aws'], 'NodeFlair'),
('engineering-manager', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 60000000, 95000000, ARRAY['java', 'aws'], 'Glassdoor'),
('engineering-manager', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 80000000, 140000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),
('engineering-manager', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 90000000, 160000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),

-- VP OF ENGINEERING
('vp-engineering', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 80000000, 130000000, ARRAY['typescript', 'aws'], 'NodeFlair'),
('vp-engineering', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 100000000, 170000000, ARRAY['java', 'aws'], 'Glassdoor'),
('vp-engineering', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 130000000, 220000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),

-- CTO
('cto', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 70000000, 120000000, ARRAY['typescript', 'aws'], 'NodeFlair'),
('cto', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 100000000, 200000000, ARRAY['java', 'aws'], 'Glassdoor'),
('cto', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 150000000, 300000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),

-- SOFTWARE ARCHITECT
('architect', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 45000000, 75000000, ARRAY['typescript', 'aws', 'kubernetes'], 'NodeFlair'),
('architect', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 55000000, 90000000, ARRAY['java', 'aws', 'kubernetes'], 'Glassdoor'),
('architect', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 75000000, 130000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),
('architect', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 85000000, 150000000, ARRAY['golang', 'kubernetes', 'aws'], 'Levels.fyi'),

-- SOLUTIONS ARCHITECT
('solutions-architect', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 50000000, 85000000, ARRAY['aws', 'terraform'], 'NodeFlair'),
('solutions-architect', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 60000000, 100000000, ARRAY['aws', 'gcp', 'terraform'], 'Glassdoor'),
('solutions-architect', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 85000000, 150000000, ARRAY['aws', 'gcp', 'kubernetes'], 'Levels.fyi'),
('solutions-architect', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 95000000, 170000000, ARRAY['aws', 'gcp', 'kubernetes'], 'Levels.fyi'),

-- BLOCKCHAIN DEVELOPER
('blockchain', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 12000000, 22000000, ARRAY['javascript', 'solidity'], 'NodeFlair'),
('blockchain', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 25000000, 45000000, ARRAY['javascript', 'rust', 'solidity'], 'NodeFlair'),
('blockchain', 'mid', 'fulltime', 'remote', 'foreign', 'monthly', 40000000, 70000000, ARRAY['rust', 'solidity'], 'LinkedIn'),
('blockchain', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 45000000, 75000000, ARRAY['rust', 'solidity', 'golang'], 'NodeFlair'),
('blockchain', 'senior', 'fulltime', 'remote', 'foreign', 'monthly', 70000000, 130000000, ARRAY['rust', 'golang', 'solidity'], 'Levels.fyi'),

-- EMBEDDED ENGINEER
('embedded', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 15000000, ARRAY['c', 'c++'], 'Glassdoor'),
('embedded', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 18000000, 32000000, ARRAY['c', 'c++', 'rust'], 'Glassdoor'),
('embedded', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 35000000, 58000000, ARRAY['c', 'c++', 'rust'], 'Glassdoor'),
('embedded', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 48000000, 82000000, ARRAY['c', 'c++', 'rust'], 'LinkedIn'),

-- FIRMWARE ENGINEER
('firmware', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 8000000, 14000000, ARRAY['c', 'c++'], 'Glassdoor'),
('firmware', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 16000000, 28000000, ARRAY['c', 'c++'], 'Glassdoor'),
('firmware', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 32000000, 52000000, ARRAY['c', 'c++'], 'Glassdoor'),

-- GAME DEVELOPER
('game-developer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 7000000, 13000000, ARRAY['c#', 'unity'], 'NodeFlair'),
('game-developer', 'junior', 'fulltime', 'bandung', 'startup', 'monthly', 6000000, 11000000, ARRAY['c#', 'unity'], 'Indeed'),
('game-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 15000000, 28000000, ARRAY['c#', 'unity', 'unreal'], 'NodeFlair'),
('game-developer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 20000000, 35000000, ARRAY['c++', 'unreal'], 'Glassdoor'),
('game-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 30000000, 50000000, ARRAY['c#', 'unity', 'unreal'], 'NodeFlair'),
('game-developer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 38000000, 62000000, ARRAY['c++', 'unreal'], 'Glassdoor'),

-- AR/VR DEVELOPER
('ar-vr', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 18000000, 32000000, ARRAY['c#', 'unity'], 'NodeFlair'),
('ar-vr', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 35000000, 58000000, ARRAY['c#', 'unity', 'unreal'], 'NodeFlair'),
('ar-vr', 'senior', 'fulltime', 'jakarta', 'foreign', 'monthly', 50000000, 85000000, ARRAY['c++', 'unreal'], 'LinkedIn'),

-- TECHNICAL WRITER
('technical-writer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 6000000, 11000000, ARRAY['markdown'], 'Indeed'),
('technical-writer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 12000000, 22000000, ARRAY['markdown', 'javascript'], 'NodeFlair'),
('technical-writer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 22000000, 38000000, ARRAY['markdown', 'javascript'], 'NodeFlair'),

-- SUPPORT ENGINEER
('support-engineer', 'junior', 'fulltime', 'jakarta', 'startup', 'monthly', 6000000, 11000000, ARRAY['javascript'], 'Indeed'),
('support-engineer', 'junior', 'fulltime', 'jakarta', 'corporate', 'monthly', 7000000, 13000000, ARRAY['javascript', 'python'], 'Glassdoor'),
('support-engineer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 13000000, 22000000, ARRAY['javascript', 'python'], 'NodeFlair'),
('support-engineer', 'mid', 'fulltime', 'jakarta', 'corporate', 'monthly', 16000000, 26000000, ARRAY['javascript', 'python', 'linux'], 'Glassdoor'),
('support-engineer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 24000000, 40000000, ARRAY['javascript', 'python'], 'NodeFlair'),
('support-engineer', 'senior', 'fulltime', 'jakarta', 'corporate', 'monthly', 28000000, 45000000, ARRAY['javascript', 'python', 'aws'], 'Glassdoor'),

-- WEB DEVELOPER
('web-developer', 'junior', 'fulltime', 'jakarta', 'agency', 'monthly', 5000000, 10000000, ARRAY['javascript', 'php', 'mysql'], 'Indeed'),
('web-developer', 'junior', 'fulltime', 'bandung', 'agency', 'monthly', 4500000, 9000000, ARRAY['javascript', 'php'], 'Indeed'),
('web-developer', 'mid', 'fulltime', 'jakarta', 'startup', 'monthly', 13000000, 22000000, ARRAY['typescript', 'react', 'nodejs'], 'NodeFlair'),
('web-developer', 'senior', 'fulltime', 'jakarta', 'startup', 'monthly', 24000000, 40000000, ARRAY['typescript', 'nextjs', 'nodejs'], 'NodeFlair'),

-- FREELANCE ROLES
('frontend', 'mid', 'freelance', 'remote', 'agency', 'hourly', 150000, 300000, ARRAY['react', 'typescript'], 'Community'),
('frontend', 'senior', 'freelance', 'remote', 'agency', 'hourly', 250000, 500000, ARRAY['react', 'typescript', 'nextjs'], 'Community'),
('backend', 'mid', 'freelance', 'remote', 'agency', 'hourly', 175000, 350000, ARRAY['nodejs', 'postgresql'], 'Community'),
('backend', 'senior', 'freelance', 'remote', 'agency', 'hourly', 300000, 600000, ARRAY['golang', 'postgresql'], 'Community'),
('fullstack', 'mid', 'freelance', 'remote', 'agency', 'hourly', 200000, 400000, ARRAY['typescript', 'react', 'nodejs'], 'Community'),
('fullstack', 'senior', 'freelance', 'remote', 'foreign', 'hourly', 350000, 700000, ARRAY['typescript', 'nextjs', 'nodejs'], 'Community'),
('mobile', 'mid', 'freelance', 'remote', 'agency', 'hourly', 175000, 350000, ARRAY['flutter'], 'Community'),
('mobile', 'senior', 'freelance', 'remote', 'agency', 'hourly', 300000, 550000, ARRAY['kotlin', 'swift'], 'Community'),
('devops', 'mid', 'freelance', 'remote', 'agency', 'hourly', 225000, 450000, ARRAY['kubernetes', 'aws'], 'Community'),
('devops', 'senior', 'freelance', 'remote', 'foreign', 'hourly', 400000, 800000, ARRAY['kubernetes', 'terraform', 'aws'], 'Community'),
('data-engineer', 'mid', 'freelance', 'remote', 'agency', 'hourly', 225000, 450000, ARRAY['python', 'spark'], 'Community'),
('data-engineer', 'senior', 'freelance', 'remote', 'foreign', 'hourly', 400000, 750000, ARRAY['python', 'spark', 'kafka'], 'Community'),

-- CONTRACT ROLES
('devops', 'senior', 'contract', 'jakarta', 'corporate', 'monthly', 45000000, 70000000, ARRAY['kubernetes', 'aws'], 'Indeed'),
('data-engineer', 'senior', 'contract', 'jakarta', 'corporate', 'monthly', 50000000, 80000000, ARRAY['spark', 'python', 'aws'], 'NodeFlair'),
('security-engineer', 'senior', 'contract', 'jakarta', 'corporate', 'monthly', 50000000, 85000000, ARRAY['python', 'aws'], 'Glassdoor'),
('software-engineer', 'senior', 'contract', 'jakarta', 'corporate', 'monthly', 45000000, 75000000, ARRAY['java', 'spring', 'aws'], 'Glassdoor'),
('backend', 'senior', 'contract', 'jakarta', 'foreign', 'monthly', 55000000, 90000000, ARRAY['golang', 'kubernetes'], 'LinkedIn'),
('frontend', 'senior', 'contract', 'jakarta', 'foreign', 'monthly', 45000000, 75000000, ARRAY['react', 'typescript', 'nextjs'], 'LinkedIn'),
('fullstack', 'senior', 'contract', 'jakarta', 'foreign', 'monthly', 55000000, 95000000, ARRAY['typescript', 'react', 'nodejs'], 'LinkedIn'),
('sre', 'senior', 'contract', 'jakarta', 'foreign', 'monthly', 60000000, 100000000, ARRAY['kubernetes', 'golang', 'terraform'], 'LinkedIn'),
('ml-engineer', 'senior', 'contract', 'jakarta', 'foreign', 'monthly', 65000000, 110000000, ARRAY['python', 'tensorflow', 'pytorch'], 'LinkedIn'),

-- PART-TIME ROLES
('frontend', 'mid', 'parttime', 'remote', 'agency', 'monthly', 8000000, 15000000, ARRAY['react', 'typescript'], 'Community'),
('backend', 'mid', 'parttime', 'remote', 'agency', 'monthly', 9000000, 17000000, ARRAY['nodejs', 'postgresql'], 'Community'),
('fullstack', 'mid', 'parttime', 'remote', 'agency', 'monthly', 10000000, 18000000, ARRAY['typescript', 'react', 'nodejs'], 'Community'),
('mobile', 'mid', 'parttime', 'remote', 'agency', 'monthly', 9000000, 16000000, ARRAY['flutter'], 'Community'),

-- INTERNSHIP ROLES
('frontend', 'junior', 'internship', 'jakarta', 'startup', 'monthly', 2000000, 4000000, ARRAY['javascript', 'react'], 'Indeed'),
('backend', 'junior', 'internship', 'jakarta', 'startup', 'monthly', 2000000, 4000000, ARRAY['nodejs', 'postgresql'], 'Indeed'),
('fullstack', 'junior', 'internship', 'jakarta', 'startup', 'monthly', 2500000, 4500000, ARRAY['javascript', 'react', 'nodejs'], 'Indeed'),
('mobile', 'junior', 'internship', 'jakarta', 'startup', 'monthly', 2000000, 4000000, ARRAY['flutter'], 'Indeed'),
('data-analyst', 'junior', 'internship', 'jakarta', 'startup', 'monthly', 2000000, 3500000, ARRAY['python', 'excel'], 'Indeed'),
('qa', 'junior', 'internship', 'jakarta', 'startup', 'monthly', 1500000, 3000000, ARRAY['javascript'], 'Indeed'),

-- MORE CITIES - JAKARTA VARIATIONS
('frontend', 'mid', 'fulltime', 'jakarta', 'agency', 'monthly', 14000000, 22000000, ARRAY['typescript', 'react'], 'Indeed'),
('backend', 'mid', 'fulltime', 'jakarta', 'agency', 'monthly', 15000000, 24000000, ARRAY['nodejs', 'postgresql'], 'Indeed'),
('fullstack', 'mid', 'fulltime', 'jakarta', 'agency', 'monthly', 16000000, 26000000, ARRAY['typescript', 'react', 'nodejs'], 'Indeed'),

-- MORE CITIES - SURABAYA
('frontend', 'senior', 'fulltime', 'surabaya', 'startup', 'monthly', 20000000, 35000000, ARRAY['typescript', 'react', 'nextjs'], 'Tech in Asia'),
('backend', 'senior', 'fulltime', 'surabaya', 'startup', 'monthly', 22000000, 38000000, ARRAY['nodejs', 'postgresql', 'redis'], 'Tech in Asia'),
('fullstack', 'senior', 'fulltime', 'surabaya', 'startup', 'monthly', 24000000, 40000000, ARRAY['typescript', 'react', 'nodejs'], 'Tech in Asia'),
('devops', 'mid', 'fulltime', 'surabaya', 'corporate', 'monthly', 18000000, 32000000, ARRAY['docker', 'kubernetes'], 'Glassdoor'),
('data-engineer', 'mid', 'fulltime', 'surabaya', 'corporate', 'monthly', 18000000, 32000000, ARRAY['python', 'spark'], 'Glassdoor'),

-- MORE CITIES - YOGYAKARTA
('frontend', 'senior', 'fulltime', 'yogyakarta', 'startup', 'monthly', 18000000, 30000000, ARRAY['typescript', 'react'], 'Tech in Asia'),
('backend', 'senior', 'fulltime', 'yogyakarta', 'startup', 'monthly', 20000000, 34000000, ARRAY['nodejs', 'postgresql'], 'Tech in Asia'),
('fullstack', 'senior', 'fulltime', 'yogyakarta', 'startup', 'monthly', 22000000, 36000000, ARRAY['typescript', 'react', 'nodejs'], 'Tech in Asia'),

-- MORE CITIES - MEDAN
('frontend', 'mid', 'fulltime', 'medan', 'startup', 'monthly', 10000000, 17000000, ARRAY['typescript', 'react'], 'Indeed'),
('backend', 'mid', 'fulltime', 'medan', 'startup', 'monthly', 11000000, 18000000, ARRAY['nodejs', 'postgresql'], 'Indeed'),
('fullstack', 'mid', 'fulltime', 'medan', 'startup', 'monthly', 12000000, 20000000, ARRAY['typescript', 'react', 'nodejs'], 'Indeed'),

-- MORE CITIES - SEMARANG
('frontend', 'mid', 'fulltime', 'semarang', 'startup', 'monthly', 10000000, 17000000, ARRAY['typescript', 'react'], 'Indeed'),
('backend', 'mid', 'fulltime', 'semarang', 'startup', 'monthly', 11000000, 18000000, ARRAY['nodejs', 'postgresql'], 'Indeed'),
('fullstack', 'mid', 'fulltime', 'semarang', 'startup', 'monthly', 12000000, 20000000, ARRAY['typescript', 'react', 'nodejs'], 'Indeed'),

-- MORE REMOTE ROLES
('frontend', 'mid', 'fulltime', 'remote', 'startup', 'monthly', 18000000, 30000000, ARRAY['typescript', 'react', 'nextjs'], 'NodeFlair'),
('backend', 'mid', 'fulltime', 'remote', 'startup', 'monthly', 20000000, 35000000, ARRAY['nodejs', 'postgresql', 'redis'], 'NodeFlair'),
('fullstack', 'mid', 'fulltime', 'remote', 'startup', 'monthly', 22000000, 38000000, ARRAY['typescript', 'react', 'nodejs'], 'NodeFlair'),
('devops', 'mid', 'fulltime', 'remote', 'startup', 'monthly', 25000000, 42000000, ARRAY['kubernetes', 'terraform', 'aws'], 'NodeFlair'),
('data-engineer', 'mid', 'fulltime', 'remote', 'startup', 'monthly', 28000000, 45000000, ARRAY['python', 'spark', 'airflow'], 'NodeFlair');
