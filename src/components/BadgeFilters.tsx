'use client'

import { X, Code2, Clock, Briefcase, MapPin, Building2, CreditCard, Layers } from 'lucide-react'
import {
  ROLES,
  EXPERIENCE_LEVELS,
  EMPLOYMENT_TYPES,
  CITIES,
  COMPANY_TYPES,
  PAYMENT_TYPES,
  TECH_STACKS,
  getLabel,
} from '@/lib/constants'
import { ExpandableFilterSection } from './ExpandableFilterSection'

type BadgeFiltersProps = {
  locale: string
  filters: {
    role: string
    experience: string
    employment: string
    city: string
    companyType: string
    paymentType: string
    techStack: string
  }
  onFilterChange: (key: string, value: string) => void
  translations: {
    role: string
    experience: string
    employment: string
    city: string
    company: string
    payment: string
    techStack: string
  }
}

function FilterBadge({ 
  selected, 
  onClick, 
  children 
}: { 
  selected: boolean
  onClick: () => void
  children: React.ReactNode 
}) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
        transition-all duration-200 border
        ${selected 
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg shadow-purple-500/25' 
          : 'bg-background border-border hover:border-purple-500/50 hover:bg-purple-500/10 text-foreground'
        }
      `}
    >
      {children}
      {selected && <X className="h-3.5 w-3.5" />}
    </button>
  )
}

function FilterSection({ 
  icon: Icon, 
  title, 
  children 
}: { 
  icon: React.ElementType
  title: string
  children: React.ReactNode 
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-purple-400" />
        <h3 className="text-sm font-semibold gradient-text">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  )
}

export function BadgeFilters({ locale, filters, onFilterChange, translations }: BadgeFiltersProps) {
  const visibleRoles = ROLES.slice(0, 4)
  const hiddenRoles = ROLES.slice(4)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-purple-400" />
          <h3 className="text-sm font-semibold gradient-text">{translations.role}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {visibleRoles.map((role) => (
            <FilterBadge
              key={role.value}
              selected={filters.role === role.value}
              onClick={() => onFilterChange('role', filters.role === role.value ? '' : role.value)}
            >
              {getLabel(role, locale)}
            </FilterBadge>
          ))}
        </div>
        {hiddenRoles.length > 0 && (
          <ExpandableFilterSection 
            icon={Code2} 
            title={`+${hiddenRoles.length} more`}
            defaultExpanded={false}
          >
            {hiddenRoles.map((role) => (
              <FilterBadge
                key={role.value}
                selected={filters.role === role.value}
                onClick={() => onFilterChange('role', filters.role === role.value ? '' : role.value)}
              >
                {getLabel(role, locale)}
              </FilterBadge>
            ))}
          </ExpandableFilterSection>
        )}
      </div>

      <FilterSection icon={Clock} title={translations.experience}>
        {EXPERIENCE_LEVELS.map((level) => (
          <FilterBadge
            key={level.value}
            selected={filters.experience === level.value}
            onClick={() => onFilterChange('experience', filters.experience === level.value ? '' : level.value)}
          >
            {getLabel(level, locale)}
          </FilterBadge>
        ))}
      </FilterSection>

      <FilterSection icon={Briefcase} title={translations.employment}>
        {EMPLOYMENT_TYPES.map((type) => (
          <FilterBadge
            key={type.value}
            selected={filters.employment === type.value}
            onClick={() => onFilterChange('employment', filters.employment === type.value ? '' : type.value)}
          >
            {getLabel(type, locale)}
          </FilterBadge>
        ))}
      </FilterSection>

      <FilterSection icon={MapPin} title={translations.city}>
        {CITIES.map((city) => (
          <FilterBadge
            key={city.value}
            selected={filters.city === city.value}
            onClick={() => onFilterChange('city', filters.city === city.value ? '' : city.value)}
          >
            {getLabel(city, locale)}
          </FilterBadge>
        ))}
      </FilterSection>

      <FilterSection icon={Building2} title={translations.company}>
        {COMPANY_TYPES.map((type) => (
          <FilterBadge
            key={type.value}
            selected={filters.companyType === type.value}
            onClick={() => onFilterChange('companyType', filters.companyType === type.value ? '' : type.value)}
          >
            {getLabel(type, locale)}
          </FilterBadge>
        ))}
      </FilterSection>

      <FilterSection icon={CreditCard} title={translations.payment}>
        {PAYMENT_TYPES.map((type) => (
          <FilterBadge
            key={type.value}
            selected={filters.paymentType === type.value}
            onClick={() => onFilterChange('paymentType', filters.paymentType === type.value ? '' : type.value)}
          >
            {getLabel(type, locale)}
          </FilterBadge>
        ))}
      </FilterSection>

      <div className="md:col-span-2 lg:col-span-3">
        <FilterSection icon={Layers} title={translations.techStack}>
          {TECH_STACKS.map((tech) => (
            <FilterBadge
              key={tech.value}
              selected={filters.techStack === tech.value}
              onClick={() => onFilterChange('techStack', filters.techStack === tech.value ? '' : tech.value)}
            >
              {tech.label}
            </FilterBadge>
          ))}
        </FilterSection>
      </div>
    </div>
  )
}
