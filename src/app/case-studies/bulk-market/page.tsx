import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectSnapshot from '@/components/ProjectSnapshot'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'
import VisualPlaceholder from '@/components/VisualPlaceholder'
import TwoColumn from '@/components/TwoColumn'

export const metadata = {
  title: 'Bulk-Market Case Study | Chisom Ayogu',
  description:
    'Marketplace strategy and trust design for a B2B wholesale platform helping African buyers and sellers transact beyond existing networks.',
}

const buyerFlow = [
  'Landing',
  'Sign Up',
  'Buyer Onboarding',
  'Marketplace',
  'Browse/Search',
  'Filter',
  'Product Detail',
  'Purchase Flow',
]

const sellerFlow = [
  'Landing',
  'Seller Registration',
  'Seller Onboarding',
  'Marketplace Access',
  'Product Listing',
]

const trustFlow = [
  'Verification',
  'Trial Order',
  'Escrow',
  'Delivery',
  'Confirmation',
  'Reviews',
  'Disputes',
  'Enforcement',
]

const tradeOffs = [
  {
    title: 'Trust vs Onboarding Friction',
    body:
      'We needed enough verification and safeguards to make buyers comfortable, but not so much friction that sellers abandoned the marketplace before they ever reached first revenue.',
  },
  {
    title: 'Wholesale Integrity vs First-Order Risk',
    body:
      'MOQ and quantity-based pricing were core to the wholesale model, but first-time buyers needed safer entry points without undermining the economics of supplier relationships.',
  },
  {
    title: 'Buyer Protection vs Seller Cash Flow',
    body:
      'Escrow and dispute protection reduce risk for buyers, yet they also slow seller cash conversion and demand more operational clarity during disputes.',
  },
  {
    title: 'Logistics Control vs MVP Complexity',
    body:
      'We could either build a highly controlled logistics experience or keep the MVP focused on marketplace trust and transaction safety while leaving wider delivery optimisation for later.',
  },
  {
    title: 'Product Breadth vs Validation',
    body:
      'A broad marketplace with many categories is attractive, but early validation is strongest when trust and transaction rules are clear in a narrower, well-understood segment.',
  },
]

const reflectionLessons = [
  'Two-sided products must create value for both sides.',
  'Trust can be designed as a product capability, not a marketing claim.',
  'User journeys reveal system dependencies and operational risks early.',
  'Prototyping is about behaviour, state transitions, and decision-making, not only screens.',
  'Edge cases are core product work, especially in marketplaces.',
  'Strategy and UX are connected; a great experience is only possible when the operating model supports it.',
]

const skills = [
  'Marketplace strategy',
  'Trust and safety thinking',
  'Systems thinking',
  'Buyer journey design',
  'Seller journey design',
  'Low-fidelity wireframing',
  'High-fidelity design',
  'Interactive prototyping',
  'Journey orchestration',
  'Stakeholder alignment',
  'UX research synthesis',
  'Competitive analysis',
  'Product decision-making',
  'Dispute flow design',
  'MVP framing',
  'Cross-functional coordination',
]

export default function BulkMarketCaseStudy() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <CaseStudyHero
        title="Bulk-Market"
        positioning="Marketplace Strategy & Trust Thinking"
        industry="B2B Commerce / Marketplace"
        description="A wholesale marketplace concept designed to help buyers and sellers transact confidently beyond existing personal networks, with trust, verification, and transaction safety built into the product itself."
      />

      <ProjectSnapshot
        items={[
          { label: 'My Role', value: 'Product Manager' },
          { label: 'Project Type', value: 'Group Capstone' },
          { label: 'Industry', value: 'B2B Commerce' },
          { label: 'Timeline', value: 'Capstone Project' },
        ]}
      />

      <CaseStudySection title="The Problem" backgroundLight>
        <div className="container-wide">
          <InsightCard highlighted>
            <p className="body-large text-near-black">
              Wholesale buyers and sellers across African markets often rely on physical wholesale markets, WhatsApp groups, Facebook communities, referrals, direct calls, and trusted supplier networks. These channels work partly because they provide trust. The product challenge was making this trust legible and repeatable in a digital marketplace so that buyers and sellers who do not already know each other can transact with confidence.
            </p>
          </InsightCard>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <InsightCard label="Buyer Pain">
              <ul className="space-y-3">
                <li className="body-default text-grey-secondary">Fear of fraud and unreliable sellers</li>
                <li className="body-default text-grey-secondary">Difficulty comparing prices across suppliers</li>
                <li className="body-default text-grey-secondary">Distance and travel costs for sourcing</li>
                <li className="body-default text-grey-secondary">Need for verified sellers and protection</li>
              </ul>
            </InsightCard>

            <InsightCard label="Seller Pain">
              <ul className="space-y-3">
                <li className="body-default text-grey-secondary">Need to reach new buyers beyond personal networks</li>
                <li className="body-default text-grey-secondary">Difficulty proving trustworthiness online</li>
                <li className="body-default text-grey-secondary">Margin pressure from payment and delivery uncertainty</li>
                <li className="body-default text-grey-secondary">Need for protected transactions and structured dispute handling</li>
              </ul>
            </InsightCard>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Research">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <InsightCard label="Survey Research">
              <p className="body-default text-grey-secondary">
                Explored unmet sourcing needs, trust barriers, and how buyers currently discover partners.
              </p>
            </InsightCard>
            <InsightCard label="Stakeholder Interviews">
              <p className="body-default text-grey-secondary">
                Learned about the role of trusted networks, risk perception, and friction in cross-market transactions.
              </p>
            </InsightCard>
            <InsightCard label="Competitor Analysis">
              <p className="body-default text-grey-secondary">
                Compared marketplace assumptions, trust cues, and the gaps between discovery platforms and actual trade behaviour.
              </p>
            </InsightCard>
            <InsightCard label="Market Research">
              <p className="body-default text-grey-secondary">
                Identified recurring themes: verification, refund expectations, ratings, smaller first orders, and protection mechanisms.
              </p>
            </InsightCard>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Key Insight" backgroundLight>
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6 md:mb-8 text-burgundy">Trust Was the Real Product</p>
            <p className="text-3xl md:text-5xl font-bold text-near-black leading-tight mb-8 md:mb-10">
              Users were not necessarily loyal to WhatsApp, phone calls, or physical markets. They were loyal to the trust those channels provided.
            </p>
            <p className="body-large text-grey-secondary">
              That insight changed the product direction. Bulk-Market was not simply a marketplace listing tool; it had to recreate the trust layer that made informal commerce feel safe enough to scale.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="My Role">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="body-large text-grey-secondary mb-8 md:mb-10">
              I contributed to research, participated in product-thinking meetings, and took part in product-strategy discussions. I created low-fidelity wireframes in Miro, designed screens in Figma, and worked on buyer and seller onboarding, discovery, product listing, and dispute-resolution flows. I also prototyped assigned flows, coordinated the screens produced by other team members, organised the experience into separate Buyer and Seller journeys, and connected the final interactive prototype.
            </p>
            <p className="body-large text-grey-secondary">
              This was not a case where I personally created every part of the marketplace strategy or the full PRD. My contribution was focused on translating research and product direction into usable user experiences and an end-to-end prototype that made the system logic visible.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Marketplace Model" backgroundLight>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <InsightCard label="Discovery">
              <p className="body-default text-grey-secondary">
                Cross-regional browsing makes it easier for buyers to find suppliers beyond local relationships.
              </p>
            </InsightCard>
            <InsightCard label="Commerce">
              <p className="body-default text-grey-secondary">
                Quantity-based commerce supports wholesale buying patterns, allowing product prices to scale with order quantities.
              </p>
            </InsightCard>
            <InsightCard label="Trust">
              <p className="body-default text-grey-secondary">
                Verification, escrow, reviews, and dispute handling reduce risk and make digital transactions more dependable.
              </p>
            </InsightCard>
          </div>

          <div className="mt-10 md:mt-12">
            <VisualPlaceholder label="Bulk-Market Model Overview" />
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Buyer Journey">
        <div className="container-wide">
          <TwoColumn
            left={
              <div className="space-y-4 md:space-y-5">
                {buyerFlow.map((step, index) => (
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
                <p className="eyebrow mb-4 text-burgundy">My Contribution</p>
                <p className="body-large text-grey-secondary mb-6">
                  I worked directly on the onboarding and discovery side of the buyer experience. This included sign-up, onboarding flows, search and filtering, product discovery, and the transaction decision path.
                </p>
                <VisualPlaceholder label="Buyer Flow / Discovery Experience" />
              </div>
            }
          />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Seller Journey" backgroundLight>
        <div className="container-wide">
          <TwoColumn
            left={
              <div>
                <p className="eyebrow mb-4 text-burgundy">My Contribution</p>
                <p className="body-large text-grey-secondary mb-6">
                  I worked directly on the seller onboarding and listing experience, shaping the flow from registration through listing creation and marketplace access.
                </p>
                <VisualPlaceholder label="Seller Flow / Listing Experience" />
              </div>
            }
            right={
              <div className="space-y-4 md:space-y-5">
                {sellerFlow.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 border border-grey-secondary/15 p-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-burgundy text-white text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="heading-card text-near-black">{step}</p>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Low-Fidelity Wireframes">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <InsightCard label="Miro">
              <p className="body-default text-grey-secondary">
                I used Miro to structure the experience, test the information hierarchy, and define navigation logic across the buyer and seller journeys.
              </p>
            </InsightCard>
            <InsightCard label="Journey Testing">
              <p className="body-default text-grey-secondary">
                Early screens focused on screen structure, category logic, onboarding clarity, and how the marketplace would support trust-heavy wholesale transactions.
              </p>
            </InsightCard>
          </div>
          <VisualPlaceholder label="Miro Wireframe Board" aspectRatio="tall" />
        </div>
      </CaseStudySection>

      <CaseStudySection title="High-Fidelity Design" backgroundLight>
        <div className="container-wide">
          <div className="max-w-3xl mb-10 md:mb-12">
            <p className="body-large text-grey-secondary">
              The high-fidelity designs translated role-based onboarding, marketplace discovery, product listing, transaction states, and dispute handling into clear, visible user experiences. This is where product logic became concrete and testable.
            </p>
          </div>
          <VisualPlaceholder label="Figma Design Screens" aspectRatio="video" />
        </div>
      </CaseStudySection>

      <CaseStudySection title="End-to-End Prototyping">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <InsightCard highlighted>
              <p className="text-2xl md:text-3xl font-bold text-near-black mb-4">
                Different team members designed separate screens, and I coordinated them into one coherent experience.
              </p>
              <p className="body-default text-grey-secondary">
                I connected the full set into the final interactive prototype so the buyer and seller journeys felt continuous, consistent, and realistic.
              </p>
            </InsightCard>
            <InsightCard label="What This Demonstrates">
              <ul className="space-y-3">
                <li className="body-default text-grey-secondary">Interaction dependencies</li>
                <li className="body-default text-grey-secondary">Journey consistency</li>
                <li className="body-default text-grey-secondary">Navigation logic</li>
                <li className="body-default text-grey-secondary">State transitions</li>
                <li className="body-default text-grey-secondary">Systems thinking</li>
                <li className="body-default text-grey-secondary">Design quality control</li>
              </ul>
            </InsightCard>
          </div>
          <VisualPlaceholder label="Connected Interactive Prototype" aspectRatio="video" />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Trust Layer" backgroundLight>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10 md:mb-12">
            {trustFlow.map((step, index) => (
              <div key={step} className="border border-grey-secondary/15 bg-white p-4 text-center">
                <p className="eyebrow mb-2 text-burgundy">{index + 1}</p>
                <p className="heading-card text-near-black">{step}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl">
            <p className="body-large text-grey-secondary">
              Trust was treated as a product capability, not a marketing statement. Verification, trial orders, escrow, delivery tracking, confirmation, reviews, dispute resolution, and enforcement were all part of the marketplace operating model.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Minimum Order Quantity">
        <div className="container-wide">
          <TwoColumn
            left={
              <div>
                <p className="body-large text-grey-secondary mb-6">
                  Every product had a minimum order quantity, which aligned with wholesale behaviour. Quantity-based pricing supported buying patterns where larger orders reduce cost per unit and encourage efficient restocking.
                </p>
                <InsightCard label="Why It Mattered">
                  <p className="body-default text-grey-secondary">
                    MOQ protected seller economics while creating clearer purchase expectations for buyers. It also helped define the digital marketplace as a wholesale tool rather than a general retail platform.
                  </p>
                </InsightCard>
              </div>
            }
            right={<VisualPlaceholder label="MOQ & Quantity-Based Pricing Logic" aspectRatio="square" />}
          />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Trial Orders" backgroundLight>
        <div className="container-wide">
          <div className="max-w-4xl mb-10 md:mb-12">
            <p className="eyebrow mb-4 text-burgundy">Product Decision</p>
            <p className="text-2xl md:text-4xl font-bold text-near-black leading-tight">
              Unknown Seller → Smaller Protected Order → Successful Delivery → Trust Established → Full Wholesale Order
            </p>
          </div>
          <p className="body-large text-grey-secondary">
            Trial Orders reduced first-purchase risk without weakening the wholesale positioning. They created a safer path for new buyer-seller relationships, allowing trust to be earned before larger transactions were made.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Escrow">
        <div className="container-wide">
          <TwoColumn
            left={
              <div className="space-y-4 md:space-y-5">
                {[
                  'Buyer Pays',
                  'Funds Held',
                  'Seller Fulfils',
                  'Delivery',
                  'Buyer Confirms',
                  'Seller Receives Funds',
                ].map((step, index) => (
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
                  Escrow made the market feel safer for both sides. The buyer had payment protection, while the seller gained a clearer path to payment certainty if the process was fulfilled correctly.
                </p>
                <InsightCard label="Value">
                  <p className="body-default text-grey-secondary">
                    It reduced trust friction and strengthened the structure of the transaction itself.
                  </p>
                </InsightCard>
              </div>
            }
          />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Dispute Resolution" backgroundLight>
        <div className="container-wide">
          <div className="max-w-3xl mb-10 md:mb-12">
            <p className="body-large text-grey-secondary">
              I designed dispute-resolution screens for failed delivery, damaged goods, incorrect products, missing items, and transaction failures. These flows were critical because marketplace trust depends on what happens when things go wrong, not only when transactions succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <InsightCard label="Resolution Paths">
              <ul className="space-y-3">
                <li className="body-default text-grey-secondary">Full refund</li>
                <li className="body-default text-grey-secondary">Partial refund</li>
                <li className="body-default text-grey-secondary">Replacement</li>
                <li className="body-default text-grey-secondary">Dismissal</li>
              </ul>
            </InsightCard>
            <InsightCard label="Protection Logic">
              <p className="body-default text-grey-secondary">
                Escrow remained protected while the issue was reviewed, which meant the marketplace could still enforce fair resolution without abandoning the transaction structure that made it credible.
              </p>
            </InsightCard>
          </div>

          <VisualPlaceholder label="Dispute Resolution Screens" aspectRatio="video" />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Partial Bulk-Order Failure">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="eyebrow mb-4 text-burgundy">Example Scenario</p>
              <p className="text-3xl md:text-4xl font-bold text-near-black mb-6">
                100 units ordered → 15 damaged
              </p>
              <p className="body-large text-grey-secondary">
                Bulk disputes cannot be solved with simple full-refund logic. A proportional resolution is needed to match the actual damage, the value of the missing inventory, and the operational realities of wholesale trade.
              </p>
            </div>
            <VisualPlaceholder label="Bulk Dispute Resolution Flow" aspectRatio="square" />
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Marketplace Metrics" backgroundLight>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            <InsightCard label="Monthly Successful Wholesale Transactions">
              <p className="heading-card text-near-black">A leading indicator of real marketplace usage</p>
            </InsightCard>
            <InsightCard label="Gross Merchandise Value">
              <p className="heading-card text-near-black">Shows transaction health beyond sign-ups</p>
            </InsightCard>
            <InsightCard label="Verified Active Sellers">
              <p className="heading-card text-near-black">Measures trust and supply quality</p>
            </InsightCard>
            <InsightCard label="Repeat Buyers">
              <p className="heading-card text-near-black">Indicates the marketplace creates ongoing value</p>
            </InsightCard>
          </div>

          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            <InsightCard label="Trial-to-Full-Order Conversion">
              <p className="heading-card text-near-black">Shows whether initial trust converts into repeat commerce</p>
            </InsightCard>
            <InsightCard label="Dispute Rate">
              <p className="heading-card text-near-black">Signals operational and trust quality</p>
            </InsightCard>
            <InsightCard label="Average Order Value">
              <p className="heading-card text-near-black">Highlights growth in wholesale deal quality</p>
            </InsightCard>
          </div>

          <div className="mt-10 md:mt-12 max-w-3xl">
            <p className="body-large text-grey-secondary">
              Successful transactions mattered more than registrations alone. A marketplace can look active while still failing to create trustworthy commerce. The strongest signals were repeat usage, protected transactions, and healthy conversion from trial purchase to larger reorder.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Monetisation">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <InsightCard label="MVP">
              <p className="body-default text-grey-secondary">
                Transaction commission was the cleanest early revenue model: the platform takes a percentage from successful business-to-business transactions.
              </p>
            </InsightCard>
            <InsightCard label="Future">
              <p className="body-default text-grey-secondary">
                Seller subscriptions, promoted products, advertising, logistics partnerships, and premium business services could expand monetisation later once the marketplace established trust and supply.
              </p>
            </InsightCard>
          </div>
          <p className="body-large text-grey-secondary">
            This was a staged model, not a launch-all-at-once revenue plan. The business needed to prove transaction trust before adding more complicated monetisation layers.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Growth Strategy" backgroundLight>
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4 text-burgundy">Cold-Start Challenge</p>
            <p className="text-2xl md:text-4xl font-bold text-near-black leading-tight mb-8">
              Seed Supply First
            </p>
            <p className="body-large text-grey-secondary">
              A marketplace like this cannot scale on pure discovery alone. The easiest path is to recruit an initial set of verified sellers, support assisted onboarding, and move existing trusted buyer-supplier relationships onto the platform before expanding discovery beyond already-established networks.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Key Trade-Offs">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {tradeOffs.map((tradeoff) => (
              <InsightCard key={tradeoff.title} label={tradeoff.title}>
                <p className="body-default text-grey-secondary">{tradeoff.body}</p>
              </InsightCard>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Outcome" backgroundLight>
        <div className="container-wide">
          <InsightCard highlighted>
            <p className="body-large text-near-black">
              The project produced research, stakeholder insights, competitor analysis, personas, marketplace strategy, an MVP direction, buyer and seller journey maps, Miro wireframes, Figma designs, an interactive prototype, trust and verification rules, escrow logic, dispute flows, a monetisation strategy, metrics thinking, and a growth approach. It did not claim a commercial launch; instead, it established a strong product foundation for a trust-driven marketplace model.
            </p>
          </InsightCard>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Reflection">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reflectionLessons.map((lesson, index) => (
              <InsightCard key={lesson} label={`Lesson ${index + 1}`}>
                <p className="body-default text-grey-secondary">{lesson}</p>
              </InsightCard>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Skills Demonstrated" backgroundLight>
        <div className="container-wide">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-burgundy/20 bg-burgundy/5 px-4 py-2 text-sm font-medium text-burgundy"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Next Project" fullWidth>
        <div className="container-wide">
          <div className="border border-grey-secondary/15 bg-white px-6 py-10 md:px-12 md:py-14">
            <p className="eyebrow mb-4 text-burgundy">Next</p>
            <h3 className="heading-section mb-6">FoodSaver</h3>
            <p className="body-large text-grey-secondary max-w-3xl">
              The next project continues the product thinking arc by moving from marketplace trust and systems design into a focused food-tech problem-solving exercise where the challenge is solving a clear user pain point with a lighter, more direct prototype.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <Footer />
    </div>
  )
}
