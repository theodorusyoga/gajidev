'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatCurrency, getPaymentSuffix } from '@/lib/constants'
import { TrendingUp, Minus } from 'lucide-react'

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
  translations: {
    title: string
    salaryRange: string
    median: string
    basedOn: string
    noData: string
    tryAdjusting: string
  }
}

export function SalaryCard({ result, paymentType, locale, translations }: SalaryCardProps) {
  const suffix = getPaymentSuffix(paymentType || 'monthly', locale)

  if (!result) {
    return (
      <Card className="border-dashed">
        <CardContent className="pt-6">
          <div className="text-center text-muted-foreground">
            <Minus className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="font-medium">{translations.noData}</p>
            <p className="text-sm mt-1">{translations.tryAdjusting}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-500" />
          {translations.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{translations.salaryRange}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-green-500">
              {formatCurrency(result.salary_min)}
            </span>
            <span className="text-muted-foreground">-</span>
            <span className="text-2xl font-bold text-green-500">
              {formatCurrency(result.salary_max)}
            </span>
            <span className="text-sm text-muted-foreground">{suffix}</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{translations.median}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">
              {formatCurrency(result.median)}
            </span>
            <span className="text-sm text-muted-foreground">{suffix}</span>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">
            {translations.basedOn
              .replace('__count__', result.count.toString())
              .replace('__sources__', result.sources)}
          </p>
          <div className="flex gap-2 mt-2 flex-wrap">
            {result.sources.split(', ').map((source) => (
              <Badge key={source} variant="secondary" className="text-xs">
                {source}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
