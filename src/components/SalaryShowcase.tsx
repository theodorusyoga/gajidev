'use client'

import { motion } from 'framer-motion'
import { formatCurrency, getLabel, formatTechStackDisplay, getPaymentSuffix, getYearsText, ROLES, EMPLOYMENT_TYPES, CITIES, COMPANY_TYPES } from '@/lib/constants'

const sampleSubmissions = [
  { role: 'frontend', years_of_experience: 3, employment_type: 'fulltime', city: 'jakarta', company_type: 'startup', payment_type: 'monthly', salary: 25000000, tech_stack: ['react', 'typescript', 'node'] },
  { role: 'backend', years_of_experience: 5, employment_type: 'fulltime', city: 'bandung', company_type: 'corporate', payment_type: 'monthly', salary: 35000000, tech_stack: ['python', 'postgresql', 'docker', 'kubernetes'] },
  { role: 'fullstack', years_of_experience: 4, employment_type: 'fulltime', city: 'jakarta', company_type: 'startup', payment_type: 'monthly', salary: 40000000, tech_stack: ['react', 'node', 'mongodb'] },
  { role: 'mobile', years_of_experience: 2, employment_type: 'fulltime', city: 'surabaya', company_type: 'startup', payment_type: 'monthly', salary: 20000000, tech_stack: ['react-native', 'typescript', 'firebase'] },
  { role: 'devops', years_of_experience: 6, employment_type: 'fulltime', city: 'jakarta', company_type: 'corporate', payment_type: 'monthly', salary: 50000000, tech_stack: ['kubernetes', 'docker', 'aws', 'terraform'] },
  { role: 'data', years_of_experience: 4, employment_type: 'fulltime', city: 'jakarta', company_type: 'corporate', payment_type: 'monthly', salary: 38000000, tech_stack: ['python', 'spark', 'postgresql', 'airflow'] },
  { role: 'qa', years_of_experience: 3, employment_type: 'fulltime', city: 'yogyakarta', company_type: 'startup', payment_type: 'monthly', salary: 18000000, tech_stack: ['selenium', 'cypress', 'jest'] },
  { role: 'frontend', years_of_experience: 1, employment_type: 'fulltime', city: 'bandung', company_type: 'startup', payment_type: 'monthly', salary: 12000000, tech_stack: ['react', 'javascript', 'tailwind'] },
]

type SalaryShowcaseProps = {
  locale?: string
}

export function SalaryShowcase({ locale = 'en' }: SalaryShowcaseProps) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -2400],
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
        {[...sampleSubmissions, ...sampleSubmissions, ...sampleSubmissions].map((submission, index) => {
          const roleLabel = getLabel(ROLES.find(r => r.value === submission.role) || { label: submission.role }, locale)
          const employmentLabel = getLabel(EMPLOYMENT_TYPES.find(e => e.value === submission.employment_type) || { label: submission.employment_type }, locale)
          const cityLabel = getLabel(CITIES.find(c => c.value === submission.city) || { label: submission.city }, locale)
          const companyLabel = getLabel(COMPANY_TYPES.find(ct => ct.value === submission.company_type) || { label: submission.company_type }, locale)
          const paymentSuffix = getPaymentSuffix(submission.payment_type, locale)
          const yearsText = getYearsText(locale)
          const displayedTechs = submission.tech_stack.slice(0, 3)
          const remainingTechs = submission.tech_stack.length - 3

          return (
            <div
              key={index}
              className="flex-shrink-0 w-90 p-4 rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-950/20 to-emerald-950/10 backdrop-blur-sm"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-sm">{roleLabel} • {submission.years_of_experience} {yearsText}</h3>
                </div>

                <div>
                  <p className="text-lg font-bold gradient-text">
                    {formatCurrency(submission.salary)}
                  </p>
                  <p className="text-xs text-muted-foreground">{paymentSuffix}</p>
                </div>

                <p className="text-xs text-muted-foreground">
                  {employmentLabel} • {cityLabel} • {companyLabel}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {displayedTechs.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/20 border border-green-500/30 text-green-100"
                    >
                      {formatTechStackDisplay(tech)}
                    </span>
                  ))}
                  {remainingTechs > 0 && (
                    <span className="text-xs text-muted-foreground pt-1">
                      +{remainingTechs} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )
}
