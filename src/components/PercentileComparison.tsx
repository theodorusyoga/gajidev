'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowUp, TrendingUp } from 'lucide-react'
import { formatCurrency } from '@/lib/constants'
import { event } from '@/lib/analytics'

const percentileGradients = {
  topTier: 'from-emerald-500/60 via-green-500/60 to-teal-500/60',
  aboveAverage: 'from-cyan-500/60 via-blue-500/60 to-indigo-500/60',
  aroundAverage: 'from-amber-500/60 via-yellow-500/60 to-orange-500/60',
  belowAverage: 'from-orange-500/60 via-red-500/60 to-rose-500/60',
}

type PercentileComparisonProps = {
  role: string
  paymentType: string
  salaryMin: number
  salaryMax: number
  filters?: {
    experienceLevel?: string
    employmentType?: string
    city?: string
    companyType?: string
    techStack?: string[]
  }
}

export function PercentileComparison({
  role,
  paymentType,
  salaryMin,
  salaryMax,
  filters,
}: PercentileComparisonProps) {
  const t = useTranslations('percentile')
  const tLabel = useTranslations()
  const [userSalary, setUserSalary] = useState('')
  const [displaySalary, setDisplaySalary] = useState('')
  const [percentile, setPercentile] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const formatSalaryWithSeparator = (value: string) => {
    const numValue = value.replace(/\D/g, '')
    return numValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    setUserSalary(value)
    setDisplaySalary(formatSalaryWithSeparator(value))
    // Hide results when user enters new amount
    setPercentile(null)
  }

  const getPaymentTypeTranslation = (type: string) => {
    const key = type.toLowerCase() as 'monthly' | 'yearly' | 'hourly'
    return t(key)
  }

  const handleCalculate = async () => {
    if (!userSalary) return

    setLoading(true)
    try {
      const params = new URLSearchParams()
      params.append('role', role)
      params.append('payment_type', paymentType)
      params.append('salary', userSalary)

      // Add filter data for analytics
      if (filters?.experienceLevel) params.append('experience_level', filters.experienceLevel)
      if (filters?.employmentType) params.append('employment_type', filters.employmentType)
      if (filters?.city) params.append('city', filters.city)
      if (filters?.companyType) params.append('company_type', filters.companyType)
      if (filters?.techStack && filters.techStack.length > 0) {
        params.append('tech_stack', filters.techStack.join(','))
      }

      const response = await fetch(`/api/salaries/percentile?${params.toString()}`)
      const data = await response.json()

      if (data.percentile !== undefined) {
        setPercentile(data.percentile)
        
        // Track percentile comparison event
        event('percentile_calculated', {
          role: role,
          salary: parseInt(userSalary),
          percentile: data.percentile,
          payment_type: paymentType,
          experience_level: filters?.experienceLevel || 'not_set',
          employment_type: filters?.employmentType || 'not_set',
          city: filters?.city || 'not_set',
          company_type: filters?.companyType || 'not_set',
          tech_stack_count: filters?.techStack?.length || 0,
        })
      }
    } catch (error) {
      console.error('Error calculating percentile:', error)
    } finally {
      setLoading(false)
    }
  }

  const getPercentileMessage = (p: number) => {
    if (p >= 90) return t('topTier')
    if (p >= 75) return t('topQuarter')
    if (p >= 50) return t('aboveAverage')
    if (p >= 25) return t('aroundAverage')
    return t('belowAverage')
  }

  const getPercentileColor = (p: number) => {
    if (p >= 75) return percentileGradients.topTier
    if (p >= 50) return percentileGradients.aboveAverage
    if (p >= 25) return percentileGradients.aroundAverage
    return percentileGradients.belowAverage
  }

  const getRecommendation = (p: number) => {
    if (p >= 75) return t('recommendation1')
    if (p >= 50) return t('recommendation2')
    return t('recommendation3')
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold gradient-text">{t('title')}</h3>

      <div className="space-y-3">
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">
            {t('label')} ({getPaymentTypeTranslation(paymentType)})
          </label>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="e.g., 15.000.000"
              value={displaySalary}
              onChange={handleSalaryChange}
              className="flex-1 bg-purple-500/10 border-purple-500/30 focus:border-purple-500/50"
            />
            <Button
              onClick={handleCalculate}
              disabled={!userSalary || loading}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            >
              {loading ? t('buttonLoading') : t('button')}
            </Button>
          </div>
        </div>

        {percentile !== null && (
          <div className="space-y-3 pt-4 border-t border-purple-500/20">
            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${getPercentileColor(percentile)} p-6 shadow-lg`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -ml-12 -mb-12" />
              
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-medium">{tLabel('percentileLabel')}</p>
                    <p className="text-white font-bold text-2xl">{percentile.toFixed(1)} {t('percentileRank')}</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm font-medium">
                  {getPercentileMessage(percentile)}
                </p>
              </div>
            </div>

            <div className="space-y-3 bg-purple-500/5 rounded-xl p-4 border border-purple-500/10">
              <p className="text-sm text-muted-foreground">
                {t('message')
                  .replace('__salary__', formatCurrency(parseInt(userSalary)))
                  .replace('__percentile__', percentile.toFixed(1))
                  .replace('__role__', role)
                  .replace('__paymentType__', getPaymentTypeTranslation(paymentType))}
              </p>

              <div className="flex items-start gap-2 text-sm bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3 border border-green-500/20">
                <ArrowUp className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-green-300">{getRecommendation(percentile)}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-lg p-3 border border-purple-500/20">
                <p className="text-muted-foreground text-xs mb-1">{t('min')}</p>
                <p className="font-bold text-foreground">{formatCurrency(salaryMin)}</p>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 rounded-lg p-3 border border-pink-500/20">
                <p className="text-muted-foreground text-xs mb-1">{t('yourSalary')}</p>
                <p className="font-bold text-foreground">{formatCurrency(parseInt(userSalary))}</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-lg p-3 border border-cyan-500/20">
                <p className="text-muted-foreground text-xs mb-1">{t('max')}</p>
                <p className="font-bold text-foreground">{formatCurrency(salaryMax)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
