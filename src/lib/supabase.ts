import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type SalaryData = {
  id: string
  role: string
  experience_level: string
  years_min: number
  years_max: number
  employment_type: string
  city: string | null
  company_type: string | null
  payment_type: string
  salary_min: number
  salary_max: number
  currency: string
  source: string | null
  created_at: string
}

export type Submission = {
  id: string
  role: string
  years_of_experience: number
  employment_type: string
  city: string | null
  company_type: string | null
  payment_type: string
  salary: number
  tech_stack: string[] | null
  is_verified: boolean
  created_at: string
}
