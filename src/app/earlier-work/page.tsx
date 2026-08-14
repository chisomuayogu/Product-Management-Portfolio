import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CaseStudySection from '@/components/CaseStudySection'

export const metadata = {
  title: 'Earlier Product Work | Chisom Ayogu — Product Manager',
  description:
    'Earlier product work includes LegalLaunch and HealthHub, showing product thinking across legal technology and remote-work wellness.',
}

const projects = [
  {
    name: 'LegalLaunch',
    category: 'LegalTech · Individual Capstone',
    description:
      'A product concept focused on helping recent law graduates gain practical experience, mentorship, and career opportunities through a clearer bridge between education and entry-level legal work.',
    id: 'legallaunch',
  },
  {
    name: 'HealthHub',
    category: 'Group Product Management Project',
    description:
      'A remote-work wellness product concept in which I contributed market research, competitor analysis, persona work, Miro user-flow thinking, Whimsical wireframes, and product requirements documentation.',
    id: 'healthhub',
  },
]

export default function EarlierWorkPage() {
  return (
    <div className="bg-ivory">
      <Navigation />

      <section className="section-spacing hero-atmosphere page-hero">
        <div className="container-wide">
          <p className="eyebrow mb-6 md:mb-8">Earlier Product Work</p>
          <h1 className="heading-hero mb-8 md:mb-10 max-w-4xl">
            Smaller products, sharper product thinking.
          </h1>
          <p className="body-large text-grey-secondary max-w-3xl">
            These earlier projects helped me build product sense across research, concept validation, user journeys, communication, and product documentation.
          </p>
        </div>
      </section>

      {projects.map((project) => (
        <CaseStudySection title={project.name} key={project.id} backgroundLight={project.id === 'healthhub'}>
          <div className="container-wide" id={project.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="premium-card p-6 md:p-8">
                <p className="eyebrow mb-4 text-burgundy">{project.category}</p>
                <p className="body-large text-grey-secondary">{project.description}</p>
              </div>

              <div className="premium-card p-6 md:p-8">
                <p className="eyebrow mb-4 text-burgundy">Role</p>
                <ul className="space-y-3 text-grey-secondary">
                  <li className="body-default">Problem framing</li>
                  <li className="body-default">Research and synthesis</li>
                  <li className="body-default">User journey thinking</li>
                  <li className="body-default">Product documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </CaseStudySection>
      ))}

      <Footer />
    </div>
  )
}
