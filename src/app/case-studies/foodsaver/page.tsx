import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectSnapshot from '@/components/ProjectSnapshot'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'
import VisualPlaceholder from '@/components/VisualPlaceholder'
import TwoColumn from '@/components/TwoColumn'

export const metadata = {
  title: 'FoodSaver Case Study | Chisom Ayogu',
  description:
    'Problem-to-prototype execution for a food-tech marketplace reducing waste while helping consumers access affordable food.',
}

const valueCards = [
  {
    title: 'Business',
    body: 'Recover value from unsold inventory',
  },
  {
    title: 'Consumer',
    body: 'Access affordable food',
  },
  {
    title: 'Environment',
    body: 'Reduce avoidable food waste',
  },
]

const mvpFeatures = [
  'Registration',
  'Verification',
  'Authentication',
  'Browse Food Deals',
  'Search / Nearby Discovery',
  'Food Details',
  'Reservation',
  'Secure Payment',
  'Order Confirmation',
  'Pickup Information',
]

const journeySteps = [
  'Launch',
  'Register / Sign In',
  'Browse',
  'View Deal',
  'Reserve',
  'Pay',
  'Confirm',
  'Pick Up',
]

const decisionCards = [
  {
    title: 'Keep the MVP Transaction-Focused',
    body: 'Focus on discovery, reservation, payment, and pickup.',
  },
  {
    title: 'Make Discount Value Visible',
    body: 'Show original and discounted pricing clearly.',
  },
  {
    title: 'Make Pickup Information Core',
    body: 'Pickup location and timing are part of the product, not an afterthought.',
  },
  {
    title: 'Design for Time-Sensitive Inventory',
    body: 'Availability and pickup deadlines are central product information.',
  },
]

const metrics = [
  {
    group: 'Business Recovery + Consumer Savings + Waste Reduction',
    items: [
      'Discovery-to-Detail Rate',
      'Reservation Conversion Rate',
      'Checkout Completion Rate',
      'Pickup Completion Rate',
      'Sell-Through Rate',
      'Repeat Purchase Rate',
      'Business Repeat-Listing Rate',
      'Food Saved',
    ],
  },
]

const risks = [
  'Inventory Accuracy',
  'Pickup Reliability',
  'Food Quality & Safety',
  'Consumer Trust',
  'Business Adoption',
]

const lessons = [
  'Start with the core transaction.',
  'Product value can include business, user, and environmental outcomes.',
  'User flows make ideas concrete.',
  'Low-fidelity design exposes issues early.',
  'Offline experience can be part of the product experience.',
]

export default function FoodSaverCaseStudy() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <CaseStudyHero
        title="FoodSaver"
        positioning="Problem-to-Prototype Execution"
        industry="FoodTech / Sustainability Marketplace"
        description="A mobile marketplace concept helping food businesses recover value from surplus inventory while giving consumers affordable food and reducing avoidable waste."
      />

      <ProjectSnapshot
        items={[
          { label: 'My Role', value: 'Product Manager' },
          { label: 'Project Type', value: 'Bootcamp Project' },
          { label: 'Product', value: 'Mobile Marketplace' },
          { label: 'Focus', value: 'MVP & Prototype' },
        ]}
      />

      <CaseStudySection title="Problem" backgroundLight>
        <div className="container-wide">
          <InsightCard highlighted>
            <p className="body-large text-near-black">
              How might we help food businesses recover revenue from surplus inventory while helping consumers access affordable food and reducing avoidable food waste?
            </p>
          </InsightCard>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <InsightCard label="Food Businesses">
              <ul className="space-y-3">
                <li className="body-default text-grey-secondary">Restaurants dispose of safe unsold food</li>
                <li className="body-default text-grey-secondary">Bakeries and supermarkets lose margin at closing time</li>
                <li className="body-default text-grey-secondary">Market vendors face waste and time pressure</li>
              </ul>
            </InsightCard>
            <InsightCard label="Consumer + Environment">
              <ul className="space-y-3">
                <li className="body-default text-grey-secondary">Consumers need affordable meal options</li>
                <li className="body-default text-grey-secondary">Food waste creates avoidable environmental harm</li>
                <li className="body-default text-grey-secondary">The system is losing value on both sides</li>
              </ul>
            </InsightCard>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Value Proposition">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {valueCards.map((card) => (
              <InsightCard key={card.title} label={card.title}>
                <p className="body-default text-grey-secondary">{card.body}</p>
              </InsightCard>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Users" backgroundLight>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <InsightCard label="Consumer Persona: Sarah">
              <p className="heading-card mb-3">27-year-old graduate student</p>
              <ul className="space-y-2 text-grey-secondary">
                <li className="body-default">Goals: save money, discover affordable meals, buy quickly</li>
                <li className="body-default">Pain points: food is expensive, limited budget, hard to find discounted food</li>
              </ul>
            </InsightCard>

            <InsightCard label="Food Business Owner: Mr. Ade">
              <p className="heading-card mb-3">42-year-old restaurant owner</p>
              <ul className="space-y-2 text-grey-secondary">
                <li className="body-default">Goals: sell surplus food, reduce losses, attract new customers</li>
                <li className="body-default">Pain points: unsold food, food waste, revenue loss</li>
              </ul>
            </InsightCard>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="MVP">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {mvpFeatures.map((feature, index) => (
              <div key={feature} className="flex items-center gap-3 border border-grey-secondary/15 bg-white p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-burgundy text-white text-xs font-semibold">
                  {index + 1}
                </span>
                <p className="body-default text-near-black">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Core User Journey" backgroundLight>
        <div className="container-wide">
          <div className="mb-8 md:mb-10">
            <p className="text-3xl md:text-5xl font-bold text-near-black leading-tight">
              Launch → Register / Sign In → Browse → View Deal → Reserve → Pay → Confirm → Pick Up
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {journeySteps.map((step, index) => (
              <div key={step} className="border border-grey-secondary/15 bg-white p-4 text-center">
                <p className="eyebrow mb-2 text-burgundy">{index + 1}</p>
                <p className="heading-card text-near-black">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Low-Fidelity Wireframes">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <InsightCard label="Onboarding & Auth">
              <p className="body-default text-grey-secondary">Sign-up and login paths were mapped early to reduce friction and clarify the first-time experience.</p>
            </InsightCard>
            <InsightCard label="Home & Discovery">
              <p className="body-default text-grey-secondary">The in-app browsing flow focused on quick discovery, filtering, and nearby offers.</p>
            </InsightCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {[
              'Onboarding',
              'Authentication',
              'Home / Discovery',
              'Listing',
              'Detail',
              'Reservation',
              'Payment',
              'Confirmation',
            ].map((label) => (
              <VisualPlaceholder key={label} label={label} aspectRatio="square" />
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="High-Fidelity Design" backgroundLight>
        <div className="container-wide">
          <div className="max-w-3xl mb-10 md:mb-12">
            <p className="body-large text-grey-secondary">
              The interface needed to communicate discount value, product availability, pickup deadlines, seller information, reservation state, payment state, and collection details. This was a mobile-first experience where clarity and urgency mattered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              'Food listing carousel',
              'Deal detail screen',
              'Reservation + confirmation',
            ].map((label) => (
              <VisualPlaceholder key={label} label={label} aspectRatio="tall" />
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Key Product Decisions">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {decisionCards.map((card) => (
              <InsightCard key={card.title} label={card.title}>
                <p className="body-default text-grey-secondary">{card.body}</p>
              </InsightCard>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Reservation & Pickup" backgroundLight>
        <div className="container-wide">
          <TwoColumn
            left={
              <div className="space-y-4 md:space-y-5">
                {['Select', 'Reserve', 'Pay', 'Confirm', 'Collect'].map((step, index) => (
                  <div key={step} className="flex items-center gap-4 border border-grey-secondary/15 p-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-burgundy text-white text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="heading-card text-near-black">{step}</p>
                  </div>
                ))}
              </div>
            }
            right={
              <div>
                <p className="body-large text-grey-secondary mb-6">
                  Without reservation, a user could travel to a seller only to discover the food is already gone. Reservation created a simple operational commitment: the listing is held, payment is completed, and pickup is confirmed. This made the user journey realistic and the transaction more dependable.
                </p>
                <VisualPlaceholder label="Reservation / Confirmation Flow" aspectRatio="square" />
              </div>
            }
          />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Offline Experience">
        <div className="container-wide">
          <InsightCard highlighted>
            <p className="body-large text-near-black">
              The digital journey is only successful if the customer actually collects the food. This product therefore extends beyond the screen. Capture time, pickup location, seller instructions, and confirmation state all matter as much as the app interface itself.
            </p>
          </InsightCard>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Metrics I Would Measure" backgroundLight>
        <div className="container-wide">
          <div className="mb-10 md:mb-12">
            <p className="eyebrow text-burgundy">Proposed Future Metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <InsightCard label="Business Recovery + Consumer Savings">
              <ul className="space-y-3">
                <li className="body-default text-grey-secondary">Discovery-to-Detail Rate</li>
                <li className="body-default text-grey-secondary">Reservation Conversion Rate</li>
                <li className="body-default text-grey-secondary">Checkout Completion Rate</li>
                <li className="body-default text-grey-secondary">Repeat Purchase Rate</li>
              </ul>
            </InsightCard>
            <InsightCard label="Waste Reduction">
              <ul className="space-y-3">
                <li className="body-default text-grey-secondary">Pickup Completion Rate</li>
                <li className="body-default text-grey-secondary">Sell-Through Rate</li>
                <li className="body-default text-grey-secondary">Business Repeat-Listing Rate</li>
                <li className="body-default text-grey-secondary">Food Saved</li>
              </ul>
            </InsightCard>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Risks">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {risks.map((risk) => (
              <InsightCard key={risk} label={risk}>
                <p className="body-default text-grey-secondary">This was a product consideration, not a validated outcome.</p>
              </InsightCard>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Outcome" backgroundLight>
        <div className="container-wide">
          <InsightCard highlighted>
            <p className="body-large text-near-black">
              The project produced a problem definition, solution statement, business goal, user goal, environmental goal, personas, MVP, user flow, low-fidelity wireframes, high-fidelity interface, and interactive prototype. It did not claim a launch.
            </p>
          </InsightCard>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Reflection">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {lessons.map((lesson, index) => (
              <InsightCard key={lesson} label={`Lesson ${index + 1}`}>
                <p className="body-default text-grey-secondary">{lesson}</p>
              </InsightCard>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Next Project / Back to Work CTA" fullWidth>
        <div className="container-wide">
          <div className="border border-grey-secondary/15 bg-white px-6 py-10 md:px-12 md:py-14">
            <p className="eyebrow mb-4 text-burgundy">Continue</p>
            <h3 className="heading-section mb-6">Back to Work</h3>
            <p className="body-large text-grey-secondary max-w-3xl">
              FoodSaver demonstrates a focused problem-to-prototype product execution. It sits alongside the broader case studies as a lighter, visual example of how product thinking can move from problem framing to a tangible mobile experience.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <Footer />
    </div>
  )
}
