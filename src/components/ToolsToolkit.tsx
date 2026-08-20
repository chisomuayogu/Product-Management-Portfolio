interface ToolCategory {
  name: string
  tools: string[]
}

const toolCategories: ToolCategory[] = [
  {
    name: 'Product Delivery',
    tools: ['Jira', 'Asana', 'Trello'],
  },
  {
    name: 'Design & Collaboration',
    tools: ['Figma', 'Miro'],
  },
  {
    name: 'Documentation',
    tools: ['Notion', 'Confluence'],
  },
  {
    name: 'Technical Collaboration',
    tools: ['Vercel', 'Claude Code'],
  },
]

export default function ToolsToolkit() {
  return (
    <section className="section-spacing section-warm border-t warm-divider">
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="heading-section mb-6">Tools & Toolkit</h2>
          <p className="body-secondary max-w-2xl">
            The platforms and tools I use to research, strategize, design, and deliver products.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          {toolCategories.map((category) => (
            <div key={category.name} className="glass-panel rounded-lg p-6 md:p-8">
              {/* Category Name */}
              <h3 className="heading-card mb-6 md:mb-8 text-near-black">
                {category.name}
              </h3>

              {/* Tools List */}
              <ul className="space-y-3 md:space-y-4">
                {category.tools.map((tool) => (
                  <li key={tool} className="body-default text-grey-secondary">
                    {tool}
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
