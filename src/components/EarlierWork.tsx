import Link from 'next/link'

interface EarlierProject {
  name: string
  category: string
  year: string
  summary: string
  href: string
}

const earlierProjects: EarlierProject[] = [
  {
    name: 'LegalLaunch',
    category: 'LegalTech · Career Development · Individual Project',
    year: '2024',
    summary: 'Helping recent law graduates and early-career legal professionals bridge the gap between legal education and practical experience.',
    href: '/earlier-work#legallaunch',
  },
  {
    name: 'HealthHub',
    category: 'Wellness · Future of Work · Group Project',
    year: '2024',
    summary: 'Supporting remote workers with personalised tools for physical wellbeing, mental wellbeing, productivity, and healthier routines.',
    href: '/earlier-work#healthhub',
  },
]

export default function EarlierWork() {
  return (
    <section className="section-spacing section-surface border-t warm-divider">
      <div className="container-wide">
        <div className="mb-12 md:mb-16">
          <p className="eyebrow mb-6">Earlier Product Work</p>
          <h2 className="heading-section mb-6">Foundations behind the flagship work</h2>
          <p className="body-secondary max-w-2xl">
            Earlier 2024 product work that built the foundations demonstrated in my flagship projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {earlierProjects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="group premium-card block p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy md:p-8"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2 body-small uppercase tracking-wide text-grey-secondary md:mb-4">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>
              <h3 className="heading-card mb-4 md:mb-5 group-hover:text-burgundy transition-colors duration-200">{project.name}</h3>
              <p className="body-default mb-6 text-grey-secondary">{project.summary}</p>
              <span className="inline-flex items-center gap-2 font-medium text-burgundy">
                <span>View Project</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
