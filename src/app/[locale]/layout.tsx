import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Link } from '@/i18n/routing'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { SubmitNavLink } from '@/components/SubmitNavLink'
import { Footer } from '@/components/Footer'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'gaji developer',
      'gaji developer indonesia',
      'gaji engineer',
      'gaji engineer indonesia',
      'gaji dev',
      'salary developer',
      'salary developer indonesia',
      'salary engineer',
      'salary engineer indonesia',
      'salary dev',
      'gaji programmer',
      'gaji programmer indonesia',
      'gaji software engineer',
      'gaji frontend developer',
      'gaji backend developer',
      'gaji fullstack developer',
      'gaji mobile developer',
      'gaji devops engineer',
      'gaji data engineer'
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://gaji.dev',
      siteName: 'GajiDev',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: 'https://gaji.dev',
      languages: { id: '/id', en: '/en' },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'id' | 'en')) {
    notFound()
  }

  const messages = await getMessages()
  const t = await getTranslations({ locale, namespace: 'nav' })
  const submitT = await getTranslations({ locale, namespace: 'submit' })
  const footerT = await getTranslations({ locale, namespace: 'footer' })
  const metaT = await getTranslations({ locale, namespace: 'meta' })

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GajiDev',
    description: metaT('description'),
    url: 'https://gaji.dev',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://gaji.dev?role={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    about: {
      '@type': 'Thing',
      name: locale === 'id' ? 'Gaji Developer Indonesia' : 'Developer Salary Indonesia',
      description: locale === 'id' 
        ? 'Informasi gaji developer, gaji engineer, dan salary dev di Indonesia'
        : 'Information about developer salary, engineer salary, and dev salary in Indonesia'
    }
  }

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">
            GajiDev
          </Link>
          <nav className="flex items-center gap-4">
            <SubmitNavLink
              label={t('submit')}
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
            <LanguageSwitcher locale={locale} />
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <Footer
        translations={{
          sources: footerT('sources'),
          disclaimer: footerT('disclaimer'),
          builtBy: footerT('builtBy'),
        }}
      />
    </NextIntlClientProvider>
  )
}
