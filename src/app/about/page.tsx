import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudySection from '@/components/CaseStudySection'

export const metadata = {
  title: 'About | Chisom Ayogu — Product Manager',
  description:
    'Product Manager with experience across discovery, strategy, marketplace products, AI-enabled products, and cross-functional delivery.',
}

const strengths = [
  'Product discovery',
  'Product strategy',
  'Marketplace products',
  'AI-enabled products',
  'Cross-functional leadership',
  'Stakeholder management',
  'Delivery management',
  'User research',
  'User journeys',
  'Prototyping',
  'Product documentation',
]

const legalStrengths = [
  'Structured thinking',
  'Research discipline',
  'Risk awareness',
  'Stakeholder communication',
  'Analytical problem solving',
  'Documentation',
]

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <section className="section-spacing hero-atmosphere page-hero">
        <div className="container-wide">
          <p className="eyebrow mb-6 md:mb-8">About</p>
          <h1 className="heading-hero mb-8 md:mb-10 max-w-4xl">
            Early-career Product Manager focused on product clarity, execution, and user value.
          </h1>

          <div className="max-w-3xl space-y-6">
            <p className="body-large text-grey-secondary">
              I&apos;m an early-career Product Manager with practical experience across discovery, strategy, marketplace products, AI-enabled products, and cross-functional execution.
            </p>
            <p className="body-large text-grey-secondary">
              My work is grounded in helping teams move from ambiguity to focused product decisions: understanding user needs, identifying the right opportunity, shaping the solution, and coordinating delivery.
            </p>
          </div>
        </div>
      </section>

      <CaseStudySection title="What I bring" backgroundLight>
        <div className="container-wide">
          <div className="flex flex-wrap gap-3">
            {strengths.map((strength) => (
              <span
                key={strength}
                className="inline-flex items-center rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-2 text-sm font-medium text-burgundy"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Legal training, product value">
        <div className="container-wide">
          <div className="max-w-3xl mb-10 md:mb-12">
            <p className="body-large text-grey-secondary">
              My legal training contributes to how I approach product work: careful research, clear reasoning, risk-aware decisions, and strong documentation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {legalStrengths.map((strength) => (
              <span
                key={strength}
                className="inline-flex items-center rounded-full border border-burgundy/15 bg-ivory/70 px-4 py-2 text-sm font-medium text-near-black shadow-wine-sm"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="How I work" backgroundLight>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="premium-card p-6">
              <p className="eyebrow mb-3 text-burgundy">Discovery</p>
              <p className="body-default text-grey-secondary">I start with user needs, market context, and problem framing before deciding what should be built.</p>
            </div>
            <div className="premium-card p-6">
              <p className="eyebrow mb-3 text-burgundy">Strategy</p>
              <p className="body-default text-grey-secondary">I connect user insight, business needs, and feasible product decisions into a clear direction.</p>
            </div>
            <div className="premium-card p-6">
              <p className="eyebrow mb-3 text-burgundy">Delivery</p>
              <p className="body-default text-grey-secondary">I build alignment across teams, translate strategy into action, and help keep execution focused.</p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <Footer />
    </div>
  )
}
