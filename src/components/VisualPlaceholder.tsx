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
      className={`${aspectClasses[aspectRatio]} bg-grey-secondary/5 border border-grey-secondary/20 rounded flex items-center justify-center`}
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
