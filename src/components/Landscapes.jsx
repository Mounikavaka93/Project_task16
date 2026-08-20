import { landscapes } from '../data/content'
import Container from './ui/Container'

export default function Landscapes() {
  return (
    <section className="bg-forest-950 py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-forest-300">
              Living atlas
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-sand-50 sm:text-3xl">
              Landscapes currently on the wire
            </h2>
          </div>
          <p className="max-w-sm text-sm text-forest-200/70">
            Real plots. Real coordinates. Updated as satellite passes and field teams check in.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {landscapes.map((plot) => (
            <figure
              key={plot.name}
              className="group relative min-w-0 overflow-hidden rounded-[1.4rem]"
            >
              <img
                src={plot.image}
                alt={`${plot.name} in ${plot.place}`}
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64"
                loading="lazy"
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-transparent p-4">
                <p className="font-display text-lg text-sand-50">{plot.name}</p>
                <p className="text-xs text-forest-200/80">{plot.place}</p>
                <p className="mt-2 font-mono text-[10px] tracking-wide text-gold-300">{plot.coords}</p>
                <p className="mt-1 text-[11px] text-forest-100/80">{plot.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
