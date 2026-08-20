import { Leaf } from 'lucide-react'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto'

  return (
    <div data-section-start className={`flex w-full max-w-2xl flex-col gap-2 sm:gap-3 ${alignment}`}>
      {eyebrow ? (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? 'text-forest-300' : 'text-forest-700'
          }`}
        >
          <Leaf className="h-3.5 w-3.5 shrink-0" strokeWidth={2.4} />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15] ${
          light ? 'text-sand-50' : 'text-forest-950'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-xl text-pretty text-base leading-relaxed sm:text-lg ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-forest-100/80' : 'text-forest-800/70'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
