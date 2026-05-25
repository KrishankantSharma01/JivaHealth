import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'
import Avatar from '../components/ui/Avatar'
import Badge from '../components/ui/Badge'
import { mockUsers } from '../data/mockUsers'
import { getStatusVariant } from '../utils/formatters'

export default function UserDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const user = mockUsers.find((u) => u.id === Number(id))

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64 text-sm font-medium font-sans text-text-muted">
        User not found.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 p-6">

      {/* Back button */}
      <button
        onClick={() => navigate('/users')}
        className="flex items-center gap-2 w-fit text-sm font-medium font-sans text-text-secondary hover:text-text-primary transition-colors bg-transparent border-none cursor-pointer p-0"
      >
        <ArrowLeft size={16} strokeWidth={2} />
        Back to User Management
      </button>

      {/* Profile header card */}
      <div className="flex items-center gap-4 p-6 bg-surface-card border border-border-subtle rounded-2xl flex-wrap">
        <Avatar initials={user.initials} size="lg" />
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <h1 className="text-2xl font-medium font-sans text-text-heading">{user.name}</h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant={getStatusVariant(user.status)}>{user.status}</Badge>
            <Badge variant="role">{user.role}</Badge>
            <Badge variant="default">{user.userType}</Badge>
          </div>
        </div>
        {!user.isPrime && (
          <Button variant="cta" size="md">Upgrade to Prime</Button>
        )}
      </div>

      <p className="text-sm font-medium font-sans text-text-muted">
        Full detail page coming in Phase 5.
      </p>
    </div>
  )
}
