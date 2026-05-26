import { Calendar, Clock, Star, ChevronDown } from 'lucide-react'
import Avatar from '../ui/Avatar'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { formatDate, getStatusVariant } from '../../utils/formatters'

export default function UserDetailHeader({ user }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 bg-surface-card border border-border-light rounded-xl shadow-sm">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <Avatar initials={user.initials} size="lg" />
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold font-sans text-text-name truncate">{user.name}</h1>
            <div className="flex flex-wrap gap-1.5">
              <Badge variant={getStatusVariant(user.status)}>{user.status}</Badge>
              <Badge variant="role">{user.role}</Badge>
              <Badge variant="default">{user.userType}</Badge>
              <Badge variant="default">ID: #{user.id}</Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-medium text-text-body">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-text-muted" />
              <span>Joined <span className="text-text-heading font-semibold">{formatDate(user.joined)}</span></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-text-muted" />
              <span className="text-text-secondary">Last Active: {formatDate(user.lastLogin)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {!user.isPrime && (
          <Button variant="cta" size="md" icon={Star} onClick={() => {}}>
            Upgrade to Prime
          </Button>
        )}
        <Button variant="outline" size="md" className="gap-2">
          {user.status}
          <ChevronDown size={14} className="text-text-muted" />
        </Button>
      </div>
    </div>
  )
}
