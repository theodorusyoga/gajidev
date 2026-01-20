import { getTranslations } from 'next-intl/server'
import { Calculator } from '@/components/Calculator'
import { Link } from '@/i18n/routing'
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
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-muted-foreground text-lg">
          {t('subtitle')}
        </p>
      </div>

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
            selectPlaceholder: filtersT('selectPlaceholder'),
          },
          result: {
            title: resultT('title'),
            salaryRange: resultT('salaryRange'),
            median: resultT('median'),
            basedOn: resultT('basedOn'),
            noData: resultT('noData'),
            tryAdjusting: resultT('tryAdjusting'),
          },
        }}
      />

      <div className="mt-8 text-center">
        <div className="inline-block p-6 rounded-lg border bg-card">
          <h2 className="text-lg font-semibold mb-2">{submitT('title')}</h2>
          <p className="text-muted-foreground text-sm mb-4">{submitT('subtitle')}</p>
          <Link href="/submit">
            <Button className="gap-2">
              {submitT('cta')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
