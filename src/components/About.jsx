import { Check } from 'lucide-react'
import { benefits } from '../data/content'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="bg-sand-50 pb-20 pt-8 sm:pb-24 sm:pt-10">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative min-w-0">
          <div className="overflow-hidden rounded-[1.75rem] shadow-xl shadow-forest-950/10">
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80"
              alt="Lush forest path with filtered sunlight"
              className="h-[22rem] w-full object-cover transition duration-700 hover:scale-105 sm:h-[28rem]"
            />
          </div>
          <div className="absolute bottom-4 right-4 max-w-[15.5rem] rounded-2xl bg-forest-900 p-5 text-sand-50 shadow-xl sm:bottom-6 sm:right-6">
            <p className="font-display text-3xl font-semibold">12 yrs</p>
            <p className="mt-1 text-sm leading-relaxed text-forest-100/80">
              of ecological science packed into a product your operators will actually use.
            </p>
          </div>
        </div>

        <div className="min-w-0">
          <SectionHeading
            align="left"
            eyebrow="Why Verdant"
            title="Built for teams who want proof, not just pledges."
            description="Most climate software stops at carbon. We connect emissions to living landscapes so you can see whether your strategy is actually healing the places you depend on."
          />

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-800 text-forest-200">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
                </span>
                <span className="text-sm leading-relaxed text-forest-900/80 sm:text-base">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
