import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'

export const metadata = {
  title: 'About | Chisom Ayogu — Product Manager',
  description: 'Early-career Product Manager working across discovery, strategy, AI-enabled products, marketplaces, and cross-functional delivery.',
}

const capabilities = ['Product Discovery', 'Product Strategy', 'AI-Enabled Products', 'Marketplace Thinking', 'Cross-Functional Leadership', 'Stakeholder Management', 'Delivery Management', 'User Research', 'User Journeys', 'Wireframing', 'Prototyping', 'Product Documentation']
const legalStrengths = ['Structured thinking', 'Research', 'Analytical problem solving', 'Risk awareness', 'Stakeholder communication', 'Documentation', 'Negotiation']

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <Navigation />
      <section className="section-spacing hero-atmosphere page-hero"><div className="container-wide"><p className="eyebrow mb-6 md:mb-8">About Chisom</p><h1 className="heading-hero mb-8 md:mb-10 max-w-5xl">A Product Manager who brings structure to ambiguous problems.</h1><p className="body-large text-grey-secondary max-w-3xl">I&apos;m an early-career Product Manager with practical experience moving from discovery and product strategy through user journeys, prototyping, stakeholder alignment, and delivery.</p><div className="flex flex-col sm:flex-row gap-4 mt-10"><Link href="/#work" className="button-primary text-center">View My Work</Link><Link href="/cv" className="button-secondary text-center">View CV</Link></div></div></section>
      <CaseStudySection title="Professional Story" backgroundLight><div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"><InsightCard label="Why Product Management"><p className="body-large text-grey-secondary">I&apos;m drawn to Product Management because it sits where user needs, business context, and execution meet. I enjoy turning unclear situations into a shared problem definition, a considered product direction, and work a team can deliver.</p></InsightCard><InsightCard label="A Legal Foundation"><p className="body-large text-grey-secondary">My legal training supports how I approach product work: research carefully, reason clearly, communicate with different stakeholders, document decisions, and consider risk without losing sight of progress.</p></InsightCard></div></CaseStudySection>
      <CaseStudySection title="How I Think About Product"><div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="Understand"><p className="body-default text-grey-secondary">Start with users, context, constraints, and evidence before committing to a solution.</p></InsightCard><InsightCard label="Decide" highlighted><p className="body-default text-grey-secondary">Connect insight to priorities, trade-offs, journeys, requirements, and a clear definition of value.</p></InsightCard><InsightCard label="Deliver"><p className="body-default text-grey-secondary">Keep stakeholders and cross-functional teams aligned as the product moves from intent to execution.</p></InsightCard></div></CaseStudySection>
      <CaseStudySection title="What I Bring" backgroundLight><div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">I combine practical product skills with the disciplined thinking developed through legal training.</p><div className="flex flex-wrap gap-3">{legalStrengths.map((strength) => <span key={strength} className="rounded-full border border-burgundy/15 bg-white px-4 py-2 text-sm font-semibold text-near-black shadow-sm">{strength}</span>)}</div></div></CaseStudySection>
      <CaseStudySection title="Tools & Capabilities"><div className="container-wide flex flex-wrap gap-3">{capabilities.map((capability) => <span key={capability} className="rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-2 text-sm font-medium text-burgundy">{capability}</span>)}</div></CaseStudySection>
      <CaseStudySection title="Problems I Enjoy" backgroundLight><div className="container-wide"><InsightCard highlighted><p className="text-2xl md:text-3xl font-bold leading-snug text-near-black">Products where trust, complex journeys, emerging technology, or multiple stakeholder needs must be translated into a clear and usable experience.</p></InsightCard></div></CaseStudySection>
      <section className="section-spacing section-warm border-t warm-divider"><div className="container-wide"><div className="cta-panel rounded-2xl px-6 py-14 md:px-12 md:py-16 text-center"><h2 className="heading-section text-ivory mb-6">Interested in working together?</h2><p className="body-large text-ivory/75 max-w-2xl mx-auto mb-8">I&apos;m open to thoughtful conversations about Product Management roles, teams, and product challenges.</p><Link href="/contact" className="button-on-dark inline-flex">Start a Conversation</Link></div></div></section>
      <Footer />
    </div>
  )
}
