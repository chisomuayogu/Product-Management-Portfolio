import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section id="about" className="section-spacing section-warm border-t warm-divider">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6 md:mb-8">About Me</p>

          <h2 className="heading-section mb-8 md:mb-10">
            Building products that matter
          </h2>

          <p className="body-large text-grey-secondary mb-8 md:mb-10 leading-relaxed">
            I&apos;m an early-career Product Manager with hands-on experience across product discovery, marketplace products, AI-enabled tools, cross-functional delivery, and stakeholder management.
          </p>

          <p className="body-large text-grey-secondary mb-10 md:mb-12 leading-relaxed">
            My legal background brings structure, risk awareness, and analytical clarity to product work—helping me turn ambiguity into clear user journeys, decisions, and documentation.
          </p>

          <Link href="/about" className="inline-flex items-center gap-2 link-primary font-medium">
            More About Me
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
