import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectSnapshot from '@/components/ProjectSnapshot'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'
import VisualPlaceholder from '@/components/VisualPlaceholder'

export const metadata = {
  title: 'FoodSaver Case Study | Chisom Ayogu',
  description: 'A FoodTech sustainability marketplace bootcamp project focused on problem-to-prototype execution.',
}

const outcomes = [
  'Problem definition', 'Solution statement', 'Business goal', 'User goal', 'Environmental goal',
  'Personas', 'MVP definition', 'User flow', 'Low-fidelity wireframes', 'High-fidelity design', 'Interactive prototype',
]

const lessons = [
  'Start with the core transaction',
  'Product value can serve business, consumer, and environmental goals',
  'User flows make ideas concrete',
  'Low-fidelity design helps expose problems early',
  'Offline experience can be part of the product experience',
  'Product decisions should reflect business mechanics',
]

const skills = [
  'Problem Framing', 'Persona Development', 'MVP Definition', 'User Flow Design', 'Wireframing',
  'Product Design', 'Prototyping', 'Marketplace Thinking', 'Sustainability Thinking', 'Product Decision Making',
]

function BulletList({ items }: { items: string[] }) {
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex gap-3 body-default text-grey-secondary"><span className="text-burgundy" aria-hidden="true">•</span><span>{item}</span></li>)}</ul>
}

function Flow({ steps }: { steps: string[] }) {
  return <div className="flex flex-wrap items-center gap-3">{steps.map((step, index) => <div key={`${step}-${index}`} className="flex items-center gap-3"><span className="rounded-full border border-burgundy/20 bg-white px-4 py-2 text-sm font-semibold text-near-black shadow-sm">{step}</span>{index < steps.length - 1 && <span className="text-burgundy" aria-hidden="true">→</span>}</div>)}</div>
}

export default function FoodSaverCaseStudy() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <CaseStudyHero
        title="FoodSaver"
        positioning="Turning surplus food into affordable meals instead of waste."
        industry="FoodTech / Sustainability Marketplace"
        description="FoodSaver is a mobile marketplace designed to help food businesses recover value from surplus food while giving consumers access to discounted meals and reducing avoidable food waste."
      />

      <ProjectSnapshot items={[
        { label: 'Industry', value: 'FoodTech / Sustainability' },
        { label: 'Product', value: 'Mobile Marketplace' },
        { label: 'Project Context', value: 'Product Management Bootcamp Project' },
        { label: 'Focus', value: 'MVP · User Flows · Wireframes · Figma · Prototyping' },
      ]} />

      <CaseStudySection title="The Problem" backgroundLight><div className="container-wide space-y-8">
        <p className="body-large text-grey-secondary max-w-3xl">Restaurants, bakeries, supermarkets, and market vendors often dispose of safe unsold food because it cannot be sold before closing time or expiry.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="Business Problem"><p className="heading-card">Revenue loss</p></InsightCard><InsightCard label="Consumer Problem"><p className="heading-card">Food affordability</p></InsightCard><InsightCard label="Environmental Problem"><p className="heading-card">Food waste</p></InsightCard></div>
        <InsightCard label="Problem Statement" highlighted><p className="text-2xl md:text-3xl font-bold leading-snug text-near-black">“How might we help food businesses recover revenue from surplus inventory while helping consumers access affordable food and reducing avoidable food waste?”</p></InsightCard>
      </div></CaseStudySection>

      <CaseStudySection title="Value Proposition"><div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="Business"><p className="heading-card">Recover value from unsold inventory.</p></InsightCard><InsightCard label="Consumer"><p className="heading-card">Access affordable food.</p></InsightCard><InsightCard label="Environment"><p className="heading-card">Reduce avoidable food waste.</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Target Users" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6">
        <InsightCard label="Sarah · 27 · Graduate Student"><p className="eyebrow mb-4 text-burgundy">Consumer Persona</p><p className="font-semibold text-near-black mb-3">Goals</p><BulletList items={['Save money', 'Discover affordable meals', 'Purchase food quickly']} /><p className="font-semibold text-near-black mt-6 mb-3">Pain Points</p><BulletList items={['High food prices', 'Limited budget', 'Difficult to find discounted food']} /></InsightCard>
        <InsightCard label="Mr. Ade · 42 · Restaurant Owner"><p className="eyebrow mb-4 text-burgundy">Business Persona</p><p className="font-semibold text-near-black mb-3">Goals</p><BulletList items={['Sell surplus food', 'Reduce losses', 'Attract more customers']} /><p className="font-semibold text-near-black mt-6 mb-3">Pain Points</p><BulletList items={['Unsold inventory', 'Food waste', 'Lost revenue']} /></InsightCard>
      </div></CaseStudySection>

      <CaseStudySection title="Product Solution"><div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="Businesses Can List"><BulletList items={['Surplus food', 'Near-expiry food', 'Discounted food offers']} /></InsightCard><InsightCard label="Consumers Can"><BulletList items={['Browse and search', 'Discover nearby deals', 'View food details', 'Reserve food', 'Pay and receive confirmation', 'Collect before the pickup deadline']} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="MVP" backgroundLight><div className="container-wide grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><InsightCard label="Account"><BulletList items={['Registration', 'Verification', 'Authentication']} /></InsightCard><InsightCard label="Discovery"><BulletList items={['Browse deals', 'Search', 'Nearby offers']} /></InsightCard><InsightCard label="Transaction"><BulletList items={['Food details', 'Reservation', 'Payment']} /></InsightCard><InsightCard label="Completion"><BulletList items={['Confirmation', 'Pickup location', 'Pickup time', 'Collection details']} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Core User Journey"><div className="container-wide space-y-8"><InsightCard label="Central Flow" highlighted><Flow steps={['Launch', 'Register / Sign In', 'Browse', 'View Deal', 'Reserve', 'Pay', 'Confirm', 'Pick Up']} /></InsightCard><VisualPlaceholder label="FoodSaver User Flow" /></div></CaseStudySection>

      <CaseStudySection title="Low-Fidelity Wireframes" backgroundLight><div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">The wireframes helped establish hierarchy, navigation, sequence, and information placement.</p><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{['Onboarding', 'Authentication', 'Home', 'Listing', 'Food Detail', 'Reservation', 'Payment', 'Confirmation'].map((screen) => <VisualPlaceholder key={screen} label={screen} />)}</div></div></CaseStudySection>

      <CaseStudySection title="High-Fidelity Design"><div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">The interface needed to make the product image, original and discounted prices, availability, seller, pickup deadline, reservation state, payment state, and collection details clear.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><VisualPlaceholder label="High-Fidelity Screen Gallery" /><VisualPlaceholder label="Food Detail Screen" /><VisualPlaceholder label="Confirmation Screen" /></div></div></CaseStudySection>

      <CaseStudySection title="Discovery Experience" backgroundLight><div className="container-wide space-y-8"><InsightCard highlighted><p className="text-2xl md:text-3xl font-bold text-near-black">“Is there affordable food near me that I actually want to buy?”</p></InsightCard><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="Identify"><p className="heading-card">Make food visually identifiable.</p></InsightCard><InsightCard label="Value"><p className="heading-card">Make savings obvious.</p></InsightCard><InsightCard label="Timing"><p className="heading-card">Make pickup timing clear.</p></InsightCard></div></div></CaseStudySection>

      <CaseStudySection title="Food Detail Experience"><div className="container-wide space-y-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><InsightCard label="Essential Information"><BulletList items={['Food name and description', 'Original and discounted prices', 'Pickup deadline', 'Seller information', 'Available quantity']} /></InsightCard><VisualPlaceholder label="Food Detail" /></div><InsightCard label="Time-Sensitive Inventory" highlighted><p className="body-large text-near-black">A product available at 4 PM may no longer be relevant at 8 PM. Availability and pickup deadline are core product information.</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Reservation Logic" backgroundLight><div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">Without reservation, a consumer could travel to the seller only to discover that the food had already been sold.</p><InsightCard label="Reservation Flow"><Flow steps={['Select', 'Reserve', 'Pay', 'Confirm', 'Collect']} /></InsightCard><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="Consumer Benefit"><p className="heading-card">Knows the food is secured.</p></InsightCard><InsightCard label="Business Benefit"><p className="heading-card">Knows surplus inventory has been sold before disposal.</p></InsightCard></div><VisualPlaceholder label="Reservation Screen" /></div></CaseStudySection>

      <CaseStudySection title="Payment & Pickup"><div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">The experience does not end at checkout. After payment, the consumer needs confirmation, pickup location, pickup time, and collection details. The offline collection experience is part of the product.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><VisualPlaceholder label="Payment Screen" /><VisualPlaceholder label="Pickup Confirmation" /></div></div></CaseStudySection>

      <CaseStudySection title="Key Product Decisions" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="1 · Keep the MVP Transaction-Focused"><p className="body-default text-grey-secondary">Focus on discovery, reservation, payment, and pickup.</p></InsightCard><InsightCard label="2 · Make Discount Value Visible"><p className="body-default text-grey-secondary">Show original and discounted prices.</p></InsightCard><InsightCard label="3 · Make Pickup Information Core"><p className="body-default text-grey-secondary">Location and timing are part of the product experience.</p></InsightCard><InsightCard label="4 · Design for Time-Sensitive Inventory"><p className="body-default text-grey-secondary">Availability and pickup deadline must be visible.</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="What I Would Measure"><div className="container-wide space-y-8"><p className="eyebrow text-burgundy">Proposed Metrics · Not Achieved Results</p><InsightCard label="Business Recovery + Consumer Savings + Waste Reduction" highlighted><BulletList items={['Discovery-to-Detail Rate', 'Reservation Conversion Rate', 'Checkout Completion Rate', 'Pickup Completion Rate', 'Sell-Through Rate', 'Repeat Purchase Rate', 'Business Repeat-Listing Rate', 'Food Saved']} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Risks & Assumptions" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><InsightCard label="Inventory Accuracy"><p className="body-default text-grey-secondary">Businesses must keep availability updated.</p></InsightCard><InsightCard label="Pickup Reliability"><p className="body-default text-grey-secondary">Consumers must collect during the stated window.</p></InsightCard><InsightCard label="Food Quality & Safety"><p className="body-default text-grey-secondary">Food must remain safe and suitable.</p></InsightCard><InsightCard label="Consumer Trust"><p className="body-default text-grey-secondary">The reserved product must match expectations.</p></InsightCard><InsightCard label="Business Adoption"><p className="body-default text-grey-secondary">Listing surplus food must feel easier and more valuable than disposal.</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Outcome"><div className="container-wide space-y-8"><p className="body-large text-near-black font-medium max-w-3xl">This Product Management bootcamp project produced a product concept and interactive prototype. It was not a commercial launch, and no revenue, user, food-saved, or post-launch results are claimed.</p><InsightCard label="Project Output"><BulletList items={outcomes} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="What I Learned" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{lessons.map((lesson, index) => <InsightCard key={lesson} label={`Reflection ${index + 1}`}><p className="heading-card">{lesson}</p></InsightCard>)}</div></CaseStudySection>

      <CaseStudySection title="Skills Demonstrated"><div className="container-wide flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="rounded-full border border-burgundy/20 bg-white px-4 py-2 text-sm font-semibold text-near-black shadow-sm">{skill}</span>)}</div></CaseStudySection>

      <section className="section-spacing section-warm border-t warm-divider"><div className="container-wide flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"><Link href="/#work" className="inline-flex items-center gap-2 button-secondary"><span>←</span><span>Back to Work</span></Link><Link href="/earlier-work" className="inline-flex items-center gap-2 button-primary"><span>Earlier Product Work</span><span>→</span></Link></div></section>
      <Footer />
    </div>
  )
}
