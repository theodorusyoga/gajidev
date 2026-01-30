'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type ExpandableFilterSectionProps = {
  icon: React.ElementType
  title: string
  children: React.ReactNode
  defaultExpanded?: boolean
  itemCount?: number
}

export function ExpandableFilterSection({
  icon: Icon,
  title,
  children,
  defaultExpanded = false,
  itemCount,
}: ExpandableFilterSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-2 p-3 rounded-lg bg-green-500/5 hover:bg-green-500/10 border border-green-500/20 transition-all"
      >
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-green-600" />
          <h3 className="text-sm font-semibold gradient-text">{title}</h3>
          {itemCount && (
            <span className="text-xs text-muted-foreground ml-2">({itemCount})</span>
          )}
        </div>
        <ChevronDown
          className={`h-4 w-4 text-green-600 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className="pl-2 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-wrap gap-2">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
