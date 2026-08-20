import { ArrowUpRight } from 'lucide-react'
import { solutions } from '../data/content'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'

export default function Services() {
  return (
    <section id="solutions" className="bg-white pb-20 pt-8 sm:pb-24 sm:pt-10">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="One platform, tailored to how you restore"
          description="Whether you run factories, cities, or field programs, Verdant meets you with the workflows your stakeholders already expect."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <article
                key={solution.title}
                className={`flex h-full min-w-0 flex-col rounded-[1.75rem] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  index === 1
                    ? 'bg-forest-900 text-sand-50 shadow-lg shadow-forest-950/20'
                    : 'bg-sand-50 ring-1 ring-forest-900/8 hover:bg-white'
                }`}
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index === 1 ? 'bg-forest-400 text-forest-950' : 'bg-forest-800 text-forest-100'
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold">{solution.title}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    index === 1 ? 'text-forest-100/80' : 'text-forest-800/70'
                  }`}
                >
                  {solution.description}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-2">
                  {solution.points.map((point) => (
                    <li
                      key={point}
                      className={`text-sm font-medium ${index === 1 ? 'text-forest-200' : 'text-forest-800'}`}
                    >
                      · {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center gap-1 text-sm font-semibold transition ${
                    index === 1 ? 'text-forest-300 hover:text-white' : 'text-forest-800 hover:text-forest-600'
                  }`}
                >
                  Talk to solutions
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
