interface SnapshotItem {
  label: string
  value: string
}

interface ProjectSnapshotProps {
  items: SnapshotItem[]
}

export default function ProjectSnapshot({ items }: ProjectSnapshotProps) {
  return (
    <section className="section-spacing section-surface border-b warm-divider">
      <div className="container-wide">
        <h2 className="heading-section mb-12 md:mb-16">Project Snapshot</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="premium-card p-6 md:p-8"
            >
              <p className="eyebrow mb-3 md:mb-4">{item.label}</p>
              <p className="heading-card text-near-black">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
