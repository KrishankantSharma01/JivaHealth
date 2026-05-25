/**
 * StatCard — statistics card from Figma.
 * All styling via Tailwind classes.
 *
 * valueColor: optional Tailwind text-color class (e.g. 'text-brand-active')
 *             defaults to 'text-text-primary'
 */

export default function StatCard({ label, value, valueColorClass = 'text-text-primary' }) {
  return (
    <article className="flex flex-col gap-2 flex-1 min-w-0 bg-surface-card border border-border-light rounded-2xl p-4">
      <span className="text-sm font-medium font-sans text-text-muted">
        {label}
      </span>
      <span className={`text-2xl font-medium font-sans leading-tight ${valueColorClass}`}>
        {value}
      </span>
    </article>
  )
}
