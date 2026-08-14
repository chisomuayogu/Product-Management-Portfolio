import Link from 'next/link'

interface EarlierProject {
  name: string
  category: string
  summary: string
  href: string
}

const earlierProjects: EarlierProject[] = [
  {
    name: 'LegalLaunch',
    category: 'LegalTech · Individual Capstone',
    summary: 'A career access platform helping recent law graduates gain practical experience and mentor-backed opportunities.',
    href: '/earlier-work#legallaunch',
  },
  {
    name: 'HealthHub',
    category: 'Remote Wellness · Group PM Project',
    summary: 'A wellness product concept focused on supporting remote workers through research, persona work, flows, and product documentation.',
    href: '/earlier-work#healthhub',
  },
]

export default function EarlierWork() {
  return (
    <section className="section-spacing section-surface border-t warm-divider">
      <div className="container-wide">
        <div className="mb-12 md:mb-16">
          <p className="eyebrow mb-6">Earlier Product Work</p>
          <h2 className="heading-section mb-6">Additional product thinking</h2>
          <p className="body-secondary max-w-2xl">
            Smaller but important product explorations that shaped how I approach discovery, problem framing, and user-centred product design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {earlierProjects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="group premium-card block p-6 md:p-8"
            >
              <p className="body-small text-grey-secondary mb-3 md:mb-4 uppercase tracking-wide">{project.category}</p>
              <h3 className="heading-card mb-4 md:mb-5 group-hover:text-burgundy transition-colors duration-200">{project.name}</h3>
              <p className="body-default text-grey-secondary">{project.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
