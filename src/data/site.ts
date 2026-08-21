import type { Metadata } from 'next'

export const SITE_URL = 'https://product-management-portfolio-blond.vercel.app'
export const SITE_NAME = 'Chisom Ayogu | Product Manager'
export const SITE_DESCRIPTION =
  'Early-career Product Manager combining legal rigour with hands-on experience across product discovery, AI-enabled products, marketplace strategy, and cross-functional delivery.'

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: `/${string}` | '/'
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
    },
  }
}
