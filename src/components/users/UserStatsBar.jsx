import StatCard from '../ui/StatCard'

/**
 * UserStatsBar — 4-stat row from Figma Statistics Container.
 * valueColorClass uses Tailwind text-color classes.
 */
export default function UserStatsBar({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      <StatCard label="Total User"           value={stats.total}         valueColorClass="text-text-primary"  />
      <StatCard label="Prime User"           value={stats.prime}         valueColorClass="text-brand-active"  />
      <StatCard label="Non-Prime User"       value={stats.nonPrime}      valueColorClass="text-text-primary"  />
      <StatCard label="Total Family members" value={stats.familyMembers} valueColorClass="text-brand-active"  />
    </div>
  )
}
