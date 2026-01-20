import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Geist, Geist_Mono } from 'next/font/google'
import { Link } from '@/i18n/routing'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { SubmitNavLink } from '@/components/SubmitNavLink'
import { Footer } from '@/components/Footer'
import '../globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

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
    keywords: ['gaji developer', 'gaji programmer indonesia', 'kalkulator gaji', 'salary developer', 'developer salary indonesia'],
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://gajidev.netlify.app',
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
      canonical: 'https://gajidev.netlify.app',
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

  return (
    <html lang={locale} className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}>
        <NextIntlClientProvider messages={messages}>
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
          <main className="container mx-auto px-4 py-8">
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
      </body>
    </html>
  )
}
