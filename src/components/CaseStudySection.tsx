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
      className={`section-spacing border-t border-grey-secondary/10 ${
        backgroundLight ? 'bg-ivory' : 'bg-white'
      }`}
    >
      <div className={fullWidth ? '' : 'container-wide'}>
        <div className={fullWidth ? 'container-wide mb-8 md:mb-12' : 'mb-8 md:mb-12'}>
          <h2 className="heading-section">{title}</h2>
        </div>
        <div className={fullWidth ? '' : ''}>{children}</div>
      </div>
    </section>
  )
}
