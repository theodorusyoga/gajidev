import { getTranslations } from 'next-intl/server'
import { Calculator } from '@/components/Calculator'
import { SalaryShowcase } from '@/components/SalaryShowcase'
import { StatisticsBar } from '@/components/StatisticsBar'
import { DataSourcesSection } from '@/components/DataSourcesSection'
import { AnimatedHeroTitle } from '@/components/AnimatedHeroTitle'
import { ShareSalaryButton } from '@/components/ShareSalaryButton'
import { HomePageClient } from '@/components/HomePageClient'

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
      <div className="container mx-auto px-4 py-8">
        <div className="min-h-[calc(100vh-9rem)] flex flex-col justify-center items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                {t('subtitle')}
              </h1>
                <AnimatedHeroTitle />
            </div>

            <StatisticsBar />

            <DataSourcesSection />
          </div>
        </div>
      </div>

      <div className="py-8">
        <SalaryShowcase locale={locale} />
      </div>

      <div className="container mx-auto px-4 py-8">
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
            techStackMultiple: filtersT('techStackMultiple'),
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

      <ShareSalaryButton
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
      />
      </div>

      <div className="container mx-auto px-4 py-8">
        <ShareSalaryButton
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
      />
      </div>
    </HomePageClient>
  )
}
