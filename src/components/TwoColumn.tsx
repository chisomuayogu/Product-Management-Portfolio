interface TwoColumnProps {
  left: React.ReactNode
  right: React.ReactNode
  reverseOnMobile?: boolean
}

export default function TwoColumn({
  left,
  right,
  reverseOnMobile = false,
}: TwoColumnProps) {
  return (
    <div className="container-wide">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 ${
          reverseOnMobile ? 'md:grid-flow-col-dense' : ''
        }`}
      >
        <div className={reverseOnMobile ? 'md:col-span-1 md:order-last' : ''}>
          {left}
        </div>
        <div className={reverseOnMobile ? 'md:col-span-1 md:order-first' : ''}>
          {right}
        </div>
      </div>
    </div>
  )
}
