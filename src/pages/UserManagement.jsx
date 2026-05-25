import { useState, useMemo } from 'react'
import { Plus } from 'lucide-react'
import Button from '../components/ui/Button'
import UserStatsBar from '../components/users/UserStatsBar'
import UserFilters from '../components/users/UserFilters'
import UserList from '../components/users/UserList'
import { mockUsers, userStats, statusOptions, roleOptions } from '../data/mockUsers'

export default function UserManagement() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState(statusOptions[0])
  const [role,   setRole]   = useState(roleOptions[0])

  const filtered = useMemo(() => {
    return mockUsers.filter((u) => {
      const matchSearch =
        !search ||
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()) ||
        u.role.toLowerCase().includes(search.toLowerCase())
      const matchStatus = status === statusOptions[0] || u.status === status
      const matchRole   = role   === roleOptions[0]   || u.role   === role
      return matchSearch && matchStatus && matchRole
    })
  }, [search, status, role])

  return (
    <div className="flex flex-col gap-6 p-6">

      {/* ── Page Header ── */}
      <header className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium font-sans text-text-primary leading-tight">
            User Management
          </h1>
          <p className="text-base font-medium font-sans text-text-secondary">
            Manage user accounts and permissions
          </p>
        </div>
        <Button variant="primary" size="md" icon={Plus}>
          Add User
        </Button>
      </header>

      {/* ── Statistics ── */}
      <UserStatsBar stats={userStats} />

      {/* ── Search + Filters ── */}
      <UserFilters
        search={search}       onSearchChange={setSearch}
        status={status}       onStatusChange={setStatus}
        role={role}           onRoleChange={setRole}
      />

      {/* ── User Grid ── */}
      <UserList users={filtered} />
    </div>
  )
}
