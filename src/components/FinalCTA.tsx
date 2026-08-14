import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section id="contact" className="section-spacing bg-ivory border-t border-grey-secondary/10">
      <div className="container-wide">
        <div className="max-w-3xl text-center mx-auto">
          {/* Heading */}
          <h2 className="heading-section mb-6 md:mb-8">
            Let&apos;s work together
          </h2>

          {/* Supporting Text */}
          <p className="body-large text-grey-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
            I&apos;m open to discussing product roles, mentoring opportunities, and collaborative projects.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center sm:items-start">
            <a
              href="mailto:hello@chisomayogu.com"
              className="button-primary text-center"
            >
              Contact Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary text-center"
            >
              LinkedIn
            </a>
            <a
              href="/cv"
              className="button-ghost text-center"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
