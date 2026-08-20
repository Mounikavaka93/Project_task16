import { ArrowRight, Play } from 'lucide-react'
import { heroPhotos, liveSites } from '../data/content'
import Button from './ui/Button'
import Container from './ui/Container'

const highlights = [
  { label: 'Canopy index', value: '+18.4%', hint: 'YoY restoration' },
  { label: 'Sites live', value: '142', hint: 'Across 28 biomes' },
  { label: 'Data latency', value: '12 min', hint: 'Satellite refresh' },
]

export default function Hero({ onCreateAccount }) {
  return (
    <section id="home" className="leaf-pattern relative overflow-hidden pt-20 sm:pt-24">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-forest-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-gold-400/20 blur-3xl" />

      <Container className="grid items-center gap-10 pb-16 pt-6 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-10">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-forest-800 ring-1 ring-forest-900/10">
            Field atlas for modern teams
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.12] tracking-tight text-forest-950 sm:text-5xl lg:text-[3.25rem]">
            Grow your business without shrinking the{' '}
            <em className="italic text-forest-700">wild world</em> around it.
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-forest-800/75 sm:text-lg">
            Verdant is the nature intelligence workspace used by logistics networks,
            cities, and conservation teams to measure land, fund restoration, and
            publish reports people actually trust.
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

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-800/55">
              Live from the atlas
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {liveSites.map((site) => (
                <div key={site.name} className="flex items-center gap-2 rounded-full bg-white/80 py-1 pl-1 pr-3 ring-1 ring-forest-900/8">
                  <img
                    src={site.image}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="leading-tight">
                    <p className="text-xs font-semibold text-forest-950">{site.name}</p>
                    <p className="text-[10px] text-forest-800/60">{site.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="relative overflow-hidden rounded-[1.75rem] shadow-xl shadow-forest-950/15">
            <img
              src={heroPhotos.canopy}
              alt="Sunlight cutting through a dense forest canopy"
              className="h-[20rem] w-full object-cover sm:h-[26rem] lg:h-[28rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 font-display text-sm italic text-sand-50 sm:bottom-5 sm:left-5">
              Cascadia plot 07 · 45.52°N
            </p>
          </div>

          <div className="absolute right-3 top-4 hidden w-[13.5rem] rounded-2xl bg-white/95 p-3 shadow-xl ring-1 ring-forest-900/8 backdrop-blur sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-forest-800/60">
              Restoration pulse
            </p>
            <p className="mt-1 font-display text-2xl text-forest-950">+2,184 trees</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sand-200">
              <div className="h-full w-3/4 rounded-full bg-forest-600" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {highlights.map((item) => (
                <div key={item.label} className="min-w-0">
                  <p className="truncate text-[9px] uppercase tracking-wider text-forest-800/50">{item.label}</p>
                  <p className="text-xs font-semibold text-forest-950">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
