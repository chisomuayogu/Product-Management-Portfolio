import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CV_FILE_NAME, CV_FILE_PATH } from '@/data/cv'
import { CONTACT_DETAILS } from '@/data/contact'
import { createPageMetadata } from '@/data/site'

export const metadata = createPageMetadata({
  title: 'Contact | Chisom Ayogu — Product Manager',
  description:
    'Contact Chisom Ayogu about Associate, Junior, and early-career Product Management opportunities.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <main>
        <section className="section-spacing hero-atmosphere page-hero">
          <div className="container-wide">
            <p className="eyebrow mb-6 md:mb-8">Contact</p>
            <h1 className="heading-hero mb-8 max-w-4xl md:mb-10">
              Let&apos;s talk about product opportunities.
            </h1>
            <p className="body-large max-w-3xl text-grey-secondary">
              I&apos;m open to Associate Product Manager, Junior Product Manager, and early-career Product Manager opportunities where I can contribute to discovery, delivery, and cross-functional product work.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="contact-details-heading"
          className="section-spacing section-warm border-t warm-divider"
        >
          <div className="container-wide grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
            <div className="max-w-xl">
              <p className="eyebrow mb-4 text-burgundy">Direct Contact</p>
              <h2 id="contact-details-heading" className="heading-section mb-6">
                Contact details
              </h2>
              <p className="heading-card text-near-black">
                Chisom Uchechechukwu-Mildred Ayogu
              </p>
            </div>

            <div className="max-w-2xl">
              <dl className="divide-y divide-burgundy/15 border-y border-burgundy/15">
                <div className="grid gap-2 py-6 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-center md:py-8">
                  <dt className="eyebrow text-burgundy">Email</dt>
                  <dd>
                    <a
                      href={CONTACT_DETAILS.emailHref}
                      className="link-primary inline-block break-words font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  </dd>
                </div>
                <div className="grid gap-2 py-6 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-center md:py-8">
                  <dt className="eyebrow text-burgundy">Phone</dt>
                  <dd>
                    <a
                      href="tel:+447833825338"
                      className="link-primary inline-block font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
                    >
                      +44 7833 825338
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={CONTACT_DETAILS.emailHref}
                  className="button-primary inline-flex w-full items-center justify-center text-center sm:w-auto"
                >
                  Email Me
                </a>
                <a
                  href={CONTACT_DETAILS.linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary inline-flex w-full items-center justify-center gap-2 text-center sm:w-auto"
                >
                  <span>View LinkedIn</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={CV_FILE_PATH}
                  download={CV_FILE_NAME}
                  className="button-secondary inline-flex w-full items-center justify-center text-center sm:w-auto"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
