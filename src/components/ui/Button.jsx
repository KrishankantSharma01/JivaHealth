/**
 * Button — four variants, all styling via Tailwind classes.
 *
 * variant: 'primary' | 'cta' | 'outline' | 'ghost'
 * size:    'sm' | 'md'
 * icon:    lucide icon component (rendered left of label)
 */

const variantClass = {
  primary: 'bg-text-primary text-white hover:opacity-90 active:opacity-80 border-transparent',
  cta:     'btn-cta text-white hover:opacity-90 active:opacity-80 border-transparent',
  outline: 'bg-surface-card text-text-primary border-border-subtle hover:bg-surface-page active:bg-border-light',
  ghost:   'bg-transparent text-text-secondary border-transparent hover:bg-surface-page active:bg-border-light',
}

const sizeClass = {
  sm: 'px-3 py-2 text-xs gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center',
        'rounded-lg font-medium font-sans border',
        'transition-all duration-150 cursor-pointer select-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-1',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantClass[variant] ?? variantClass.primary,
        sizeClass[size] ?? sizeClass.md,
        className,
      ].join(' ')}
    >
      {Icon && <Icon size={14} strokeWidth={2} />}
      {children}
    </button>
  )
}
