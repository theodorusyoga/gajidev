'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ROLES,
  EMPLOYMENT_TYPES,
  CITIES,
  COMPANY_TYPES,
  PAYMENT_TYPES,
  TECH_STACKS,
  getLabel,
} from '@/lib/constants'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Lock, X, ChevronDown } from 'lucide-react'

type SubmitDialogProps = {
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
    error: string
    anonymous: string
    role: string
    employment: string
    city: string
    company: string
    payment: string
    selectPlaceholder: string
    cta: string
    successTitle: string
    successSubtitle: string
  }
  children: React.ReactNode
}

export function SubmitDialog({ locale, translations, children }: SubmitDialogProps) {
  const [open, setOpen] = useState(false)
  const [expandedTechStack, setExpandedTechStack] = useState(false)
  const [formData, setFormData] = useState({
    role: '',
    years_of_experience: '',
    employment_type: '',
    city: '',
    company_type: '',
    payment_type: 'monthly',
    salary: '',
    tech_stack: [] as string[],
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setTimeout(() => {
          setOpen(false)
          setStatus('idle')
          setFormData({
            role: '',
            years_of_experience: '',
            employment_type: '',
            city: '',
            company_type: '',
            payment_type: 'monthly',
            salary: '',
            tech_stack: [],
          })
        }, 3000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const toggleTechStack = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      tech_stack: prev.tech_stack.includes(tech)
        ? prev.tech_stack.filter((t) => t !== tech)
        : [...prev.tech_stack, tech],
    }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto from-green-950/50 via-background to-emerald-950/30 border-green-500/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-green-600" />
            <span className="gradient-text">{translations.formTitle}</span>
          </DialogTitle>
          <DialogDescription className="flex items-center gap-2 text-muted-foreground">
            <Lock className="h-3 w-3" />
            {translations.anonymous}
          </DialogDescription>
        </DialogHeader>

        {status === 'success' ? (
          <div className="py-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center animate-pulse">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 gradient-text">{translations.successTitle}</h3>
            <p className="text-muted-foreground max-w-md mx-auto">{translations.successSubtitle}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="submit-role" className="gradient-text font-semibold">
                  {translations.role} *
                </Label>
                <Select
                  value={formData.role}
                  onValueChange={(v) => setFormData((prev) => ({ ...prev, role: v }))}
                >
                  <SelectTrigger 
                    id="submit-role"
                    className="border-green-500/30 focus:border-emerald-500 bg-background/50"
                  >
                    <SelectValue placeholder={translations.selectPlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-sm border-green-500/30">
                    {ROLES.map((role) => (
                      <SelectItem 
                        key={role.value} 
                        value={role.value}
                        className="focus:bg-green-500/20"
                      >
                        {getLabel(role, locale)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="years" className="gradient-text font-semibold">
                    {translations.yearsOfExperience} *
                  </Label>
                  <span className="text-sm font-semibold text-green-600">{formData.years_of_experience} tahun</span>
                </div>
                <input
                  id="years"
                  type="range"
                  min="0"
                  max="60"
                  className="w-full h-2 bg-green-500/20 rounded-lg appearance-none cursor-pointer accent-green-500"
                  value={formData.years_of_experience}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, years_of_experience: e.target.value }))
                  }
                  required
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>60</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="submit-employment" className="gradient-text font-semibold">
                  {translations.employment} *
                </Label>
                <Select
                  value={formData.employment_type}
                  onValueChange={(v) => setFormData((prev) => ({ ...prev, employment_type: v }))}
                >
                  <SelectTrigger 
                    id="submit-employment"
                    className="border-green-500/30 focus:border-emerald-500 bg-background/50"
                  >
                    <SelectValue placeholder={translations.selectPlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-sm border-green-500/30">
                    {EMPLOYMENT_TYPES.map((type) => (
                      <SelectItem 
                        key={type.value} 
                        value={type.value}
                        className="focus:bg-green-500/20"
                      >
                        {getLabel(type, locale)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="submit-city" className="gradient-text font-semibold">
                  {translations.city}
                </Label>
                <Select
                  value={formData.city}
                  onValueChange={(v) => setFormData((prev) => ({ ...prev, city: v }))}
                >
                  <SelectTrigger 
                    id="submit-city"
                    className="border-green-500/30 focus:border-emerald-500 bg-background/50"
                  >
                    <SelectValue placeholder={translations.selectPlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-sm border-green-500/30">
                    {CITIES.map((city) => (
                      <SelectItem 
                        key={city.value} 
                        value={city.value}
                        className="focus:bg-green-500/20"
                      >
                        {getLabel(city, locale)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="submit-company" className="gradient-text font-semibold">
                  {translations.company}
                </Label>
                <Select
                  value={formData.company_type}
                  onValueChange={(v) => setFormData((prev) => ({ ...prev, company_type: v }))}
                >
                  <SelectTrigger 
                    id="submit-company"
                    className="border-green-500/30 focus:border-emerald-500 bg-background/50"
                  >
                    <SelectValue placeholder={translations.selectPlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-sm border-green-500/30">
                    {COMPANY_TYPES.map((type) => (
                      <SelectItem 
                        key={type.value} 
                        value={type.value}
                        className="focus:bg-green-500/20"
                      >
                        {getLabel(type, locale)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="submit-payment" className="gradient-text font-semibold">
                  {translations.payment} *
                </Label>
                <Select
                  value={formData.payment_type}
                  onValueChange={(v) => setFormData((prev) => ({ ...prev, payment_type: v }))}
                >
                  <SelectTrigger 
                    id="submit-payment"
                    className="border-green-500/30 focus:border-emerald-500 bg-background/50"
                  >
                    <SelectValue placeholder={translations.selectPlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-sm border-green-500/30">
                    {PAYMENT_TYPES.map((type) => (
                      <SelectItem 
                        key={type.value} 
                        value={type.value}
                        className="focus:bg-green-500/20"
                      >
                        {getLabel(type, locale)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="salary" className="gradient-text font-semibold">
                  {translations.salary} *
                </Label>
                <Badge variant="outline" className="text-xs border-green-500/30 text-green-300 bg-green-500/5">
                  {locale === 'id' ? 'Gaji Bersih' : 'Net Salary'}
                </Badge>
              </div>
              <Input
                id="salary"
                type="text"
                inputMode="numeric"
                className="border-green-500/30 focus:border-emerald-500 bg-background/50"
                placeholder={translations.salaryPlaceholder}
                value={formData.salary.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/\D/g, '')
                  setFormData((prev) => ({ ...prev, salary: numericValue }))
                }}
                required
              />
            </div>

            <div className="space-y-3">
              <Label className="gradient-text font-semibold">{translations.techStack}</Label>
              <div className="flex flex-wrap gap-2">
                {TECH_STACKS.slice(0, 8).map((tech) => {
                  const isSelected = formData.tech_stack.includes(tech.value)
                  return (
                    <button
                      key={tech.value}
                      type="button"
                      onClick={() => toggleTechStack(tech.value)}
                      className={`
                        inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                        transition-all duration-200 border
                        ${isSelected
                          ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-black border-transparent shadow-lg shadow-green-400/25'
                          : 'bg-background/50 border-green-500/30 hover:border-emerald-400/50 hover:bg-green-500/10'
                        }
                      `}
                    >
                      {tech.label}
                      {isSelected && <X className="h-3.5 w-3.5" />}
                    </button>
                  )
                })}
              </div>
              {TECH_STACKS.length > 8 && (
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setExpandedTechStack(!expandedTechStack)}
                    className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        expandedTechStack ? 'rotate-180' : ''
                      }`}
                    />
                    +{TECH_STACKS.length - 8} more
                  </button>
                  {expandedTechStack && (
                    <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {TECH_STACKS.slice(8).map((tech) => {
                        const isSelected = formData.tech_stack.includes(tech.value)
                        return (
                          <button
                            key={tech.value}
                            type="button"
                            onClick={() => toggleTechStack(tech.value)}
                            className={`
                              inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                              transition-all duration-200 border
                              ${isSelected
                                ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-black border-transparent shadow-lg shadow-green-400/25'
                                : 'bg-background/50 border-green-500/30 hover:border-emerald-400/50 hover:bg-green-500/10'
                              }
                            `}
                          >
                            {tech.label}
                            {isSelected && <X className="h-3.5 w-3.5" />}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {status === 'error' && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {translations.error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-black border-0 py-6 text-lg font-semibold"
              disabled={
                status === 'submitting' ||
                !formData.role ||
                !formData.years_of_experience ||
                !formData.employment_type ||
                !formData.salary
              }
            >
              {status === 'submitting' ? (
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {translations.submitting}
                </div>
              ) : (
                translations.button
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
