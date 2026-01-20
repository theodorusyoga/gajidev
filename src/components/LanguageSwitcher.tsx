'use client'

import { usePathname, useRouter } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

type LanguageSwitcherProps = {
  locale: string
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const toggleLocale = () => {
    const newLocale = locale === 'id' ? 'en' : 'id'
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleLocale} className="gap-2">
      <Globe className="h-4 w-4" />
      {locale === 'id' ? 'EN' : 'ID'}
    </Button>
  )
}
