import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectSnapshot from '@/components/ProjectSnapshot'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'

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

function Artefact({ src, alt, width, height, caption, imageClassName = 'h-auto w-full', scrollOnMobile = false }: { src: string; alt: string; width: number; height: number; caption: string; imageClassName?: string; scrollOnMobile?: boolean }) {
  return (
    <div className={scrollOnMobile ? 'overflow-x-auto pb-2' : undefined}>
      <figure className={`${scrollOnMobile ? 'min-w-[48rem] md:min-w-0' : ''} overflow-hidden rounded-xl border border-burgundy/10 bg-white shadow-sm`}>
        <div className="bg-cream/35">
          <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1280px) 1152px, 100vw" className={imageClassName} />
        </div>
        <figcaption className="border-t border-burgundy/10 px-5 py-4 body-small text-grey-secondary">{caption}</figcaption>
      </figure>
    </div>
  )
}

export default function BulkMarketCaseStudy() {
  return (
    <div className="bg-ivory">
      <Navigation />
      <CaseStudyHero title="Bulk-Market" positioning="Designing a trust-first wholesale marketplace for African businesses." industry="B2B Commerce / Marketplace" description="Bulk-Market was designed to help buyers discover and transact with wholesale suppliers beyond their existing personal networks using verification, Trial Orders, escrow, and structured dispute resolution." />
      <section className="section-surface pb-12 md:pb-16">
        <div className="container-wide">
          <Artefact src="/projects/bulk-market/BULK MARKET PROJECT HERO:COVER IMAGE.png" alt="Bulk-Market case-study cover presenting the wholesale marketplace across buyer, seller, payment protection, and fulfilment experiences" width={1672} height={941} caption="Bulk-Market — a trust-first wholesale marketplace concept for African businesses" />
        </div>
      </section>
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
        <Artefact src="/projects/bulk-market/BULK MARKET RESEARCH FINDINGS.png" alt="Bulk-Market research findings showing trust, price comparison, travel barriers, willingness to adopt, and preferred trust signals" width={1448} height={1086} caption="Survey findings informing the marketplace trust and discovery strategy" scrollOnMobile />
        <Artefact src="/projects/bulk-market/BULK MARKET COMPETITOR ANALYSIS.png" alt="Bulk-Market competitor analysis comparing physical markets, WhatsApp and Facebook groups, trusted suppliers, Jumia, Kikuu and Alibaba" width={1448} height={1086} caption="Competitor analysis connecting existing alternatives to product opportunities" scrollOnMobile />
      </div></CaseStudySection>

      <CaseStudySection title="Key Insight" backgroundLight><div className="container-wide space-y-8"><InsightCard highlighted><p className="text-3xl md:text-4xl font-bold leading-tight text-near-black">“Users were not necessarily loyal to WhatsApp, phone calls, or physical markets. They were loyal to the trust those channels provided.”</p></InsightCard><Artefact src="/projects/bulk-market/BULK MARKET RESEARCH SYNTHESIS.png" alt="Bulk-Market research synthesis summarising recurring user needs, trust barriers, evidence, and product implications" width={1448} height={1086} caption="Research synthesis connecting participant evidence to product priorities" scrollOnMobile /></div></CaseStudySection>

      <CaseStudySection title="Target Users"><div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="Buyers"><BulletList items={['Retailers', 'SMEs', 'Online vendors', 'Restaurants', 'Hotels', 'Schools', 'Institutional buyers', 'Distributors']} /></InsightCard><InsightCard label="Sellers"><BulletList items={['Manufacturers', 'Wholesalers', 'Distributors', 'Farmers', 'Importers', 'Exporters']} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Personas" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="Amina · Cross-Region Retailer"><p className="body-default text-grey-secondary">Access better suppliers outside her region without losing payment protection.</p></InsightCard><InsightCard label="Emmanuel · Online Reseller"><p className="body-default text-grey-secondary">True wholesale pricing and a lower-risk first transaction.</p></InsightCard><InsightCard label="Chief Obinna · Wholesale Distributor"><p className="body-default text-grey-secondary">Serious buyers and payment certainty.</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Product Strategy"><div className="container-wide space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{['Quantity-Based Commerce', 'Cross-Regional Discovery', 'Digital Trust'].map((pillar, index) => <InsightCard key={pillar} label={`Pillar ${index + 1}`} highlighted><p className="heading-card">{pillar}</p></InsightCard>)}</div>
        <InsightCard label="Trust Layer"><Flow steps={['Verification', 'Trial Order', 'Escrow', 'Delivery', 'Confirmation', 'Reviews', 'Disputes', 'Enforcement']} /></InsightCard>
      </div></CaseStudySection>

      <CaseStudySection title="My Personal Contribution" backgroundLight><div className="container-wide space-y-6"><p className="body-large text-near-black max-w-3xl font-medium">The broader marketplace strategy and product output were collaborative. My direct contribution focused on research, journeys, interface design, dispute handling, and prototype integration.</p><InsightCard label="I Personally"><BulletList items={personalContributions} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Buyer Journey"><div className="container-wide space-y-8"><InsightCard label="Journey"><Flow steps={['Landing', 'Sign Up', 'Buyer Onboarding', 'Marketplace', 'Browse', 'Search', 'Filter', 'Product Detail', 'Purchase Flow']} /></InsightCard><p className="body-large text-grey-secondary max-w-3xl">I worked directly on the onboarding and discovery experience.</p><div className="space-y-6"><Artefact src="/projects/bulk-market/BULK MARKET BUYER  SCREENS 1.png" alt="Bulk-Market buyer registration and onboarding journey from welcome screen through account verification and access" width={3324} height={1076} caption="Buyer access and onboarding journey" scrollOnMobile /><Artefact src="/projects/bulk-market/BULK MARKET BUYER  SCREENS 2.png" alt="Bulk-Market buyer journey from product discovery through filtering, seller evaluation, cart, checkout and secure payment" width={3286} height={1718} caption="Buyer discovery, comparison and protected purchase journey" scrollOnMobile /><Artefact src="/projects/bulk-market/BULK MARKET BUYER  SCREENS 3.png" alt="Bulk-Market buyer journey through payment confirmation, order tracking, delivery status, ratings and post-order actions" width={3004} height={1192} caption="Buyer payment confirmation and post-order journey; exploratory concepts shown are not part of the committed MVP" scrollOnMobile /></div></div></CaseStudySection>

      <CaseStudySection title="Seller Journey" backgroundLight><div className="container-wide space-y-8"><InsightCard label="Journey"><Flow steps={['Landing', 'Seller Registration', 'Seller Onboarding', 'Marketplace Access', 'Product Listing']} /></InsightCard><p className="body-large text-grey-secondary max-w-3xl">I worked directly on seller onboarding and product listing.</p><div className="space-y-6"><Artefact src="/projects/bulk-market/BULK MARKET SELLER  SCREENS.png" alt="Bulk-Market seller journey from registration through business verification and verification status" width={3304} height={1550} caption="Seller registration, onboarding and verification journey" scrollOnMobile /><Artefact src="/projects/bulk-market/BULK MARKET SELLER  SCREENS 2.png" alt="Bulk-Market seller journey across dashboard access, product listing, MOQ and pricing setup, inventory and order management" width={3334} height={1410} caption="Seller catalogue, pricing, inventory and order-management journey" scrollOnMobile /><Artefact src="/projects/bulk-market/BULK MARKET SELLER  SCREENS 3.png" alt="Bulk-Market seller journey through fulfilment updates, dispute response, escrow, reviews and shop analytics" width={3360} height={1456} caption="Seller fulfilment, dispute, escrow and performance-management journey" scrollOnMobile /></div></div></CaseStudySection>

      <CaseStudySection title="Low-Fidelity Wireframing"><div className="container-wide space-y-8"><InsightCard label="Tool · Miro"><BulletList items={['Screen structure', 'Information hierarchy', 'Navigation', 'User progression', 'Interaction logic']} /></InsightCard><Artefact src="/projects/bulk-market/BULK MARKET LOW FIDELITY  SCREENS.png" alt="Bulk-Market low-fidelity Miro wireframes mapping early marketplace screens, navigation and buyer and seller progression" width={2816} height={1400} caption="Low-fidelity flow used to establish screen structure and interaction logic before high-fidelity design" scrollOnMobile /></div></CaseStudySection>

      <CaseStudySection title="High-Fidelity Design" backgroundLight><div className="container-wide space-y-8"><InsightCard label="Tool · Figma"><BulletList items={['Onboarding', 'Discovery', 'Seller listing', 'Transaction states', 'Dispute handling']} /></InsightCard><div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><Artefact src="/projects/bulk-market/BULK MARKETBUYER HOME PAGE.png" alt="Bulk-Market buyer marketplace home screen with categories and featured wholesale products" width={290} height={718} caption="Marketplace discovery" imageClassName="mx-auto h-auto w-full max-w-[20rem] object-contain" /><Artefact src="/projects/bulk-market/BULK MARKET SEARCH RESULTS SCREEN.png" alt="Bulk-Market wholesale search results with price, location and seller-verification filters" width={322} height={1042} caption="Search and comparison" imageClassName="mx-auto h-auto w-full max-w-[20rem] object-contain" /><Artefact src="/projects/bulk-market/BULK MARKET PRODUCT DETAILS SCREEN.png" alt="Bulk-Market product detail screen showing wholesale price, MOQ, stock, options and seller information" width={288} height={958} caption="Product details and MOQ" imageClassName="mx-auto h-auto w-full max-w-[20rem] object-contain" /><Artefact src="/projects/bulk-market/BULK MARKET SELLER PROFILE.png" alt="Bulk-Market verified seller profile with products, recent orders and inventory information" width={296} height={1480} caption="Seller evaluation and profile" imageClassName="mx-auto h-auto w-full max-w-[20rem] object-contain" /><Artefact src="/projects/bulk-market/BULK MARKET SELLER DASHBOARD.png" alt="Bulk-Market seller dashboard with order, escrow, listing, rating and inventory actions" width={438} height={892} caption="Seller dashboard" imageClassName="mx-auto h-auto w-full max-w-[20rem] object-contain" /><Artefact src="/projects/bulk-market/BULK MARKET SELLER VERIFICATION SCREEN.png" alt="Bulk-Market seller verification screen for identity, business registration, address and bank details" width={382} height={870} caption="Seller verification" imageClassName="mx-auto h-auto w-full max-w-[20rem] object-contain" /></div></div></CaseStudySection>

      <CaseStudySection title="End-to-End Prototyping"><div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">Different team members designed different parts of the product. I coordinated those screens, organised them into Buyer and Seller journeys, and connected the complete interactive prototype.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{['Journey consistency', 'Interaction dependencies', 'Navigation logic', 'State transitions', 'Systems thinking', 'Quality control'].map((item) => <InsightCard key={item} label={item}><p className="heading-card">{item}</p></InsightCard>)}</div><div className="glass-panel rounded-xl p-6 md:p-8"><p className="eyebrow mb-3">Prototype Overview</p><p className="body-default text-grey-secondary max-w-3xl">The approved buyer and seller journey artefacts above document the connected prototype across onboarding, marketplace discovery, transactions, fulfilment and dispute handling.</p><p className="body-small mt-3 text-grey-secondary">Prototype interface shown with illustrative demo data.</p><div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap"><a href="https://www.figma.com/proto/mHimese6Sd9Spk7hx0snTv/File-2?node-id=0-1&t=2YfEIH9ZFHNK7YRH-1" target="_blank" rel="noopener noreferrer" className="button-primary inline-flex items-center justify-center gap-2 text-center"><span>Explore Buyer Prototype</span><span aria-hidden="true">↗</span></a><a href="https://www.figma.com/proto/mHimese6Sd9Spk7hx0snTv/File-2?node-id=1-3&t=2YfEIH9ZFHNK7YRH-1" target="_blank" rel="noopener noreferrer" className="button-secondary inline-flex items-center justify-center gap-2 text-center"><span>Explore Seller Prototype</span><span aria-hidden="true">↗</span></a></div></div></div></CaseStudySection>

      <CaseStudySection title="MOQ & Wholesale Pricing" backgroundLight><div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">Every product had a Minimum Order Quantity. Quantity-based pricing tiers helped the product behave like a true wholesale marketplace.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="10–49 Units"><p className="heading-card">Base wholesale price</p></InsightCard><InsightCard label="50–99 Units"><p className="heading-card">Lower unit price</p></InsightCard><InsightCard label="100+ Units"><p className="heading-card">Lower unit price</p></InsightCard></div></div></CaseStudySection>

      <CaseStudySection title="Trial Orders"><div className="container-wide space-y-8"><InsightCard label="Trust-Building Sequence" highlighted><Flow steps={['Unknown Seller', 'Smaller Protected Order', 'Successful Delivery', 'Trust Established', 'Full Wholesale Order']} /></InsightCard><p className="body-large text-grey-secondary max-w-3xl">Trial Orders reduce first-purchase risk without removing the wholesale nature of the platform.</p></div></CaseStudySection>

      <CaseStudySection title="Escrow" backgroundLight><div className="container-wide space-y-8"><InsightCard label="Escrow Flow"><Flow steps={['Buyer Pays', 'Funds Held', 'Seller Fulfils', 'Delivery', 'Buyer Confirms', 'Seller Receives Funds']} /></InsightCard><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="Buyer Benefit"><p className="heading-card">Payment protection</p></InsightCard><InsightCard label="Seller Benefit"><p className="heading-card">Payment certainty</p></InsightCard></div><Artefact src="/projects/bulk-market/BULK MARKET ESCROW BALANCE AND WITHDRAWAL SCREEN.png" alt="Bulk-Market escrow balance and withdrawal screen showing available funds, held funds, releases and the payment-hold policy" width={380} height={634} caption="Seller escrow balance, release status and withdrawal controls; interface values are illustrative demo data" imageClassName="mx-auto h-auto w-full max-w-[30rem] object-contain" /></div></CaseStudySection>

      <CaseStudySection title="Dispute Resolution"><div className="container-wide space-y-8"><p className="body-large text-near-black font-medium max-w-3xl">I personally designed dispute-resolution experiences for failed delivery, damaged goods, incorrect products, missing items, and transaction failure.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="The User Needed to Understand"><BulletList items={['How to raise a dispute', 'What happens to the order state', 'How evidence may be submitted', 'What happens to escrow', 'What resolution comes next']} /></InsightCard><InsightCard label="Possible Outcomes"><BulletList items={['Full refund', 'Partial refund', 'Replacement', 'Dismissal']} /></InsightCard></div><Artefact src="/projects/bulk-market/BULK MARKET BUYER & SELLER DISPUTE RESOLUTION SCREEN .png" alt="Bulk-Market dispute-resolution journey from delayed delivery and evidence submission through seller response, admin review, mediation and resolution" width={3182} height={1332} caption="Buyer and seller dispute journey, including evidence, response, escalation, mediation and resolution states" scrollOnMobile /></div></CaseStudySection>

      <CaseStudySection title="Partial Bulk-Order Failure" backgroundLight><div className="container-wide space-y-8"><InsightCard label="Example" highlighted><Flow steps={['100 units ordered', '15 damaged', 'Proportional resolution required']} /></InsightCard><p className="body-large text-grey-secondary max-w-3xl">Full-refund logic may be inappropriate for wholesale transactions when only part of a large order fails. The product therefore needed proportional dispute resolution.</p><Artefact src="/projects/bulk-market/BULK MARKET DISPUTE REQUEST SCREEN.png" alt="Bulk-Market dispute request showing 15 affected units from an order of 100, written evidence, uploads and a requested resolution" width={454} height={992} caption="Partial-order dispute input for 15 affected units from a 100-unit order" imageClassName="mx-auto h-auto w-full max-w-[30rem] object-contain" /></div></CaseStudySection>

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
