import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About | Chisom Ayogu — Product Manager',
  description:
    'Early-career Product Manager bringing a legal foundation to product discovery, strategy, and execution.',
}

const projectProof = [
  {
    name: 'GradReady',
    description:
      'Individual ownership of an AI-enabled EdTech concept from problem framing to prototype and success-metric planning.',
    href: '/case-studies/gradready',
  },
  {
    name: 'ImpactHub',
    description:
      'Cross-functional delivery coordination and stakeholder communication within a multi-track civic-tech capstone.',
    href: '/case-studies/impacthub',
  },
  {
    name: 'Bulk-Market',
    description:
      'Marketplace strategy, digital trust mechanisms, and buyer-and-seller journey design for a B2B wholesale platform.',
    href: '/case-studies/bulk-market',
  },
  {
    name: 'FoodSaver',
    description:
      'End-to-end marketplace thinking translated into consumer and seller flows, high-fidelity screens, and an interactive prototype.',
    href: '/case-studies/foodsaver',
  },
]

const capabilities = [
  'Product Discovery',
  'User Research',
  'Problem Framing',
  'Product Strategy & Prioritisation',
  'User Journeys & Flows',
  'PRDs & Requirements',
  'Cross-functional Collaboration',
  'Stakeholder Communication',
  'Figma & Prototyping',
  'Miro & Jira',
]

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <main>
        <section className="section-spacing hero-atmosphere page-hero">
          <div className="container-wide">
            <p className="eyebrow mb-6 md:mb-8">About Chisom</p>
            <h1 className="heading-hero mb-8 max-w-5xl md:mb-10">
              Early-career Product Manager bringing legal rigour to practical product work.
            </h1>
            <p className="body-large max-w-3xl text-grey-secondary">
              I&apos;m building my Product Management career on a legal foundation, combining structured research, analysis, problem framing, and clear communication with hands-on experience across product discovery, strategy, and execution.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#work"
                className="button-primary inline-flex w-full items-center justify-center text-center sm:w-auto"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="button-secondary inline-flex w-full items-center justify-center text-center sm:w-auto"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="professional-story-heading"
          className="section-spacing section-warm border-t warm-divider"
        >
          <div className="container-wide grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
            <div>
              <p className="eyebrow mb-4 text-burgundy">From law to product</p>
              <h2 id="professional-story-heading" className="heading-section">
                Professional Story
              </h2>
            </div>
            <div className="max-w-3xl space-y-6 md:space-y-8">
              <p className="body-large text-grey-secondary">
                My legal training taught me to investigate carefully, analyse complex information, frame problems clearly, communicate with different stakeholders, and consider risk without losing sight of progress.
              </p>
              <p className="body-large text-grey-secondary">
                Through Product Management bootcamps and portfolio projects, I have applied those strengths to user research, product strategy, prioritisation, user journeys, requirements, cross-functional collaboration, and prototyping. I have worked independently and within product teams, moving from early discovery to testable product direction.
              </p>
              <p className="body-large text-grey-secondary">
                My work spans AI-enabled EdTech, CivicTech, B2B commerce, food-waste marketplaces, LegalTech career development, and future-of-work wellness. I&apos;m particularly interested in technology products that make complex user or operational journeys clearer and more useful.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="project-proof-heading"
          className="section-spacing section-surface border-t warm-divider"
        >
          <div className="container-wide">
            <div className="mb-10 max-w-3xl md:mb-14">
              <p className="eyebrow mb-4 text-burgundy">Project Proof</p>
              <h2 id="project-proof-heading" className="heading-section">
                What that looks like in practice
              </h2>
            </div>

            <ul className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 md:gap-y-10">
              {projectProof.map((project) => (
                <li key={project.name} className="border-t border-burgundy/20 pt-6 md:pt-8">
                  <h3 className="heading-card mb-3">
                    <Link
                      href={project.href}
                      aria-label={`View ${project.name} case study`}
                      className="inline-flex items-center gap-2 text-burgundy transition-colors duration-200 hover:text-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
                    >
                      <span>{project.name}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </h3>
                  <p className="body-default max-w-xl text-grey-secondary">{project.description}</p>
                </li>
              ))}
            </ul>

            <p className="body-default mt-10 max-w-3xl border-l-2 border-burgundy/25 pl-5 text-grey-secondary md:mt-14">
              LegalLaunch and HealthHub represent earlier product practice across LegalTech career development and future-of-work wellness.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="capabilities-heading"
          className="section-spacing section-warm border-t warm-divider"
        >
          <div className="container-wide">
            <div className="mb-8 max-w-3xl md:mb-10">
              <p className="eyebrow mb-4 text-burgundy">How I contribute</p>
              <h2 id="capabilities-heading" className="heading-section">
                Core Capabilities
              </h2>
            </div>
            <ul aria-label="Product Management capabilities" className="flex max-w-5xl flex-wrap gap-3">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-full border border-burgundy/20 bg-white px-4 py-2 text-sm font-semibold text-near-black shadow-sm"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="opportunity-heading"
          className="section-spacing section-surface border-t warm-divider"
        >
          <div className="container-wide">
            <div className="max-w-4xl">
              <p className="eyebrow mb-4 text-burgundy">Next Step</p>
              <h2 id="opportunity-heading" className="heading-section mb-6 md:mb-8">
                What I&apos;m looking for
              </h2>
              <p className="body-large max-w-3xl text-grey-secondary">
                I&apos;m looking for an early-career Product Manager opportunity where I can contribute to discovery and execution, work closely with design and engineering, take ownership of meaningful product problems, and continue growing through feedback and delivery.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#work"
                  className="button-primary inline-flex w-full items-center justify-center text-center sm:w-auto"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="button-secondary inline-flex w-full items-center justify-center text-center sm:w-auto"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
