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
  const [showAdminLink, setShowAdminLink] = useState(false)

  useEffect(() => {
    const showAdmin = searchParams.get('admin') === 'true'
    setShowAdminLink(showAdmin)
  }, [searchParams])

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
      <FeedbackDialog />
    </div>
  )
}
