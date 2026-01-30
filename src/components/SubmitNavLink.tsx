'use client'

import { SubmitDialog } from './SubmitDialog'
import { ArrowRight } from 'lucide-react'

type SubmitNavLinkProps = {
  label: string
  locale: string
  translations: {
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

export function SubmitNavLink({ label, locale, translations }: SubmitNavLinkProps) {
  return (
    <SubmitDialog locale={locale} translations={translations}>
      <button className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-black px-4 py-2 rounded-full transition-all duration-200 shadow-lg shadow-green-400/25 hover:shadow-lg hover:shadow-emerald-500/35 flex items-center gap-2">
        {label}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </SubmitDialog>
  )
}
