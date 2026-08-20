import { AtSign, Globe, Share2 } from 'lucide-react'
import { footerColumns } from '../data/content'
import Container from './ui/Container'
import Logo from './ui/Logo'

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-100">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-sm sm:col-span-2 lg:col-span-1">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-forest-200/70">
              Nature intelligence for teams who want growth and restoration to move in the same direction.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Globe, label: 'Website' },
                { Icon: Share2, label: 'Share Verdant' },
                { Icon: AtSign, label: 'Email' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-forest-100 ring-1 ring-white/10 transition hover:bg-forest-400 hover:text-forest-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="min-w-0">
              <p className="text-sm font-semibold text-sand-50">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-forest-200/70 transition hover:text-sand-50"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-forest-200/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Verdant Labs. Grown with care.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#home" className="hover:text-sand-50">
              Privacy
            </a>
            <a href="#home" className="hover:text-sand-50">
              Terms
            </a>
            <a href="#home" className="hover:text-sand-50">
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
