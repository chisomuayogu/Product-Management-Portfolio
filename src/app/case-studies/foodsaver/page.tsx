import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectSnapshot from '@/components/ProjectSnapshot'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'

export const metadata = {
  title: 'FoodSaver Case Study | Chisom Ayogu',
  description: 'FoodTech and sustainability-marketplace case study focused on problem-to-prototype execution.',
}

const placeholderSections = [
  'Key Product Decisions',
  'User Journey / Process',
  'Outcome',
  'Reflection',
]

export default function FoodSaverCaseStudy() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <CaseStudyHero
        title="FoodSaver"
        positioning="Problem-to-Prototype Execution"
        industry="FoodTech / Sustainability Marketplace"
        description="Turning surplus food into affordable meals instead of waste."
      />

      <ProjectSnapshot
        items={[
          { label: 'My Role', value: 'Awaiting Approved Content' },
          { label: 'Industry', value: 'FoodTech / Sustainability Marketplace' },
          { label: 'Portfolio Signal', value: 'Problem-to-Prototype Execution' },
          { label: 'Case-Study Copy', value: 'Awaiting Approved Content' },
        ]}
      />

      <CaseStudySection title="Problem" backgroundLight>
        <div className="container-wide">
          <InsightCard label="Content Placeholder" highlighted>
            <p className="body-default text-grey-secondary">Approved problem copy has not yet been provided.</p>
          </InsightCard>
        </div>
      </CaseStudySection>

      <CaseStudySection title="My Role / Contribution">
        <div className="container-wide">
          <InsightCard label="Content Placeholder">
            <p className="body-default text-grey-secondary">Approved role and contribution copy has not yet been provided.</p>
          </InsightCard>
        </div>
      </CaseStudySection>

      {placeholderSections.map((title, index) => (
        <CaseStudySection key={title} title={title} backgroundLight={index % 2 === 0}>
          <div className="container-wide">
            <InsightCard label="Content Placeholder" highlighted={title === 'Outcome'}>
              <p className="body-default text-grey-secondary">Approved content for this section has not yet been provided.</p>
            </InsightCard>
          </div>
        </CaseStudySection>
      ))}

      <section className="section-spacing section-warm border-t warm-divider">
        <div className="container-wide">
          <Link href="/#work" className="inline-flex items-center gap-2 button-secondary">
            <span>←</span>
            <span>Back to Selected Work</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
