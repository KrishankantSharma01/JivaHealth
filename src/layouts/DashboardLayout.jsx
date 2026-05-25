import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import TopBar from '../components/layout/TopBar'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-surface-page">
      <Sidebar />
      <TopBar />

      <main className="ml-sidebar mt-topbar min-h-[calc(100vh-var(--spacing-topbar))] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
