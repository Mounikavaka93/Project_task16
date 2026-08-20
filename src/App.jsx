import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import { handleAnchorClick, smoothScrollTo } from './utils/scroll'

export default function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState('signin')

  const openAuth = (mode) => {
    setAuthMode(mode)
    setAuthOpen(true)
  }

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return
      handleAnchorClick(event, link.getAttribute('href'))
    }

    const onLoadHash = () => {
      if (window.location.hash) {
        window.requestAnimationFrame(() => smoothScrollTo(window.location.hash))
      }
    }

    document.addEventListener('click', onClick, true)
    window.addEventListener('popstate', onLoadHash)
    onLoadHash()

    return () => {
      document.removeEventListener('click', onClick, true)
      window.removeEventListener('popstate', onLoadHash)
    }
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-sand-50 font-sans text-forest-950 antialiased">
      <Navbar onSignIn={() => openAuth('signin')} onCreateAccount={() => openAuth('signup')} />
      <main>
        <Hero onCreateAccount={() => openAuth('signup')} />
        <Features />
        <About />
        <Services />
        <Statistics />
        <Testimonials />
        <CTA onCreateAccount={() => openAuth('signup')} />
        <Contact />
      </main>
      <Footer />
      <SignIn open={authOpen} initialMode={authMode} onClose={() => setAuthOpen(false)} />
    </div>
  )
}
