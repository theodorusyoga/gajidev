export const ROLES = [
  { value: 'frontend', label: { en: 'Frontend Developer', id: 'Frontend Developer' } },
  { value: 'backend', label: { en: 'Backend Developer', id: 'Backend Developer' } },
  { value: 'fullstack', label: { en: 'Full Stack Developer', id: 'Full Stack Developer' } },
  { value: 'mobile', label: { en: 'Mobile Developer', id: 'Mobile Developer' } },
  { value: 'devops', label: { en: 'DevOps Engineer', id: 'DevOps Engineer' } },
  { value: 'data', label: { en: 'Data Engineer/Scientist', id: 'Data Engineer/Scientist' } },
  { value: 'qa', label: { en: 'QA Engineer', id: 'QA Engineer' } },
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
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue', 'Angular',
  'Node.js', 'Python', 'Go', 'Java', 'PHP', 'Laravel',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
  'AWS', 'GCP', 'Docker', 'Kubernetes'
] as const

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
