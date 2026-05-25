import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

/**
 * Dropdown — controlled select dropdown.
 * All styling via Tailwind classes.
 */
export default function Dropdown({ options = [], value, onChange, width = 'w-40' }) {
  const [open, setOpen] = useState(false)

  const select = (opt) => {
    onChange?.(opt)
    setOpen(false)
  }

  return (
    <div className={`relative ${width}`}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center justify-between w-full bg-surface-card border border-border-light rounded-lg px-4 py-3 text-sm font-medium font-sans text-text-body cursor-pointer hover:bg-surface-page transition-colors"
      >
        <span>{value || options[0] || 'Select'}</span>
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={`text-text-muted opacity-50 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Options panel */}
      {open && (
        <ul
          role="listbox"
          className="absolute z-50 w-full mt-1 bg-surface-card border border-border-light rounded-lg shadow-lg overflow-auto max-h-48 p-1"
        >
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              onClick={() => select(opt)}
              className={[
                'px-3 py-2 rounded text-sm font-medium font-sans cursor-pointer transition-colors',
                opt === value
                  ? 'text-brand-green bg-surface-page'
                  : 'text-text-body hover:bg-surface-page',
              ].join(' ')}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
