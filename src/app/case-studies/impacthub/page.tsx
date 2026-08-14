import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudyHero from '@/components/CaseStudyHero'
import ProjectSnapshot from '@/components/ProjectSnapshot'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'
import VisualPlaceholder from '@/components/VisualPlaceholder'

export const metadata = {
  title: 'ImpactHub Case Study | Chisom Ayogu',
  description: 'Cross-Functional Product Leadership: Leading a multidisciplinary team to build a volunteer management and impact verification platform for NGOs.',
}

export default function ImpactHubCaseStudy() {
  return (
    <div className="bg-ivory">
      <Navigation />

      {/* Hero */}
      <CaseStudyHero
        title="ImpactHub"
        positioning="Cross-Functional Product Leadership"
        industry="CivicTech / Volunteer Management"
        description="I led a six-person cross-functional team to build a volunteer management and impact verification platform for NGOs. This case study demonstrates how I coordinated product, design, and engineering teams under tight constraints."
      />

      {/* Project Snapshot */}
      <ProjectSnapshot
        items={[
          { label: 'My Role', value: 'Team Lead & PM' },
          { label: 'Team Size', value: '6 people' },
          { label: 'Timeline', value: '1 month' },
          { label: 'Project Type', value: 'Cross-Track Capstone' },
        ]}
      />

      {/* The Problem */}
      <CaseStudySection title="The Problem" backgroundLight>
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-12">
            NGOs managing volunteers faced a fragmented ecosystem of disconnected tools. The central challenge was not just inefficiency—it was a lack of trust and verifiable proof.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <p className="eyebrow mb-4 md:mb-6 text-burgundy">NGO Challenges</p>
              <ul className="space-y-3 md:space-y-4">
                <li className="body-default text-grey-secondary flex gap-3">
                  <span className="text-burgundy">•</span>
                  <span>Fragmented volunteer records across WhatsApp, spreadsheets, Google Forms, email, and paper</span>
                </li>
                <li className="body-default text-grey-secondary flex gap-3">
                  <span className="text-burgundy">•</span>
                  <span>Inefficient communication with volunteers</span>
                </li>
                <li className="body-default text-grey-secondary flex gap-3">
                  <span className="text-burgundy">•</span>
                  <span>Manual attendance tracking and contribution verification</span>
                </li>
                <li className="body-default text-grey-secondary flex gap-3">
                  <span className="text-burgundy">•</span>
                  <span>Delayed reporting and weak impact visibility</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4 md:mb-6 text-burgundy">Volunteer Challenges</p>
              <ul className="space-y-3 md:space-y-4">
                <li className="body-default text-grey-secondary flex gap-3">
                  <span className="text-burgundy">•</span>
                  <span>Difficulty finding suitable opportunities</span>
                </li>
                <li className="body-default text-grey-secondary flex gap-3">
                  <span className="text-burgundy">•</span>
                  <span>No maintained record of contributions</span>
                </li>
                <li className="body-default text-grey-secondary flex gap-3">
                  <span className="text-burgundy">•</span>
                  <span>Unable to receive certificates or proof of impact</span>
                </li>
                <li className="body-default text-grey-secondary flex gap-3">
                  <span className="text-burgundy">•</span>
                  <span>No portable evidence for résumés or employment</span>
                </li>
              </ul>
            </div>
          </div>

          <InsightCard highlighted>
            <p className="text-2xl md:text-3xl font-bold text-near-black">
              NGOs struggled to manage and prove impact. Volunteers struggled to maintain trusted evidence of the impact they created.
            </p>
          </InsightCard>
        </div>
      </CaseStudySection>

      {/* Research & Discovery */}
      <CaseStudySection title="Research & Discovery">
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-14">
            I spearheaded comprehensive research to validate the problem and identify the opportunity. This wasn&apos;t just about solving a pain point—it was about understanding where the market was moving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <InsightCard label="Research Methods">
              <ul className="space-y-4">
                <li className="body-default text-grey-secondary">
                  <span className="font-medium text-near-black">Volunteer Surveys</span>
                  <p className="text-sm mt-1">Understanding how volunteers track and share their contributions</p>
                </li>
                <li className="body-default text-grey-secondary">
                  <span className="font-medium text-near-black">NGO Interviews</span>
                  <p className="text-sm mt-1">Learning how organizations currently manage volunteer programs</p>
                </li>
                <li className="body-default text-grey-secondary">
                  <span className="font-medium text-near-black">Competitor Analysis</span>
                  <p className="text-sm mt-1">Mapping existing volunteer platforms and their limitations</p>
                </li>
                <li className="body-default text-grey-secondary">
                  <span className="font-medium text-near-black">Industry Research</span>
                  <p className="text-sm mt-1">Exploring trends in social impact and digital verification</p>
                </li>
              </ul>
            </InsightCard>

            <InsightCard label="Key Insights">
              <ul className="space-y-4">
                <li className="body-default text-grey-secondary">
                  <span className="font-medium text-near-black">Manual Tools Dominate</span>
                  <p className="text-sm mt-1">NGOs rely heavily on WhatsApp, spreadsheets, and paper-based systems</p>
                </li>
                <li className="body-default text-grey-secondary">
                  <span className="font-medium text-near-black">Verification Matters</span>
                  <p className="text-sm mt-1">Volunteers value verified contribution history over unvalidated claims</p>
                </li>
                <li className="body-default text-grey-secondary">
                  <span className="font-medium text-near-black">Measurable Impact</span>
                  <p className="text-sm mt-1">Centralization and proof of impact matter more than listing platforms</p>
                </li>
              </ul>
            </InsightCard>
          </div>

          <VisualPlaceholder label="Research Artefacts (Surveys, Interview Notes, Competitive Matrix)" />
        </div>
      </CaseStudySection>

      {/* Key Product Insight */}
      <CaseStudySection title="Key Product Insight" backgroundLight>
        <div className="container-wide max-w-3xl">
          <p className="eyebrow mb-6 md:mb-8">The Opportunity</p>
          <p className="text-3xl md:text-4xl font-bold text-near-black mb-8 md:mb-10">
            Build trust through verification, not just convenience.
          </p>
          <p className="body-large text-grey-secondary">
            The market was crowded with volunteer listing platforms. But no one was solving the deeper problem: how to create a trusted, verified record of impact that both NGOs and volunteers could rely on. That became our competitive advantage.
          </p>
        </div>
      </CaseStudySection>

      {/* My Role */}
      <CaseStudySection title="My Role as Team Lead">
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-14">
            I was not a PM among engineers. I was the lead for the entire cross-functional project, responsible for coordinating product, design, frontend, backend, mobile, and technical writing teams. This meant wearing multiple hats:
          </p>

          <div className="space-y-8 md:space-y-10">
            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3">Product Strategy</p>
              <p className="body-default text-grey-secondary">Conducted research, defined the product direction, created user journeys and flows, and managed product requirements across the entire project.</p>
            </div>

            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3">Cross-Functional Coordination</p>
              <p className="body-default text-grey-secondary">Organized and facilitated meetings, coordinated deliverables across all tracks, assigned tasks in Jira, and monitored dependencies.</p>
            </div>

            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3">Design Partnership</p>
              <p className="body-default text-grey-secondary">Worked closely with Product Designers, translating requirements into user flows and wireframes, and feeding back on design fidelity.</p>
            </div>

            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3">Engineering Oversight</p>
              <p className="body-default text-grey-secondary">Followed up with Frontend, Backend, and Mobile developers on progress, unblocked dependencies, and escalated critical issues.</p>
            </div>

            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3">Delivery Management</p>
              <p className="body-default text-grey-secondary">Set up Jira, created the delivery structure, tracked progress daily, and managed scope under a one-month deadline.</p>
            </div>

            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3">Stakeholder Communication</p>
              <p className="body-default text-grey-secondary">Presented to bootcamp stakeholders who acted as investors, pitched the product direction, and communicated progress and challenges.</p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Cross-Functional Team */}
      <CaseStudySection title="The Cross-Functional Team" backgroundLight>
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-14">
            This project brought together six people across five disciplines. Each brought different expertise, constraints, and priorities. Aligning them around a shared goal was half the work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { track: 'Product Management', people: '2 people', focus: 'Strategy, research, requirements' },
              { track: 'Product Design', people: '1 person', focus: 'Figma, wireframes, user flows' },
              { track: 'Frontend Development', people: '1 person', focus: 'Web interface' },
              { track: 'Backend Development', people: '1 person', focus: 'APIs, database, verification logic' },
              { track: 'Mobile Development', people: '1 person', focus: 'iOS/Android app' },
              { track: 'Technical Writing', people: 'Shared', focus: 'Documentation, PRD' },
            ].map((item) => (
              <InsightCard key={item.track} label={item.track}>
                <p className="heading-card mb-2">{item.people}</p>
                <p className="body-small text-grey-secondary">{item.focus}</p>
              </InsightCard>
            ))}
          </div>

          <div className="mt-12 md:mt-16">
            <VisualPlaceholder label="Team Structure & Tracks" aspectRatio="square" />
          </div>
        </div>
      </CaseStudySection>

      {/* Product Strategy */}
      <CaseStudySection title="Product Strategy: The Volunteer Lifecycle">
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-14">
            I mapped the entire volunteer journey as a series of product moments. Each step required different product capabilities and cross-team coordination.
          </p>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                step: '1',
                phase: 'Discover',
                description: 'Volunteer finds opportunities through the ImpactHub discovery platform',
              },
              {
                step: '2',
                phase: 'Apply',
                description: 'Volunteer submits application to participate in an opportunity',
              },
              {
                step: '3',
                phase: 'Approve',
                description: 'NGO reviews and approves volunteer applications',
              },
              {
                step: '4',
                phase: 'Participate',
                description: 'Volunteer completes the volunteering activity',
              },
              {
                step: '5',
                phase: 'Verify',
                description: 'NGO verifies that the contribution was completed (critical step)',
              },
              {
                step: '6',
                phase: 'Recognize',
                description: 'System generates certificate, updates Verified Impact Profile, sends notification',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 md:gap-8 pb-6 md:pb-8 border-b border-grey-secondary/10 last:border-b-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-burgundy text-ivory flex items-center justify-center font-semibold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow pt-1">
                  <p className="heading-card mb-2">{item.phase}</p>
                  <p className="body-default text-grey-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16">
            <VisualPlaceholder label="Complete User Journey" />
          </div>
        </div>
      </CaseStudySection>

      {/* MVP Capabilities */}
      <CaseStudySection title="MVP: Core Capabilities" backgroundLight>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { category: 'For NGOs', items: ['Organization verification', 'Opportunity creation', 'Volunteer applications', 'Contribution verification', 'Reporting & analytics'] },
              { category: 'For Volunteers', items: ['Registration & profile', 'Opportunity discovery', 'Applications & status', 'Service hour tracking', 'Digital certificates'] },
              { category: 'Platform', items: ['Verified Impact Profile', 'Notifications', 'User authentication', 'Mobile & web access', 'Audit trail'] },
            ].map((section) => (
              <div key={section.category}>
                <p className="eyebrow mb-4 md:mb-6 text-burgundy">{section.category}</p>
                <ul className="space-y-3 md:space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="body-small text-grey-secondary flex gap-2">
                      <span className="text-burgundy flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      {/* Verification Before Recognition - Key Decision */}
      <CaseStudySection title="Verification Before Recognition">
        <div className="container-wide">
          <InsightCard highlighted>
            <p className="eyebrow mb-4 md:mb-6 text-burgundy">Core Product Decision</p>
            <p className="text-2xl md:text-3xl font-bold text-near-black mb-6 md:mb-8">
              Recognition follows verification.
            </p>
            <p className="body-large text-grey-secondary mb-8 md:mb-10">
              A volunteer should not receive a certificate or verified impact record merely because they claim to have completed an activity. The NGO must verify the contribution first. Verification is not optional—it is the foundation of trust.
            </p>
            <p className="body-default text-grey-secondary font-medium">After NGO Verification:</p>
            <ol className="space-y-3 mt-4 md:mt-6">
              <li className="body-small text-grey-secondary flex gap-3">
                <span className="text-burgundy font-bold flex-shrink-0">1.</span>
                <span>Service hours are recorded in volunteer profile</span>
              </li>
              <li className="body-small text-grey-secondary flex gap-3">
                <span className="text-burgundy font-bold flex-shrink-0">2.</span>
                <span>Unique certificate ID is generated</span>
              </li>
              <li className="body-small text-grey-secondary flex gap-3">
                <span className="text-burgundy font-bold flex-shrink-0">3.</span>
                <span>Digital certificate is created and downloadable</span>
              </li>
              <li className="body-small text-grey-secondary flex gap-3">
                <span className="text-burgundy font-bold flex-shrink-0">4.</span>
                <span>Verified Impact Profile is updated</span>
              </li>
              <li className="body-small text-grey-secondary flex gap-3">
                <span className="text-burgundy font-bold flex-shrink-0">5.</span>
                <span>Volunteer is notified of certification</span>
              </li>
            </ol>
          </InsightCard>

          <div className="mt-12 md:mt-16">
            <VisualPlaceholder label="Verification Workflow Diagram" aspectRatio="video" />
          </div>
        </div>
      </CaseStudySection>

      {/* Jira & Delivery Management */}
      <CaseStudySection title="Jira & Delivery Management" backgroundLight>
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-12">
            With six people and a one-month deadline, delivery management was critical. I set up Jira to create visibility across all functional tracks.
          </p>

          <div className="space-y-8 md:space-y-10 mb-12 md:mb-16">
            <InsightCard label="Delivery Structure">
              <p className="body-default text-grey-secondary mb-6">
                I organized Jira around functional tracks, not just features. This allowed each team to own their deliverables while surfacing cross-team dependencies.
              </p>
              <ul className="space-y-3">
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Product Track:</span> Research, strategy, requirements, user journeys
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Design Track:</span> Wireframes, high-fidelity designs, design system
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Backend Track:</span> APIs, database schema, verification logic
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Frontend Track:</span> Web interface, integration with backend
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Mobile Track:</span> iOS/Android app, parity with web
                </li>
              </ul>
            </InsightCard>

            <InsightCard label="Dependency Management">
              <p className="body-default text-grey-secondary mb-6">
                Not all tasks could run in parallel. Design had to start before Frontend. Backend APIs had to be defined before Frontend and Mobile could build.
              </p>
              <p className="body-small text-grey-secondary mb-4">
                I mapped critical dependencies and sequenced work accordingly. When one team got blocked, I escalated immediately.
              </p>
              <p className="body-small text-grey-secondary font-medium">
                Example: Frontend was blocked waiting for Backend API spec. I facilitated a synchronous meeting to unblock the dependency rather than letting it delay the project.
              </p>
            </InsightCard>
          </div>

          <VisualPlaceholder label="Jira Board Screenshot (Delivery Structure & Progress)" />
        </div>
      </CaseStudySection>

      {/* Conflict Management */}
      <CaseStudySection title="Conflict Management: 6 Real Scenarios">
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-12">
            Six people working under pressure will have disagreements. My approach was never to decide who was &quot;right.&quot; Instead, I brought conversations back to user need, documented requirements, technical dependencies, and our shared deadline.
          </p>

          <div className="space-y-8 md:space-y-10 mb-12 md:mb-16">
            {/* Conflict 1 */}
            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3 text-burgundy">Frontend vs Backend: Non-Working API Endpoint</p>
              <p className="body-default text-grey-secondary mb-4">
                Frontend developer discovered that a critical API endpoint was not working as documented. Backend developer believed it was working correctly. Tension rose quickly.
              </p>
              <p className="body-small text-burgundy font-medium mb-2">My approach:</p>
              <p className="body-small text-grey-secondary">
                I facilitated a synchronous debugging session rather than letting blame fly. We discovered the API was correct but the Frontend integration was off. Resolution: corrected the integration. Focus: the shared goal (working feature), not who was wrong.
              </p>
            </div>

            {/* Conflict 2 */}
            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3 text-burgundy">Product vs Design: Platform Admin Requirements</p>
              <p className="body-default text-grey-secondary mb-4">
                The Product team created low-fidelity wireframes and user flows. During design handoff, important platform-administration requirements were missing. This created downstream discrepancies in Design, Frontend, and Mobile.
              </p>
              <p className="body-small text-burgundy font-medium mb-2">My approach:</p>
              <p className="body-small text-grey-secondary">
                Rather than blaming Product for incomplete requirements, I coordinated a synchronous clarification meeting with all stakeholders. We documented missing requirements, updated wireframes, and cascaded changes to Figma and all engineering tracks.
              </p>
            </div>

            {/* Conflict 3 */}
            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3 text-burgundy">Design vs Frontend: Figma vs Implementation</p>
              <p className="body-default text-grey-secondary mb-4">
                Frontend implementation had subtle but important differences from the approved Figma designs. Designer felt their work was not being respected. Frontend developer felt the design was over-specifying details.
              </p>
              <p className="body-small text-burgundy font-medium mb-2">My approach:</p>
              <p className="body-small text-grey-secondary">
                I brought the conversation back to documented product requirements and user needs. Some differences were cosmetic (acceptable). Others were functional (must match design). We aligned on a clear decision framework for future decisions.
              </p>
            </div>

            {/* Conflict 4 */}
            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3 text-burgundy">Prototype Gaps: Missing Interface Elements</p>
              <p className="body-default text-grey-secondary mb-4">
                During the first end-to-end demo, several interface elements were discovered to be missing or incomplete. This required urgent coordination across Design, Frontend, Backend, and Mobile.
              </p>
              <p className="body-small text-burgundy font-medium mb-2">My approach:</p>
              <p className="body-small text-grey-secondary">
                I created a gap list, prioritized by criticality to the demo, and coordinated fixes across teams. Some gaps required extending the deadline slightly; others were reduced in scope. Clear ownership and communication prevented panic.
              </p>
            </div>

            {/* Conflict 5 */}
            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3 text-burgundy">Mobile Resource Constraint: Only One Developer</p>
              <p className="body-default text-grey-secondary mb-4">
                The Mobile team was one developer working under the same one-month deadline. Scope creep would crush this single point of failure. Multiple teams wanted mobile features that weren&apos;t in the MVP.
              </p>
              <p className="body-small text-burgundy font-medium mb-2">My approach:</p>
              <p className="body-small text-grey-secondary">
                I protected the Mobile developer&apos;s scope ruthlessly. Any new request was evaluated against the MVP requirements and the one-month deadline. This felt harsh but prevented overcommitment and ensured delivery.
              </p>
            </div>

            {/* Conflict 6 */}
            <div className="border-l-4 border-burgundy pl-6 md:pl-8">
              <p className="heading-card mb-3 text-burgundy">Product Management vs Technical Writing: PRD Scope</p>
              <p className="body-default text-grey-secondary mb-4">
                Product team created a detailed PRD. Technical Writing team felt it was too long and had misaligned documentation. Disagreement about what belonged in the PRD vs. separate docs.
              </p>
              <p className="body-small text-burgundy font-medium mb-2">My approach:</p>
              <p className="body-small text-grey-secondary">
                I facilitated alignment on documentation structure. PRD became the source of truth for requirements. A separate design doc handled implementation details. Both teams owned their parts with clear boundaries.
              </p>
            </div>
          </div>

          <InsightCard>
            <p className="eyebrow mb-4 md:mb-6 text-burgundy">Conflict Resolution Framework</p>
            <p className="body-default text-grey-secondary mb-6">
              Conflict management in product teams is not always about deciding who is right. My approach was to bring conversations back to:
            </p>
            <ul className="space-y-3">
              <li className="body-small text-grey-secondary flex gap-3">
                <span className="text-burgundy font-bold flex-shrink-0">→</span>
                <span><span className="font-medium">User need:</span> What does the user actually need?</span>
              </li>
              <li className="body-small text-grey-secondary flex gap-3">
                <span className="text-burgundy font-bold flex-shrink-0">→</span>
                <span><span className="font-medium">Documented requirements:</span> What did we agree to build?</span>
              </li>
              <li className="body-small text-grey-secondary flex gap-3">
                <span className="text-burgundy font-bold flex-shrink-0">→</span>
                <span><span className="font-medium">Technical dependencies:</span> What must happen first?</span>
              </li>
              <li className="body-small text-grey-secondary flex gap-3">
                <span className="text-burgundy font-bold flex-shrink-0">→</span>
                <span><span className="font-medium">Ownership:</span> Who owns this decision?</span>
              </li>
              <li className="body-small text-grey-secondary flex gap-3">
                <span className="text-burgundy font-bold flex-shrink-0">→</span>
                <span><span className="font-medium">Constraints:</span> What are our deadlines and resources?</span>
              </li>
              <li className="body-small text-grey-secondary flex gap-3">
                <span className="text-burgundy font-bold flex-shrink-0">→</span>
                <span><span className="font-medium">Shared goal:</span> Are we all trying to ship a great product?</span>
              </li>
            </ul>
          </InsightCard>
        </div>
      </CaseStudySection>

      {/* Stakeholder Management & Pitching */}
      <CaseStudySection title="Stakeholder Management & Pitching" backgroundLight>
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-12">
            The bootcamp stakeholders acted as investors and decision-makers. I was responsible for keeping them informed, managing expectations, and ultimately pitching the product direction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <InsightCard label="Communication Approach">
              <p className="body-default text-grey-secondary mb-6">
                I communicated differently to different audiences. Each needed a different framing:
              </p>
              <ul className="space-y-4">
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Engineers:</span> Technical requirements, API specs, dependencies
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Designers:</span> User flows, personas, design principles
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Internal team:</span> Progress, blockers, next steps
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Stakeholder-investors:</span> Problem, opportunity, proof of concept
                </li>
              </ul>
            </InsightCard>

            <InsightCard label="Pitching the Product">
              <p className="body-default text-grey-secondary mb-6">
                I participated in the final pitch to stakeholders. The narrative had to work:
              </p>
              <ul className="space-y-4">
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Problem:</span> NGOs can&apos;t manage volunteer impact
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Opportunity:</span> Centralized, verified impact platform
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Product:</span> End-to-end lifecycle from discovery to certificate
                </li>
                <li className="body-small text-grey-secondary">
                  <span className="font-medium text-near-black">Proof:</span> Working prototype demonstrated all core capabilities
                </li>
              </ul>
            </InsightCard>
          </div>

          <VisualPlaceholder label="Pitch Deck or Presentation Artefact" />
        </div>
      </CaseStudySection>

      {/* Constraints */}
      <CaseStudySection title="Constraints & Reality">
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-12">
            This project was real, not theoretical. We operated under significant constraints that shaped every decision.
          </p>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                constraint: 'One-Month Deadline',
                impact: 'Ruthless scope discipline. MVP-only features. No nice-to-haves. Parallel workstreams were essential.',
              },
              {
                constraint: 'Uneven Resource Allocation',
                impact: 'Product had 2 people. Design and most engineering had 1 person each. Required careful dependency mapping.',
              },
              {
                constraint: 'Single Mobile Developer',
                impact: 'Mobile was our bottleneck. I protected this person&apos;s scope fiercely. Some features were web-only in MVP.',
              },
              {
                constraint: 'Limited User Testing',
                impact: 'We couldn&apos;t conduct extensive usability testing. Validation came from research, not live users.',
              },
              {
                constraint: 'No Production Launch',
                impact: 'This was a capstone, not a commercial product. The goal was proof of concept and product leadership demonstration.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-t border-grey-secondary/10 pt-6 md:pt-8 first:border-t-0 first:pt-0">
                <p className="heading-card mb-3 text-burgundy">{item.constraint}</p>
                <p className="body-default text-grey-secondary">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      {/* Outcome */}
      <CaseStudySection title="Outcome" backgroundLight>
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-12">
            ImpactHub was developed as a cross-track capstone and delivered within one month. While this was not a commercial launch, the project produced comprehensive work across product, design, and engineering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                category: 'Product Artefacts',
                items: [
                  'Research-backed product direction',
                  'Detailed user personas',
                  'End-to-end user journeys',
                  'User flow diagrams',
                  'Prioritized requirements',
                  'Detailed PRD documentation',
                ],
              },
              {
                category: 'Design & Implementation',
                items: [
                  'Figma design system',
                  'High-fidelity mockups',
                  'Web interface (Frontend)',
                  'Backend APIs & database',
                  'Mobile app (iOS/Android)',
                  'Working product demo',
                ],
              },
              {
                category: 'Delivery & Leadership',
                items: [
                  'Jira-managed delivery structure',
                  'Cross-functional coordination',
                  'Dependency tracking',
                  'Daily progress monitoring',
                  'Stakeholder presentations',
                  'Pitch deck & demo',
                ],
              },
              {
                category: 'Key Outcome',
                items: [
                  'Delivered on a one-month deadline',
                  'Six-person team coordinated end-to-end',
                  'Zero critical scope slippages',
                  'Working prototype demonstrated all MVP capabilities',
                  'Stakeholder buy-in on product direction',
                  'Proof of cross-functional leadership',
                ],
              },
            ].map((section) => (
              <div key={section.category}>
                <p className="eyebrow mb-4 md:mb-6 text-burgundy">{section.category}</p>
                <ul className="space-y-3 md:space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="body-small text-grey-secondary flex gap-2">
                      <span className="text-burgundy flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16">
            <VisualPlaceholder label="Product Demo Screenshot or Demo Video" />
          </div>
        </div>
      </CaseStudySection>

      {/* What I Learned */}
      <CaseStudySection title="What I Learned">
        <div className="container-wide">
          <div className="space-y-8 md:space-y-10">
            {[
              {
                lesson: 'Cross-Functional Leadership Requires Clarity',
                insight:
                  'With six people working toward a shared goal, ambiguity creates chaos. Clear requirements, clear ownership, clear deadlines—these are non-negotiable. Write it down. Make it visible. Update it when it changes.',
              },
              {
                lesson: 'Trust Can Be Designed Into Workflows',
                insight:
                  'ImpactHub&apos;s core insight—"Recognition follows verification"—wasn&apos;t just a product decision. It was a design principle. Trust cannot be assumed; it must be built into every interaction and every workflow.',
              },
              {
                lesson: 'Conflict Should Be Resolved Around Product Goals, Not Personalities',
                insight:
                  'When two people disagree, the easiest path is assigning blame. The harder, more professional path is asking: "What does the user need? What did we agree to build? How do we move forward?" Focus on the problem, not the person.',
              },
              {
                lesson: 'Dependencies Matter As Much As Individual Tasks',
                insight:
                  'A perfect Frontend without a Backend API is useless. I learned to map dependencies ruthlessly, identify critical paths, and protect teams from becoming blockers. Sequential work is slower but safer than parallel work with unmanaged dependencies.',
              },
              {
                lesson: 'Product Leadership Is Often About Influence, Not Authority',
                insight:
                  'I didn&apos;t have formal authority over Frontend, Backend, or Mobile developers. But I had clarity, I had requirements, and I had a deadline. Leadership meant being the person who kept everyone moving in the same direction.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-burgundy pl-6 md:pl-8">
                <p className="heading-card mb-3">{item.lesson}</p>
                <p className="body-default text-grey-secondary">{item.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      {/* Skills Demonstrated */}
      <CaseStudySection title="Skills Demonstrated" backgroundLight>
        <div className="container-wide">
          <p className="body-large text-grey-secondary mb-10 md:mb-12">
            This project was my operating system for product leadership. Here&apos;s what I demonstrated:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { skill: 'Cross-Functional Leadership', evidence: 'Led 6-person team across 5 disciplines for 1 month' },
              { skill: 'Product Discovery', evidence: 'User surveys, NGO interviews, competitor analysis, industry research' },
              { skill: 'Product Strategy', evidence: 'Defined volunteer lifecycle, MVP scope, core product decisions' },
              { skill: 'Stakeholder Management', evidence: 'Communicated with investors, managed expectations, pitched product' },
              { skill: 'Delivery Management', evidence: 'Set up Jira, tracked dependencies, monitored daily progress' },
              { skill: 'Conflict Resolution', evidence: 'Mediated 6 real team disagreements productively' },
              { skill: 'User Journey Design', evidence: 'Mapped 6-step volunteer lifecycle with product moments' },
              { skill: 'Requirements Management', evidence: 'Created PRD, wireframes, user flows, detailed spec' },
              { skill: 'Resource Management', evidence: 'Protected single Mobile developer, managed uneven team' },
              { skill: 'Communication', evidence: 'Different messaging for engineers, designers, stakeholders' },
              { skill: 'Facilitation', evidence: 'Organized and led all cross-functional meetings' },
              { skill: 'Problem Solving', evidence: 'Unblocked dependencies, solved scope conflicts' },
              { skill: 'Proactiveness', evidence: 'Anticipated bottlenecks, escalated early, prevented failures' },
              { skill: 'Collaboration', evidence: 'Worked closely with Design, Frontend, Backend, Mobile teams' },
              { skill: 'Presentation', evidence: 'Pitched to stakeholders, presented product direction' },
            ].map((item) => (
              <div key={item.skill} className="border border-grey-secondary/20 p-6 md:p-8 hover:border-burgundy/30 transition-all duration-300">
                <p className="heading-card mb-3 text-near-black">{item.skill}</p>
                <p className="body-small text-grey-secondary">{item.evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      {/* Next Project CTA */}
      <section className="section-spacing bg-ivory border-t border-grey-secondary/10">
        <div className="container-wide text-center md:text-left">
          <h2 className="heading-section mb-6 md:mb-8">
            Next: Bulk-Market
          </h2>
          <p className="body-large text-grey-secondary max-w-2xl mb-10 md:mb-12">
            Building trust into B2B marketplace transactions for African businesses.
          </p>
          <Link
            href="/case-studies/bulk-market"
            className="inline-flex items-center gap-2 button-primary"
          >
            <span>View Case Study</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="section-spacing bg-ivory border-t border-grey-secondary/10">
        <div className="container-wide text-center md:text-left">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 button-secondary"
          >
            <span>←</span>
            <span>Back to Selected Work</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
