'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react'
import { event } from '@/lib/analytics'

export function FeedbackDialog() {
  const t = useTranslations('feedback')
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    description: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit feedback')
      }

      setStatus('success')
      
      // Track feedback submission event
      event('feedback_submitted', {
        feedback_type: formData.type,
        has_name: !!formData.name,
        has_phone: !!formData.phone,
        description_length: formData.description.length,
      })
      
      setFormData({ name: '', email: '', phone: '', type: '', description: '' })
      
      setTimeout(() => {
        setOpen(false)
        setStatus('idle')
      }, 2000)
    } catch (error) {
      console.error('Error submitting feedback:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <TooltipProvider>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="fixed bottom-6 right-42 rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600 z-50 transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-4"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{t('button')}</p>
            </TooltipContent>
          </Tooltip>
        </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">{t('title')}</DialogTitle>
          <DialogDescription>{t('subtitle')}</DialogDescription>
        </DialogHeader>

        {status === 'success' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t('success')}</h3>
              <p className="text-muted-foreground">{t('successMessage')}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('name')}</label>
              <Input
                placeholder={t('namePlaceholder')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-purple-500/10 border-purple-500/30 focus:border-purple-500/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {t('email')} <span className="text-red-400">*</span>
              </label>
              <Input
                type="email"
                placeholder={t('emailPlaceholder')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-purple-500/10 border-purple-500/30 focus:border-purple-500/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t('phone')}</label>
              <Input
                type="tel"
                placeholder={t('phonePlaceholder')}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-purple-500/10 border-purple-500/30 focus:border-purple-500/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {t('type')} <span className="text-red-400">*</span>
              </label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value })}
                required
              >
                <SelectTrigger className="bg-purple-500/10 border-purple-500/30 focus:border-purple-500/50">
                  <SelectValue placeholder={t('type')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">{t('typeGeneral')}</SelectItem>
                  <SelectItem value="bug">{t('typeBug')}</SelectItem>
                  <SelectItem value="feature">{t('typeFeature')}</SelectItem>
                  <SelectItem value="other">{t('typeOther')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                {t('description')} <span className="text-red-400">*</span>
              </label>
              <Textarea
                placeholder={t('descriptionPlaceholder')}
                value={formData.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={5}
                className="bg-purple-500/10 border-purple-500/30 focus:border-purple-500/50 resize-none"
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-400">{t('error')}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading || !formData.email || !formData.type || !formData.description}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            >
              {loading ? t('submitting') : t('submit')}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
    </TooltipProvider>
  )
}
