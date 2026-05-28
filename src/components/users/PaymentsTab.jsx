import { CreditCard, Download, Eye, ChevronDown } from 'lucide-react'
import Badge from '../ui/Badge'

export default function PaymentsTab({ user }) {
  // Mock details for payment history matching the design pattern
  const payments = [
    {
      id: '#INV-001',
      title: 'Consultation Fee',
      description: 'Dr. Sarah Johnson - General Checkup',
      date: 'April 05, 2026',
      amount: '₹250.00',
      status: 'Paid',
      statusVariant: 'active',
      method: 'Credit Card ending in **** 4242'
    },
    {
      id: '#INV-002',
      title: 'Pharmacy Order',
      description: 'Order #1 - Paracetamol & Amoxicillin',
      date: 'March 28, 2026',
      amount: '₹700.00',
      status: 'Paid',
      statusVariant: 'active',
      method: 'UPI Transfer'
    },
    {
      id: '#INV-003',
      title: 'Lab Test Booking',
      description: 'Complete Blood Count',
      date: 'March 15, 2026',
      amount: '₹800.00',
      status: 'Pending',
      statusVariant: 'role',
      method: 'Cash on Delivery'
    }
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-surface-card border border-border-light rounded-2xl shadow-sm flex flex-col">
        <div className="p-5 border-b border-border-light flex items-center justify-between">
          <h3 className="text-lg font-bold text-text-name font-sans">Payment History</h3>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-brand-green bg-brand-green/10 hover:bg-brand-green/20 rounded-lg transition-colors cursor-pointer">
            <Download size={16} />
            Download All
          </button>
        </div>
        
        <div className="p-5 flex flex-col gap-4">
          {payments.map((payment, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-page border border-border-light rounded-xl hover:border-brand-green/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-xl bg-[#E8F0FE] text-[#155DFC]">
                  <CreditCard size={20} strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-base font-bold text-text-name font-sans">{payment.title}</span>
                    <span className="text-xs font-medium text-text-muted">{payment.id}</span>
                    <Badge variant={payment.statusVariant}>{payment.status}</Badge>
                  </div>
                  <span className="text-sm font-semibold text-text-secondary">{payment.description}</span>
                  <div className="flex items-center gap-3 mt-1 text-xs text-text-muted font-semibold">
                    <span>{payment.date}</span>
                    <span>•</span>
                    <span className="text-text-primary">{payment.method}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 self-end md:self-center">
                <span className="text-lg font-bold text-text-name">{payment.amount}</span>
                
                <div className="flex items-center gap-2 sm:border-l sm:border-border-light sm:pl-4">
                  {/* Status select similar to other tabs */}
                  <div className="flex items-center justify-between gap-2 px-4 py-2 text-xs font-semibold text-text-primary bg-[#F0F1F2] hover:bg-[#E5E7EB] rounded-lg cursor-pointer transition-colors min-w-[100px]">
                    <span className="truncate">{payment.status}</span>
                    <ChevronDown size={14} className="text-text-secondary shrink-0" />
                  </div>
                  
                  {/* View invoice action */}
                  <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-border-light bg-white text-brand-green hover:bg-brand-green/10 transition-colors shrink-0 cursor-pointer">
                    <Eye size={16} strokeWidth={2} />
                  </button>
                  
                  {/* Download invoice action */}
                  <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-border-light bg-white text-text-secondary hover:bg-[#F0F1F2] transition-colors shrink-0 cursor-pointer">
                    <Download size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
