import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import UserManagement from './pages/UserManagement'
import UserDetail from './pages/UserDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          {/* Default redirect to /users */}
          <Route index element={<Navigate to="/users" replace />} />
          <Route path="/users"     element={<UserManagement />} />
          <Route path="/users/:id" element={<UserDetail />} />

          {/* Placeholder routes for sidebar nav items */}
          <Route path="*" element={
            <div className="flex items-center justify-center h-64 text-text-muted font-sans">
              Page coming soon…
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}