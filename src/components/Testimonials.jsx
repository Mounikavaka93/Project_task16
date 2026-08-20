import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'

export default function Testimonials() {
  return (
    <section id="stories" className="bg-sand-50 pb-20 pt-8 sm:pb-24 sm:pt-10">
      <Container>
        <SectionHeading
          eyebrow="Stories"
          title="Teams who traded guesswork for ground truth"
          description="From logistics networks to conservation NGOs, Verdant is the shared language between finance, field, and the board."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex h-full min-w-0 flex-col rounded-[1.75rem] bg-white p-6 ring-1 ring-forest-900/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-950/8 sm:p-7"
            >
              <Quote className="h-8 w-8 text-gold-400" strokeWidth={1.5} />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-forest-900/80">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white ${item.tone}`}
                >
                  {item.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest-950">{item.name}</p>
                  <p className="text-xs text-forest-800/65">
                    {item.role}, {item.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
