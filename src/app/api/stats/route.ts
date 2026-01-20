import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Get total salary data points
    const { count: salaryCount, error: salaryError } = await supabase
      .from('salary_data')
      .select('*', { count: 'exact', head: true })

    if (salaryError) {
      console.error('Error fetching salary count:', salaryError)
    }

    // Get unique roles count
    const { data: allRoles, error: rolesError } = await supabase
      .from('salary_data')
      .select('role')

    if (rolesError) {
      console.error('Error fetching roles:', rolesError)
    }

    const uniqueRoles = allRoles ? new Set(allRoles.map(r => r.role)).size : 0

    // Get total salary comparisons (analytics)
    const { count: comparisonsCount, error: comparisonsError } = await supabase
      .from('salary_comparisons')
      .select('id', { count: 'exact', head: true })

    if (comparisonsError) {
      console.error('Error fetching comparisons count:', comparisonsError)
    }

    return NextResponse.json({
      salaries: salaryCount || 0,
      roles: uniqueRoles,
      comparisons: comparisonsCount || 0,
    })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    )
  }
}
