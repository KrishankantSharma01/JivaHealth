import { useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { ArrowLeft, LayoutDashboard, ShoppingBag, CreditCard, Users } from 'lucide-react'
import { mockUsers } from '../data/mockUsers'
import UserDetailHeader from '../components/users/UserDetailHeader'
import UserDetailStats from '../components/users/UserDetailStats'
import UserDetailTabs from '../components/users/UserDetailTabs'
import PersonalInfoCard from '../components/users/PersonalInfoCard'
import RecentActivityCard from '../components/users/RecentActivityCard'
import OrdersBookingsTab from '../components/users/OrdersBookingsTab'

import PaymentsTab from '../components/users/PaymentsTab'
import FamilyMembersTab from '../components/users/FamilyMembersTab'

const TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'orders', label: 'Orders & Bookings', icon: ShoppingBag },
  { id: 'payments', label: 'Payments', icon: CreditCard },
  { id: 'family', label: 'Family Members', icon: Users },
]

export default function UserDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  
  const activeTab = searchParams.get('tab') || 'overview'
  const user = mockUsers.find((u) => u.id === Number(id))

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64 text-sm font-medium font-sans text-text-muted">
        User not found.
      </div>
    )
  }

  const handleTabChange = (tabId) => {
    setSearchParams({ tab: tabId })
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
      <UserDetailHeader user={user} />

      {/* Stats row */}
      <UserDetailStats />

      {/* Tabs */}
      <UserDetailTabs tabs={TABS} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Tab Content */}
      <div className="mt-2">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PersonalInfoCard user={user} />
            <RecentActivityCard />
          </div>
        )}
        
        {activeTab === 'orders' && (
          <OrdersBookingsTab user={user} />
        )}

        {activeTab === 'payments' && (
          <PaymentsTab user={user} />
        )}

        {activeTab === 'family' && (
          <FamilyMembersTab user={user} />
        )}
      </div>

    </div>
  )
}
