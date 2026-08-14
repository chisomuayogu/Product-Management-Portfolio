import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section id="contact" className="section-spacing section-warm border-t warm-divider">
      <div className="container-wide">
        <div className="cta-panel rounded-2xl px-6 py-14 md:px-12 md:py-20 lg:px-20">
          <div className="max-w-3xl text-center mx-auto">
          <h2 className="heading-section text-ivory mb-6 md:mb-8">Let&apos;s work together</h2>

          <p className="body-large text-ivory/75 mb-10 md:mb-12 max-w-2xl mx-auto">
            I&apos;m open to discussing product roles, mentoring opportunities, and collaborative projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Link href="/contact" className="button-on-dark text-center">
              Contact Me
            </Link>
            <span className="button-on-dark text-center cursor-not-allowed opacity-75" aria-label="LinkedIn placeholder">
              LinkedIn placeholder
            </span>
            <Link href="/cv" className="text-ivory hover:text-blush transition-colors duration-200 text-center">
              View CV
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
