'use client'

import { useState, useEffect, useCallback } from 'react'
import { Filters } from './Filters'
import { SalaryCard } from './SalaryCard'
import { Card, CardContent } from '@/components/ui/card'
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
      selectPlaceholder: string
    }
    result: {
      title: string
      salaryRange: string
      median: string
      basedOn: string
      noData: string
      tryAdjusting: string
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
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <Filters
            locale={locale}
            filters={filters}
            onFilterChange={handleFilterChange}
            translations={translations.filters}
          />
        </CardContent>
      </Card>

      {loading ? (
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      ) : (
        <SalaryCard
          result={result}
          paymentType={filters.paymentType}
          locale={locale}
          translations={translations.result}
        />
      )}
    </div>
  )
}
