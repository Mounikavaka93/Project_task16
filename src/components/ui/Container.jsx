export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-[var(--page-gutter)] ${className}`}>
      {children}
    </div>
  )
}
