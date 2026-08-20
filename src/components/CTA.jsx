import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import Container from './ui/Container'

export default function CTA({ onCreateAccount }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-forest-400/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 bottom-0 h-44 w-44 rounded-full bg-gold-400/25 blur-3xl" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-forest-300">
            Ready when you are
          </p>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-sand-50 sm:text-4xl lg:text-5xl">
            Start measuring what the planet actually feels.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-sm leading-relaxed text-forest-100/75 sm:text-base">
            Join a 14-day trial with sample landscapes, live satellite layers, and a guided
            onboarding from our ecology team. No credit card required.
          </p>
          <div className="relative mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button variant="accent" className="w-full px-6 py-3 sm:w-auto" onClick={onCreateAccount}>
              Create your workspace
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="ghost" className="w-full px-6 py-3 sm:w-auto">
              Book a walkthrough
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
