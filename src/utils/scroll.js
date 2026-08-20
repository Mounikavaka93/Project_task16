function getScroller() {
  return document.scrollingElement || document.documentElement
}

function getHeaderOffset() {
  const bar = document.querySelector('header > div')
  return Math.round(bar?.getBoundingClientRect().height ?? 68)
}

export function smoothScrollTo(hash) {
  if (!hash || hash === '#') return

  const id = hash.replace('#', '')
  const scroller = getScroller()

  if (id === 'home') {
    scroller.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const section = document.getElementById(id)
  if (!section) return

  const start = section.querySelector('[data-section-start]') || section
  const top = scroller.scrollTop + start.getBoundingClientRect().top - getHeaderOffset()

  scroller.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}

export function handleAnchorClick(event, hash, onAfter) {
  if (!hash?.startsWith('#')) return

  event.preventDefault()

  if (window.location.hash !== hash) {
    window.history.pushState(null, '', hash)
  }

  window.requestAnimationFrame(() => {
    smoothScrollTo(hash)
    onAfter?.()
  })
}
