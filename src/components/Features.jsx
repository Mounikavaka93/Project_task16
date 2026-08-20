import { features } from '../data/content'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'

export default function Features() {
  return (
    <section id="features" className="bg-white pb-20 pt-6 sm:pb-24 sm:pt-8">
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
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-forest-900/8 bg-sand-50 transition-all duration-300 hover:-translate-y-1 hover:border-forest-700/20 hover:bg-white hover:shadow-lg hover:shadow-forest-950/5"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-forest-900/85 text-forest-200 backdrop-blur-sm">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold text-forest-950">{feature.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-800/70">{feature.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
