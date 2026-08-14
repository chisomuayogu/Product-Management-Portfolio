interface InsightCardProps {
  label?: string
  children: React.ReactNode
  highlighted?: boolean
}

export default function InsightCard({
  label,
  children,
  highlighted = false,
}: InsightCardProps) {
  return (
    <div
      className={`p-8 md:p-10 rounded border ${
        highlighted
          ? 'bg-burgundy/5 border-burgundy/30'
          : 'bg-grey-secondary/5 border-grey-secondary/20'
      }`}
    >
      {label && (
        <p className="eyebrow mb-3 md:mb-4 text-burgundy">{label}</p>
      )}
      <div className={`${highlighted ? 'text-near-black' : 'text-near-black'}`}>
        {children}
      </div>
    </div>
  )
}
