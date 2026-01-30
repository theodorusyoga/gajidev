'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function DataSourcesSection() {
  const t = useTranslations('dataSources')

  const sources = [
    { name: 'NodeFlair', logo: '/logos/nodeflair.png', hasLogo: true },
    { name: 'Glassdoor', logo: '/logos/glassdoor.png', hasLogo: true },
    { name: 'LinkedIn', logo: '/logos/linkedin.png', hasLogo: true },
    { name: 'Indeed', logo: '/logos/indeed.png', hasLogo: true },
    { name: 'Levels.fyi', logo: '/logos/levels-fyi.png', hasLogo: true },
    { name: 'Tech in Asia', logo: '/logos/tech-in-asia.png', hasLogo: true },
  ]

  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <p className="text-sm text-muted-foreground mb-8 mt-8">{t('title')}</p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {sources.map((source, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              {source.hasLogo ? (
                <Image
                  src={source.logo}
                  alt={source.name}
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              ) : (
                <div className="h-8 w-auto flex items-center justify-center">
                  <span className="text-muted-foreground/60 font-medium text-sm md:text-base">
                    {source.name}
                  </span>
                </div>
              )}
              <span className="text-xs text-muted-foreground/60">
                {source.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
