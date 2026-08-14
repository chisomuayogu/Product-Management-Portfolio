import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section-spacing bg-ivory">
      <div className="container-wide">
        {/* Eyebrow */}
        <div className="eyebrow mb-6 md:mb-8">
          Product Manager
        </div>

        {/* Heading */}
        <h1 className="heading-hero mb-8 md:mb-12 max-w-4xl">
          I turn complex user problems into clear product decisions and coordinated execution.
        </h1>

        {/* Supporting Copy */}
        <p className="body-large max-w-3xl mb-10 md:mb-16 text-grey-secondary">
          Product Manager with hands-on experience across product discovery, AI-enabled products, marketplace strategy, cross-functional leadership, and product delivery.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <Link
            href="#work"
            className="button-primary text-center sm:text-left"
          >
            View My Work
          </Link>
          <a
            href="/cv"
            className="button-secondary text-center sm:text-left"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  )
}
