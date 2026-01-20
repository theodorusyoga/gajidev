import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  
  const role = searchParams.get('role')
  const paymentType = searchParams.get('payment_type') || 'monthly'

  if (!role) {
    return NextResponse.json(
      { error: 'Role is required' },
      { status: 400 }
    )
  }

  try {
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
      return NextResponse.json({ buckets: [] })
    }

    // Extract salaries (use average of min and max) and sort
    const salaries = data.map(d => Math.round((d.salary_min + d.salary_max) / 2)).sort((a, b) => a - b)
    const minSalary = salaries[0]
    const maxSalary = salaries[salaries.length - 1]

    // Create 5 buckets
    const bucketCount = 5
    const bucketSize = (maxSalary - minSalary) / bucketCount

    const buckets = Array.from({ length: bucketCount }, (_, i) => {
      const bucketMin = minSalary + i * bucketSize
      const bucketMax = i === bucketCount - 1 ? maxSalary + 1 : minSalary + (i + 1) * bucketSize

      const count = salaries.filter(s => s >= bucketMin && s < bucketMax).length
      const percentage = (count / salaries.length) * 100

      return {
        min: Math.round(bucketMin),
        max: Math.round(bucketMax - 1),
        count,
        percentage,
      }
    })

    return NextResponse.json({ buckets })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
