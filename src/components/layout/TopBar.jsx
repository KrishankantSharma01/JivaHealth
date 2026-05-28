import { Search, Moon, Bell, PanelLeftClose, Menu } from 'lucide-react'

export default function TopBar({ onToggleSidebar }) {
  return (
    <header className="fixed top-0 right-0 z-20 left-0 lg:left-sidebar topbar-height flex items-center justify-between bg-surface-card border-b border-border-light px-4 sm:px-6 transition-[left] duration-300">

      {/* Left — hamburger (mobile) / collapse icon (desktop) */}
      <button
        aria-label="Toggle sidebar"
        onClick={onToggleSidebar}
        className="flex items-center justify-center w-9 h-9 rounded-lg text-text-secondary hover:bg-surface-page transition-colors"
      >
        {/* Show hamburger on mobile, collapse icon on desktop */}
        <Menu size={20} strokeWidth={1.8} className="lg:hidden" />
        <PanelLeftClose size={18} strokeWidth={1.8} className="hidden lg:block" />
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
