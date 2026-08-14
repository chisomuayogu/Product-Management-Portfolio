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
      className={`p-8 md:p-10 rounded-lg border shadow-wine-sm backdrop-blur-md ${
        highlighted
          ? 'bg-gradient-to-br from-ivory/90 to-blush/40 border-burgundy/30'
          : 'bg-ivory/70 border-burgundy/15'
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
