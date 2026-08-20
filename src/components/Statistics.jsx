import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/content'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'

function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return undefined

    const start = performance.now()
    const isDecimal = !Number.isInteger(target)

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      const next = target * eased
      setValue(isDecimal ? Number(next.toFixed(1)) : Math.round(next))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, duration, target])

  return value
}

function StatItem({ value, suffix, label, active }) {
  const counted = useCountUp(value, active)

  return (
    <div className="px-1 text-center">
      <p className="font-display text-3xl font-semibold tracking-tight text-sand-50 sm:text-4xl lg:text-5xl">
        {counted}
        {suffix}
      </p>
      <p className="mx-auto mt-2 max-w-[11rem] text-sm leading-snug text-forest-200/80">{label}</p>
    </div>
  )
}

export default function Statistics() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="impact" className="relative overflow-hidden bg-forest-900 pb-20 pt-8 sm:pb-24 sm:pt-10">
      <img
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1800&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-forest-950/70" />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Impact at scale"
          title="A living record of landscapes recovering"
        />
        <div ref={ref} className="mt-14 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </Container>
    </section>
  )
}
