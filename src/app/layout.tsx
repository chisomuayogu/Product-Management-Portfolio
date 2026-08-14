import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chisom Ayogu | Product Manager',
  description: 'Product Manager with hands-on experience across product discovery, AI-enabled products, marketplace strategy, and cross-functional leadership.',
  keywords: ['Product Manager', 'Product Strategy', 'Product Leadership', 'Chisom Ayogu'],
  authors: [{ name: 'Chisom Ayogu' }],
  openGraph: {
    title: 'Chisom Ayogu | Product Manager',
    description: 'Product Manager with hands-on experience across product discovery, AI-enabled products, marketplace strategy, and cross-functional leadership.',
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
