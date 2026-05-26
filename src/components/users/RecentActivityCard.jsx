import { Stethoscope, Pill, FlaskConical } from 'lucide-react'

export default function RecentActivityCard() {
  const activities = [
    {
      title: 'Consultation Completed',
      description: 'with Dr. Sarah Johnson - General Checkup',
      timestamp: '2 days ago',
      icon: Stethoscope,
      iconBgClass: 'bg-[#E8F5F1]',
      iconColorClass: 'text-[#016A4D]',
    },
    {
      title: 'Medicine Order Placed',
      description: 'Order #1002 - Amoxicillin 250mg',
      timestamp: '1 day ago',
      icon: Pill,
      iconBgClass: 'bg-[#FEF2F2]',
      iconColorClass: 'text-[#DC2626]',
    },
    {
      title: 'Lab Test Scheduled',
      description: 'Complete Blood Count - City Lab',
      timestamp: '3 days ago',
      icon: FlaskConical,
      iconBgClass: 'bg-[#E8F0FE]',
      iconColorClass: 'text-[#155DFC]',
    },
  ]

  return (
    <div className="bg-surface-card border border-border-light rounded-2xl flex flex-col h-full shadow-sm">
      <div className="flex items-center justify-between p-5 border-b border-border-light">
        <h2 className="text-lg font-bold text-text-name font-sans">Recent Activity</h2>
      </div>
      
      <div className="p-5 flex flex-col">
        {activities.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className="flex items-start gap-4 py-4 border-b border-border-light last:border-none last:pb-0 first:pt-0"
            >
              <div className={`flex items-center justify-center shrink-0 w-8 h-8 rounded-lg ${item.iconBgClass} ${item.iconColorClass}`}>
                <Icon size={18} strokeWidth={2} />
              </div>
              
              <div className="flex-1 min-w-0 flex flex-col gap-1">
                <span className="text-sm font-bold text-text-name font-sans leading-tight">
                  {item.title}
                </span>
                <span className="text-sm font-medium text-text-body font-sans leading-normal">
                  {item.description}
                </span>
                <span className="text-xs font-semibold text-text-[#72AC9C] mt-0.5 uppercase tracking-wider">
                  {item.timestamp}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
