import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InsightCard from '@/components/InsightCard'
import { CV_FILE_NAME, CV_FILE_PATH } from '@/data/cv'
import { createPageMetadata } from '@/data/site'

export const metadata = createPageMetadata({
  title: 'Product Management CV | Chisom Ayogu',
  description: 'Download the approved Product Management CV for Chisom Ayogu.',
  path: '/cv',
})

export default function CVPage() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <main>
        <section className="section-spacing hero-atmosphere page-hero">
          <div className="container-wide">
            <p className="eyebrow mb-6 md:mb-8">Curriculum Vitae</p>
            <h1 className="heading-hero mb-8 max-w-4xl md:mb-10">Product Management CV</h1>
            <p className="body-large max-w-3xl text-grey-secondary">
              Download my current CV for Associate, Junior, and early-career Product Management opportunities.
            </p>
          </div>
        </section>

        <section className="section-spacing section-warm border-t warm-divider">
          <div className="container-wide max-w-3xl">
            <InsightCard label="Approved CV" highlighted>
              <h2 className="heading-card mb-4">Chisom Ayogu · Product Management</h2>
              <p className="body-default mb-8 text-grey-secondary">
                The approved CV is available as a Microsoft Word document.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={CV_FILE_PATH}
                  download={CV_FILE_NAME}
                  className="button-primary inline-flex w-full items-center justify-center text-center sm:w-auto"
                >
                  Download CV
                </a>
                <Link
                  href="/#work"
                  className="button-secondary inline-flex w-full items-center justify-center text-center sm:w-auto"
                >
                  View Product Work
                </Link>
              </div>
            </InsightCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
