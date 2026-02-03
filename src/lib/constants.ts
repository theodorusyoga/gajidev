export const ROLES = [
  // Frontend & UI
  { value: 'frontend', label: { en: 'Frontend Developer', id: 'Frontend Developer' } },
  { value: 'ui-engineer', label: { en: 'UI Engineer', id: 'UI Engineer' } },
  { value: 'react-developer', label: { en: 'React Developer', id: 'React Developer' } },
  { value: 'vue-developer', label: { en: 'Vue.js Developer', id: 'Vue.js Developer' } },
  { value: 'angular-developer', label: { en: 'Angular Developer', id: 'Angular Developer' } },

  // Backend
  { value: 'backend', label: { en: 'Backend Developer', id: 'Backend Developer' } },
  { value: 'nodejs-developer', label: { en: 'Node.js Developer', id: 'Node.js Developer' } },
  { value: 'python-developer', label: { en: 'Python Developer', id: 'Python Developer' } },
  { value: 'golang-developer', label: { en: 'Golang Developer', id: 'Golang Developer' } },
  { value: 'java-developer', label: { en: 'Java Developer', id: 'Java Developer' } },
  { value: 'php-developer', label: { en: 'PHP Developer', id: 'PHP Developer' } },
  { value: 'dotnet-developer', label: { en: '.NET Developer', id: '.NET Developer' } },
  { value: 'ruby-developer', label: { en: 'Ruby Developer', id: 'Ruby Developer' } },

  // Fullstack
  { value: 'fullstack', label: { en: 'Full Stack Developer', id: 'Full Stack Developer' } },
  { value: 'software-engineer', label: { en: 'Software Engineer', id: 'Software Engineer' } },
  { value: 'web-developer', label: { en: 'Web Developer', id: 'Web Developer' } },

  // Mobile
  { value: 'mobile', label: { en: 'Mobile Developer', id: 'Mobile Developer' } },
  { value: 'ios-developer', label: { en: 'iOS Developer', id: 'iOS Developer' } },
  { value: 'android-developer', label: { en: 'Android Developer', id: 'Android Developer' } },
  { value: 'react-native', label: { en: 'React Native Developer', id: 'React Native Developer' } },
  { value: 'flutter-developer', label: { en: 'Flutter Developer', id: 'Flutter Developer' } },

  // DevOps & Infrastructure
  { value: 'devops', label: { en: 'DevOps Engineer', id: 'DevOps Engineer' } },
  { value: 'devsecops', label: { en: 'DevSecOps Engineer', id: 'DevSecOps Engineer' } },
  { value: 'sre', label: { en: 'Site Reliability Engineer', id: 'Site Reliability Engineer' } },
  { value: 'platform-engineer', label: { en: 'Platform Engineer', id: 'Platform Engineer' } },
  { value: 'cloud-engineer', label: { en: 'Cloud Engineer', id: 'Cloud Engineer' } },
  { value: 'infrastructure', label: { en: 'Infrastructure Engineer', id: 'Infrastructure Engineer' } },
  { value: 'system-admin', label: { en: 'System Administrator', id: 'System Administrator' } },
  { value: 'network-engineer', label: { en: 'Network Engineer', id: 'Network Engineer' } },
  {
    value: 'data',
    label: {
      en: 'Data Engineer',
      id: 'Data Engineer'
    }
  },

  // Data & AI/ML
  { value: 'data-engineer', label: { en: 'Data Engineer', id: 'Data Engineer' } },
  { value: 'data-scientist', label: { en: 'Data Scientist', id: 'Data Scientist' } },
  { value: 'data-analyst', label: { en: 'Data Analyst', id: 'Data Analyst' } },
  { value: 'ml-engineer', label: { en: 'Machine Learning Engineer', id: 'Machine Learning Engineer' } },
  { value: 'ai-engineer', label: { en: 'AI Engineer', id: 'AI Engineer' } },
  { value: 'bi-developer', label: { en: 'BI Developer', id: 'BI Developer' } },
  { value: 'analytics-engineer', label: { en: 'Analytics Engineer', id: 'Analytics Engineer' } },

  // QA & Testing
  { value: 'qa', label: { en: 'QA Engineer', id: 'QA Engineer' } },
  { value: 'qa-automation', label: { en: 'QA Automation Engineer', id: 'QA Automation Engineer' } },
  { value: 'sdet', label: { en: 'SDET', id: 'SDET' } },
  { value: 'test-engineer', label: { en: 'Test Engineer', id: 'Test Engineer' } },

  // Security
  { value: 'security-engineer', label: { en: 'Security Engineer', id: 'Security Engineer' } },
  { value: 'penetration-tester', label: { en: 'Penetration Tester', id: 'Penetration Tester' } },
  { value: 'security-analyst', label: { en: 'Security Analyst', id: 'Security Analyst' } },

  // Database
  { value: 'dba', label: { en: 'Database Administrator', id: 'Database Administrator' } },
  { value: 'database-engineer', label: { en: 'Database Engineer', id: 'Database Engineer' } },

  // Product & Design
  { value: 'product-engineer', label: { en: 'Product Engineer', id: 'Product Engineer' } },
  { value: 'ux-engineer', label: { en: 'UX Engineer', id: 'UX Engineer' } },

  // Management & Leadership
  { value: 'tech-lead', label: { en: 'Tech Lead', id: 'Tech Lead' } },
  { value: 'engineering-manager', label: { en: 'Engineering Manager', id: 'Engineering Manager' } },
  { value: 'vp-engineering', label: { en: 'VP of Engineering', id: 'VP of Engineering' } },
  { value: 'cto', label: { en: 'CTO', id: 'CTO' } },
  { value: 'architect', label: { en: 'Software Architect', id: 'Software Architect' } },
  { value: 'solutions-architect', label: { en: 'Solutions Architect', id: 'Solutions Architect' } },

  // Specialized
  { value: 'blockchain', label: { en: 'Blockchain Developer', id: 'Blockchain Developer' } },
  { value: 'embedded', label: { en: 'Embedded Engineer', id: 'Embedded Engineer' } },
  { value: 'firmware', label: { en: 'Firmware Engineer', id: 'Firmware Engineer' } },
  { value: 'game-developer', label: { en: 'Game Developer', id: 'Game Developer' } },
  { value: 'ar-vr', label: { en: 'AR/VR Developer', id: 'AR/VR Developer' } },
  { value: 'technical-writer', label: { en: 'Technical Writer', id: 'Technical Writer' } },
  { value: 'support-engineer', label: { en: 'Support Engineer', id: 'Support Engineer' } },
] as const

export const EXPERIENCE_LEVELS = [
  { value: 'junior', label: { en: 'Junior (0-2 years)', id: 'Junior (0-2 tahun)' } },
  { value: 'mid', label: { en: 'Mid-level (3-5 years)', id: 'Mid-level (3-5 tahun)' } },
  { value: 'senior', label: { en: 'Senior (5+ years)', id: 'Senior (5+ tahun)' } },
] as const

export const EMPLOYMENT_TYPES = [
  { value: 'fulltime', label: { en: 'Full-time', id: 'Full-time' } },
  { value: 'freelance', label: { en: 'Freelance', id: 'Freelance' } },
  { value: 'contract', label: { en: 'Contract', id: 'Kontrak' } },
] as const

export const CITIES = [
  { value: 'jakarta', label: 'Jakarta' },
  { value: 'bandung', label: 'Bandung' },
  { value: 'surabaya', label: 'Surabaya' },
  { value: 'yogyakarta', label: 'Yogyakarta' },
  { value: 'remote', label: { en: 'Remote', id: 'Remote' } },
] as const

export const COMPANY_TYPES = [
  { value: 'startup', label: 'Startup' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'agency', label: 'Agency' },
  { value: 'foreign', label: { en: 'Foreign Company', id: 'Perusahaan Asing' } },
] as const

export const PAYMENT_TYPES = [
  { value: 'monthly', label: { en: 'Monthly', id: 'Bulanan' } },
  { value: 'yearly', label: { en: 'Yearly', id: 'Tahunan' } },
  { value: 'hourly', label: { en: 'Hourly', id: 'Per Jam' } },
] as const

export const TECH_STACKS = [
  // Frontend
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'react', label: 'React' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  // Backend
  { value: 'nodejs', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'django', label: 'Django' },
  { value: 'fastapi', label: 'FastAPI' },
  { value: 'golang', label: 'Go' },
  { value: 'java', label: 'Java' },
  { value: 'spring', label: 'Spring Boot' },
  { value: 'php', label: 'PHP' },
  { value: 'laravel', label: 'Laravel' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'rails', label: 'Ruby on Rails' },
  { value: 'dotnet', label: '.NET' },
  { value: 'rust', label: 'Rust' },
  // Mobile
  { value: 'react-native', label: 'React Native' },
  { value: 'flutter', label: 'Flutter' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' },
  // Database
  { value: 'postgresql', label: 'PostgreSQL' },
  { value: 'mysql', label: 'MySQL' },
  { value: 'mongodb', label: 'MongoDB' },
  { value: 'redis', label: 'Redis' },
  { value: 'elasticsearch', label: 'Elasticsearch' },
  { value: 'supabase', label: 'Supabase' },
  { value: 'firebase', label: 'Firebase' },
  // Cloud & DevOps
  { value: 'aws', label: 'AWS' },
  { value: 'gcp', label: 'GCP' },
  { value: 'azure', label: 'Azure' },
  { value: 'docker', label: 'Docker' },
  { value: 'kubernetes', label: 'Kubernetes' },
  { value: 'terraform', label: 'Terraform' },
  { value: 'jenkins', label: 'Jenkins' },
  { value: 'github-actions', label: 'GitHub Actions' },
  // Data & AI
  { value: 'spark', label: 'Apache Spark' },
  { value: 'kafka', label: 'Apache Kafka' },
  { value: 'airflow', label: 'Apache Airflow' },
  { value: 'tensorflow', label: 'TensorFlow' },
  { value: 'pytorch', label: 'PyTorch' },
  { value: 'pandas', label: 'Pandas' },
] as const

export const TECH_STACK_VALUES = TECH_STACKS.map(t => t.value)

export type Role = typeof ROLES[number]['value']
export type ExperienceLevel = typeof EXPERIENCE_LEVELS[number]['value']
export type EmploymentType = typeof EMPLOYMENT_TYPES[number]['value']
export type City = typeof CITIES[number]['value']
export type CompanyType = typeof COMPANY_TYPES[number]['value']
export type PaymentType = typeof PAYMENT_TYPES[number]['value']

export function getLabel(
  item: { label: string | { en: string; id: string } },
  locale: string
): string {
  if (typeof item.label === 'string') {
    return item.label
  }
  return locale === 'id' ? item.label.id : item.label.en
}

export function formatCurrency(amount: number): string {
  const formatted = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)

  return formatted
}

export function getPaymentSuffix(paymentType: string, locale: string): string {
  const suffixes: Record<string, { en: string; id: string }> = {
    monthly: { en: '/month', id: '/bulan' },
    yearly: { en: '/year', id: '/tahun' },
    hourly: { en: '/hour', id: '/jam' },
  }
  return locale === 'id' ? suffixes[paymentType]?.id : suffixes[paymentType]?.en
}

export function getYearsText(locale: string): string {
  return locale === 'id' ? 'tahun' : 'years'
}

export function formatRoleDisplay(roleValue: string): string {
  const role = ROLES.find(r => r.value === roleValue)
  if (role) {
    return role.label.en
  }
  // Fallback: convert kebab-case to Title Case
  return roleValue
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function formatTechStackDisplay(techValue: string): string {
  const tech = TECH_STACKS.find(t => t.value === techValue)
  if (tech) {
    return tech.label
  }
  // Fallback: convert kebab-case to Title Case
  return techValue
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function formatCityDisplay(cityValue: string): string {
  const city = CITIES.find(c => c.value === cityValue)
  if (city) {
    const label = city.label
    return typeof label === 'string' ? label : label.en
  }
  // Fallback: Title Case
  if (cityValue) {
    return cityValue.charAt(0).toUpperCase() + cityValue.slice(1)
  }
  return ''
}

export function formatEmploymentTypeDisplay(employmentValue: string): string {
  const employment = EMPLOYMENT_TYPES.find(e => e.value === employmentValue)
  if (employment) {
    return employment.label.en
  }
  // Fallback: Title Case
  return employmentValue
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function formatExperienceLevelDisplay(levelValue: string): string {
  const level = EXPERIENCE_LEVELS.find(l => l.value === levelValue)
  if (level) {
    return level.label.en
  }
  // Fallback: Title Case
  return levelValue.charAt(0).toUpperCase() + levelValue.slice(1)
}
