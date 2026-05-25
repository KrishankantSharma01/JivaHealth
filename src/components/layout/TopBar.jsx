import { Search, Moon, Bell, PanelLeftClose } from 'lucide-react'

export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 z-20 left-sidebar topbar-height flex items-center justify-between bg-surface-card border-b border-border-light px-6">

      {/* Left — collapse icon */}
      <button
        aria-label="Collapse sidebar"
        className="flex items-center justify-center w-9 h-9 rounded-lg text-text-secondary hover:bg-surface-page transition-colors"
      >
        <PanelLeftClose size={18} strokeWidth={1.8} />
      </button>

      {/* Right — action icons */}
      <div className="flex items-center gap-1">
        <button
          aria-label="Search"
          className="flex items-center justify-center w-9 h-9 rounded-lg text-text-secondary hover:bg-surface-page transition-colors"
        >
          <Search size={18} strokeWidth={1.8} />
        </button>

        <button
          aria-label="Toggle dark mode"
          className="flex items-center justify-center w-9 h-9 rounded-lg text-text-secondary hover:bg-surface-page transition-colors"
        >
          <Moon size={18} strokeWidth={1.8} />
        </button>

        <button
          aria-label="Notifications"
          className="relative flex items-center justify-center w-9 h-9 rounded-lg text-text-secondary hover:bg-surface-page transition-colors"
        >
          <Bell size={18} strokeWidth={1.8} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500 border border-white" />
        </button>
      </div>
    </header>
  )
}
