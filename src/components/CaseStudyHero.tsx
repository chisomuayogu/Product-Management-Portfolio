import Link from 'next/link'

interface CaseStudyHeroProps {
  title: string
  positioning: string
  industry: string
  description?: string
}

export default function CaseStudyHero({
  title,
  positioning,
  industry,
  description,
}: CaseStudyHeroProps) {
  return (
    <section className="section-spacing bg-ivory border-b border-grey-secondary/10">
      <div className="container-wide">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 body-small text-grey-secondary hover:text-burgundy transition-colors duration-200 mb-8 md:mb-12"
        >
          <span>←</span>
          <span>Back to Work</span>
        </Link>

        <div>
          <p className="eyebrow mb-6 md:mb-8 text-burgundy">Case Study</p>

          <h1 className="heading-hero mb-6 md:mb-8 max-w-4xl">
            {title}
          </h1>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-10 md:mb-12">
            <div>
              <p className="eyebrow mb-2 md:mb-3">Positioning</p>
              <p className="body-default text-near-black font-medium">
                {positioning}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2 md:mb-3">Industry</p>
              <p className="body-default text-near-black font-medium">
                {industry}
              </p>
            </div>
          </div>

          {description && (
            <p className="body-large text-grey-secondary max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
