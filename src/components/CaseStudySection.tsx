interface CaseStudySectionProps {
  title: string
  children: React.ReactNode
  backgroundLight?: boolean
  fullWidth?: boolean
}

export default function CaseStudySection({
  title,
  children,
  backgroundLight = false,
  fullWidth = false,
}: CaseStudySectionProps) {
  return (
    <section
      className={`case-study-section section-spacing border-t warm-divider ${
        backgroundLight ? 'section-warm' : 'section-surface'
      }`}
    >
      <div className={`container-wide ${fullWidth ? '' : 'case-study-layout'}`}>
        <div className="case-study-heading mb-8 md:mb-12">
          <h2 className="heading-section">{title}</h2>
        </div>
        <div className="case-study-content">{children}</div>
      </div>
    </section>
  )
}
