import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProjectSnapshot from '@/components/ProjectSnapshot'
import CaseStudySection from '@/components/CaseStudySection'
import InsightCard from '@/components/InsightCard'
import VisualPlaceholder from '@/components/VisualPlaceholder'

export const metadata = {
  title: 'ImpactHub Case Study | Chisom Ayogu',
  description: 'Cross-functional product leadership for a CivicTech volunteer-management and impact-verification platform.',
}

const capabilityTags = ['Product Discovery', 'Cross-Functional Leadership', 'Jira', 'Stakeholder Management', 'User Journeys', 'Conflict Resolution']

const ngoCapabilities = [
  'Register and verify their organisation', 'Publish volunteer opportunities', 'Review applications', 'Approve volunteers',
  'Verify contributions', 'Record service hours', 'Issue digital certificates', 'View basic reports',
]

const volunteerCapabilities = [
  'Register', 'Create profiles', 'Discover opportunities', 'Apply', 'Participate', 'Submit evidence',
  'Receive verified service records', 'Receive certificates', 'Build a Verified Impact Profile',
]

const researchInsights = [
  'NGOs relied heavily on disconnected manual tools', 'Volunteers valued verified contribution history',
  'Digital certificates were important', 'Centralised volunteer management could reduce administrative friction',
  'Impact verification was more valuable than simply creating another volunteer listing platform',
]

const leadershipResponsibilities = [
  'Organising meetings', 'Facilitating meetings', 'Coordinating all tracks', 'Spearheading research',
  'Designing user journeys', 'Designing user flows', 'Collaborating with Product Designers',
  'Following up with Frontend Developers', 'Following up with Backend Developers',
  'Coordinating Mobile Development', 'Coordinating Technical Writers', 'Setting up Jira',
  'Managing the Jira board', 'Assigning tasks', 'Tracking progress', 'Monitoring dependencies',
  'Managing deliverables across tracks', 'Communicating product decisions', 'Resolving conflicts',
  'Communicating with bootcamp stakeholders who acted as investors', 'Participating in the final pitch',
]

const conflictExamples = [
  { title: 'Frontend vs Backend', copy: 'There was disagreement over a non-working API endpoint. I facilitated discussion, clarified the dependency, and kept the conversation focused on resolution rather than blame.' },
  { title: 'Product vs Design', copy: 'Product Management created low-fidelity wireframes, user flows, and user journeys to guide design. Important platform-administration requirements were overlooked during design, creating downstream problems across Product, Design, Frontend, and Mobile. I coordinated clarification and re-alignment.' },
  { title: 'Design vs Frontend', copy: 'There were discrepancies between approved Figma designs and implementation. I helped bring the discussion back to documented requirements and intended user experience.' },
  { title: 'Demo / Prototype Gaps', copy: 'During review, missing interface elements were discovered. This required further coordination across Design, Backend, Frontend, and Mobile.' },
  { title: 'Mobile Resource Constraint', copy: 'Only one Mobile Developer was available under the one-month deadline. I had to prioritise critical flows and manage dependencies carefully.' },
  { title: 'Product Management vs Technical Writing', copy: 'There were disagreements around PRD scope and documentation expectations. These were resolved through discussion and alignment.' },
]

const lessons = [
  'Cross-functional leadership requires clarity', 'Dependencies matter as much as individual tasks',
  'Conflict should be resolved around product goals, not personalities',
  'Product leadership often depends on influence rather than authority',
  'Strong communication changes depending on the audience',
  'Delivery requires constant alignment, not one-time handoff',
]

const skills = [
  'Cross-Functional Leadership', 'Product Discovery', 'Product Strategy', 'Jira Management', 'Stakeholder Management',
  'Conflict Resolution', 'User Journey Design', 'Requirements Management', 'Resource Management', 'Facilitation',
  'Presentation', 'Problem Solving', 'Collaboration', 'Proactiveness',
]

function BulletList({ items }: { items: string[] }) {
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="body-default text-grey-secondary flex gap-3"><span className="text-burgundy" aria-hidden="true">•</span><span>{item}</span></li>)}</ul>
}

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-3" aria-label={steps.join(' then ')}>
      {steps.map((step, index) => <div key={step} className="flex items-center gap-3"><span className="glass-panel rounded-full px-4 py-2 text-sm font-medium text-near-black">{step}</span>{index < steps.length - 1 && <span className="text-burgundy" aria-hidden="true">→</span>}</div>)}
    </div>
  )
}

export default function ImpactHubCaseStudy() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <section className="section-spacing hero-atmosphere case-hero border-b warm-divider">
        <div className="container-wide">
          <Link href="/#work" className="inline-flex items-center gap-2 body-small text-grey-secondary hover:text-burgundy transition-colors duration-200 mb-8 md:mb-12"><span aria-hidden="true">←</span><span>Back to Work</span></Link>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-end">
            <div>
              <p className="eyebrow mb-6 text-burgundy">ImpactHub · Case Study</p>
              <h1 className="heading-hero mb-6">ImpactHub</h1>
              <p className="text-2xl md:text-3xl font-bold leading-tight text-near-black mb-6">Leading a cross-functional team to design and deliver a trusted volunteer-management and impact-verification platform.</p>
              <p className="body-large text-grey-secondary mb-8">ImpactHub was designed to help NGOs recruit, manage, verify, and report volunteer contributions while enabling volunteers to build a trusted record of their service.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {[
                  ['Role', 'Cross-Functional Team Lead / Product Manager'], ['Project Type', 'Cross-Track Capstone'],
                  ['Timeline', '1 Month'], ['Industry', 'CivicTech / Volunteer Management'],
                ].map(([label, value]) => <div key={label} className="glass-panel rounded-lg p-4"><p className="eyebrow mb-2">{label}</p><p className="text-sm md:text-base font-medium text-near-black">{value}</p></div>)}
              </div>
              <div className="flex flex-wrap gap-2">{capabilityTags.map((tag) => <span key={tag} className="rounded-full border border-burgundy/15 bg-ivory/70 px-3 py-2 text-xs font-medium text-burgundy">{tag}</span>)}</div>
            </div>
            <VisualPlaceholder label="ImpactHub Main Product Image" />
          </div>
        </div>
      </section>

      <ProjectSnapshot items={[
        { label: 'My Role', value: 'Cross-Functional Team Lead / Product Manager' },
        { label: 'Project Type', value: 'Cross-Track Capstone' }, { label: 'Timeline', value: '1 Month' },
        { label: 'Portfolio Signal', value: 'Cross-Functional Product Leadership' },
      ]} />

      <CaseStudySection title="Project Overview" backgroundLight>
        <div className="container-wide space-y-10">
          <p className="body-large text-grey-secondary max-w-3xl">ImpactHub is a civic-tech platform designed to support the complete volunteer lifecycle.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="For NGOs"><BulletList items={ngoCapabilities} /></InsightCard><InsightCard label="For Volunteers"><BulletList items={volunteerCapabilities} /></InsightCard></div>
          <div className="glass-panel rounded-xl p-6 md:p-8"><p className="eyebrow mb-5">Product Lifecycle</p><Flow steps={['NGO creates opportunity', 'Volunteer applies', 'NGO approves', 'Volunteer participates', 'Contribution is verified', 'Certificate is generated', 'Verified Impact Profile is updated']} /></div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="The Problem">
        <div className="container-wide space-y-8">
          <p className="body-large text-grey-secondary max-w-3xl">Many NGOs, especially smaller organisations, manage volunteers through fragmented tools such as:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InsightCard label="Fragmented NGO Tools"><BulletList items={['WhatsApp', 'Spreadsheets', 'Google Forms', 'Email', 'Paper records']} /></InsightCard>
            <InsightCard label="Resulting Friction"><BulletList items={['Fragmented volunteer information', 'Inefficient communication', 'Manual attendance tracking', 'Difficult contribution verification', 'Delayed reporting', 'Weak visibility into programme impact']} /></InsightCard>
          </div>
          <InsightCard label="Highlighted Problem" highlighted><p className="text-2xl md:text-3xl font-bold leading-snug text-near-black">“NGOs struggled to manage and prove impact, while volunteers struggled to maintain trusted evidence of the impact they created.”</p></InsightCard>
          <InsightCard label="Volunteer Challenges"><BulletList items={['Discover opportunities', 'Maintain service records', 'Receive certificates', 'Prove their contribution', 'Communicate volunteer experience to employers, schools, and programmes']} /></InsightCard>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Research & Discovery" backgroundLight>
        <div className="container-wide space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="I Spearheaded"><BulletList items={['Market analysis', 'User research', 'Competitor analysis', 'Broader product research']} /></InsightCard><InsightCard label="Team Research"><BulletList items={['Volunteer surveys', 'NGO surveys', 'Competitor analysis', 'Industry research']} /></InsightCard></div>
          <InsightCard label="Key Insights"><BulletList items={researchInsights} /></InsightCard>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"><VisualPlaceholder label="Survey Findings" /><VisualPlaceholder label="Competitor Analysis" /><VisualPlaceholder label="Research Notes" /></div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Key Product Insight"><div className="container-wide"><InsightCard highlighted><p className="text-3xl md:text-4xl font-bold leading-tight text-near-black">“Volunteer participation alone was not enough. The product needed to turn participation into verified evidence of impact.”</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="My Role & Leadership" backgroundLight>
        <div className="container-wide space-y-8">
          <p className="body-large text-near-black font-medium">I served as the overall Team Lead for the entire cross-functional capstone.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><InsightCard label="Leadership Responsibilities"><BulletList items={leadershipResponsibilities} /></InsightCard><div className="space-y-6"><InsightCard label="Cross-Functional Team Structure" highlighted><Flow steps={['Team Lead / Product Manager', 'Product', 'Design', 'Frontend', 'Backend', 'Mobile', 'Technical Writing']} /></InsightCard><VisualPlaceholder label="Cross-Functional Team Structure" /></div></div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Product Strategy">
        <div className="container-wide space-y-8">
          <InsightCard label="Vision" highlighted><p className="heading-card">Create a trusted civic-tech platform for managing volunteers, verifying contributions, and measuring community impact.</p></InsightCard>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><InsightCard label="Value for NGOs"><BulletList items={['Centralise volunteer records', 'Recruit volunteers', 'Verify contributions', 'Improve reporting', 'Reduce administrative work', 'Demonstrate programme impact']} /></InsightCard><InsightCard label="Value for Volunteers"><BulletList items={['Discover opportunities', 'Build verified service history', 'Receive certificates', 'Maintain portable contribution evidence']} /></InsightCard></div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="MVP" backgroundLight>
        <div className="container-wide grid grid-cols-1 md:grid-cols-3 gap-6"><InsightCard label="NGO MVP"><BulletList items={['Registration', 'Organisation verification', 'Opportunity creation', 'Application review', 'Volunteer approval', 'Contribution verification', 'Service-hour recording', 'Digital certificates', 'Basic reporting']} /></InsightCard><InsightCard label="Volunteer MVP"><BulletList items={['Registration', 'Profile', 'Opportunity discovery', 'Applications', 'Participation', 'Evidence submission', 'Verification', 'Certificates', 'Verified Impact Profile']} /></InsightCard><InsightCard label="Deferred"><BulletList items={['AI recommendations', 'Employer portal', 'Donations', 'Leaderboards', 'Social networking', 'Advanced analytics', 'Third-party integrations']} /></InsightCard></div>
      </CaseStudySection>

      <CaseStudySection title="User Journeys">
        <div className="container-wide space-y-8"><InsightCard label="NGO Journey"><Flow steps={['Register', 'Organisation Profile', 'Verification', 'Create Opportunity', 'Publish', 'Review Applications', 'Approve', 'Verify Contributions', 'Generate Certificates', 'View Reports']} /></InsightCard><InsightCard label="Volunteer Journey"><Flow steps={['Register', 'Complete Profile', 'Browse Opportunities', 'Apply', 'Track Application', 'Participate', 'Submit Evidence', 'Receive Verification', 'Receive Certificate', 'View Impact Profile']} /></InsightCard><VisualPlaceholder label="ImpactHub User Flows" /></div>
      </CaseStudySection>

      <CaseStudySection title="Verification Before Recognition" backgroundLight>
        <div className="container-wide space-y-8"><p className="body-large text-grey-secondary max-w-3xl">A volunteer should not receive a certificate or verified impact record simply because they claim to have completed an activity. The NGO first verifies the contribution.</p><InsightCard highlighted><p className="text-3xl md:text-4xl font-bold text-near-black">“Recognition follows verification.”</p></InsightCard><Flow steps={['Service hours are recorded', 'Certificate ID is generated', 'Digital certificate is created', 'Verified Impact Profile is updated', 'Volunteer is notified']} /></div>
      </CaseStudySection>

      <CaseStudySection title="North Star Metric">
        <div className="container-wide"><InsightCard label="North Star Metric" highlighted><p className="text-3xl md:text-4xl font-bold text-near-black mb-5">Verified Volunteer Contributions</p><p className="body-large text-grey-secondary mb-6">The total number of volunteer activities successfully completed and verified by NGOs.</p><p className="body-default text-near-black font-medium mb-4">Registrations alone do not prove value. A verified contribution means:</p><BulletList items={['A real opportunity existed', 'A volunteer participated', 'The activity was completed', 'The NGO confirmed the contribution']} /></InsightCard></div>
      </CaseStudySection>

      <CaseStudySection title="Jira & Delivery Management" backgroundLight>
        <div className="container-wide space-y-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"><InsightCard label="Delivery Leadership"><BulletList items={['Set up the Jira board', 'Created delivery structure', 'Assigned work', 'Monitored status', 'Followed up on incomplete work', 'Tracked dependencies', 'Coordinated cross-track deliverables']} /></InsightCard><VisualPlaceholder label="Jira Board Screenshot" /></div><InsightCard label="Delivery Flow"><Flow steps={['Discovery', 'Design', 'Development', 'Testing', 'Demo / Pitch']} /></InsightCard></div>
      </CaseStudySection>

      <CaseStudySection title="Conflict Management"><div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6">{conflictExamples.map((example) => <InsightCard key={example.title} label={example.title}><p className="body-default text-grey-secondary">{example.copy}</p></InsightCard>)}</div></CaseStudySection>

      <CaseStudySection title="Conflict Management Principle" backgroundLight><div className="container-wide"><InsightCard highlighted><p className="text-2xl md:text-3xl font-bold leading-snug text-near-black">“My approach was to bring cross-functional disagreements back to the user need, product requirement, ownership, dependency, delivery constraint, and shared product goal.”</p></InsightCard></div></CaseStudySection>

      <CaseStudySection title="Stakeholder Management & Pitch">
        <div className="container-wide space-y-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"><InsightCard label="Stakeholder Leadership"><p className="body-default text-grey-secondary mb-5">The bootcamp stakeholders acted as investors.</p><BulletList items={['Communicated with stakeholders', 'Represented the product', 'Contributed to the final pitch', 'Communicated the problem', 'Explained the value proposition', 'Supported the product story', 'Explained product direction']} /></InsightCard><VisualPlaceholder label="Pitch Artefacts" /></div><InsightCard label="Communication Lesson" highlighted><p className="heading-card mb-5">Different audiences need different product communication.</p><BulletList items={['Engineers need implementation clarity', 'Designers need experience context', 'Stakeholders need problem, value, viability, and direction']} /></InsightCard></div>
      </CaseStudySection>

      <CaseStudySection title="Constraints" backgroundLight><div className="container-wide grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{['One-month delivery deadline', 'Uneven team resources', 'Only one Mobile Developer', 'Cross-functional dependencies', 'MVP scope limitations', 'Limited access to real users for usability testing'].map((constraint) => <div key={constraint} className="premium-card p-6"><p className="heading-card">{constraint}</p></div>)}</div></CaseStudySection>

      <CaseStudySection title="Outcome">
        <div className="container-wide space-y-8"><InsightCard label="Capstone Outcome" highlighted><p className="body-large text-near-black mb-6">ImpactHub was developed and presented as a cross-track capstone.</p><BulletList items={['Research-backed product direction', 'Personas', 'Target users', 'MVP definition', 'Product strategy', 'User journeys', 'User flows', 'Prioritisation', 'Requirements', 'Product documentation', 'Figma designs', 'Jira-managed delivery', 'Cross-functional implementation work', 'Product demonstration', 'Stakeholder pitch']} /></InsightCard><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><VisualPlaceholder label="Figma Designs" /><VisualPlaceholder label="Product Screens" /><VisualPlaceholder label="Product Demo" /></div></div>
      </CaseStudySection>

      <CaseStudySection title="What I Learned" backgroundLight><div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6">{lessons.map((lesson, index) => <div key={lesson} className="premium-card p-6 flex gap-4"><span className="w-9 h-9 flex-shrink-0 rounded-full bg-burgundy text-ivory flex items-center justify-center font-semibold">{index + 1}</span><p className="heading-card">{lesson}</p></div>)}</div></CaseStudySection>

      <CaseStudySection title="Skills Demonstrated"><div className="container-wide flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="glass-panel rounded-full px-4 py-2 text-sm font-medium text-burgundy">{skill}</span>)}</div></CaseStudySection>

      <section className="section-spacing section-warm border-t warm-divider"><div className="container-wide flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"><Link href="/#work" className="inline-flex items-center justify-center gap-2 button-secondary"><span aria-hidden="true">←</span><span>Back to Work</span></Link><Link href="/case-studies/bulk-market" className="inline-flex items-center justify-center gap-2 button-primary"><span>Next Project: Bulk-Market</span><span aria-hidden="true">→</span></Link></div></section>

      <Footer />
    </div>
  )
}
