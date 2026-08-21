import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectSnapshot from '@/components/ProjectSnapshot'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'
import { createPageMetadata } from '@/data/site'

export const metadata = createPageMetadata({
  title: 'FoodSaver Case Study | Chisom Ayogu',
  description: 'A FoodTech sustainability marketplace bootcamp project focused on problem-to-prototype execution.',
  path: '/case-studies/foodsaver',
})

const outcomes = [
  'Problem definition', 'Solution statement', 'Business goal', 'User goal', 'Environmental goal',
  'Personas', 'MVP definition', 'User flow', 'High-fidelity design', 'Interactive prototype',
]

const lessons = [
  'Start with the core transaction',
  'Product value can serve business, consumer, and environmental goals',
  'User flows make ideas concrete',
  'Testing the end-to-end flow helps expose gaps early',
  'Offline experience can be part of the product experience',
  'Product decisions should reflect business mechanics',
]

const skills = [
  'Problem Framing', 'Persona Development', 'MVP Definition', 'User Flow Design',
  'Product Design', 'Prototyping', 'Marketplace Thinking', 'Sustainability Thinking', 'Product Decision Making',
]

function BulletList({ items }: { items: string[] }) {
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex gap-3 body-default text-grey-secondary"><span className="text-burgundy" aria-hidden="true">•</span><span>{item}</span></li>)}</ul>
}

function Flow({ steps }: { steps: string[] }) {
  return <ol className="flex flex-wrap items-center gap-3">{steps.map((step, index) => <li key={`${step}-${index}`} className="flex items-center gap-3"><span className="rounded-full border border-burgundy/20 bg-white px-4 py-2 text-sm font-semibold text-near-black shadow-sm">{step}</span>{index < steps.length - 1 && <span className="text-burgundy" aria-hidden="true">→</span>}</li>)}</ol>
}

function Artefact({ src, alt, width, height, caption, scrollOnMobile = false, imageClassName = 'h-auto w-full' }: { src: string; alt: string; width: number; height: number; caption: string; scrollOnMobile?: boolean; imageClassName?: string }) {
  return <div className={scrollOnMobile ? 'overflow-x-auto pb-2 focus-visible:rounded-xl' : undefined} role={scrollOnMobile ? 'region' : undefined} aria-label={scrollOnMobile ? 'Scrollable FoodSaver user-journey diagram' : undefined} tabIndex={scrollOnMobile ? 0 : undefined}><figure className={`${scrollOnMobile ? 'min-w-[52rem] md:min-w-0' : ''} overflow-hidden rounded-xl border border-burgundy/10 bg-white shadow-sm`}><div className="bg-cream/35"><Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1280px) 1152px, 100vw" className={imageClassName} /></div><figcaption className="border-t border-burgundy/10 px-5 py-4 body-small text-grey-secondary">{caption}</figcaption></figure></div>
}

function ScreenArtefact({ src, alt, width, height, caption }: { src: string; alt: string; width: number; height: number; caption: string }) {
  return <figure className="overflow-hidden rounded-xl border border-burgundy/10 bg-white shadow-sm"><div className="flex h-[36rem] items-start justify-center bg-cream/35 p-4 md:h-[42rem]"><Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-contain object-top" /></div><figcaption className="border-t border-burgundy/10 px-5 py-4 body-small text-grey-secondary">{caption}</figcaption></figure>
}

export default function FoodSaverCaseStudy() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <CaseStudyHero
        title="FoodSaver"
        positioning="Turning surplus food into affordable meals instead of waste."
        industry="FoodTech / Sustainability Marketplace"
        description="FoodSaver is a mobile marketplace concept designed to help food businesses recover value from surplus food, give consumers access to discounted meals, and support the goal of reducing avoidable food waste."
      />

      <section className="section-surface pb-12 md:pb-16">
        <div className="container-wide">
          <Artefact src="/projects/foodsaver/FOODSAVER Project Case Study Hero:Cover Image.png" alt="FoodSaver product concept showing consumer discovery, food details, checkout, order confirmation, seller dashboard and listing-creation screens" width={1672} height={941} caption="FoodSaver consumer and seller concept screens · Illustrative demo data, not launch results" />
        </div>
      </section>

      <ProjectSnapshot items={[
        { label: 'Industry', value: 'FoodTech / Sustainability' },
        { label: 'Product', value: 'Mobile Marketplace' },
        { label: 'Project Context', value: 'Product Management Bootcamp Project' },
        { label: 'Focus', value: 'MVP · User Flows · Figma · Prototyping' },
      ]} />

      <CaseStudySection title="The Problem" backgroundLight><div className="container-wide space-y-8">
        <p className="body-large text-grey-secondary max-w-3xl">Restaurants, bakeries, supermarkets, and market vendors often dispose of safe unsold food because it cannot be sold before closing time or expiry.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="Business Problem"><p className="heading-card">Revenue loss</p></InsightCard><InsightCard label="Consumer Problem"><p className="heading-card">Food affordability</p></InsightCard><InsightCard label="Environmental Problem"><p className="heading-card">Food waste</p></InsightCard></div>
        <InsightCard label="Problem Statement" highlighted><p className="text-2xl md:text-3xl font-bold leading-snug text-near-black">“How might we help food businesses recover revenue from surplus inventory while helping consumers access affordable food and reducing avoidable food waste?”</p></InsightCard>
      </div></CaseStudySection>

      <CaseStudySection title="Value Proposition"><div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="Business"><p className="heading-card">Recover value from unsold inventory.</p></InsightCard><InsightCard label="Consumer"><p className="heading-card">Access discounted food.</p></InsightCard><InsightCard label="Environment"><p className="heading-card">Support the goal of reducing avoidable food waste.</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Target Users" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6">
        <InsightCard label="Sarah · 27 · Graduate Student"><p className="eyebrow mb-4 text-burgundy">Consumer Persona</p><p className="font-semibold text-near-black mb-3">Goals</p><BulletList items={['Save money', 'Discover affordable meals', 'Purchase food quickly']} /><p className="font-semibold text-near-black mt-6 mb-3">Pain Points</p><BulletList items={['High food prices', 'Limited budget', 'Difficult to find discounted food']} /></InsightCard>
        <InsightCard label="Mr. Ade · 42 · Restaurant Owner"><p className="eyebrow mb-4 text-burgundy">Business Persona</p><p className="font-semibold text-near-black mb-3">Goals</p><BulletList items={['Sell surplus food', 'Reduce losses', 'Attract more customers']} /><p className="font-semibold text-near-black mt-6 mb-3">Pain Points</p><BulletList items={['Unsold inventory', 'Food waste', 'Lost revenue']} /></InsightCard>
      </div></CaseStudySection>

      <CaseStudySection title="Product Solution"><div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="Businesses Can List"><BulletList items={['Surplus food', 'Near-expiry food', 'Discounted food offers']} /></InsightCard><InsightCard label="Consumers Can"><BulletList items={['Browse and search', 'Discover nearby deals', 'View food details', 'Reserve food', 'Pay and receive confirmation', 'Collect before the pickup deadline']} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="MVP" backgroundLight><div className="container-wide grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><InsightCard label="Account"><BulletList items={['Registration', 'Verification', 'Authentication']} /></InsightCard><InsightCard label="Discovery"><BulletList items={['Browse deals', 'Search', 'Nearby offers']} /></InsightCard><InsightCard label="Transaction"><BulletList items={['Food details', 'Reservation', 'Payment']} /></InsightCard><InsightCard label="Completion"><BulletList items={['Confirmation', 'Pickup location', 'Pickup time', 'Collection details']} /></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Core User Journey"><div className="container-wide space-y-8"><div className="grid grid-cols-1 gap-6"><InsightCard label="Consumer Journey" highlighted><Flow steps={['Onboarding', 'Account Access', 'Home / Explore', 'Food Details', 'Cart / Reserve', 'Checkout', 'Order Confirmation', 'Pickup / Orders']} /></InsightCard><InsightCard label="Seller Journey"><Flow steps={['Seller Dashboard', 'Create Food Listing', 'Publish Offer', 'Receive Order / Reservation', 'Fulfilment']} /></InsightCard></div><p className="body-small text-grey-secondary md:hidden">Scroll horizontally to inspect the complete journey diagram.</p><Artefact src="/projects/foodsaver/FOODSAVER COMPLETE USER JOURNEYS_FLOWS.jpg" alt="FoodSaver consumer journey from onboarding through discovery, reservation, checkout and pickup, plus seller journey from dashboard and listing creation through order fulfilment" width={2651} height={1508} caption="Approved consumer and seller flow · The marketplace loop represents intended value, not measured outcomes" scrollOnMobile /><div><a href="https://miro.com/app/board/uXjVHxKuknA=/?share_link_id=851736191556" target="_blank" rel="noopener noreferrer" className="button-secondary inline-flex items-center justify-center gap-2 text-center"><span>View Full User Journey</span><span aria-hidden="true">↗</span></a></div></div></CaseStudySection>

      <CaseStudySection title="High-Fidelity Design"><div className="container-wide space-y-8"><div className="max-w-3xl space-y-3"><p className="body-large text-grey-secondary">The interface needed to make the product image, original and discounted prices, availability, seller, pickup deadline, reservation state, payment state, and collection details clear.</p><p className="body-small font-medium text-burgundy">All screen content and values are illustrative prototype data, not live traction.</p></div><Artefact src="/projects/foodsaver/FOODSAVER ONBOARDING SCREENS.png" alt="Three FoodSaver onboarding screens introducing affordability, food-waste reduction and support for local food businesses" width={1150} height={974} caption="Consumer onboarding and value proposition" /><div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><ScreenArtefact src="/projects/foodsaver/FOODSAVER SIGNUP AND LOG IN SCREENS.png" alt="FoodSaver account-access and account-creation screens" width={772} height={1158} caption="Account access" /><ScreenArtefact src="/projects/foodsaver/FOODSAVER HOME PAGE SCREEN.png" alt="FoodSaver home screen showing featured and nearby discounted food deals" width={442} height={1820} caption="Home and nearby discovery" /><ScreenArtefact src="/projects/foodsaver/FOODSAVER EXPLORE SCREEN.png" alt="FoodSaver explore screen with search, filters, availability and discounted food listings" width={410} height={1052} caption="Explore and filtering" /><ScreenArtefact src="/projects/foodsaver/FOODSAVER ORDER SCREEN.png" alt="FoodSaver order screen showing active pickup states, pickup codes and directions" width={420} height={922} caption="Active orders and pickup" /><ScreenArtefact src="/projects/foodsaver/FOODSAVER SELLER DASHBOARD SCREEN.png" alt="FoodSaver seller dashboard showing listings, orders, recent activity and store-management actions" width={416} height={1484} caption="Seller dashboard · illustrative demo data" /><ScreenArtefact src="/projects/foodsaver/FOODSAVER CREATE FOOD LISITING SCREEN.png" alt="FoodSaver create-listing screen for food image, category, pricing, quantity and pickup window" width={432} height={1326} caption="Seller listing creation" /></div></div></CaseStudySection>

      <CaseStudySection title="Discovery Experience" backgroundLight><div className="container-wide space-y-8"><InsightCard highlighted><p className="text-2xl md:text-3xl font-bold text-near-black">“Is there affordable food near me that I actually want to buy?”</p></InsightCard><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="Identify"><p className="heading-card">Make food visually identifiable.</p></InsightCard><InsightCard label="Value"><p className="heading-card">Make savings obvious.</p></InsightCard><InsightCard label="Timing"><p className="heading-card">Make pickup timing clear.</p></InsightCard></div></div></CaseStudySection>

      <CaseStudySection title="Food Detail Experience"><div className="container-wide space-y-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><InsightCard label="Essential Information"><BulletList items={['Food name and description', 'Original and discounted prices', 'Pickup deadline', 'Seller information', 'Available quantity']} /></InsightCard><ScreenArtefact src="/projects/foodsaver/FOODSAVER FOOD DETAILS SCREEN.png" alt="FoodSaver food-detail screen showing discounted pricing, pickup deadline, available quantity, seller information and pickup location" width={406} height={1410} caption="Food details and time-sensitive availability" /></div><InsightCard label="Time-Sensitive Inventory" highlighted><p className="body-large text-near-black">A product available at 4 PM may no longer be relevant at 8 PM. Availability and pickup deadline are core product information.</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Reservation Logic" backgroundLight><div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">Without reservation, a consumer could travel to the seller only to discover that the food had already been sold.</p><InsightCard label="Reservation Flow"><Flow steps={['Select', 'Reserve', 'Pay', 'Confirm', 'Collect']} /></InsightCard><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="Consumer Benefit"><p className="heading-card">Knows the food is secured.</p></InsightCard><InsightCard label="Business Benefit"><p className="heading-card">Knows surplus inventory has been sold before disposal.</p></InsightCard></div><ScreenArtefact src="/projects/foodsaver/FOODSAVER CART SCREEN.png" alt="FoodSaver basket showing selected surplus-food items, quantities, savings and checkout progression" width={396} height={1068} caption="Reservation basket and order summary" /></div></CaseStudySection>

      <CaseStudySection title="Payment & Pickup"><div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">The experience does not end at checkout. After payment, the consumer needs confirmation, pickup location, pickup time, and collection details. The offline collection experience is part of the product.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><ScreenArtefact src="/projects/foodsaver/FOODSAVER CHECKOUT SCREEN.png" alt="FoodSaver checkout screen showing pickup location, pickup window, payment method and order summary" width={388} height={1348} caption="Checkout, payment and pickup selection" /><ScreenArtefact src="/projects/foodsaver/FOODSAVER ORDER CONFIRMATION SCREEN.png" alt="FoodSaver order-confirmation screen showing payment status, pickup code and collection instructions" width={378} height={908} caption="Order confirmation and pickup instructions" /></div></div></CaseStudySection>

      <CaseStudySection title="Key Product Decisions" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="1 · Keep the MVP Transaction-Focused"><p className="body-default text-grey-secondary">Focus on discovery, reservation, payment, and pickup.</p></InsightCard><InsightCard label="2 · Make Discount Value Visible"><p className="body-default text-grey-secondary">Show original and discounted prices.</p></InsightCard><InsightCard label="3 · Make Pickup Information Core"><p className="body-default text-grey-secondary">Location and timing are part of the product experience.</p></InsightCard><InsightCard label="4 · Design for Time-Sensitive Inventory"><p className="body-default text-grey-secondary">Availability and pickup deadline must be visible.</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Prototype Overview"><div className="container-wide space-y-8"><div className="mx-auto max-w-2xl"><Artefact src="/projects/foodsaver/FOODSAVER PROTOTYPE OVERVIEW PREVIEW.png" alt="FoodSaver prototype preview introducing discounted food discovery and the product’s sustainability value proposition" width={766} height={1356} caption="Prototype interface shown with illustrative demo data." imageClassName="mx-auto h-auto w-full max-w-[38rem] object-contain" /></div><div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="eyebrow mb-2">Explore the Product</p><p className="body-default text-grey-secondary">Review the approved interactive prototype or inspect the complete Figma design file.</p></div><div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap"><a href="https://www.figma.com/proto/DIJ1maAFPZAeDGLiXL6JpW/FOODSAVER?node-id=0-1&t=kfsxcr8uqKVBk1mi-1" target="_blank" rel="noopener noreferrer" className="button-primary inline-flex items-center justify-center gap-2 text-center"><span>Explore Interactive Prototype</span><span aria-hidden="true">↗</span></a><a href="https://www.figma.com/design/DIJ1maAFPZAeDGLiXL6JpW/FOODSAVER?node-id=0-1&t=kfsxcr8uqKVBk1mi-1" target="_blank" rel="noopener noreferrer" className="button-secondary inline-flex items-center justify-center gap-2 text-center"><span>View Figma Designs</span><span aria-hidden="true">↗</span></a></div></div></div></CaseStudySection>

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
