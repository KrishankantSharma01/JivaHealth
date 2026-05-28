import SearchInput from '../ui/SearchInput'
import Dropdown from '../ui/Dropdown'
import { statusOptions, genderAgeOptions } from '../../data/mockUsers'

/**
 * UserFilters — Search input + two dropdowns.
 * All styling via Tailwind classes on child components.
 */
export default function UserFilters({ search, onSearchChange, genderAge, onGenderAgeChange, status, onStatusChange }) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
      <div className="flex-1 min-w-0">
        <SearchInput
          placeholder="Search by patient, doctor, or specialty..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        {/* First Filter Dropdown: Gender / Age Options (named All Status initially) */}
        <Dropdown options={genderAgeOptions} value={genderAge} onChange={onGenderAgeChange} width="w-full sm:w-44" />

        {/* Second Filter Dropdown: Status Options (named All Status initially) */}
        <Dropdown options={statusOptions} value={status} onChange={onStatusChange} width="w-full sm:w-44" />
      </div>
    </div>
  )
}
