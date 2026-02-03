'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type CollapsibleFilterSectionProps = {
  icon: React.ElementType
  title: string
  subtitle?: string
  children: React.ReactNode
  activeCount?: number
  defaultExpanded?: boolean
}

export function CollapsibleFilterSection({
  icon: Icon,
  title,
  subtitle,
  children,
  activeCount = 0,
  defaultExpanded = false,
}: CollapsibleFilterSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="space-y-3">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-green-500/10 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-green-600" />
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold gradient-text">{title}</h3>
            {activeCount > 0 && (
              <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">
                {activeCount}
              </span>
            )}
            {subtitle && (
              <div className="text-xs text-muted-foreground">{subtitle}</div>
            )}
          </div>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-green-600 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className="flex flex-wrap gap-2 pl-2 animate-in fade-in duration-200 mb-5">
          {children}
        </div>
      )}
    </div>
  )
}
