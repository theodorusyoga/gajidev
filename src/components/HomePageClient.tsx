'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FeedbackDialog } from '@/components/FeedbackDialog'

type HomePageClientProps = {
  children: React.ReactNode
}

export function HomePageClient({ children }: HomePageClientProps) {
  const searchParams = useSearchParams()
  const showAdminLink = searchParams.get('admin') === 'true'
  const [showFloatingButtons, setShowFloatingButtons] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButtons(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      {showAdminLink && (
        <div className="mb-4 flex justify-end">
          <Link
            href="/admin"
            className="text-sm text-purple-400 hover:text-purple-300 underline"
          >
            Admin Dashboard
          </Link>
        </div>
      )}
      {children}
      {showFloatingButtons && <FeedbackDialog />}
    </div>
  )
}
