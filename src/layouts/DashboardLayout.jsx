import { useState, useCallback } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import TopBar from '../components/layout/TopBar'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = useCallback(() => setSidebarOpen((p) => !p), [])
  const closeSidebar  = useCallback(() => setSidebarOpen(false), [])

  return (
    <div className="min-h-screen bg-surface-page">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <TopBar onToggleSidebar={toggleSidebar} />

      <main className="lg:ml-sidebar mt-topbar min-h-[calc(100vh-var(--spacing-topbar))] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
