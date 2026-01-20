import { getTranslations } from 'next-intl/server'
import { Calculator } from '@/components/Calculator'
import { SalaryShowcase } from '@/components/SalaryShowcase'
import { StatisticsBar } from '@/components/StatisticsBar'
import { SubmitDialog } from '@/components/SubmitDialog'
import { HomePageClient } from '@/components/HomePageClient'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('hero')
  const filtersT = await getTranslations('filters')
  const resultT = await getTranslations('result')
  const submitT = await getTranslations('submit')

  return (
    <HomePageClient>
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          {t('title')}
        </h1>
        <p className="text-muted-foreground text-lg">
          {t('subtitle')}
        </p>
      </div>

      <StatisticsBar />

      <SalaryShowcase />

      <Calculator
        locale={locale}
        translations={{
          filters: {
            role: filtersT('role'),
            experience: filtersT('experience'),
            employment: filtersT('employment'),
            city: filtersT('city'),
            company: filtersT('company'),
            payment: filtersT('payment'),
            techStack: filtersT('techStack'),
            selectPlaceholder: filtersT('selectPlaceholder'),
          },
          result: {
            title: resultT('title'),
            salaryRange: resultT('salaryRange'),
            median: resultT('median'),
            basedOn: resultT('basedOn'),
            noData: resultT('noData'),
            tryAdjusting: resultT('tryAdjusting'),
            noDataTitle: resultT('noDataTitle'),
            noDataSubtitle: resultT('noDataSubtitle'),
            noDataCta: resultT('noDataCta'),
          },
          submit: {
            formTitle: submitT('formTitle'),
            salary: submitT('salary'),
            salaryPlaceholder: submitT('salaryPlaceholder'),
            yearsOfExperience: submitT('yearsOfExperience'),
            techStack: submitT('techStack'),
            techStackPlaceholder: submitT('techStackPlaceholder'),
            button: submitT('button'),
            submitting: submitT('submitting'),
            success: submitT('success'),
            successTitle: submitT('successTitle'),
            successSubtitle: submitT('successSubtitle'),
            error: submitT('error'),
            anonymous: submitT('anonymous'),
            cta: submitT('cta'),
            role: submitT('role'),
            employment: submitT('employment'),
            city: submitT('city'),
            company: submitT('company'),
            payment: submitT('payment'),
            selectPlaceholder: submitT('selectPlaceholder'),
          },
        }}
      />

      <div className="mt-12 text-center">
        <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-purple-950/30 to-pink-950/20 border border-purple-500/10">
          <h2 className="text-xl font-bold mb-3 gradient-text">{submitT('title')}</h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md">{submitT('subtitle')}</p>
          <SubmitDialog
            locale={locale}
            translations={{
              formTitle: submitT('formTitle'),
              salary: submitT('salary'),
              salaryPlaceholder: submitT('salaryPlaceholder'),
              yearsOfExperience: submitT('yearsOfExperience'),
              techStack: submitT('techStack'),
              techStackPlaceholder: submitT('techStackPlaceholder'),
              button: submitT('button'),
              submitting: submitT('submitting'),
              success: submitT('success'),
              successTitle: submitT('successTitle'),
              successSubtitle: submitT('successSubtitle'),
              error: submitT('error'),
              anonymous: submitT('anonymous'),
              cta: submitT('cta'),
              role: submitT('role'),
              employment: submitT('employment'),
              city: submitT('city'),
              company: submitT('company'),
              payment: submitT('payment'),
              selectPlaceholder: submitT('selectPlaceholder'),
            }}
          >
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 gap-2">
              {submitT('cta')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </SubmitDialog>
        </div>
      </div>
    </div>
    </HomePageClient>
  )
}
