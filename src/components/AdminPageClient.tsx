'use client'

import { useState } from 'react'
import { AdminLogin } from './AdminLogin'
import { AdminDashboard } from './AdminDashboard'
import { useRouter } from 'next/navigation'

export function AdminPageClient() {
  const [adminToken, setAdminToken] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('admin_token')
    }
    return null
  })
  const router = useRouter()

  if (adminToken) {
    return (
      <AdminDashboard
        token={adminToken}
        onLogout={() => {
          localStorage.removeItem('admin_token')
          setAdminToken(null)
          router.push('/admin')
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage salary submissions and approvals</p>
        </div>
        <AdminLogin onLoginSuccess={(token) => {
          setAdminToken(token)
        }} />
      </div>
    </div>
  )
}
