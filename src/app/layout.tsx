import { GoogleAnalytics } from '@/components/GoogleAnalytics'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
