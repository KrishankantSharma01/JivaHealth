/**
 * StatCard — statistics card from Figma.
 * All styling via Tailwind classes.
 *
 * valueColor: optional Tailwind text-color class (e.g. 'text-brand-active')
 *             defaults to 'text-text-primary'
 */

export default function StatCard({ 
  label, 
  value, 
  valueColorClass = 'text-text-primary', 
  icon: Icon,
  iconColorClass = 'text-brand-green',
  iconBgClass = 'bg-[#E8F5F1]'
}) {
  return (
    <article className="flex items-center justify-between gap-4 flex-1 min-w-0 bg-surface-card border border-border-light rounded-2xl p-5">
      <div className="flex flex-col gap-2 min-w-0">
        <span className="text-sm font-medium font-sans text-text-muted truncate">
          {label}
        </span>
        <span className={`text-2xl font-bold font-sans leading-tight ${valueColorClass}`}>
          {value}
        </span>
      </div>
      {Icon && (
        <div className={`flex items-center justify-center shrink-0 w-12 h-12 rounded-full ${iconBgClass}`}>
          <Icon size={24} className={iconColorClass} strokeWidth={2} />
        </div>
      )}
    </article>
  )
}
