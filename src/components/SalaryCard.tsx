'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency, getPaymentSuffix } from '@/lib/constants'
import { Sparkles, ArrowRight, Filter } from 'lucide-react'
import { SubmitDialog } from './SubmitDialog'
import { SalaryDistribution } from './SalaryDistribution'
import { PercentileComparison } from './PercentileComparison'

type SalaryResult = {
  salary_min: number
  salary_max: number
  median: number
  count: number
  sources: string
  currency: string
} | null

type SalaryCardProps = {
  result: SalaryResult
  paymentType: string
  locale: string
  role: string
  filters?: {
    experienceLevel?: string
    employmentType?: string
    city?: string
    companyType?: string
    techStack?: string[]
  }
  translations: {
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
  submitTranslations: {
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

export function SalaryCard({ result, paymentType, locale, role, filters, translations, submitTranslations }: SalaryCardProps) {
  const suffix = getPaymentSuffix(paymentType || 'monthly', locale)

  if (!result) {
    return (
      <div>
        <div className="max-w-xl mx-auto text-center bg-gradient-to-b from-purple-950/30 to-transparent rounded-3xl p-8 border border-purple-500/10">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
            <Filter className="h-8 w-8 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold mb-3 gradient-text">{translations.noDataTitle}</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {translations.noDataSubtitle}
          </p>
          <SubmitDialog locale={locale} translations={submitTranslations}>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 gap-2">
              {translations.noDataCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </SubmitDialog>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950/50 via-background to-pink-950/30 border border-purple-500/20 p-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <h2 className="text-xl font-bold gradient-text">{translations.title}</h2>
            </div>
            
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{translations.salaryRange}</p>
                <div className="flex items-baseline justify-center gap-3 flex-wrap">
                  <span className="text-3xl md:text-4xl font-bold gradient-text">
                    {formatCurrency(result.salary_min)}
                  </span>
                  <span className="text-muted-foreground text-xl">-</span>
                  <span className="text-3xl md:text-4xl font-bold gradient-text">
                    {formatCurrency(result.salary_max)}
                  </span>
                  <span className="text-sm text-muted-foreground">{suffix}</span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-purple-500/10">
                <p className="text-sm text-muted-foreground">{translations.median}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">
                    {formatCurrency(result.median)}
                  </span>
                  <span className="text-sm text-muted-foreground">{suffix}</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-xs text-muted-foreground mb-3">
                  {translations.basedOn
                    .replace('__count__', result.count.toString())
                    .replace('__sources__', result.sources)}
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  {result.sources.split(', ').map((source) => (
                    <Badge key={source} variant="outline" className="text-xs border-purple-500/30 text-purple-300">
                      {source}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/20 space-y-8">
          <SalaryDistribution role={role} paymentType={paymentType} />
          
          <div className="border-t border-purple-500/20 pt-8">
            <PercentileComparison
              role={role}
              paymentType={paymentType}
              salaryMin={result.salary_min}
              salaryMax={result.salary_max}
              filters={filters}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
