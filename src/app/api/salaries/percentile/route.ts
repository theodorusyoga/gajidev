import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const role = searchParams.get('role')
  const paymentType = searchParams.get('payment_type') || 'monthly'
  const salary = searchParams.get('salary')
  
  // Optional filter parameters for analytics
  const experienceLevel = searchParams.get('experience_level')
  const employmentType = searchParams.get('employment_type')
  const city = searchParams.get('city')
  const companyType = searchParams.get('company_type')
  const techStack = searchParams.get('tech_stack')

  if (!role || !salary) {
    return NextResponse.json(
      { error: 'Role and salary are required' },
      { status: 400 }
    )
  }

  try {
    const userSalary = parseInt(salary)

    const { data, error } = await supabase
      .from('salary_data')
      .select('salary_min, salary_max')
      .eq('role', role)
      .eq('payment_type', paymentType)

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch salary data' },
        { status: 500 }
      )
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ percentile: 50 })
    }

    // Calculate average salary for each entry
    const salaries = data.map(d => Math.round((d.salary_min + d.salary_max) / 2)).sort((a, b) => a - b)

    // Count how many salaries are below the user's salary
    const belowCount = salaries.filter(s => s < userSalary).length
    const percentile = (belowCount / salaries.length) * 100
    const roundedPercentile = Math.round(percentile * 10) / 10

    // Record analytics (fire and forget)
    supabase.from('salary_comparisons').insert({
      user_salary: userSalary,
      percentile: roundedPercentile,
      role,
      experience_level: experienceLevel,
      employment_type: employmentType,
      city,
      company_type: companyType,
      payment_type: paymentType,
      tech_stack: techStack ? techStack.split(',') : []
    }).then(({ error: analyticsError }) => {
      if (analyticsError) {
        console.error('Analytics error:', analyticsError)
      }
    })

    return NextResponse.json({ percentile: roundedPercentile })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
