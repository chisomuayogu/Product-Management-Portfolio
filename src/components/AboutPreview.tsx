import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section id="about" className="section-spacing bg-ivory border-t border-grey-secondary/10">
      <div className="container-wide">
        <div className="max-w-3xl">
          {/* Section Label */}
          <p className="eyebrow mb-6 md:mb-8">About Me</p>

          {/* Heading */}
          <h2 className="heading-section mb-8 md:mb-10">
            Building products that matter
          </h2>

          {/* Content */}
          <p className="body-large text-grey-secondary mb-8 md:mb-10 leading-relaxed">
            I&apos;m an early-career Product Manager passionate about solving complex problems through research-driven strategy and cross-functional collaboration. I&apos;ve worked on AI-enabled products, marketplace platforms, civic technology, and food security solutions.
          </p>

          <p className="body-large text-grey-secondary mb-10 md:mb-12 leading-relaxed">
            My approach balances user empathy with business pragmatism—discovering what users need, defining what&apos;s possible, and delivering what matters.
          </p>

          {/* CTA */}
          <Link
            href="#more-about"
            className="inline-flex items-center gap-2 link-primary font-medium"
          >
            More About Me
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
