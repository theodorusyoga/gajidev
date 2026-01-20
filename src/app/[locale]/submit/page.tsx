import { getTranslations } from 'next-intl/server'
import { SubmitForm } from '@/components/SubmitForm'
import { Link } from '@/i18n/routing'
import { ArrowLeft } from 'lucide-react'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function SubmitPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('submit')
  const filtersT = await getTranslations('filters')

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        {locale === 'id' ? 'Kembali ke Kalkulator' : 'Back to Calculator'}
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </div>

      <SubmitForm
        locale={locale}
        translations={{
          formTitle: t('formTitle'),
          salary: t('salary'),
          salaryPlaceholder: t('salaryPlaceholder'),
          yearsOfExperience: t('yearsOfExperience'),
          techStack: t('techStack'),
          techStackPlaceholder: t('techStackPlaceholder'),
          button: t('button'),
          submitting: t('submitting'),
          success: t('success'),
          error: t('error'),
          anonymous: t('anonymous'),
          role: filtersT('role'),
          employment: filtersT('employment'),
          city: filtersT('city'),
          company: filtersT('company'),
          payment: filtersT('payment'),
          selectPlaceholder: filtersT('selectPlaceholder'),
        }}
      />
    </div>
  )
}
