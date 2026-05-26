import { useState, useMemo } from 'react'
import { Plus } from 'lucide-react'
import Button from '../components/ui/Button'
import UserStatsBar from '../components/users/UserStatsBar'
import UserFilters from '../components/users/UserFilters'
import UserList from '../components/users/UserList'
import AddUserModal from '../components/users/AddUserModal'
import { mockUsers, userStats, statusOptions, genderAgeOptions } from '../data/mockUsers'

export default function UserManagement() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState(statusOptions[0])
  const [genderAge, setGenderAge] = useState(genderAgeOptions[0])
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)

  const filtered = useMemo(() => {
    return mockUsers.filter((u) => {
      const matchSearch =
        !search ||
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()) ||
        u.role.toLowerCase().includes(search.toLowerCase())
      
      const matchStatus = status === 'All Status' || u.status === status
      
      let matchGenderAge = true
      if (genderAge !== 'All Status') {
        if (genderAge === 'Male' || genderAge === 'Female') {
          matchGenderAge = u.gender === genderAge
        } else {
          matchGenderAge = u.ageGroup === genderAge
        }
      }
      
      return matchSearch && matchStatus && matchGenderAge
    })
  }, [search, status, genderAge])

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
        <Button variant="primary" size="md" icon={Plus} onClick={() => setIsAddUserModalOpen(true)}>
          Add User
        </Button>
      </header>

      {/* ── Statistics ── */}
      <UserStatsBar stats={userStats} />

      {/* ── Search + Filters ── */}
      <UserFilters
        search={search}
        onSearchChange={setSearch}
        genderAge={genderAge}
        onGenderAgeChange={setGenderAge}
        status={status}
        onStatusChange={setStatus}
      />

      {/* ── User Grid ── */}
      <UserList users={filtered} />
      
      {/* ── Add User Modal ── */}
      <AddUserModal isOpen={isAddUserModalOpen} onClose={() => setIsAddUserModalOpen(false)} />
    </div>
  )
}
