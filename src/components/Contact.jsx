import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { studios } from '../data/content'
import Button from './ui/Button'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'

const emptyForm = { name: '', email: '', company: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(emptyForm)
  }

  return (
    <section id="contact" className="bg-sand-50 pb-20 pt-6 sm:pb-24 sm:pt-8">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="min-w-0">
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Let’s map your first landscape together."
            description="Tell us about your sites, suppliers, or restoration goals. A specialist replies within one business day."
          />

          <div className="mt-10 grid grid-cols-3 gap-3">
            {studios.map((studio) => (
              <figure key={studio.city} className="min-w-0 overflow-hidden rounded-2xl">
                <img
                  src={studio.image}
                  alt={`${studio.city} studio`}
                  className="h-24 w-full object-cover sm:h-28"
                  loading="lazy"
                />
                <figcaption className="bg-white px-2 py-2 ring-1 ring-inset ring-forest-900/8">
                  <p className="text-xs font-semibold text-forest-950">{studio.city}</p>
                  <p className="text-[10px] text-forest-800/60">{studio.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-forest-800 ring-1 ring-forest-900/8">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-forest-950">Email</p>
                <a href="mailto:hello@verdant.earth" className="text-sm text-forest-800/70 hover:text-forest-800">
                  hello@verdant.earth
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-forest-800 ring-1 ring-forest-900/8">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-forest-950">Phone</p>
                <p className="text-sm text-forest-800/70">+1 (415) 555-0184</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-forest-800 ring-1 ring-forest-900/8">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-forest-950">Studios</p>
                <p className="text-sm text-forest-800/70">Portland · Lisbon · Nairobi</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="min-w-0 rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-forest-900/8 sm:p-8"
        >
          {submitted ? (
            <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
              <p className="font-display text-2xl font-semibold text-forest-950">Message received.</p>
              <p className="mt-2 max-w-sm text-sm text-forest-800/70">
                Thank you — we’ll be in touch shortly with next steps for your trial workspace.
              </p>
              <Button className="mt-6" onClick={() => setSubmitted(false)}>
                Send another note
              </Button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block min-w-0 text-sm font-medium text-forest-900">
                Name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="mt-1.5 w-full rounded-xl border-0 bg-sand-50 px-3.5 py-2.5 text-sm text-forest-950 outline-none ring-1 ring-forest-900/10 transition focus:ring-2 focus:ring-forest-700"
                  placeholder="Jordan Hale"
                />
              </label>
              <label className="block min-w-0 text-sm font-medium text-forest-900">
                Work email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-1.5 w-full rounded-xl border-0 bg-sand-50 px-3.5 py-2.5 text-sm text-forest-950 outline-none ring-1 ring-forest-900/10 transition focus:ring-2 focus:ring-forest-700"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block text-sm font-medium text-forest-900 sm:col-span-2">
                Company
                <input
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  className="mt-1.5 w-full rounded-xl border-0 bg-sand-50 px-3.5 py-2.5 text-sm text-forest-950 outline-none ring-1 ring-forest-900/10 transition focus:ring-2 focus:ring-forest-700"
                  placeholder="Northline Logistics"
                />
              </label>
              <label className="block text-sm font-medium text-forest-900 sm:col-span-2">
                How can we help?
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  className="mt-1.5 w-full resize-y rounded-xl border-0 bg-sand-50 px-3.5 py-2.5 text-sm text-forest-950 outline-none ring-1 ring-forest-900/10 transition focus:ring-2 focus:ring-forest-700"
                  placeholder="Tell us about your sites, reporting needs, or restoration goals."
                />
              </label>
              <div className="sm:col-span-2">
                <Button type="submit" className="w-full sm:w-auto">
                  Send message
                </Button>
              </div>
            </div>
          )}
        </form>
      </Container>
    </section>
  )
}
