import { ShoppingBag, Calendar, Trash2, Clock, Stethoscope, FlaskConical, Truck, ChevronDown } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

export default function OrdersBookingsTab({ user }) {
  // Figma-matched mock details for orders
  const orders = [
    {
      id: '#1',
      title: 'Order #1',
      productName: 'Paracetamol 500mg - 30 tablets',
      date: 'March 28, 2026',
      price: '₹250.00',
      status: 'Delivered',
      statusVariant: 'active',
    },
    {
      id: '#2',
      title: 'Order #2',
      productName: 'Amoxicillin 250mg - 15 capsules',
      date: 'March 20, 2026',
      price: '₹450.00',
      status: 'Your order has been delivered.',
      statusVariant: 'active',
    },
    {
      id: '#3',
      title: 'Order #3',
      productName: 'Ibuprofen 400mg - 20 tablets',
      date: 'Feb 15, 2026',
      price: '₹180.00',
      status: 'Your order has been delivered.',
      statusVariant: 'active',
    }
  ]

  // Figma-matched mock details for upcoming bookings with specific design logos
  const upcomingBookings = [
    {
      title: 'General Checkup',
      doctor: 'Dr. Sarah Johnson',
      date: 'April 05, 2026',
      time: '10:00 AM',
      price: '₹250.00',
      status: 'confirmed',
      statusVariant: 'active',
      icon: Stethoscope,
      iconBgClass: 'bg-[#E8F5F1]',
      iconColorClass: 'text-[#016A4D]',
    },
    {
      title: 'Complete Blood Count',
      doctor: 'City Lab Diagnostics',
      date: 'April 08, 2026',
      time: '08:30 AM',
      price: '₹800.00',
      status: 'Scheduled',
      statusVariant: 'role',
      icon: FlaskConical,
      iconBgClass: 'bg-[#FEF3C7]',
      iconColorClass: 'text-[#D97706]',
    }
  ]

  // Figma-matched mock details for past bookings
  const pastBookings = [
    {
      title: 'City Ambulance Service',
      details: 'Emergency Pick-up & Transport',
      date: '3/20/2026',
      time: '02:15 PM',
      price: '₹250.00',
      status: 'Your order has been delivered.',
      statusVariant: 'active',
      icon: Truck,
      iconBgClass: 'bg-[#F3F4F6]',
      iconColorClass: 'text-[#1E2939]',
    }
  ]

  return (
    <div className="flex flex-col gap-6">
      
      {/* 1. Order History Card */}
      <div className="bg-surface-card border border-border-light rounded-2xl shadow-sm flex flex-col">
        <div className="p-5 border-b border-border-light">
          <h3 className="text-lg font-bold text-text-name font-sans">Order History</h3>
        </div>
        
        <div className="p-5 flex flex-col gap-4">
          {orders.map((order, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-page border border-border-light rounded-xl hover:border-brand-green/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-xl bg-[#E8F0FE] text-[#155DFC]">
                  <ShoppingBag size={20} strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-base font-bold text-text-name font-sans">{order.title}</span>
                    <Badge variant={order.statusVariant}>{order.status.includes('delivered') ? 'Delivered' : order.status}</Badge>
                  </div>
                  <span className="text-sm font-semibold text-text-secondary">{order.productName}</span>
                  <div className="flex items-center gap-3 mt-1 text-xs text-text-muted font-semibold">
                    <span>{order.date}</span>
                    <span>•</span>
                    <span className="text-text-primary">{order.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 self-end md:self-center">
                {/* Custom status selector mimicking Figma */}
                <div className="flex items-center justify-between gap-2 px-4 py-2 text-xs font-semibold text-text-primary bg-[#F0F1F2] hover:bg-[#E5E7EB] rounded-lg cursor-pointer transition-colors min-w-[130px] max-w-[160px]">
                  <span className="truncate">{order.status}</span>
                  <ChevronDown size={14} className="text-text-secondary shrink-0" />
                </div>
                
                {/* Red outline trash can */}
                <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-border-light bg-white text-[#DC2626] hover:bg-red-50 transition-colors shrink-0 cursor-pointer">
                  <Trash2 size={16} strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Upcoming Bookings Card */}
      <div className="bg-surface-card border border-border-light rounded-2xl shadow-sm flex flex-col">
        <div className="p-5 border-b border-border-light">
          <h3 className="text-lg font-bold text-text-name font-sans">Upcoming Bookings</h3>
        </div>
        
        <div className="p-5 flex flex-col gap-4">
          {upcomingBookings.map((booking, idx) => {
            const Icon = booking.icon
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-page border border-border-light rounded-xl hover:border-brand-green/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex items-center justify-center shrink-0 w-10 h-10 rounded-xl ${booking.iconBgClass} ${booking.iconColorClass}`}>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base font-bold text-text-name font-sans">{booking.title}</span>
                      <Badge variant={booking.statusVariant}>{booking.status}</Badge>
                    </div>
                    <span className="text-sm font-semibold text-text-secondary">{booking.doctor}</span>
                    <div className="flex items-center gap-3 mt-1 text-xs text-text-muted font-semibold">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {booking.date} at {booking.time}
                      </span>
                      <span>•</span>
                      <span className="text-text-primary">{booking.price}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end md:self-center">
                  {/* Status select */}
                  <div className="flex items-center justify-between gap-2 px-4 py-2 text-xs font-semibold text-text-primary bg-[#F0F1F2] hover:bg-[#E5E7EB] rounded-lg cursor-pointer transition-colors min-w-[110px]">
                    <span className="truncate">{booking.status}</span>
                    <ChevronDown size={14} className="text-text-secondary shrink-0" />
                  </div>
                  
                  {/* Action dropdown (Cancel) */}
                  <div className="flex items-center justify-between gap-2 px-4 py-2 text-xs font-semibold text-text-primary bg-[#F0F1F2] hover:bg-[#E5E7EB] rounded-lg cursor-pointer transition-colors min-w-[100px]">
                    <span>Cancel</span>
                    <ChevronDown size={14} className="text-text-secondary shrink-0" />
                  </div>

                  {/* Red outline trash can */}
                  <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-border-light bg-white text-[#DC2626] hover:bg-red-50 transition-colors shrink-0 cursor-pointer">
                    <Trash2 size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 3. Past Bookings Card */}
      <div className="bg-surface-card border border-border-light rounded-2xl shadow-sm flex flex-col">
        <div className="p-5 border-b border-border-light">
          <h3 className="text-lg font-bold text-text-name font-sans">Past Bookings</h3>
        </div>
        
        <div className="p-5 flex flex-col gap-4">
          {pastBookings.map((booking, idx) => {
            const Icon = booking.icon
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-page border border-border-light rounded-xl hover:border-brand-green/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex items-center justify-center shrink-0 w-10 h-10 rounded-xl ${booking.iconBgClass} ${booking.iconColorClass}`}>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base font-bold text-text-name font-sans">{booking.title}</span>
                      <Badge variant={booking.statusVariant}>{booking.status.includes('delivered') ? 'Completed' : booking.status}</Badge>
                    </div>
                    <span className="text-sm font-semibold text-text-secondary">{booking.details}</span>
                    <div className="flex items-center gap-3 mt-1 text-xs text-text-muted font-semibold">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {booking.date} at {booking.time}
                      </span>
                      <span>•</span>
                      <span className="text-text-primary">{booking.price}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end md:self-center">
                  {/* Custom status selector mimicking Figma */}
                  <div className="flex items-center justify-between gap-2 px-4 py-2 text-xs font-semibold text-text-primary bg-[#F0F1F2] hover:bg-[#E5E7EB] rounded-lg cursor-pointer transition-colors min-w-[130px] max-w-[160px]">
                    <span className="truncate">{booking.status}</span>
                    <ChevronDown size={14} className="text-text-secondary shrink-0" />
                  </div>
                  
                  {/* Red outline trash can */}
                  <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-border-light bg-white text-[#DC2626] hover:bg-red-50 transition-colors shrink-0 cursor-pointer">
                    <Trash2 size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}
