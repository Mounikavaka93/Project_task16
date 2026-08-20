import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import Button from './ui/Button'
import Container from './ui/Container'
import Logo from './ui/Logo'

export default function Navbar({ onSignIn, onCreateAccount }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const openSignIn = () => {
    setOpen(false)
    onSignIn?.()
  }

  const openCreateAccount = () => {
    setOpen(false)
    onCreateAccount?.()
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-forest-900/8 bg-sand-50/90 shadow-sm backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <Container className="grid h-16 grid-cols-[1fr_auto] items-center gap-4 sm:h-[4.25rem] lg:grid-cols-[1fr_auto_1fr]">
        <Logo className="justify-self-start" />

        <nav className="hidden items-center justify-center gap-5 xl:gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-forest-900/70 transition-colors duration-200 hover:text-forest-800"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={openSignIn}
              className="whitespace-nowrap text-sm font-semibold text-forest-900/80 transition-colors hover:text-forest-800"
            >
              Sign in
            </button>
            <Button onClick={openCreateAccount}>Create account</Button>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest-900 ring-1 ring-forest-900/10 transition hover:bg-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={`overflow-hidden border-t border-forest-900/8 bg-sand-50 transition-all duration-300 lg:hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Container>
          <nav className="flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-forest-900/80 transition hover:bg-forest-50 hover:text-forest-900"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={openSignIn}
              className="rounded-xl px-3 py-2.5 text-left text-base font-medium text-forest-900/80 transition hover:bg-forest-50 hover:text-forest-900"
            >
              Sign in
            </button>
            <Button className="mt-3 w-full" onClick={openCreateAccount}>
              Create account
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  )
}
