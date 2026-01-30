'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { SubmitDialog } from '@/components/SubmitDialog'
import { useTranslations } from 'next-intl'

type ShareSalaryButtonProps = {
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

export function ShareSalaryButton({ locale, translations }: ShareSalaryButtonProps) {
  const fbT = useTranslations('floatingButton')
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showButton) return null

  return (
    <SubmitDialog locale={locale} translations={translations}>
      <Button
        className="fixed bottom-6 right-6 rounded-full shadow-lg bg-gradient-to-r from-green-400 to-emerald-400 text-black border-0 hover:from-green-500 hover:to-emerald-500 z-50 gap-2 transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-4"
        size="lg"
      >
        {fbT('shareSalary')}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </SubmitDialog>
  )
}
