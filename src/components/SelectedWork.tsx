import Link from 'next/link'
import Image from 'next/image'

interface ProjectCard {
  id: string
  name: string
  category: string
  description: string
  capability: string
  href: string
  cardImage?: string
  cardImageAlt?: string
}

const projects: ProjectCard[] = [
  {
    id: 'gradready',
    name: 'GradReady',
    category: 'AI-Powered EdTech · Individual Project',
    description: 'Helping bootcamp students graduate with proof of what they built.',
    capability: 'Independent Product Ownership',
    href: '/case-studies/gradready',
    cardImage: '/projects/gradready/gradready-project-card.png',
  },
  {
    id: 'impacthub',
    name: 'ImpactHub',
    category: 'CivicTech · Cross-Functional Capstone',
    description: 'Leading a multidisciplinary team to build a trusted volunteer-management and impact-verification platform.',
    capability: 'Cross-Functional Product Leadership',
    href: '/case-studies/impacthub',
    cardImage: '/projects/impacthub/impacthub-project-card.png',
    cardImageAlt: 'ImpactHub product experience connecting volunteers and NGOs through opportunity management, contribution tracking, and verified recognition',
  },
  {
    id: 'bulk-market',
    name: 'Bulk-Market',
    category: 'B2B Marketplace · Product Management Group Capstone',
    description: 'Designing trust into wholesale transactions between African businesses.',
    capability: 'Marketplace Strategy & Trust',
    href: '/case-studies/bulk-market',
    cardImage: '/projects/bulk-market/BULK MARKET PROJECT CARD IMAGE.png',
    cardImageAlt: 'Bulk-Market wholesale marketplace experience showing buyer discovery, trusted suppliers, payment protection, order tracking, and seller tools',
  },
  {
    id: 'foodsaver',
    name: 'FoodSaver',
    category: 'FoodTech · Product Project',
    description: 'Turning surplus food into affordable meals instead of waste.',
    capability: 'Problem-to-Prototype Execution',
    href: '/case-studies/foodsaver',
    cardImage: '/projects/foodsaver/FOODSAVER PROJECT CARD IMAGE.png',
    cardImageAlt: 'FoodSaver marketplace experience showing nearby food discovery, food details, checkout, and the product sustainability proposition',
  },
]

export default function SelectedWork() {
  return (
    <section id="work" className="section-spacing section-surface border-t warm-divider">
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
              className="group premium-card block p-8 md:p-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
            >
              <article>
                <div className={`project-visual relative bg-cream/45 border border-burgundy/10 aspect-video rounded overflow-hidden flex items-center justify-center group-hover:bg-blush/30 transition-colors duration-300 ${project.id === 'impacthub' ? 'mb-3' : 'mb-8 md:mb-10'}`}>
                  {project.cardImage ? (
                    <Image
                      src={project.cardImage}
                      alt={project.cardImageAlt ?? `${project.name} product experience showing weekly documentation, AI-assisted portfolio generation, and the final student portfolio`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={`${project.id === 'bulk-market' || project.id === 'foodsaver' ? 'object-contain' : 'object-cover'} transition-transform duration-500 group-hover:scale-[1.02]`}
                    />
                  ) : (
                    <span className="text-grey-secondary text-sm">Project Image</span>
                  )}
                </div>

                {project.id === 'impacthub' && (
                  <p className="body-small mb-8 text-grey-secondary md:mb-10">
                    Prototype interface shown with illustrative demo data.
                  </p>
                )}

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
                  <div className="inline-block border border-burgundy/15 bg-burgundy/5 px-4 py-2 rounded text-sm text-burgundy font-medium">
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
