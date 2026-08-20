const variants = {
  primary:
    'bg-forest-800 text-white shadow-sm hover:bg-forest-700 hover:shadow-md',
  secondary:
    'bg-white text-forest-900 ring-1 ring-forest-900/10 hover:bg-sand-100 hover:ring-forest-900/20',
  accent:
    'bg-forest-400 text-forest-950 shadow-sm hover:bg-forest-300',
  ghost:
    'bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0 ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
