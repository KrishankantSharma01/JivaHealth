/**
 * Avatar — circular avatar with user initials.
 * All styling via Tailwind classes.
 *
 * size: 'sm' (36px) | 'md' (48px) | 'lg' (80px)
 */

const sizeClass = {
  sm: 'w-9 h-9 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-20 h-20 text-xl',
}

export default function Avatar({ initials = '??', size = 'sm' }) {
  return (
    <div
      aria-label={`Avatar for ${initials}`}
      className={[
        'flex items-center justify-center rounded-full shrink-0',
        'font-medium font-sans select-none tracking-wide',
        'bg-avatar-bg text-avatar-text',
        sizeClass[size] ?? sizeClass.sm,
      ].join(' ')}
    >
      {initials}
    </div>
  )
}
