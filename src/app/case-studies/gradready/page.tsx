import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectSnapshot from '@/components/ProjectSnapshot'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'
import TwoColumn from '@/components/TwoColumn'

export const metadata = {
  title: 'GradReady Case Study | Chisom Ayogu',
  description: 'Independent Product Ownership: AI-powered EdTech platform helping bootcamp students document and showcase their work.',
}

function FlowArtefact({ src, alt, width, height, caption }: { src: string; alt: string; width: number; height: number; caption: string }) {
  return (
    <figure className="space-y-3">
      <a href={src} target="_blank" rel="noreferrer" className="block max-h-[48rem] overflow-y-auto rounded-xl border border-burgundy/15 bg-white p-3 shadow-wine-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy">
        <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1280px) 1152px, 100vw" className="h-auto w-full" />
      </a>
      <figcaption className="body-small text-grey-secondary">{caption} · Select to open the full-size artefact.</figcaption>
    </figure>
  )
}

function ScreenArtefact({ src, alt, width, height, label }: { src: string; alt: string; width: number; height: number; label: string }) {
  return (
    <figure className="premium-card overflow-hidden p-3">
      <a href={src} target="_blank" rel="noreferrer" className="relative block aspect-[3/4] overflow-hidden rounded-lg bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy">
        <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-contain object-top" />
      </a>
      <figcaption className="px-2 pb-2 pt-4"><p className="heading-card mb-1">{label}</p><p className="body-small text-grey-secondary">Authentic prototype screen · Open full size</p></figcaption>
    </figure>
  )
}

export default function GradReadyCaseStudy() {
  return (
    <div className="bg-ivory">
      <Navigation />

      {/* Hero */}
      <CaseStudyHero
        title="GradReady"
        positioning="Independent Product Ownership"
        industry="AI-Powered EdTech / B2B SaaS"
        description="An AI-assisted portfolio platform that helps bootcamp students transform weekly reflections into structured case studies and CV bullet points."
      />

      {/* Project Snapshot */}
      <ProjectSnapshot
        items={[
          { label: 'My Role', value: 'Solo PM' },
          { label: 'Project Type', value: 'Individual Capstone' },
          { label: 'Focus', value: 'MVP & Validation Strategy' },
          { label: 'Timeline', value: 'Bootcamp Duration' },
        ]}
      />

      {/* The Problem */}
      <CaseStudySection title="The Problem" backgroundLight>
        <div className="container-wide">
          <InsightCard highlighted>
            <p className="body-large text-near-black">
              Bootcamp students invest months building real products and solving complex problems. Yet when they graduate, they often lack structured evidence of what they built, what problems they solved, and what skills they demonstrated. Portfolio construction is rushed, incomplete, and happens too late to be useful during the bootcamp learning process.
            </p>
          </InsightCard>
        </div>
      </CaseStudySection>

      {/* Key Insight */}
      <CaseStudySection title="Key Insight">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6 md:mb-8">The Realization</p>
            <p className="text-3xl md:text-4xl font-bold text-near-black mb-8 md:mb-10">
              Portfolio creation happens too late.
            </p>
            <p className="body-large text-grey-secondary">
              Students don&apos;t sit down after bootcamp to write a portfolio. They don&apos;t reflect deeply about their work in those final weeks. What if documentation could be continuous, lightweight, and integrated into the learning rhythm? What if students could document weekly and graduate with a portfolio already built?
            </p>
          </div>
        </div>
      </CaseStudySection>

      {/* Target Users */}
      <CaseStudySection title="Target Users" backgroundLight>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Primary User */}
            <InsightCard label="Primary User">
              <p className="heading-card mb-4">Bootcamp Student</p>
              <p className="body-default text-grey-secondary mb-6">
                Months into an intensive program, working on real projects. Needs to document progress but lacks structure and time.
              </p>
              <ul className="space-y-2">
                <li className="body-small text-grey-secondary">
                  <span className="text-burgundy">•</span> Feeling: Overwhelmed by the pace
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="text-burgundy">•</span> Need: Lightweight documentation
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="text-burgundy">•</span> Goal: Strong hiring portfolio
                </li>
              </ul>
            </InsightCard>

            {/* Buyer User */}
            <InsightCard label="Buyer">
              <p className="heading-card mb-4">Bootcamp Administrator</p>
              <p className="body-default text-grey-secondary mb-6">
                Wants students to graduate job-ready with impressive portfolios that reflect the bootcamp&apos;s quality.
              </p>
              <ul className="space-y-2">
                <li className="body-small text-grey-secondary">
                  <span className="text-burgundy">•</span> Feeling: Competitive pressure
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="text-burgundy">•</span> Need: Student success tool
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="text-burgundy">•</span> Goal: Graduate employability
                </li>
              </ul>
            </InsightCard>
          </div>
        </div>
      </CaseStudySection>

      {/* My Role & Ownership */}
      <CaseStudySection title="My Role & Ownership">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="body-large text-grey-secondary mb-8 md:mb-12">
              As the solo PM, I owned the entire product vision, discovery, and strategy. I was responsible for understanding user needs, defining the MVP, making product trade-offs, and creating a validation strategy. This was not about feature building—it was about finding product-market fit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="snapshot-mini">
                <p className="eyebrow mb-3 md:mb-4">Discovery</p>
                <ul className="space-y-2">
                  <li className="body-small text-grey-secondary">User interviews</li>
                  <li className="body-small text-grey-secondary">Bootcamp observation</li>
                  <li className="body-small text-grey-secondary">Portfolio analysis</li>
                </ul>
              </div>
              <div className="snapshot-mini">
                <p className="eyebrow mb-3 md:mb-4">Strategy</p>
                <ul className="space-y-2">
                  <li className="body-small text-grey-secondary">MVP definition</li>
                  <li className="body-small text-grey-secondary">Positioning</li>
                  <li className="body-small text-grey-secondary">Go-to-market</li>
                </ul>
              </div>
              <div className="snapshot-mini">
                <p className="eyebrow mb-3 md:mb-4">Validation</p>
                <ul className="space-y-2">
                  <li className="body-small text-grey-secondary">Prototype testing</li>
                  <li className="body-small text-grey-secondary">Usability testing</li>
                  <li className="body-small text-grey-secondary">Hypothesis validation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Product Hypothesis */}
      <CaseStudySection title="Product Hypothesis" backgroundLight>
        <div className="container-wide">
          <InsightCard highlighted>
            <p className="eyebrow mb-3 md:mb-4 text-burgundy">Core Hypothesis</p>
            <p className="text-2xl md:text-3xl font-bold text-near-black mb-8">
              If students receive guided weekly documentation prompts during their bootcamp, they will consistently document project work and graduate with stronger evidence of their experience.
            </p>
            <p className="body-default text-grey-secondary">
              This hypothesis connects the user problem (documentation is hard), the insight (timing matters), and the proposed solution (integrated weekly prompts).
            </p>
          </InsightCard>
        </div>
      </CaseStudySection>

      {/* MVP */}
      <CaseStudySection title="MVP: The Minimum Viable Approach">
        <div className="container-wide">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="body-large text-grey-secondary mb-8 md:mb-12">
              Rather than building a full feature suite, I focused on validating the core thesis: Can we make documentation lightweight and consistent?
            </p>

            <div className="space-y-6 md:space-y-8">
              <InsightCard label="For Students">
                <p className="heading-card mb-3">Weekly Reflection Prompts</p>
                <p className="body-default text-grey-secondary mb-4">
                  Simple, guided questions sent weekly that students answer about their work. No complex forms or long-form writing required.
                </p>
                <p className="body-small text-burgundy font-medium">Why this? Removes activation friction.</p>
              </InsightCard>

              <InsightCard label="For Students">
                <p className="heading-card mb-3">AI-Generated Drafts</p>
                <p className="body-default text-grey-secondary mb-4">
                  AI analyzes their weekly responses and auto-generates case study sections and CV bullets. Student edits and approves before export.
                </p>
                <p className="body-small text-burgundy font-medium">Why this? Accelerates portfolio assembly.</p>
              </InsightCard>

              <InsightCard label="For Bootcamp Admins">
                <p className="heading-card mb-3">Dashboard + Notifications</p>
                <p className="body-default text-grey-secondary mb-4">
                  Admins can see which students are consistently documenting. Gentle reminders encourage participation.
                </p>
                <p className="body-small text-burgundy font-medium">Why this? Creates engagement metric for buyer.</p>
              </InsightCard>
            </div>
          </div>

          <FlowArtefact
            src="/projects/gradready/GradReady MVP User Flow (System:AI Flow).jpg"
            alt="GradReady system and AI flow from weekly reflection submission through AI generation and public portfolio update"
            width={1183}
            height={3381}
            caption="System and AI flow showing how a weekly reflection becomes a reviewed portfolio entry"
          />
        </div>
      </CaseStudySection>

      {/* Core User Journey */}
      <CaseStudySection title="Core User Journey" backgroundLight>
        <div className="container-wide">
          <div className="journey-timeline space-y-4 md:space-y-6">
            {[
              {
                step: '1',
                title: 'Weekly Reminder',
                description: 'Student receives email/notification: "Document this week\'s progress"',
              },
              {
                step: '2',
                title: 'Guided Reflection',
                description: 'Student opens GradReady and answers 3-4 guided questions about their work (5-10 min)',
              },
              {
                step: '3',
                title: 'AI Processing',
                description: 'AI analyzes responses and generates a case study section and 2-3 CV bullet points',
              },
              {
                step: '4',
                title: 'Student Review',
                description: 'Student reviews AI output, edits for accuracy, and approves for portfolio',
              },
              {
                step: '5',
                title: 'Portfolio Builds Over Time',
                description: 'By bootcamp end, student has 12+ weeks of documented case studies and polished CV bullets',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="journey-step flex gap-6 md:gap-8 pb-6 md:pb-8 border-b border-burgundy/10 last:border-b-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-burgundy text-ivory flex items-center justify-center font-semibold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow pt-1">
                  <p className="heading-card mb-2">{item.title}</p>
                  <p className="body-default text-grey-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16">
            <FlowArtefact
              src="/projects/gradready/GradReady MVP User Flow (Student Flow).jpg"
              alt="GradReady student user flow from invitation and signup through weekly logging and portfolio access"
              width={1211}
              height={3301}
              caption="Student journey across onboarding, weekly documentation, and portfolio access"
            />
          </div>
        </div>
      </CaseStudySection>

      {/* Key Product Decisions */}
      <CaseStudySection title="Key Product Decisions">
        <div className="container-wide">
          <div className="decision-stack space-y-6">
            <div className="decision-card">
              <p className="eyebrow mb-4 md:mb-6 text-burgundy">Decision 1</p>
              <h3 className="heading-card mb-4 md:mb-6">Make Documentation Continuous, Not Retrospective</h3>
              <p className="body-default text-grey-secondary mb-4">
                Rather than asking students to write everything at the end, weekly prompts create touchpoints throughout the bootcamp. This increases participation and memory quality.
              </p>
              <p className="body-small text-burgundy font-medium">Trade-off: Requires consistent engagement vs. One-time comprehensive reflection</p>
            </div>

            <div className="decision-card">
              <p className="eyebrow mb-4 md:mb-6 text-burgundy">Decision 2</p>
              <h3 className="heading-card mb-4 md:mb-6">Keep Weekly Logging Lightweight (3-5 Minutes)</h3>
              <p className="body-default text-grey-secondary mb-4">
                Bootcamp students are time-constrained. Long-form reflection won&apos;t happen. Multiple-choice questions and short text fields lower the barrier to entry.
              </p>
              <p className="body-small text-burgundy font-medium">Trade-off: Structured data vs. Depth of reflection</p>
            </div>

            <div className="decision-card">
              <p className="eyebrow mb-4 md:mb-6 text-burgundy">Decision 3</p>
              <h3 className="heading-card mb-4 md:mb-6">AI Assists, Student Remains in Control</h3>
              <p className="body-default text-grey-secondary mb-4">
                AI generates drafts but does not auto-publish. Students must review and approve all content. This maintains authenticity and builds trust.
              </p>
              <p className="body-small text-burgundy font-medium">Trade-off: Increased friction vs. Authenticity and approval</p>
            </div>

            <div className="decision-card">
              <p className="eyebrow mb-4 md:mb-6 text-burgundy">Decision 4</p>
              <h3 className="heading-card mb-4 md:mb-6">Separate Student Value from Bootcamp Buyer Value</h3>
              <p className="body-default text-grey-secondary mb-4">
                Student gets a portfolio. Bootcamp admin gets a dashboard showing engagement. Different UX and incentives for each user.
              </p>
              <p className="body-small text-burgundy font-medium">Trade-off: Product complexity vs. Serving two user types</p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Prototype */}
      <CaseStudySection title="Prototype" backgroundLight>
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-14">
            I built an interactive prototype to test the core flow: weekly prompts → AI generation → student review. This allowed early user feedback without full engineering investment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            <ScreenArtefact src="/projects/gradready/06 - Weekly Prompt.png" alt="GradReady weekly reflection prompt screen" width={1060} height={3066} label="Weekly Reflection" />
            <ScreenArtefact src="/projects/gradready/07 - Portfolio Entry Preview.png" alt="GradReady AI-generated portfolio entry preview screen" width={1060} height={3098} label="AI Portfolio Entry" />
            <ScreenArtefact src="/projects/gradready/08 - Public Portfolio.png" alt="GradReady generated public student portfolio screen" width={1060} height={4430} label="Student Portfolio" />
            <ScreenArtefact src="/projects/gradready/09 - Admin Dashboard.png" alt="GradReady bootcamp administrator dashboard screen" width={1060} height={3466} label="Admin Dashboard" />
          </div>

          <InsightCard>
            <p className="eyebrow mb-4 mb-4">Prototype Approach</p>
            <p className="body-default text-grey-secondary">
              Built using Figma + prototyping. Showed realistic data (actual student responses) to make feedback concrete. Tested with 4-5 students and 2 bootcamp admins to validate core assumptions before any backend work.
            </p>
          </InsightCard>
        </div>
      </CaseStudySection>

      {/* Technical Dependencies */}
      <CaseStudySection title="Technical Dependencies">
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-14">
            While I focused on product strategy, I mapped out the technical dependencies needed to bring this to life. These are not blockers—they&apos;re prerequisites for the next phase.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: 'AI API',
                description: 'Language model API to generate case studies and CV bullets from student reflections.',
              },
              {
                title: 'Authentication',
                description: 'Secure login for students and admin users with role-based access control.',
              },
              {
                title: 'Notifications',
                description: 'Email/SMS reminders for weekly prompts and digest emails for admins.',
              },
              {
                title: 'Social Login',
                description: 'Login via LinkedIn/Google to lower signup friction for students.',
              },
              {
                title: 'File Uploads',
                description: 'Students can attach screenshots, code snippets, or project files as context for AI.',
              },
              {
                title: 'Portfolio Export',
                description: 'Export portfolio as PDF or public link shareable with recruiters.',
              },
            ].map((item) => (
              <InsightCard key={item.title} label={item.title}>
                <p className="body-default text-grey-secondary">{item.description}</p>
              </InsightCard>
            ))}
          </div>
        </div>
      </CaseStudySection>

      {/* Validation Gap */}
      <CaseStudySection title="Validation Gap" backgroundLight>
        <div className="container-wide">
          <InsightCard highlighted>
            <p className="eyebrow mb-4 md:mb-6 text-burgundy">Honest Assessment</p>
            <p className="heading-card mb-6 md:mb-8">The prototype and positioning exist, but primary user validation is incomplete.</p>
            <p className="body-default text-grey-secondary mb-6 md:mb-8">
              I have tested the concept with a small set of bootcamp students and admins. The reaction has been positive, but I have not yet conducted:
            </p>
            <ul className="space-y-3">
              <li className="body-default text-grey-secondary flex gap-3">
                <span className="text-burgundy">•</span>
                <span>Comprehensive usability testing with diverse student cohorts</span>
              </li>
              <li className="body-default text-grey-secondary flex gap-3">
                <span className="text-burgundy">•</span>
                <span>Longer-term engagement metrics (do students use this for entire bootcamp?)</span>
              </li>
              <li className="body-default text-grey-secondary flex gap-3">
                <span className="text-burgundy">•</span>
                <span>Pricing and packaging research with bootcamp decision-makers</span>
              </li>
              <li className="body-default text-grey-secondary flex gap-3">
                <span className="text-burgundy">•</span>
                <span>Competitor analysis and market sizing</span>
              </li>
            </ul>
          </InsightCard>
        </div>
      </CaseStudySection>

      {/* What I Would Test Next */}
      <CaseStudySection title="What I Would Test Next">
        <div className="container-wide">
          <div className="space-y-8 md:space-y-10">
            <div>
              <p className="eyebrow mb-3 md:mb-4 text-burgundy">Test 1</p>
              <p className="heading-card mb-4 md:mb-6">Prompt Effectiveness</p>
              <p className="body-default text-grey-secondary">
                Do different prompt phrasings lead to higher response rates and better portfolio outcomes? A/B test weekly prompts with different cohorts to find the most engaging format.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-3 md:mb-4 text-burgundy">Test 2</p>
              <p className="heading-card mb-4 md:mb-6">AI Output Quality</p>
              <p className="body-default text-grey-secondary">
                Do AI-generated case studies and CV bullets match quality expectations from recruiters? Test outputs with hiring managers to validate that they effectively communicate student value.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-3 md:mb-4 text-burgundy">Test 3</p>
              <p className="heading-card mb-4 md:mb-6">Engagement Mechanics</p>
              <p className="body-default text-grey-secondary">
                What drives sustained participation? Test streaks, gamification, peer comparison, and admin encouragement to find the highest-engagement model.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-3 md:mb-4 text-burgundy">Test 4</p>
              <p className="heading-card mb-4 md:mb-6">Admin Value Perception</p>
              <p className="body-default text-grey-secondary">
                Do bootcamp admins perceive the dashboard as valuable? What metrics matter to them? Run discovery interviews with 10-15 bootcamp administrators to refine the admin product.
              </p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Metrics I Would Measure */}
      <CaseStudySection title="Metrics I Would Measure" backgroundLight>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="metric-panel">
              <p className="eyebrow mb-6 md:mb-8">Student Engagement</p>
              <ul className="space-y-4">
                <li className="body-default text-grey-secondary">
                  <span className="text-burgundy font-medium">Weekly Completion Rate:</span> % of students who complete prompts each week
                </li>
                <li className="body-default text-grey-secondary">
                  <span className="text-burgundy font-medium">Portfolio Completion:</span> % of generated content students approve and keep
                </li>
                <li className="body-default text-grey-secondary">
                  <span className="text-burgundy font-medium">Export Rate:</span> How many students download/share final portfolio?
                </li>
              </ul>
            </div>

            <div className="metric-panel">
              <p className="eyebrow mb-6 md:mb-8">Admin & Business</p>
              <ul className="space-y-4">
                <li className="body-default text-grey-secondary">
                  <span className="text-burgundy font-medium">Admin Activation:</span> % of bootcamps that set up and use dashboard
                </li>
                <li className="body-default text-burgundy font-medium">
                  Hiring Success: Do students with GradReady portfolios get more interviews?
                </li>
                <li className="body-default text-grey-secondary">
                  <span className="text-burgundy font-medium">NPS:</span> Net Promoter Score from both students and admins
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Key Trade-Offs */}
      <CaseStudySection title="Key Trade-Offs">
        <div className="container-wide">
          <div className="space-y-8 md:space-y-10">
            {[
              {
                tradeoff: 'Speed vs. Depth',
                description:
                  'Fast, lightweight prompts encourage participation but may capture less nuanced reflection than long-form journaling.',
              },
              {
                tradeoff: 'AI Generation vs. Authenticity',
                description:
                  'AI saves time but students must approve content to ensure honesty. This adds friction to the workflow.',
              },
              {
                tradeoff: 'Feature Richness vs. Focus',
                description:
                  'Limiting MVP to core flow (prompt → generate → review) means no gamification, social, or advanced features initially.',
              },
              {
                tradeoff: 'Monetization Flexibility',
                description:
                  'Charging students directly vs. bootcamps creates different go-to-market strategies and margin structures.',
              },
              {
                tradeoff: 'Scale vs. Customization',
                description:
                  'Generic prompts and templates scale efficiently but may not fit all bootcamp cultures and curriculum.',
              },
            ].map((item, idx) => (
              <div key={idx} className="glass-panel rounded-r-lg border-l-4 border-l-burgundy p-6 md:p-8">
                <p className="heading-card mb-3 text-burgundy">{item.tradeoff}</p>
                <p className="body-default text-grey-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      {/* Outcome */}
      <CaseStudySection title="Outcome" backgroundLight>
        <div className="container-wide">
          <InsightCard>
            <p className="eyebrow mb-4 md:mb-6">Current Status</p>
            <p className="heading-card mb-6 md:mb-8">Product strategy and prototype complete. Validation phase ahead.</p>
            <p className="body-default text-grey-secondary mb-6 md:mb-8">
              The concept has been validated with early users, but this project lives in the space between validation and commercialization. The next phase requires building out the full product, running longer-term cohort tests, and refining the business model.
            </p>
            <p className="body-default text-grey-secondary">
              What I learned is applicable to any student-to-career product or AI-assisted documentation tool: timing of documentation matters, AI works best when students retain control, and separating user and buyer value requires distinct product experiences.
            </p>
          </InsightCard>
        </div>
      </CaseStudySection>

      {/* Reflection */}
      <CaseStudySection title="Reflection">
        <div className="container-wide">
          <div className="max-w-3xl space-y-8 md:space-y-10">
            <div>
              <p className="heading-card mb-4 md:mb-6">What I Learned About PM</p>
              <p className="body-large text-grey-secondary mb-6 md:mb-8">
                Working on GradReady as a solo PM taught me that the most important PM work happens before the first line of code is written. Positioning, hypothesis formation, validation strategy, and trade-off thinking are what separate good products from great ones.
              </p>
              <p className="body-large text-grey-secondary">
                I also learned the importance of honest assessment. Building a narrative around what has been validated vs. what remains uncertain is more credible than overstating a prototype&apos;s maturity.
              </p>
            </div>

            <div>
              <p className="heading-card mb-4 md:mb-6">If I Continued This Work</p>
              <p className="body-large text-grey-secondary">
                I would prioritize running a cohort test with a single bootcamp for a full 12-week cycle. Real engagement data, AI output quality feedback, and admin dashboard usage would answer the biggest remaining questions. That one test would either validate the core hypothesis or redirect the strategy.
              </p>
            </div>

            <div>
              <p className="heading-card mb-4 md:mb-6">How This Shaped My PM Thinking</p>
              <p className="body-large text-grey-secondary">
                GradReady reinforced that timing, psychology, and incentive alignment are as important as features. It also demonstrated the power of AI-assisted workflows where humans remain the decision-maker. These principles apply far beyond EdTech.
              </p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Bottom Navigation */}
      <section className="section-spacing section-warm border-t warm-divider">
        <div className="container-wide">
          <div className="cta-panel rounded-2xl px-6 py-12 md:px-12 md:py-16 text-center md:text-left">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 button-on-dark"
            >
              <span>←</span>
              <span>Back to Selected Work</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
