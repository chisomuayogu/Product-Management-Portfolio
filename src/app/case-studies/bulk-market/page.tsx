import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectSnapshot from '@/components/ProjectSnapshot'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'
import VisualPlaceholder from '@/components/VisualPlaceholder'

export const metadata = {
  title: 'Bulk-Market Case Study | Chisom Ayogu',
  description: 'A trust-first B2B wholesale marketplace capstone focused on marketplace strategy, buyer and seller journeys, escrow, and dispute resolution.',
}

const researchFindings = [
  'Trust and fear of fraud were major barriers', 'Users struggled to compare prices',
  'Distance and travel costs were significant', 'Buyers wanted verified sellers',
  'Buyers wanted refunds and protection', 'Ratings mattered', 'Users wanted smaller first orders',
]

const personalContributions = [
  'Contributed to research', 'Participated in product-thinking meetings',
  'Participated in product-strategy discussions', 'Created low-fidelity wireframes in Miro',
  'Created high-fidelity designs in Figma', 'Designed buyer sign-up and onboarding',
  'Designed seller sign-up and onboarding', 'Designed buyer discovery and filtering experiences',
  'Designed seller product-listing experiences', 'Designed dispute-resolution screens',
  'Worked on failed-delivery scenarios', 'Considered escrow behaviour during disputes',
  'Prototyped my assigned screens', 'Coordinated screens produced by other team members',
  'Organised the final prototype into Buyer and Seller journeys', 'Connected the complete interactive prototype',
]

const tradeOffs = [
  'Trust vs Onboarding Friction', 'Wholesale Integrity vs First-Order Risk',
  'Buyer Protection vs Seller Cash Flow', 'Logistics Control vs MVP Complexity',
  'Product Breadth vs Validation',
]

const outcomes = [
  'Research', 'Personas', 'Competitor analysis', 'Marketplace strategy', 'MVP definition',
  'Buyer journey', 'Seller journey', 'Miro wireframes', 'Figma designs', 'Interactive prototype',
  'Trust rules', 'Escrow logic', 'Dispute flows', 'Monetisation thinking', 'Marketplace metrics', 'Growth strategy',
]

const lessons = [
  'Two-sided products must create value for both sides', 'Trust can be designed',
  'User journeys expose dependencies', 'Prototyping is about behaviour, not just screens',
  'Edge cases are core product work', 'Strategy and UX are connected',
]

const skills = [
  'Marketplace Thinking', 'Product Discovery', 'Product Strategy', 'Trust & Safety Thinking',
  'Buyer/Seller Journey Design', 'Wireframing', 'Figma', 'Prototyping', 'Systems Thinking',
  'Dispute Design', 'Transaction Thinking', 'Collaboration',
]

function BulletList({ items }: { items: string[] }) {
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex gap-3 body-default text-grey-secondary"><span className="text-burgundy" aria-hidden="true">•</span><span>{item}</span></li>)}</ul>
}

function Flow({ steps }: { steps: string[] }) {
  return <div className="flex flex-wrap items-center gap-3">{steps.map((step, index) => <div key={`${step}-${index}`} className="flex items-center gap-3"><span className="rounded-full border border-burgundy/20 bg-white px-4 py-2 text-sm font-semibold text-near-black shadow-sm">{step}</span>{index < steps.length - 1 && <span className="text-burgundy" aria-hidden="true">→</span>}</div>)}</div>
}

export default function BulkMarketCaseStudy() {
  return (
    <div className="bg-ivory">
      <Navigation />
      <CaseStudyHero title="Bulk-Market" positioning="Designing a trust-first wholesale marketplace for African businesses." industry="B2B Commerce / Marketplace" description="Bulk-Market was designed to help buyers discover and transact with wholesale suppliers beyond their existing personal networks using verification, Trial Orders, escrow, and structured dispute resolution." />
      <ProjectSnapshot items={[
        { label: 'Role', value: 'Product Manager' }, { label: 'Project Type', value: 'PM Group Capstone' },
        { label: 'Industry', value: 'B2B Marketplace' }, { label: 'Focus', value: 'Marketplace Strategy · Trust · Buyer/Seller Journeys · Prototyping' },
      ]} />

      <CaseStudySection title="The Problem" backgroundLight><div className="container-wide space-y-8">
        <p className="body-large text-grey-secondary max-w-3xl">Wholesale buyers and sellers often rely on physical markets, WhatsApp, Facebook, phone calls, referrals, and trusted supplier relationships.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="What Existing Channels Provide"><p className="heading-card">Trust</p></InsightCard><InsightCard label="What Existing Channels Limit"><BulletList items={['Supplier discovery', 'Price comparison', 'Geographic reach', 'Transaction protection', 'Structured dispute resolution']} /></InsightCard></div>
        <InsightCard label="Problem Statement" highlighted><p className="text-2xl md:text-3xl font-bold leading-snug text-near-black">“How might we enable buyers and sellers who do not already know each other to transact with enough confidence to move wholesale activity beyond existing personal networks?”</p></InsightCard>
      </div></CaseStudySection>

      <CaseStudySection title="Research"><div className="container-wide space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="My Participation"><BulletList items={['Part of the research team', 'Product-thinking meetings', 'Product-strategy discussions']} /></InsightCard><InsightCard label="Team Research"><BulletList items={['Surveys', 'Stakeholder interviews', 'Competitor analysis', 'Market research']} /></InsightCard></div>
        <InsightCard label="Research Findings"><BulletList items={researchFindings} /></InsightCard>
      </div></CaseStudySection>

      <CaseStudySection title="Key Insight" backgroundLight><div className="container-wide"><InsightCard highlighted><p className="text-3xl md:text-4xl font-bold leading-tight text-near-black">“Users were not necessarily loyal to WhatsApp, phone calls, or physical markets. They were loyal to the trust those channels provided.”</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Target Users"><div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="Buyers"><BulletList items={['Retailers', 'SMEs', 'Online vendors', 'Restaurants', 'Hotels', 'Schools', 'Institutional buyers', 'Distributors']} /></InsightCard><InsightCard label="Sellers"><BulletList items={['Manufacturers', 'Wholesalers', 'Distributors', 'Farmers', 'Importers', 'Exporters']} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Personas" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="Amina · Cross-Region Retailer"><p className="body-default text-grey-secondary">Access better suppliers outside her region without losing payment protection.</p></InsightCard><InsightCard label="Emmanuel · Online Reseller"><p className="body-default text-grey-secondary">True wholesale pricing and a lower-risk first transaction.</p></InsightCard><InsightCard label="Chief Obinna · Wholesale Distributor"><p className="body-default text-grey-secondary">Serious buyers and payment certainty.</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Product Strategy"><div className="container-wide space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{['Quantity-Based Commerce', 'Cross-Regional Discovery', 'Digital Trust'].map((pillar, index) => <InsightCard key={pillar} label={`Pillar ${index + 1}`} highlighted><p className="heading-card">{pillar}</p></InsightCard>)}</div>
        <InsightCard label="Trust Layer"><Flow steps={['Verification', 'Trial Order', 'Escrow', 'Delivery', 'Confirmation', 'Reviews', 'Disputes', 'Enforcement']} /></InsightCard><VisualPlaceholder label="Trust-Layer Diagram" />
      </div></CaseStudySection>

      <CaseStudySection title="My Personal Contribution" backgroundLight><div className="container-wide space-y-6"><p className="body-large text-near-black max-w-3xl font-medium">The broader marketplace strategy and product output were collaborative. My direct contribution focused on research, journeys, interface design, dispute handling, and prototype integration.</p><InsightCard label="I Personally"><BulletList items={personalContributions} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Buyer Journey"><div className="container-wide space-y-8"><InsightCard label="Journey"><Flow steps={['Landing', 'Sign Up', 'Buyer Onboarding', 'Marketplace', 'Browse', 'Search', 'Filter', 'Product Detail', 'Purchase Flow']} /></InsightCard><p className="body-large text-grey-secondary max-w-3xl">I worked directly on the onboarding and discovery experience.</p><VisualPlaceholder label="Buyer Flow" /></div></CaseStudySection>

      <CaseStudySection title="Seller Journey" backgroundLight><div className="container-wide space-y-8"><InsightCard label="Journey"><Flow steps={['Landing', 'Seller Registration', 'Seller Onboarding', 'Marketplace Access', 'Product Listing']} /></InsightCard><p className="body-large text-grey-secondary max-w-3xl">I worked directly on seller onboarding and product listing.</p><VisualPlaceholder label="Seller Flow" /></div></CaseStudySection>

      <CaseStudySection title="Low-Fidelity Wireframing"><div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-6"><InsightCard label="Tool · Miro"><BulletList items={['Screen structure', 'Information hierarchy', 'Navigation', 'User progression', 'Interaction logic']} /></InsightCard><VisualPlaceholder label="Miro Wireframes" /></div></CaseStudySection>

      <CaseStudySection title="High-Fidelity Design" backgroundLight><div className="container-wide space-y-8"><InsightCard label="Tool · Figma"><BulletList items={['Onboarding', 'Discovery', 'Seller listing', 'Transaction states', 'Dispute handling']} /></InsightCard><VisualPlaceholder label="Figma Screens" /></div></CaseStudySection>

      <CaseStudySection title="End-to-End Prototyping"><div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">Different team members designed different parts of the product. I coordinated those screens, organised them into Buyer and Seller journeys, and connected the complete interactive prototype.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{['Journey consistency', 'Interaction dependencies', 'Navigation logic', 'State transitions', 'Systems thinking', 'Quality control'].map((item) => <InsightCard key={item} label={item}><p className="heading-card">{item}</p></InsightCard>)}</div><VisualPlaceholder label="Prototype Screenshots" /></div></CaseStudySection>

      <CaseStudySection title="MOQ & Wholesale Pricing" backgroundLight><div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">Every product had a Minimum Order Quantity. Quantity-based pricing tiers helped the product behave like a true wholesale marketplace.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="10–49 Units"><p className="heading-card">Base wholesale price</p></InsightCard><InsightCard label="50–99 Units"><p className="heading-card">Lower unit price</p></InsightCard><InsightCard label="100+ Units"><p className="heading-card">Lower unit price</p></InsightCard></div></div></CaseStudySection>

      <CaseStudySection title="Trial Orders"><div className="container-wide space-y-8"><InsightCard label="Trust-Building Sequence" highlighted><Flow steps={['Unknown Seller', 'Smaller Protected Order', 'Successful Delivery', 'Trust Established', 'Full Wholesale Order']} /></InsightCard><p className="body-large text-grey-secondary max-w-3xl">Trial Orders reduce first-purchase risk without removing the wholesale nature of the platform.</p></div></CaseStudySection>

      <CaseStudySection title="Escrow" backgroundLight><div className="container-wide space-y-8"><InsightCard label="Escrow Flow"><Flow steps={['Buyer Pays', 'Funds Held', 'Seller Fulfils', 'Delivery', 'Buyer Confirms', 'Seller Receives Funds']} /></InsightCard><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="Buyer Benefit"><p className="heading-card">Payment protection</p></InsightCard><InsightCard label="Seller Benefit"><p className="heading-card">Payment certainty</p></InsightCard></div></div></CaseStudySection>

      <CaseStudySection title="Dispute Resolution"><div className="container-wide space-y-8"><p className="body-large text-near-black font-medium max-w-3xl">I personally designed dispute-resolution experiences for failed delivery, damaged goods, incorrect products, missing items, and transaction failure.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="The User Needed to Understand"><BulletList items={['How to raise a dispute', 'What happens to the order state', 'How evidence may be submitted', 'What happens to escrow', 'What resolution comes next']} /></InsightCard><InsightCard label="Possible Outcomes"><BulletList items={['Full refund', 'Partial refund', 'Replacement', 'Dismissal']} /></InsightCard></div><VisualPlaceholder label="Dispute Screens" /></div></CaseStudySection>

      <CaseStudySection title="Partial Bulk-Order Failure" backgroundLight><div className="container-wide space-y-8"><InsightCard label="Example" highlighted><Flow steps={['100 units ordered', '15 damaged', 'Proportional resolution required']} /></InsightCard><p className="body-large text-grey-secondary max-w-3xl">Full-refund logic may be inappropriate for wholesale transactions when only part of a large order fails. The product therefore needed proportional dispute resolution.</p></div></CaseStudySection>

      <CaseStudySection title="Marketplace Metrics"><div className="container-wide space-y-8"><InsightCard label="North Star Metric" highlighted><p className="text-3xl md:text-4xl font-bold text-near-black mb-4">Monthly Successful Wholesale Transactions</p><p className="body-default text-grey-secondary">Successful transactions are more meaningful than registrations alone.</p></InsightCard><InsightCard label="Supporting KPIs"><BulletList items={['Gross Merchandise Value', 'Verified Active Sellers', 'Repeat Buyers', 'Trial-to-Full-Order Conversion', 'Dispute Rate', 'Average Order Value']} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Revenue Model" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="MVP"><p className="heading-card">Transaction Commission</p></InsightCard><InsightCard label="Future · Staged Monetisation"><BulletList items={['Seller subscriptions', 'Promoted products', 'Advertising', 'Logistics partnerships', 'Premium business services']} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Growth Strategy"><div className="container-wide space-y-8"><InsightCard label="Challenge"><p className="heading-card">Marketplace chicken-and-egg problem</p></InsightCard><InsightCard label="Strategy · Seed Supply First" highlighted><Flow steps={['Recruit verified sellers', 'Assisted onboarding', 'Onboard existing buyer relationships', 'Move trusted transactions onto platform', 'Expand discovery beyond existing networks']} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Key Trade-Offs" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{tradeOffs.map((item, index) => <InsightCard key={item} label={`Trade-Off ${index + 1}`}><p className="heading-card">{item}</p></InsightCard>)}</div></CaseStudySection>

      <CaseStudySection title="Outcome"><div className="container-wide space-y-8"><p className="body-large text-near-black font-medium max-w-3xl">This Product Management group capstone produced a complete product concept and prototype. It was not a commercial launch, so no launch, adoption, revenue, or user-impact results are claimed.</p><InsightCard label="Team Capstone Output"><BulletList items={outcomes} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="What I Learned" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{lessons.map((lesson, index) => <InsightCard key={lesson} label={`Lesson ${index + 1}`}><p className="heading-card">{lesson}</p></InsightCard>)}</div></CaseStudySection>

      <CaseStudySection title="Skills Demonstrated"><div className="container-wide flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="rounded-full border border-burgundy/20 bg-white px-4 py-2 text-sm font-semibold text-near-black shadow-sm">{skill}</span>)}</div></CaseStudySection>

      <section className="section-spacing section-warm border-t warm-divider"><div className="container-wide flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"><Link href="/#work" className="inline-flex items-center gap-2 button-secondary"><span>←</span><span>Back to Work</span></Link><Link href="/case-studies/foodsaver" className="inline-flex items-center gap-2 button-primary"><span>Next Project: FoodSaver</span><span>→</span></Link></div></section>
      <Footer />
    </div>
  )
}
