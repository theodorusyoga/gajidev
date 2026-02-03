'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Loader2 } from 'lucide-react'

type SalaryBucket = {
  min: number
  max: number
  count: number
  percentage: number
}

type SalaryDistributionProps = {
  role: string
  paymentType: string
}

export function SalaryDistribution({ role, paymentType }: SalaryDistributionProps) {
  const t = useTranslations('distribution')
  const [buckets, setBuckets] = useState<SalaryBucket[]>([])
  const [loading, setLoading] = useState(false)
  const [maxCount, setMaxCount] = useState(0)

  useEffect(() => {
    const fetchDistribution = async () => {
      if (!role) return

      setLoading(true)
      try {
        const params = new URLSearchParams()
        params.append('role', role)
        params.append('payment_type', paymentType)

        const response = await fetch(`/api/salaries/distribution?${params.toString()}`)
        const data = await response.json()

        if (data.buckets) {
          setBuckets(data.buckets)
          setMaxCount(Math.max(...data.buckets.map((b: SalaryBucket) => b.count)))
        }
      } catch (error) {
        console.error('Error fetching salary distribution:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDistribution()
  }, [role, paymentType])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-green-600" />
      </div>
    )
  }

  if (!buckets || buckets.length === 0) {
    return null
  }

  const formatSalary = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      notation: 'compact',
      compactDisplay: 'short',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold gradient-text">{t('title')}</h3>
      
      <div className="space-y-3">
        {buckets.map((bucket, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {formatSalary(bucket.min)} - {formatSalary(bucket.max)}
              </span>
              <span className="text-foreground font-medium">{bucket.count} {t('people')}</span>
            </div>
            
            <div className="w-full bg-green-500/10 rounded-full h-2 overflow-hidden border border-green-500/20">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300"
                style={{
                  width: `${maxCount > 0 ? (bucket.count / maxCount) * 100 : 0}%`,
                }}
              />
            </div>
            
            <div className="text-xs text-muted-foreground">
              {bucket.percentage.toFixed(1)}% {t('ofSubmissions')}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
