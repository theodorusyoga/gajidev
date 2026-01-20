'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
  CheckCircle2,
  AlertCircle,
  X,
  Eye,
  LogOut,
} from 'lucide-react'
import { 
  formatCurrency, 
  formatRoleDisplay, 
  formatTechStackDisplay,
  formatCityDisplay,
  formatEmploymentTypeDisplay,
} from '@/lib/constants'

type Submission = {
  id: string
  role: string
  years_of_experience: number
  employment_type: string
  city: string
  company_type: string
  payment_type: string
  salary: number
  tech_stack: string[]
  status: string
  approval_type?: string
  is_suspicious: boolean
  suspicious_reason?: string
  created_at: string
}

type AdminDashboardProps = {
  token: string
  onLogout: () => void
}

export function AdminDashboard({ token, onLogout }: AdminDashboardProps) {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'suspicious'>('pending')
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [suspiciousReason, setSuspiciousReason] = useState('')
  const [actionLoading, setActionLoading] = useState(false)

  useEffect(() => {
    fetchSubmissions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  const fetchSubmissions = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (filter === 'pending') {
        params.append('status', 'pending')
      } else if (filter === 'suspicious') {
        params.append('is_suspicious', 'true')
      }

      const response = await fetch(`/api/admin/submissions?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (!response.ok) throw new Error('Failed to fetch submissions')

      const data = await response.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (submissionId: string) => {
    setActionLoading(true)
    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ submissionId }),
      })

      if (!response.ok) throw new Error('Failed to approve submission')

      setSelectedSubmission(null)
      fetchSubmissions()
    } catch (error) {
      console.error('Error approving submission:', error)
    } finally {
      setActionLoading(false)
    }
  }

  const handleMarkSuspicious = async (submissionId: string) => {
    setActionLoading(true)
    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          submissionId,
          status: 'pending',
          isSuspicious: true,
          suspiciousReason,
        }),
      })

      if (!response.ok) throw new Error('Failed to mark as suspicious')

      setSelectedSubmission(null)
      setSuspiciousReason('')
      fetchSubmissions()
    } catch (error) {
      console.error('Error marking as suspicious:', error)
    } finally {
      setActionLoading(false)
    }
  }

  const handleReject = async (submissionId: string) => {
    setActionLoading(true)
    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          submissionId,
          status: 'rejected',
          isSuspicious: false,
        }),
      })

      if (!response.ok) throw new Error('Failed to reject submission')

      setSelectedSubmission(null)
      fetchSubmissions()
    } catch (error) {
      console.error('Error rejecting submission:', error)
    } finally {
      setActionLoading(false)
    }
  }

  const getStatusBadge = (submission: Submission) => {
    if (submission.status === 'approved') {
      if (submission.approval_type === 'auto') {
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Auto-Approved</Badge>
      }
      return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Manually Approved</Badge>
    }
    if (submission.is_suspicious) {
      return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Suspicious</Badge>
    }
    return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Pending</Badge>
  }

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-auto">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage salary submissions</p>
          </div>
          <Button
            variant="outline"
            onClick={onLogout}
            className="gap-2 border-purple-500/30 hover:bg-red-500/10"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="flex gap-2 mb-6">
          {(['all', 'pending', 'suspicious'] as const).map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'default' : 'outline'}
              onClick={() => setFilter(f)}
              className={filter === f ? 'bg-gradient-to-r from-purple-500 to-pink-500' : ''}
            >
              {f === 'all' && 'All Submissions'}
              {f === 'pending' && 'Pending'}
              {f === 'suspicious' && 'Suspicious'}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No submissions found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="p-4 rounded-lg border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{formatRoleDisplay(submission.role)}</h3>
                      {getStatusBadge(submission)}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-muted-foreground">
                      <div>
                        <span className="text-foreground font-medium">{submission.years_of_experience}y</span> exp
                      </div>
                      <div>
                        <span className="text-foreground font-medium">{formatCityDisplay(submission.city)}</span>
                      </div>
                      <div>
                        <span className="text-foreground font-medium">{formatEmploymentTypeDisplay(submission.employment_type)}</span>
                      </div>
                      <div>
                        <span className="text-foreground font-medium">
                          {formatCurrency(submission.salary)}
                        </span>
                        /{submission.payment_type}
                      </div>
                    </div>
                    {submission.tech_stack && submission.tech_stack.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-2">
                        {submission.tech_stack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {formatTechStackDisplay(tech)}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {submission.suspicious_reason && (
                      <div className="text-xs text-red-400 pt-2">
                        Reason: {submission.suspicious_reason}
                      </div>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedSubmission(submission)}
                    className="gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    Review
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedSubmission && (
        <Dialog open={!!selectedSubmission} onOpenChange={() => setSelectedSubmission(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Review Submission</DialogTitle>
              <DialogDescription>
                {formatRoleDisplay(selectedSubmission.role)} • {selectedSubmission.years_of_experience}y exp
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">City</p>
                  <p className="font-medium">{formatCityDisplay(selectedSubmission.city)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Employment</p>
                  <p className="font-medium">{formatEmploymentTypeDisplay(selectedSubmission.employment_type)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Company Type</p>
                  <p className="font-medium">{selectedSubmission.company_type}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Payment Type</p>
                  <p className="font-medium">{selectedSubmission.payment_type}</p>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">Salary</p>
                <p className="text-2xl font-bold gradient-text">
                  {formatCurrency(selectedSubmission.salary)}
                </p>
              </div>

              {selectedSubmission.tech_stack && selectedSubmission.tech_stack.length > 0 && (
                <div>
                  <p className="text-muted-foreground text-sm mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedSubmission.tech_stack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {formatTechStackDisplay(tech)}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {selectedSubmission.status === 'pending' && !selectedSubmission.is_suspicious && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Mark as Suspicious (optional)</Label>
                    <textarea
                      id="reason"
                      placeholder="Reason for suspicion..."
                      value={suspiciousReason}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSuspiciousReason(e.target.value)}
                      className="text-sm w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      onClick={() => handleApprove(selectedSubmission.id)}
                      disabled={actionLoading}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Approve
                    </Button>
                    <Button
                      onClick={() => handleReject(selectedSubmission.id)}
                      disabled={actionLoading}
                      variant="outline"
                      className="flex-1 gap-2"
                    >
                      <X className="h-4 w-4" />
                      Reject
                    </Button>
                  </div>

                  {suspiciousReason && (
                    <Button
                      onClick={() => handleMarkSuspicious(selectedSubmission.id)}
                      disabled={actionLoading}
                      variant="outline"
                      className="w-full gap-2 border-red-500/30 hover:bg-red-500/10"
                    >
                      <AlertCircle className="h-4 w-4" />
                      Mark as Suspicious
                    </Button>
                  )}
                </>
              )}

              {selectedSubmission.is_suspicious && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex gap-2">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Marked as Suspicious</p>
                    {selectedSubmission.suspicious_reason && (
                      <p className="text-xs mt-1">{selectedSubmission.suspicious_reason}</p>
                    )}
                  </div>
                </div>
              )}

              {selectedSubmission.status === 'approved' && (
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">
                      {selectedSubmission.approval_type === 'auto' ? 'Auto-Approved' : 'Manually Approved'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
