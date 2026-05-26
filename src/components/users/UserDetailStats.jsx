import StatCard from '../ui/StatCard'
import { ShoppingBag, Calendar, IndianRupee } from 'lucide-react'

export default function UserDetailStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      <StatCard label="Total Orders" value="6" valueColorClass="text-text-primary" icon={ShoppingBag} />
      <StatCard label="Total Booking & Appointment" value="5" valueColorClass="text-[#22BB33]" icon={Calendar} />
      <StatCard label="Total Family Member" value="10" valueColorClass="text-brand-green" />
      <StatCard label="Total Spent" value="₹24500.00" valueColorClass="text-text-primary" icon={IndianRupee} />
    </div>
  )
}
