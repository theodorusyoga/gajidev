import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard - GajiDev',
  description: 'Manage salary submissions',
}

type Props = {
  children: React.ReactNode
}

export default function AdminLayout({ children }: Props) {
  return <>{children}</>
}
