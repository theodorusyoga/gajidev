'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import {
  ROLES,
  EXPERIENCE_LEVELS,
  EMPLOYMENT_TYPES,
  CITIES,
  COMPANY_TYPES,
  PAYMENT_TYPES,
  getLabel,
} from '@/lib/constants'

type FiltersProps = {
  locale: string
  filters: {
    role: string
    experience: string
    employment: string
    city: string
    companyType: string
    paymentType: string
  }
  onFilterChange: (key: string, value: string) => void
  translations: {
    role: string
    experience: string
    employment: string
    city: string
    company: string
    payment: string
    selectPlaceholder: string
  }
}

export function Filters({ locale, filters, onFilterChange, translations }: FiltersProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label htmlFor="role">{translations.role}</Label>
        <Select value={filters.role} onValueChange={(v) => onFilterChange('role', v)}>
          <SelectTrigger id="role">
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
        <Label htmlFor="experience">{translations.experience}</Label>
        <Select value={filters.experience} onValueChange={(v) => onFilterChange('experience', v)}>
          <SelectTrigger id="experience">
            <SelectValue placeholder={translations.selectPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {EXPERIENCE_LEVELS.map((level) => (
              <SelectItem key={level.value} value={level.value}>
                {getLabel(level, locale)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="employment">{translations.employment}</Label>
        <Select value={filters.employment} onValueChange={(v) => onFilterChange('employment', v)}>
          <SelectTrigger id="employment">
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
        <Label htmlFor="city">{translations.city}</Label>
        <Select value={filters.city} onValueChange={(v) => onFilterChange('city', v)}>
          <SelectTrigger id="city">
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
        <Label htmlFor="companyType">{translations.company}</Label>
        <Select value={filters.companyType} onValueChange={(v) => onFilterChange('companyType', v)}>
          <SelectTrigger id="companyType">
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
        <Label htmlFor="paymentType">{translations.payment}</Label>
        <Select value={filters.paymentType} onValueChange={(v) => onFilterChange('paymentType', v)}>
          <SelectTrigger id="paymentType">
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
  )
}
