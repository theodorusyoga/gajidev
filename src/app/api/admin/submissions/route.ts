import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')
  const isSuspicious = searchParams.get('is_suspicious')

  let query = supabase.from('submissions').select('*')

  if (status) {
    query = query.eq('status', status)
  }

  if (isSuspicious === 'true') {
    query = query.eq('is_suspicious', true)
  }

  const { data, error } = await query.order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ submissions: data })
}

export async function PATCH(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { submissionId, status, isSuspicious, suspiciousReason } = await request.json()

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  const updateData: Record<string, unknown> = {
    status,
    is_suspicious: isSuspicious,
    approved_at: new Date().toISOString(),
  }

  if (suspiciousReason) {
    updateData.suspicious_reason = suspiciousReason
  }

  const { data, error } = await supabase
    .from('submissions')
    .update(updateData)
    .eq('id', submissionId)
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ submission: data[0] })
}

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { submissionId } = await request.json()

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  const { data: submission, error: fetchError } = await supabase
    .from('submissions')
    .select('*')
    .eq('id', submissionId)
    .single()

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 400 })
  }

  const { data: salaryData, error: insertError } = await supabase
    .from('salary_data')
    .insert({
      role: submission.role,
      experience_level: submission.years_of_experience <= 2 ? 'junior' : submission.years_of_experience <= 5 ? 'mid' : 'senior',
      years_min: submission.years_of_experience,
      years_max: submission.years_of_experience,
      employment_type: submission.employment_type,
      city: submission.city,
      company_type: submission.company_type,
      payment_type: submission.payment_type,
      salary_min: submission.salary,
      salary_max: submission.salary,
      tech_stack: submission.tech_stack || [],
      source: 'Community',
    })
    .select()

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 400 })
  }

  const { error: updateError } = await supabase
    .from('submissions')
    .update({ status: 'approved', approval_type: 'manual' })
    .eq('id', submissionId)

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 400 })
  }

  return NextResponse.json({ salary: salaryData[0] })
}
