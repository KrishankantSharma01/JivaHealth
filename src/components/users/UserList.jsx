import UserCard from './UserCard'

/**
 * UserList — Responsive grid of UserCard components.
 *
 * Props:
 *   users: User[] — filtered list passed from parent
 */
export default function UserList({ users = [] }) {
  if (users.length === 0) {
    return (
      <div className="flex items-center justify-center py-16 text-center text-text-muted text-sm">
        No users found matching your search or filters.
      </div>
    )
  }

  return (
    <section
      aria-label="User list"
      className="flex flex-col gap-4"
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  )
}
