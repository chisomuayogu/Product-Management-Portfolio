import Image from 'next/image'
import Link from 'next/link'
import { PROFESSIONAL_HEADSHOT } from '@/data/profile'

export default function AboutPreview() {
  return (
    <section id="about" className="section-spacing section-warm border-t warm-divider">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
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

        <div className="mx-auto w-full max-w-[13rem] sm:max-w-[15rem] lg:mx-0">
          <div className="rounded-2xl border border-burgundy/15 bg-ivory/70 p-2 shadow-wine-sm">
            <Image
              src={PROFESSIONAL_HEADSHOT.src}
              alt=""
              width={PROFESSIONAL_HEADSHOT.width}
              height={PROFESSIONAL_HEADSHOT.height}
              sizes="(min-width: 1024px) 240px, (min-width: 640px) 240px, 208px"
              className="h-auto w-full rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
