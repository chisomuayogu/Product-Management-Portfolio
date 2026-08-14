import Link from 'next/link'

interface ProjectCard {
  id: string
  name: string
  category: string
  description: string
  capability: string
  href: string
}

const projects: ProjectCard[] = [
  {
    id: 'gradready',
    name: 'GradReady',
    category: 'AI-Powered EdTech · Individual Project',
    description: 'Helping bootcamp students graduate with proof of what they built.',
    capability: 'Independent Product Ownership',
    href: '/case-studies/gradready',
  },
  {
    id: 'impacthub',
    name: 'ImpactHub',
    category: 'CivicTech · Cross-Functional Capstone',
    description: 'Leading a multidisciplinary team to build a trusted volunteer-management and impact-verification platform.',
    capability: 'Cross-Functional Product Leadership',
    href: '/case-studies/impacthub',
  },
  {
    id: 'bulk-market',
    name: 'Bulk-Market',
    category: 'B2B Marketplace · Product Management Group Capstone',
    description: 'Designing trust into wholesale transactions between African businesses.',
    capability: 'Marketplace Strategy & Trust',
    href: '/case-studies/bulk-market',
  },
  {
    id: 'foodsaver',
    name: 'FoodSaver',
    category: 'FoodTech · Product Project',
    description: 'Turning surplus food into affordable meals instead of waste.',
    capability: 'Problem-to-Prototype Execution',
    href: '/case-studies/foodsaver',
  },
]

export default function SelectedWork() {
  return (
    <section id="work" className="section-spacing bg-white border-t border-grey-secondary/10">
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="heading-section mb-6">Selected Work</h2>
          <p className="body-secondary max-w-2xl">
            Four projects that showcase my approach to product strategy, cross-functional leadership, and execution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group block border border-grey-secondary/10 p-8 md:p-10 hover:border-burgundy/50 transition-all duration-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
            >
              <article>
                {/* Placeholder Image Area */}
                <div className="mb-8 md:mb-10 bg-grey-secondary/5 aspect-video rounded flex items-center justify-center group-hover:bg-grey-secondary/10 transition-colors duration-300">
                  <span className="text-grey-secondary text-sm">Project Image</span>
                </div>

                {/* Category */}
                <p className="body-small mb-3 md:mb-4 uppercase tracking-wide text-grey-secondary">
                  {project.category}
                </p>

                {/* Project Name */}
                <h3 className="heading-card mb-4 md:mb-6 group-hover:text-burgundy transition-colors duration-200">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="body-default mb-6 md:mb-8 text-grey-secondary">
                  {project.description}
                </p>

                {/* Capability Badge + Arrow */}
                <div className="flex items-center justify-between">
                  <div className="inline-block bg-burgundy/5 px-4 py-2 rounded text-sm text-burgundy font-medium">
                    {project.capability}
                  </div>
                  <span className="text-burgundy group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
