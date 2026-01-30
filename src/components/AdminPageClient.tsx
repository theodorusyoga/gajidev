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
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-3">Admin Dashboard</h1>
          <p className="text-muted-foreground text-lg">Manage salary submissions and approvals</p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-green-950/50 via-background to-emerald-950/30 border border-green-500/20 rounded-lg p-8">
            <AdminLogin onLoginSuccess={(token) => {
              setAdminToken(token)
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}
