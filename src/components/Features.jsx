import { features } from '../data/content'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'

export default function Features() {
  return (
    <section id="features" className="bg-white pb-20 pt-8 sm:pb-24 sm:pt-10">
      <Container>
        <SectionHeading
          eyebrow="Platform"
          title="Everything you need to become nature-positive"
          description="Six tightly connected workspaces so carbon, land, suppliers, and restoration never live in separate tools again."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="group flex h-full min-w-0 flex-col rounded-3xl border border-forest-900/8 bg-sand-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest-700/20 hover:bg-white hover:shadow-lg hover:shadow-forest-950/5"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-800 text-forest-200 transition-colors duration-300 group-hover:bg-forest-700 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-forest-950">{feature.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-800/70">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
