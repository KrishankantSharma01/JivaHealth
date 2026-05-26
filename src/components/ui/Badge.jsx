/**
 * Badge — role, status, and user-type badges.
 * All styling via Tailwind classes + @theme CSS variables.
 *
 * variant: 'role' | 'active' | 'inactive' | 'default'
 */

const variantClass = {
  role:     'bg-badge-role-bg border-badge-role-border text-badge-role-text',
  active:   'bg-badge-active-bg border-badge-active-border text-badge-active-text',
  inactive: 'bg-badge-inactive-bg border-badge-inactive-border text-badge-inactive-text',
  default:  'bg-transparent border-border-subtle text-text-body',
}

export default function Badge({ variant = 'default', children }) {
  return (
    <span
      className={[
        'inline-flex items-center justify-center whitespace-nowrap',
        'rounded-lg px-2 py-0.5',
        'text-xs font-medium font-sans border',
        'leading-snug',
        variantClass[variant] ?? variantClass.default,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
