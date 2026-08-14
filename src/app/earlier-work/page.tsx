import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'
import VisualPlaceholder from '@/components/VisualPlaceholder'

export const metadata = { title: 'Earlier Product Work | Chisom Ayogu — Product Manager', description: 'Earlier Product Management projects across LegalTech career development and remote-work wellness.' }

function BulletList({ items }: { items: string[] }) { return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex gap-3 body-default text-grey-secondary"><span className="text-burgundy" aria-hidden="true">•</span><span>{item}</span></li>)}</ul> }

export default function EarlierWorkPage() {
  return (
    <div className="bg-ivory">
      <Navigation />
      <section className="section-spacing hero-atmosphere page-hero"><div className="container-wide"><p className="eyebrow mb-6 md:mb-8">Earlier Product Work</p><h1 className="heading-hero mb-8 md:mb-10 max-w-4xl">The projects that built my product foundations.</h1><p className="body-large text-grey-secondary max-w-3xl">Two earlier Product Management projects that developed my approach to research, problem framing, user flows, prioritisation, wireframing, and documentation.</p></div></section>
      <CaseStudySection title="Legal Launch" backgroundLight><div id="legallaunch" className="container-wide space-y-8"><div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6"><InsightCard label="LegalTech / Career Development"><p className="eyebrow text-burgundy mb-4">Individual Product Management Capstone</p><p className="body-large text-grey-secondary">A product concept helping recent law graduates bridge the gap between academic legal education and practical career experience.</p></InsightCard><VisualPlaceholder label="Legal Launch Concept" /></div><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="Product Concepts"><BulletList items={['Virtual internships', 'Mentorship', 'Job matching', 'Skill-development courses', 'Case-study challenges']} /></InsightCard><InsightCard label="Foundation Built"><BulletList items={['Problem framing', 'User research', 'Personas', 'Feature prioritisation', 'User stories', 'User flows', 'Wireframing', 'Product metrics']} /></InsightCard></div><p className="body-small text-grey-secondary">Individual capstone concept · Not presented as a launched product.</p></div></CaseStudySection>
      <CaseStudySection title="HealthHub"><div id="healthhub" className="container-wide space-y-8"><div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6"><InsightCard label="Health & Wellness / Future of Work"><p className="eyebrow text-burgundy mb-4">Group Product Management Project</p><p className="body-large text-grey-secondary">A wellness product concept designed to support remote workers experiencing burnout, work-life imbalance, reduced physical activity, and broader wellbeing challenges.</p></InsightCard><VisualPlaceholder label="HealthHub Concept" /></div><InsightCard label="My Personal Contribution" highlighted><BulletList items={['Market research', 'Competitor analysis', 'Persona work', 'Miro user flow', 'Whimsical wireframes', 'PRD work']} /></InsightCard><p className="body-small text-grey-secondary">This was a collaborative group project. The contribution above reflects my personal work, not the team&apos;s entire output.</p></div></CaseStudySection>
      <Footer />
    </div>
  )
}
