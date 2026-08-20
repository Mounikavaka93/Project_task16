export default function Logo({ light = false, className = '', onClick }) {
  return (
    <a href="#home" onClick={onClick} className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 hover:rotate-6 ${
          light ? 'bg-forest-400' : 'bg-forest-800'
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M12 4c.3 3.4-1.3 6.1-4.4 8.2 2.6.3 4.7 1.5 6 3.6 1.3-2.1 3.4-3.3 6-3.6C16.5 10.1 14.9 7.4 15.2 4 14 5.3 13 6 12 6s-2-.7-3.2-2z"
            fill={light ? '#06261a' : '#86efac'}
          />
          <path
            d="M12 10.5V20"
            stroke={light ? '#06261a' : '#bbf7d0'}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={`font-display text-xl font-semibold tracking-tight ${
          light ? 'text-sand-50' : 'text-forest-950'
        }`}
      >
        Verdant
      </span>
    </a>
  )
}
