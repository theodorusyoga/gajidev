'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
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
import { CheckCircle, AlertCircle, Lock, X } from 'lucide-react'

type SubmitFormProps = {
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
  }
}

export function SubmitForm({ locale, translations }: SubmitFormProps) {
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

  if (status === 'success') {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <p className="text-lg font-medium">{translations.success}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5" />
          {translations.formTitle}
        </CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Lock className="h-3 w-3" />
          {translations.anonymous}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="submit-role">{translations.role} *</Label>
              <Select
                value={formData.role}
                onValueChange={(v) => setFormData((prev) => ({ ...prev, role: v }))}
              >
                <SelectTrigger id="submit-role">
                  <SelectValue placeholder={translations.selectPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {ROLES.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {getLabel(role, locale)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="years">{translations.yearsOfExperience} *</Label>
              <Input
                id="years"
                type="number"
                min="0"
                max="50"
                value={formData.years_of_experience}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, years_of_experience: e.target.value }))
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="submit-employment">{translations.employment} *</Label>
              <Select
                value={formData.employment_type}
                onValueChange={(v) => setFormData((prev) => ({ ...prev, employment_type: v }))}
              >
                <SelectTrigger id="submit-employment">
                  <SelectValue placeholder={translations.selectPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {EMPLOYMENT_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {getLabel(type, locale)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="submit-city">{translations.city}</Label>
              <Select
                value={formData.city}
                onValueChange={(v) => setFormData((prev) => ({ ...prev, city: v }))}
              >
                <SelectTrigger id="submit-city">
                  <SelectValue placeholder={translations.selectPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {CITIES.map((city) => (
                    <SelectItem key={city.value} value={city.value}>
                      {getLabel(city, locale)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="submit-company">{translations.company}</Label>
              <Select
                value={formData.company_type}
                onValueChange={(v) => setFormData((prev) => ({ ...prev, company_type: v }))}
              >
                <SelectTrigger id="submit-company">
                  <SelectValue placeholder={translations.selectPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {COMPANY_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {getLabel(type, locale)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="submit-payment">{translations.payment} *</Label>
              <Select
                value={formData.payment_type}
                onValueChange={(v) => setFormData((prev) => ({ ...prev, payment_type: v }))}
              >
                <SelectTrigger id="submit-payment">
                  <SelectValue placeholder={translations.selectPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {PAYMENT_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {getLabel(type, locale)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary">{translations.salary} *</Label>
            <Input
              id="salary"
              type="number"
              min="0"
              placeholder={translations.salaryPlaceholder}
              value={formData.salary}
              onChange={(e) => setFormData((prev) => ({ ...prev, salary: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>{translations.techStack}</Label>
            <div className="flex flex-wrap gap-2">
              {TECH_STACKS.map((tech) => (
                <Badge
                  key={tech}
                  variant={formData.tech_stack.includes(tech) ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => toggleTechStack(tech)}
                >
                  {tech}
                  {formData.tech_stack.includes(tech) && <X className="h-3 w-3 ml-1" />}
                </Badge>
              ))}
            </div>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-500 text-sm">
              <AlertCircle className="h-4 w-4" />
              {translations.error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={
              status === 'submitting' ||
              !formData.role ||
              !formData.years_of_experience ||
              !formData.employment_type ||
              !formData.salary
            }
          >
            {status === 'submitting' ? translations.submitting : translations.button}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
