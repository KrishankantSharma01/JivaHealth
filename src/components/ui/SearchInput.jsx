import { Search } from 'lucide-react'

/**
 * SearchInput — search bar with magnifier icon.
 * All styling via Tailwind classes.
 */
export default function SearchInput({ placeholder, value, onChange }) {
  return (
    <div className="flex items-center gap-3 flex-1 min-w-0 bg-surface-card border border-border-light rounded-lg px-3 py-3">
      <Search
        size={16}
        strokeWidth={1.8}
        className="text-text-muted shrink-0"
      />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none border-none text-sm font-medium font-sans text-text-primary w-full"
      />
    </div>
  )
}
