import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudySection from '@/components/CaseStudySection'
import Link from 'next/link'

export const metadata = {
  title: 'Contact | Chisom Ayogu — Product Manager',
  description: 'Contact page with placeholder email and LinkedIn details for a Product Manager portfolio.',
}

export default function ContactPage() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <section className="section-spacing hero-atmosphere page-hero">
        <div className="container-wide">
          <p className="eyebrow mb-6 md:mb-8">Contact</p>
          <h1 className="heading-hero mb-8 md:mb-10 max-w-3xl">Open to product conversations.</h1>

          <div className="max-w-2xl space-y-6">
            <p className="body-large text-grey-secondary">
              I&apos;m interested in product roles, mentorship, collaboration, and thoughtful product conversations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="glass-panel rounded-lg p-6">
                <p className="eyebrow mb-3 text-burgundy">Email</p>
                <p className="body-default text-grey-secondary">Email placeholder</p>
              </div>

              <div className="glass-panel rounded-lg p-6">
                <p className="eyebrow mb-3 text-burgundy">LinkedIn</p>
                <p className="body-default text-grey-secondary">LinkedIn placeholder</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2">
              <Link href="/cv" className="button-primary text-center">
                View CV
              </Link>
              <span className="button-secondary text-center opacity-80 cursor-not-allowed" aria-label="Contact me via email placeholder">
                Contact Me
              </span>
            </div>
          </div>
        </div>
      </section>

      <CaseStudySection title="Quick note" backgroundLight>
        <div className="container-wide">
          <p className="body-large text-grey-secondary max-w-3xl">
            Please replace the placeholder contact details and CV file with live links before deployment.
          </p>
        </div>
      </CaseStudySection>

      <Footer />
    </div>
  )
}
