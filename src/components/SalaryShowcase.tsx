'use client'

import { motion } from 'framer-motion'
import { formatCurrency } from '@/lib/constants'
import { TrendingUp } from 'lucide-react'

const sampleSalaries = [
  { role: 'Frontend Developer', level: 'Senior', min: 25000000, max: 45000000, city: 'Jakarta' },
  { role: 'Backend Developer', level: 'Mid', min: 16000000, max: 30000000, city: 'Bandung' },
  { role: 'Fullstack Developer', level: 'Senior', min: 30000000, max: 55000000, city: 'Jakarta' },
  { role: 'Mobile Developer', level: 'Mid', min: 15000000, max: 28000000, city: 'Surabaya' },
  { role: 'DevOps Engineer', level: 'Senior', min: 35000000, max: 60000000, city: 'Jakarta' },
  { role: 'Data Engineer', level: 'Mid', min: 18000000, max: 35000000, city: 'Jakarta' },
  { role: 'QA Engineer', level: 'Mid', min: 12000000, max: 22000000, city: 'Yogyakarta' },
  { role: 'Frontend Developer', level: 'Junior', min: 8000000, max: 15000000, city: 'Bandung' },
]

export function SalaryShowcase() {
  return (
    <div className="relative overflow-hidden py-8 mb-8">
      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...sampleSalaries, ...sampleSalaries, ...sampleSalaries].map((salary, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 p-4 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-pink-950/10 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-sm">{salary.role}</h3>
                <p className="text-xs text-muted-foreground">{salary.level} • {salary.city}</p>
              </div>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </div>
            <div className="mt-3">
              <p className="text-xs text-muted-foreground mb-1">Salary Range</p>
              <p className="text-lg font-bold gradient-text">
                {formatCurrency(salary.min)} - {formatCurrency(salary.max)}
              </p>
              <p className="text-xs text-muted-foreground">/bulan</p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )
}
