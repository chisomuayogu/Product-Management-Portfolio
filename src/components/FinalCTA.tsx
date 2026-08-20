import Link from 'next/link'
import { CV_FILE_NAME, CV_FILE_PATH } from '@/data/cv'
import { CONTACT_DETAILS } from '@/data/contact'

export default function FinalCTA() {
  return (
    <section id="contact" className="section-spacing section-warm border-t warm-divider">
      <div className="container-wide">
        <div className="cta-panel rounded-2xl px-6 py-14 md:px-12 md:py-20 lg:px-20">
          <div className="max-w-3xl text-center mx-auto">
          <h2 className="heading-section text-ivory mb-6 md:mb-8">Interested in working together?</h2>

          <p className="body-large text-ivory mb-10 md:mb-12 max-w-2xl mx-auto">
            I&apos;m open to discussing Product Management roles, product challenges, and opportunities to contribute to thoughtful teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Link href="/contact" className="button-on-dark text-center focus-visible:outline-ivory">
              Start a Conversation
            </Link>
            <a
              href={CONTACT_DETAILS.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="button-on-dark text-center focus-visible:outline-ivory"
            >
              LinkedIn
            </a>
            <a
              href={CV_FILE_PATH}
              download={CV_FILE_NAME}
              className="text-center text-ivory transition-colors duration-200 hover:text-blush focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivory"
            >
              Download CV
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
