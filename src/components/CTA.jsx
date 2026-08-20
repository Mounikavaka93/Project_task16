import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import Container from './ui/Container'

export default function CTA({ onCreateAccount }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-20">
          <img
            src="/images/mountains.jpg"
            alt="Fog moving over forested mountains"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-forest-950/70" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-forest-300">
            Ready when you are
          </p>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-sand-50 sm:text-4xl lg:text-5xl">
            Start measuring what the planet actually feels.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-sm leading-relaxed text-forest-100/80 sm:text-base">
            Join a 14-day trial with sample landscapes from Kilombero to Cascadia, live satellite
            layers, and a guided onboarding from our ecology team.
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
