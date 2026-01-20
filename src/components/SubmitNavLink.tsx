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
      <button className="text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-600/35 flex items-center gap-2">
        {label}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </SubmitDialog>
  )
}
