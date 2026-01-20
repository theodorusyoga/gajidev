import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  
  const role = searchParams.get('role')
  const experience = searchParams.get('experience')
  const employment = searchParams.get('employment')
  const city = searchParams.get('city')
  const companyType = searchParams.get('company_type')
  const paymentType = searchParams.get('payment_type')

  let query = supabase.from('salary_data').select('*')

  if (role) {
    query = query.eq('role', role)
  }
  if (experience) {
    query = query.eq('experience_level', experience)
  }
  if (employment) {
    query = query.eq('employment_type', employment)
  }
  if (city) {
    query = query.eq('city', city)
  }
  if (companyType) {
    query = query.eq('company_type', companyType)
  }
  if (paymentType) {
    query = query.eq('payment_type', paymentType)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (!data || data.length === 0) {
    return NextResponse.json({
      data: null,
      message: 'No data found for the selected filters'
    })
  }

  const salaryMin = Math.min(...data.map(d => d.salary_min))
  const salaryMax = Math.max(...data.map(d => d.salary_max))
  const median = Math.round((salaryMin + salaryMax) / 2)
  
  const sources = [...new Set(data.map(d => d.source).filter(Boolean))].join(', ')

  return NextResponse.json({
    data: {
      salary_min: salaryMin,
      salary_max: salaryMax,
      median: median,
      count: data.length,
      sources: sources || 'Community',
      currency: 'IDR'
    }
  })
}
