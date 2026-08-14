interface VisualPlaceholderProps {
  label: string
  aspectRatio?: 'video' | 'square' | 'tall'
}

export default function VisualPlaceholder({
  label,
  aspectRatio = 'video',
}: VisualPlaceholderProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    tall: 'aspect-[3/4]',
  }

  return (
    <div
      className={`${aspectClasses[aspectRatio]} bg-cream/40 border border-burgundy/15 rounded-lg shadow-wine-sm flex items-center justify-center`}
    >
      <div className="text-center">
        <p className="text-grey-secondary text-base md:text-lg font-medium">
          {label}
        </p>
        <p className="text-grey-secondary/60 text-sm mt-2">
          [Visual: {label}]
        </p>
      </div>
    </div>
  )
}
