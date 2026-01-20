import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      role,
      years_of_experience,
      employment_type,
      city,
      company_type,
      payment_type,
      salary,
      tech_stack
    } = body

    if (!role || years_of_experience === undefined || !employment_type || !payment_type || !salary) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { error } = await supabase.from('submissions').insert({
      role,
      years_of_experience: parseInt(years_of_experience),
      employment_type,
      city: city || null,
      company_type: company_type || null,
      payment_type,
      salary: parseInt(salary),
      tech_stack: tech_stack || null,
      is_verified: false
    })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit data' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Data submitted successfully'
    })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
