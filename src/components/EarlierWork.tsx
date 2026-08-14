interface EarlierProject {
  name: string
  category: string
}

const earlierProjects: EarlierProject[] = [
  {
    name: 'LegalLaunch',
    category: 'LegalTech · Individual Capstone',
  },
  {
    name: 'HealthHub',
    category: 'Remote Wellness · Group Product Project',
  },
]

export default function EarlierWork() {
  return (
    <section className="section-spacing bg-white border-t border-grey-secondary/10">
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="heading-section mb-6">Earlier Product Work</h2>
          <p className="body-secondary max-w-2xl">
            Earlier explorations that helped shape my product thinking.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {earlierProjects.map((project) => (
            <div
              key={project.name}
              className="border border-grey-secondary/10 p-6 md:p-8 hover:border-burgundy/30 transition-all duration-300"
            >
              {/* Project Name */}
              <h3 className="heading-card mb-3 md:mb-4">
                {project.name}
              </h3>

              {/* Category */}
              <p className="body-small text-grey-secondary">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
