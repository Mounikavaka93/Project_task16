import { ArrowRight, Play } from 'lucide-react'
import Button from './ui/Button'
import Container from './ui/Container'

const highlights = [
  { label: 'Canopy index', value: '+18.4%', hint: 'YoY restoration' },
  { label: 'Sites live', value: '142', hint: 'Across 28 biomes' },
  { label: 'Data latency', value: '12 min', hint: 'Satellite refresh' },
]

export default function Hero({ onCreateAccount }) {
  return (
    <section id="home" className="leaf-pattern relative overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-forest-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-gold-400/20 blur-3xl" />

      <Container className="grid items-center gap-10 pb-16 pt-6 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-10">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-forest-800 ring-1 ring-forest-900/10">
            Nature intelligence platform
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.12] tracking-tight text-forest-950 sm:text-5xl lg:text-[3.25rem]">
            Grow your business without shrinking the{' '}
            <em className="italic text-forest-700">wild world</em> around it.
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-forest-800/75 sm:text-lg">
            Verdant helps teams measure carbon, map biodiversity, fund restoration,
            and publish trusted nature reports — in one calm, connected workspace.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <Button className="w-full px-6 py-3 sm:w-auto" onClick={onCreateAccount}>
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#features" variant="secondary" className="w-full px-6 py-3 sm:w-auto">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forest-800 text-white">
                <Play className="h-3 w-3 fill-current" />
              </span>
              See how it works
            </Button>
          </div>
          <p className="mt-8 text-sm text-forest-800/60">
            Trusted by 2,400+ climate, logistics, and conservation teams worldwide.
          </p>
        </div>

        <div className="relative min-w-0">
          <div className="absolute -left-4 -top-4 hidden h-20 w-20 rounded-3xl bg-gold-400/80 blur-[2px] sm:block" />
          <div className="relative overflow-hidden rounded-[1.75rem] bg-forest-900 shadow-2xl shadow-forest-950/20 ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80"
              alt="Sunlit forest canopy"
              className="h-[20rem] w-full object-cover sm:h-[26rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/15 to-transparent" />
            <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 gap-2 sm:inset-x-4 sm:bottom-4 sm:gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-2xl bg-white/12 px-2 py-2.5 text-white ring-1 ring-white/15 backdrop-blur-md transition duration-300 hover:bg-white/18 sm:px-3 sm:py-3"
                >
                  <p className="truncate text-[10px] uppercase tracking-wider text-forest-100/80 sm:text-[11px]">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold sm:text-xl">{item.value}</p>
                  <p className="hidden text-[11px] text-forest-100/70 sm:block">{item.hint}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-3 top-6 hidden w-40 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-forest-900/8 sm:block lg:right-4">
            <p className="text-xs font-semibold text-forest-800">Restoration pulse</p>
            <p className="mt-1 font-display text-2xl text-forest-950">+2,184 trees</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sand-200">
              <div className="h-full w-3/4 rounded-full bg-forest-600" />
            </div>
            <p className="mt-2 text-[11px] text-forest-800/60">Amazon corridor · this month</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
