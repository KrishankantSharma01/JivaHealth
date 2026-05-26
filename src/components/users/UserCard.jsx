import { Mail, Phone, Calendar, Clock, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Avatar from '../ui/Avatar'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { formatDate, getStatusVariant } from '../../utils/formatters'

/**
 * UserCard — Wide horizontal list item matching the Figma design.
 * Automatically switches between vertical card on mobile and horizontal row on desktop.
 *
 * Figma color mapping:
 *   User Name     → fill_EVA1MU (#0A0A0A) → text-text-name
 *   Email/Phone   → fill_2SAVIN (#4A5565) → text-text-body
 *   "Joined" label→ fill_BNRL40 (#6A7282) → text-text-secondary
 *   Joined date   → fill_IGW6BB (#101828) → text-text-heading
 *   "Last:" date  → fill_BNRL40 (#6A7282) → text-text-secondary
 *   "Appointments"→ fill_BNRL40 (#6A7282) → text-text-secondary
 *   Appt count    → fill_CWNB25 (#155DFC) → text-avatar-text
 */
export default function UserCard({ user }) {
  const navigate = useNavigate()

  return (
    <article className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6 bg-surface-card border border-border-light rounded-xl p-4 lg:py-5 lg:px-6 hover:shadow-xs transition-shadow duration-200">

      {/* ── COLUMN 1: Avatar + Name + Badges ── */}
      <div className="flex items-center gap-4 min-w-0 lg:w-[28%] shrink-0">
        <Avatar initials={user.initials} size="sm" />
        <div className="flex flex-col gap-1.5 min-w-0">
          <span className="text-base font-semibold text-text-name truncate">
            {user.name}
          </span>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="role">{user.role}</Badge>
            <Badge variant={getStatusVariant(user.status)}>{user.status}</Badge>
            <Badge variant="default">{user.userType}</Badge>
          </div>
        </div>
      </div>

      {/* ── COLUMN 2: Contact Info ── */}
      <div className="flex flex-col gap-1.5 lg:w-[22%] shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <Mail size={14} className="text-text-muted shrink-0" />
          <span className="text-sm font-medium text-text-body truncate">{user.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={14} className="text-text-muted shrink-0" />
          <span className="text-sm font-medium text-text-body">{user.phone}</span>
        </div>
      </div>

      {/* ── COLUMN 3: Dates ── */}
      <div className="flex flex-col gap-1 lg:w-[18%] shrink-0">
        <div className="flex items-center gap-2">
          <Calendar size={14} className="text-text-muted shrink-0" />
          <span className="text-sm font-medium text-text-secondary">
            Joined <span className="text-text-heading font-semibold">{formatDate(user.joined)}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={12} className="text-text-muted shrink-0" />
          <span className="text-xs font-medium text-text-secondary">
            Last: {formatDate(user.lastLogin)}
          </span>
        </div>
      </div>

      {/* ── COLUMN 4: Appointments ── */}
      <div className="flex flex-row lg:flex-col justify-between lg:justify-center items-center lg:w-[10%] shrink-0 border-t lg:border-t-0 border-border-light pt-3 lg:pt-0">
        <span className="text-xs font-medium text-text-secondary lg:mb-0.5">Appointments</span>
        <span className="text-2xl font-bold text-avatar-text leading-none">{user.appointments}</span>
      </div>

      {/* ── COLUMN 5: Actions ── */}
      <div className="flex items-center gap-2 w-full lg:w-auto justify-end border-t lg:border-t-0 border-border-light pt-3 lg:pt-0 lg:ml-auto">
        {!user.isPrime && (
          <Button variant="cta" size="sm" icon={Star} onClick={() => { }}>
            Upgrade to Prime
          </Button>
        )}
        <Button variant="outline" size="sm" onClick={() => navigate(`/users/${user.id}`)}>
          View
        </Button>
        <Button variant="outline" size="sm" onClick={() => { }}>
          Edit
        </Button>
      </div>

    </article>
  )
}
