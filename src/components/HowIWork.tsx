interface Phase {
  title: string
  items: string[]
}

const phases: Phase[] = [
  {
    title: 'Discover',
    items: [
      'User Research',
      'Market Research',
      'Competitor Analysis',
      'Problem Framing',
    ],
  },
  {
    title: 'Define',
    items: [
      'Product Strategy',
      'MVP Definition',
      'Prioritisation',
      'PRDs',
      'Metrics',
    ],
  },
  {
    title: 'Design',
    items: [
      'User Journeys',
      'User Flows',
      'Wireframes',
      'Prototyping',
      'Design Collaboration',
    ],
  },
  {
    title: 'Deliver',
    items: [
      'Cross-Functional Leadership',
      'Jira',
      'Stakeholder Management',
      'Dependency Management',
      'Conflict Resolution',
    ],
  },
]

export default function HowIWork() {
  return (
    <section className="section-spacing bg-white border-t border-grey-secondary/10">
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="heading-section mb-6">How I Work</h2>
          <p className="body-secondary max-w-2xl">
            My product management methodology spans discovery through delivery, ensuring research-driven decisions and coordinated execution.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {phases.map((phase) => (
            <div key={phase.title} className="flex flex-col">
              {/* Phase Number */}
              <div className="mb-6 md:mb-8">
                <h3 className="heading-card text-burgundy mb-3">
                  {phase.title}
                </h3>
              </div>

              {/* Items List */}
              <ul className="space-y-3 md:space-y-4">
                {phase.items.map((item) => (
                  <li key={item} className="body-small text-grey-secondary flex items-start gap-3">
                    <span className="text-burgundy mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
