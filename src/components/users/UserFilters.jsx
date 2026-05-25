import SearchInput from '../ui/SearchInput'
import Dropdown from '../ui/Dropdown'
import { statusOptions, roleOptions } from '../../data/mockUsers'

/**
 * UserFilters — Search input + two dropdowns.
 * All styling via Tailwind classes on child components.
 */
export default function UserFilters({ search, onSearchChange, status, onStatusChange, role, onRoleChange }) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex-1 min-w-52">
        <SearchInput
          placeholder="Search by patient, doctor, or specialty..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <Dropdown options={statusOptions} value={status} onChange={onStatusChange} width="w-40" />
      <Dropdown options={roleOptions}   value={role}   onChange={onRoleChange}   width="w-40" />
    </div>
  )
}
