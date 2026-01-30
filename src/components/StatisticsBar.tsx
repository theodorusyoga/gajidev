'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Database, Briefcase, TrendingUp } from 'lucide-react'

type StatItemProps = {
  icon: React.ReactNode
  value: number
  label: string
  duration?: number
}

function StatItem({ icon, value, label, duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration])

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('id-ID').format(num)
  }

  return (
    <div className="flex flex-col items-center gap-1 md:gap-2 p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
      <div className="p-2 md:p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-lg md:text-2xl font-bold gradient-text">
          {formatNumber(count)}+
        </p>
        <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">{label}</p>
      </div>
    </div>
  )
}

export function StatisticsBar() {
  const t = useTranslations('stats')
  const [statsData, setStatsData] = useState({
    salaries: 0,
    roles: 0,
    comparisons: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats')
        const data = await response.json()
        setStatsData(data)
      } catch (error) {
        console.error('Error fetching statistics:', error)
      }
    }

    fetchStats()
  }, [])

  const stats = [
    {
      icon: <Database className="h-5 w-5 text-purple-400" />,
      value: statsData.salaries,
      label: t('salaries'),
    },
    {
      icon: <Briefcase className="h-5 w-5 text-pink-400" />,
      value: statsData.roles,
      label: t('roles'),
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-cyan-400" />,
      value: statsData.comparisons,
      label: t('comparisons'),
    },
  ]

  return (
    <div className="mb-8">
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            duration={2000 + index * 200}
          />
        ))}
      </div>
    </div>
  )
}
