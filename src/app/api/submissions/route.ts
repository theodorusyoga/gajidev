import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

function detectOutliers(
  salary: number,
  yearsOfExperience: number,
  paymentType: string
): { isSuspicious: boolean; reason?: string } {
  // Normalize salary to monthly for comparison
  let monthlySalary = salary
  if (paymentType === 'yearly') {
    monthlySalary = salary / 12
  } else if (paymentType === 'hourly') {
    monthlySalary = salary * 160 // ~160 hours per month
  }

  // Check for unrealistic combinations
  // Junior (0-2 years) should earn 5M-20M monthly
  if (yearsOfExperience <= 2) {
    if (monthlySalary < 3000000 || monthlySalary > 50000000) {
      return {
        isSuspicious: true,
        reason: `Junior with ${yearsOfExperience}y exp earning ${monthlySalary}M/month seems unrealistic`,
      }
    }
  }

  // Mid (3-5 years) should earn 12M-40M monthly
  if (yearsOfExperience > 2 && yearsOfExperience <= 5) {
    if (monthlySalary < 8000000 || monthlySalary > 80000000) {
      return {
        isSuspicious: true,
        reason: `Mid-level with ${yearsOfExperience}y exp earning ${monthlySalary}M/month seems unrealistic`,
      }
    }
  }

  // Senior (6+ years) should earn 25M-100M+ monthly
  if (yearsOfExperience > 5) {
    if (monthlySalary < 15000000 || monthlySalary > 200000000) {
      return {
        isSuspicious: true,
        reason: `Senior with ${yearsOfExperience}y exp earning ${monthlySalary}M/month seems unrealistic`,
      }
    }
  }

  // Check for extreme experience levels
  if (yearsOfExperience > 60) {
    return {
      isSuspicious: true,
      reason: `Experience level of ${yearsOfExperience} years is unrealistic`,
    }
  }

  return { isSuspicious: false }
}

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

    // Detect outliers
    const outlierCheck = detectOutliers(
      parseInt(salary),
      parseInt(years_of_experience),
      payment_type
    )

    // Call database function for atomic transaction
    const { error } = await supabase.rpc('insert_submission_with_auto_approval', {
      p_role: role,
      p_years_of_experience: parseInt(years_of_experience),
      p_employment_type: employment_type,
      p_city: city || null,
      p_company_type: company_type || null,
      p_payment_type: payment_type,
      p_salary: parseInt(salary),
      p_tech_stack: tech_stack || [],
      p_is_suspicious: outlierCheck.isSuspicious,
      p_suspicious_reason: outlierCheck.reason || null
    })

    if (error) {
      console.error('Supabase RPC error:', error)
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
