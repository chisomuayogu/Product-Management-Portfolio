import type { Metadata } from 'next'
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from '@/data/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: ['Product Manager', 'Product Strategy', 'Product Leadership', 'Chisom Ayogu'],
  authors: [{ name: 'Chisom Ayogu' }],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-ivory text-near-black">
        {children}
      </body>
    </html>
  )
}
