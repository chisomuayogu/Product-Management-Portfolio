import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chisom Ayogu | Product Manager',
  description: 'Early-career Product Manager combining legal rigour with hands-on experience across product discovery, AI-enabled products, marketplace strategy, and cross-functional delivery.',
  keywords: ['Product Manager', 'Product Strategy', 'Product Leadership', 'Chisom Ayogu'],
  authors: [{ name: 'Chisom Ayogu' }],
  openGraph: {
    title: 'Chisom Ayogu | Product Manager',
    description: 'Early-career Product Manager combining legal rigour with hands-on experience across product discovery, AI-enabled products, marketplace strategy, and cross-functional delivery.',
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
