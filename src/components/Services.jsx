import { ArrowUpRight } from 'lucide-react'
import { solutions } from '../data/content'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'

export default function Services() {
  return (
    <section id="solutions" className="bg-white pb-20 pt-6 sm:pb-24 sm:pt-8">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="One platform, tailored to how you restore"
          description="Whether you run factories, cities, or field programs, Verdant meets you with the workflows your stakeholders already expect."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <article
                key={solution.title}
                className="group relative flex min-h-[28rem] min-w-0 flex-col overflow-hidden rounded-[1.75rem] text-sand-50 shadow-lg shadow-forest-950/10"
              >
                <img
                  src={solution.image}
                  alt={solution.alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/15" />
                <div className="relative flex h-full flex-col p-6 sm:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-400 text-forest-950">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="mt-auto">
                    <h3 className="font-display text-2xl font-semibold">{solution.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-forest-100/85">{solution.description}</p>
                    <ul className="mt-5 flex flex-col gap-1.5">
                      {solution.points.map((point) => (
                        <li key={point} className="text-sm font-medium text-forest-200">
                          · {point}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forest-300 transition hover:text-white"
                    >
                      Talk to solutions
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
