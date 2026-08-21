import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/data/site'

export const metadata = createPageMetadata({
  title: 'Earlier Product Work | Chisom Ayogu — Product Manager',
  description: 'Earlier 2024 Product Management work across LegalTech career development and remote-work wellness.',
  path: '/earlier-work',
})

function BulletList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 body-default text-grey-secondary">
          <span className="text-burgundy" aria-hidden="true">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function DetailCard({ title, children, highlighted = false }: { title: string; children: React.ReactNode; highlighted?: boolean }) {
  return (
    <section className={`rounded-xl border p-6 shadow-sm md:p-8 ${highlighted ? 'border-burgundy/25 bg-blush/20' : 'border-burgundy/10 bg-white/70'}`}>
      <h3 className="mb-4 text-xl font-semibold text-near-black md:text-2xl">{title}</h3>
      {children}
    </section>
  )
}

function Artefact({ src, alt, width, height, caption, scrollable = false }: { src: string; alt: string; width: number; height: number; caption: string; scrollable?: boolean }) {
  return (
    <div
      className={scrollable ? 'overflow-x-auto pb-2 focus-visible:rounded-xl' : undefined}
      role={scrollable ? 'region' : undefined}
      aria-label={scrollable ? `${caption}. Scroll horizontally on smaller screens.` : undefined}
      tabIndex={scrollable ? 0 : undefined}
    >
      <figure className={`${scrollable ? 'min-w-[52rem] lg:min-w-0' : ''} overflow-hidden rounded-xl border border-burgundy/10 bg-white shadow-sm`}>
        <div className="bg-cream/30 p-2 sm:p-4">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1280px) 1152px, 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
        <figcaption className="border-t border-burgundy/10 px-5 py-4 body-small text-grey-secondary">
          {caption}
        </figcaption>
      </figure>
    </div>
  )
}

function ProjectNotesLink({ href, project }: { href: string; project: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View original ${project} project notes in a new tab`}
      className="button-secondary inline-flex items-center justify-center gap-2 text-center"
    >
      <span>View Original Project Notes</span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}

export default function EarlierWorkPage() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <header className="hero-atmosphere page-hero border-b warm-divider py-16 md:py-20 lg:py-24">
        <div className="container-wide">
          <p className="eyebrow mb-5 text-burgundy">Earlier Product Work · 2024</p>
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-near-black md:text-5xl lg:text-6xl">
            Product foundations in LegalTech and workplace wellness.
          </h1>
          <p className="body-large max-w-3xl text-grey-secondary">
            Earlier 2024 product work that built the foundations demonstrated in my flagship projects.
          </p>
        </div>
      </header>

      <main>
        <article id="legallaunch" className="scroll-mt-32 border-b warm-divider py-16 md:py-24">
          <div className="container-wide space-y-12 md:space-y-16">
            <header className="max-w-4xl">
              <p className="eyebrow mb-4 text-burgundy">LegalTech · Career Development · Individual Project</p>
              <h2 className="heading-section mb-5">LegalLaunch</h2>
              <p className="body-large text-grey-secondary">
                Help recent law graduates and early-career legal professionals bridge the gap between legal education and practical experience through structured career-development opportunities.
              </p>
              <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[['Role', 'Product Manager'], ['Year', '2024'], ['Project Type', 'Individual concept']].map(([term, detail]) => (
                  <div key={term} className="rounded-lg border border-burgundy/10 bg-white/65 p-5">
                    <dt className="eyebrow mb-2 text-burgundy">{term}</dt>
                    <dd className="font-semibold text-near-black">{detail}</dd>
                  </div>
                ))}
              </dl>
            </header>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <DetailCard title="Problem">
                <p className="body-default text-grey-secondary">
                  Recent law graduates can struggle to gain practical experience and secure entry-level legal opportunities because many roles require experience they have not yet had an opportunity to build.
                </p>
                <p className="mt-4 body-default text-grey-secondary">
                  LegalLaunch explores how one career-development platform could combine practical learning, mentorship, job discovery, and skill development.
                </p>
              </DetailCard>
              <DetailCard title="Product Direction" highlighted>
                <BulletList columns={2} items={['Virtual internships', 'Mentorship', 'Job matching', 'Skill-development courses', 'Legal case challenges', 'Community and professional support']} />
              </DetailCard>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <DetailCard title="Research & Competitive Analysis">
                <p className="body-default text-grey-secondary">
                  The discovery work included interviews with recent law graduates, competitor analysis, and persona development. It surfaced an experience gap, limited access to practical opportunities, and demand for internships, mentorship, career guidance, and professional networks.
                </p>
                <p className="mt-4 body-default text-grey-secondary">
                  LawPavilion and The Mentor Lawyer were reviewed as adjacent products with different emphases across legal research, mentorship, and career support. The comparison helped clarify the proposed all-in-one career-development direction without assuming competitive superiority.
                </p>
              </DetailCard>
              <DetailCard title="Persona · Tonye">
                <p className="mb-4 body-default font-semibold text-near-black">Recent Law Graduate · Lagos, Nigeria</p>
                <BulletList items={['Wants practical legal experience', 'Seeks an entry-level legal role', 'Wants to build a professional network', 'Needs mentorship and career-development support']} />
              </DetailCard>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <DetailCard title="Prioritised Features">
                <BulletList items={['Virtual Internships', 'Mentorship Opportunities', 'Job Matching', 'Skill Development Courses', 'Case Study Challenges']} />
              </DetailCard>
              <DetailCard title="Product Thinking / User Stories">
                <p className="body-default text-grey-secondary">
                  User stories translated the concept into user-centred requirements across virtual internships, mentorship, relevant job matching, legal skill development, and practical case challenges. They established the intended user value without presenting planned capabilities as released features.
                </p>
              </DetailCard>
            </div>

            <section aria-labelledby="legallaunch-flow-heading" className="space-y-5">
              <div className="max-w-3xl">
                <h3 id="legallaunch-flow-heading" className="heading-card mb-3">User Flow</h3>
                <p className="body-default text-grey-secondary">
                  The approved flow follows access, practice-area interests, category discovery, filtering, program details, evaluation, saving or enrolment, and support.
                </p>
                <p className="mt-2 body-small text-grey-secondary lg:hidden">Scroll horizontally to inspect the complete flow.</p>
              </div>
              <Artefact
                src="/projects/earlier-work/legal-launch/PROJECT LEGAL LAUNCH USER FLOW.png"
                alt="LegalLaunch user flow from login and practice-area interests through category browsing, filtering, program details, saving or enrolment, and support"
                width={1349}
                height={545}
                caption="LegalLaunch end-to-end program-discovery and enrolment flow"
                scrollable
              />
            </section>

            <section aria-labelledby="legallaunch-wireframe-heading" className="space-y-5">
              <div className="max-w-3xl">
                <h3 id="legallaunch-wireframe-heading" className="heading-card mb-3">Interaction Definition</h3>
                <p className="body-default text-grey-secondary">
                  The Whimsical wireframe established representative account-access, onboarding, practice-interest, sign-in, and category-selection states.
                </p>
              </div>
              <Artefact
                src="/projects/earlier-work/legal-launch/WIREFRAME FOR LEGALLAUNCH (2).png"
                alt="LegalLaunch Whimsical wireframes showing account access, sign up, onboarding, practice-area interests, sign in, and program categories"
                width={2321}
                height={2186}
                caption="LegalLaunch Whimsical wireframe · Early interaction definition, not production UI"
              />
            </section>

            <DetailCard title="Metrics I Would Measure" highlighted>
              <p className="mb-5 body-small font-medium uppercase tracking-wide text-burgundy">Future validation areas · Not achieved results</p>
              <BulletList columns={2} items={['Internship adoption and completion', 'Mentor matching and mentorship engagement', 'Relevant job matching', 'Platform engagement', 'Retention', 'Subscription and revenue performance for the proposed model']} />
            </DetailCard>

            <ProjectNotesLink href="https://dawn-ghost-68b.notion.site/LEGAL-LAUNCH-4109ed7ed86d4ab4b1afea647b0214f6" project="LegalLaunch" />
          </div>
        </article>

        <article id="healthhub" className="scroll-mt-32 section-warm py-16 md:py-24">
          <div className="container-wide space-y-12 md:space-y-16">
            <header className="max-w-4xl">
              <p className="eyebrow mb-4 text-burgundy">HealthTech / Wellness · Future of Work · Group Project</p>
              <h2 className="heading-section mb-5">HealthHub</h2>
              <p className="body-large text-grey-secondary">
                Support remote workers in maintaining physical wellbeing, mental wellbeing, productivity, and healthier work-life routines through a personalised wellness platform.
              </p>
              <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[['Role', 'Product Manager / Product Contributor'], ['Year', '2024'], ['Project Type', 'Group project']].map(([term, detail]) => (
                  <div key={term} className="rounded-lg border border-burgundy/10 bg-white/65 p-5">
                    <dt className="eyebrow mb-2 text-burgundy">{term}</dt>
                    <dd className="font-semibold text-near-black">{detail}</dd>
                  </div>
                ))}
              </dl>
            </header>

            <DetailCard title="My Contribution" highlighted>
              <p className="mb-5 body-default text-near-black">
                HealthHub was collaborative team work. My confirmed contribution covered the areas below; it does not represent independent ownership of every team artefact.
              </p>
              <BulletList columns={2} items={['Market research', 'Competitor analysis', 'Persona development', 'Miro user-flow mapping', 'Whimsical wireframe work', 'PRD and feature-definition contributions']} />
            </DetailCard>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <DetailCard title="Problem">
                <p className="body-default text-grey-secondary">
                  Remote workers can struggle to maintain physical and mental wellbeing while balancing professional and personal life, particularly when work boundaries become difficult to maintain.
                </p>
                <p className="mt-4 body-default text-grey-secondary">
                  HealthHub explores a personalised experience combining physical-wellness support, mental-health resources, wellness tracking, productivity support, and community features.
                </p>
              </DetailCard>
              <DetailCard title="Market / Competitor Research">
                <p className="body-default text-grey-secondary">
                  I contributed to market and competitor research comparing the concept with MyFitnessPal and Noom. The work explored a broader remote-worker wellbeing proposition rather than a product centred only on diet, fitness, or weight-management use cases.
                </p>
              </DetailCard>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <DetailCard title="Persona · Uche">
                <p className="mb-4 body-default font-semibold text-near-black">Age 28 · Project Manager · Lagos, Nigeria</p>
                <BulletList items={['Wants better work-life balance', 'Wants improved physical and mental wellbeing', 'Struggles to maintain consistent physical activity', 'Is interested in wellness tools and mental-health resources']} />
              </DetailCard>
              <DetailCard title="Prioritised Features">
                <BulletList items={['Personalised Wellness Dashboard', 'Mental Health Resources', 'Fitness Programs & Challenges', 'Work-Life Balance Tracker', 'Community Support & Social Features', 'Productivity-tool Integrations']} />
              </DetailCard>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <DetailCard title="Product Thinking / User Stories">
                <p className="body-default text-grey-secondary">
                  Product requirements considered activity tracking, personalised wellness content, wellness habits and progress, virtual wellness activities, community engagement, and virtual consultations. These requirements describe the team&apos;s proposed experience, not released functionality.
                </p>
              </DetailCard>
              <DetailCard title="Feature Definition · Activity Tracking">
                <p className="body-default text-grey-secondary">
                  The planned feature scope considered wearable-device integration, steps, workout and sleep tracking, manual activity entry, and daily, weekly, and monthly insights. The source used release-note-style documentation, but no production release is claimed here.
                </p>
              </DetailCard>
            </div>

            <section aria-labelledby="healthhub-flow-heading" className="space-y-5">
              <div className="max-w-3xl">
                <h3 id="healthhub-flow-heading" className="heading-card mb-3">User Flow</h3>
                <p className="body-default text-grey-secondary">
                  The approved flow covers app access, interest selection, filtering, program details, evaluation, favourites or enrolment, and support.
                </p>
                <p className="mt-2 body-small text-grey-secondary lg:hidden">Scroll horizontally to inspect the complete flow.</p>
              </div>
              <Artefact
                src="/projects/earlier-work/healthhub/PROJECT HEALTH HUB USER FLOW.png"
                alt="HealthHub user flow from app access and wellness-interest selection through filtering, program details, favourites or enrolment, and support"
                width={1533}
                height={497}
                caption="HealthHub user-flow mapping contributed in Miro as part of the group project"
                scrollable
              />
            </section>

            <section aria-labelledby="healthhub-wireframe-heading" className="space-y-5">
              <div className="max-w-3xl">
                <h3 id="healthhub-wireframe-heading" className="heading-card mb-3">Interaction Definition</h3>
                <p className="body-default text-grey-secondary">
                  The two-screen Whimsical wireframe explored dashboard content, wellness indicators, progress, and community entry points.
                </p>
              </div>
              <Artefact
                src="/projects/earlier-work/healthhub/PROJECT HEALTH HUB WIREFRAMES.png"
                alt="Two HealthHub Whimsical dashboard wireframes showing wellness content, heart rate, sleep, walking, calorie tracking, and community entry points"
                width={1010}
                height={1009}
                caption="Dashboard interaction and wireframe work contributed as part of the HealthHub group project · Not production UI"
              />
            </section>

            <DetailCard title="Metrics I Would Measure" highlighted>
              <p className="mb-5 body-small font-medium uppercase tracking-wide text-burgundy">Future validation areas · Not achieved results</p>
              <BulletList columns={2} items={['Wellness-content engagement', 'Active usage', 'Community participation', 'Wellness-program participation', 'Session duration', 'Retention', 'Subscription or membership performance for the proposed model']} />
            </DetailCard>

            <ProjectNotesLink href="https://dawn-ghost-68b.notion.site/Health-Hub-e527ca18c7fc46bd8d7d7555b9751377" project="HealthHub" />
          </div>
        </article>

        <section className="border-t warm-divider py-12 md:py-16">
          <div className="container-wide flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow mb-2 text-burgundy">Flagship Case Studies</p>
              <p className="body-default text-grey-secondary">Continue to the more mature product work these foundations supported.</p>
            </div>
            <Link href="/#work" className="button-primary inline-flex items-center justify-center gap-2 text-center">
              <span>View Selected Work</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
