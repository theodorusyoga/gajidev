'use client'

import { useState, useEffect, useCallback } from 'react'
import { BadgeFilters } from './BadgeFilters'
import { SalaryCard } from './SalaryCard'
import { Loader2 } from 'lucide-react'

type SalaryResult = {
  salary_min: number
  salary_max: number
  median: number
  count: number
  sources: string
  currency: string
} | null

type CalculatorProps = {
  locale: string
  translations: {
    filters: {
      role: string
      experience: string
      employment: string
      city: string
      company: string
      payment: string
      techStack: string
      selectPlaceholder: string
    }
    result: {
      title: string
      salaryRange: string
      median: string
      basedOn: string
      noData: string
      tryAdjusting: string
      noDataTitle: string
      noDataSubtitle: string
      noDataCta: string
    }
    submit: {
      formTitle: string
      salary: string
      salaryPlaceholder: string
      yearsOfExperience: string
      techStack: string
      techStackPlaceholder: string
      button: string
      submitting: string
      success: string
      successTitle: string
      successSubtitle: string
      error: string
      anonymous: string
      cta: string
      role: string
      employment: string
      city: string
      company: string
      payment: string
      selectPlaceholder: string
    }
  }
}

export function Calculator({ locale, translations }: CalculatorProps) {
  const [filters, setFilters] = useState({
    role: '',
    experience: '',
    employment: '',
    city: '',
    companyType: '',
    paymentType: 'monthly',
    techStack: '',
  })
  const [result, setResult] = useState<SalaryResult>(null)
  const [loading, setLoading] = useState(false)

  const fetchSalaryData = useCallback(async () => {
    if (!filters.role) {
      setResult(null)
      return
    }

    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (filters.role) params.append('role', filters.role)
      if (filters.experience) params.append('experience', filters.experience)
      if (filters.employment) params.append('employment', filters.employment)
      if (filters.city) params.append('city', filters.city)
      if (filters.companyType) params.append('company_type', filters.companyType)
      if (filters.paymentType) params.append('payment_type', filters.paymentType)
      if (filters.techStack) params.append('tech_stack', filters.techStack)

      const response = await fetch(`/api/salaries?${params.toString()}`)
      const data = await response.json()
      setResult(data.data)
    } catch (error) {
      console.error('Error fetching salary data:', error)
      setResult(null)
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchSalaryData()
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [fetchSalaryData])

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-8">
      <div className="py-6">
        <BadgeFilters
          locale={locale}
          filters={filters}
          onFilterChange={handleFilterChange}
          translations={translations.filters}
        />
      </div>

      {loading ? (
        <div className="py-6">
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        </div>
      ) : (
        <SalaryCard
          result={result}
          paymentType={filters.paymentType}
          locale={locale}
          translations={translations.result}
          submitTranslations={translations.submit}
        />
      )}
    </div>
  )
}
