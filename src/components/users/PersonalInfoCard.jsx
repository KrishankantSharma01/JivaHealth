import { Mail, Phone, Edit, Calendar, User, Droplet, Plus, MapPin } from 'lucide-react'
import Button from '../ui/Button'

export default function PersonalInfoCard({ user }) {
  // Figma-matched realistic extended mock details for each user ID
  const ext = {
    1: { dob: '15 Mar 1990', gender: 'Female', bloodGroup: 'O+', address: { type: 'Home', line1: 'Flat 301, Sunshine Apartments, MG Road', line2: 'Mumbai, Maharashtra 400001', country: 'India' } },
    2: { dob: '22 Aug 1988', gender: 'Female', bloodGroup: 'A+', address: { type: 'Home', line1: '456 Garden St, Sector 15', line2: 'Gurugram, Haryana 122001', country: 'India' } },
    3: { dob: '03 Nov 1995', gender: 'Male',   bloodGroup: 'B+', address: { type: 'Home', line1: '789 Pine Drive, Whitefield', line2: 'Bengaluru, Karnataka 560066', country: 'India' } },
    4: { dob: '10 Dec 1982', gender: 'Male',   bloodGroup: 'AB+', address: { type: 'Home', line1: '101 Maple Court, Bandra West', line2: 'Mumbai, Maharashtra 400050', country: 'India' } },
    5: { dob: '15 Jan 1995', gender: 'Female', bloodGroup: 'O-', address: { type: 'Home', line1: 'Flat 301, Sunshine Apartments, MG Road', line2: 'Mumbai, Maharashtra 400001', country: 'India' } },
    6: { dob: '25 Jun 1978', gender: 'Male',   bloodGroup: 'A-', address: { type: 'Home', line1: '202 Oak Avenue, Salt Lake', line2: 'Kolkata, West Bengal 700091', country: 'India' } },
  }
  
  const details = ext[user.id] || ext[1]

  return (
    <div className="flex flex-col gap-6">
      {/* Personal Information Card */}
      <div className="bg-surface-card border border-border-light rounded-2xl shadow-sm flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-border-light">
          <h2 className="text-lg font-bold text-text-name font-sans">Personal Information</h2>
          <Button variant="outline" size="sm" icon={Edit} onClick={() => {}}>
            Edit
          </Button>
        </div>
        
        <div className="p-5 flex flex-col gap-2">
          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-[#72AC9C] shrink-0" />
            <div className="flex items-center gap-1.5 text-sm font-sans flex-wrap">
              <span className="font-semibold text-[#72AC9C]">Email:</span>
              <span className="font-medium text-text-primary truncate max-w-[200px] md:max-w-xs">{user.email}</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-[#72AC9C] shrink-0" />
            <div className="flex items-center gap-1.5 text-sm font-sans flex-wrap">
              <span className="font-semibold text-[#72AC9C]">Phone:</span>
              <span className="font-medium text-text-primary">{user.phone}</span>
            </div>
          </div>

          {/* DOB */}
          <div className="flex items-center gap-3">
            <Calendar size={16} className="text-[#72AC9C] shrink-0" />
            <div className="flex items-center gap-1.5 text-sm font-sans flex-wrap">
              <span className="font-semibold text-[#72AC9C]">Date of Birth:</span>
              <span className="font-medium text-text-primary">{details.dob}</span>
            </div>
          </div>

          {/* Gender */}
          <div className="flex items-center gap-3">
            <User size={16} className="text-[#72AC9C] shrink-0" />
            <div className="flex items-center gap-1.5 text-sm font-sans flex-wrap">
              <span className="font-semibold text-[#72AC9C]">Gender:</span>
              <span className="font-medium text-text-primary">{details.gender}</span>
            </div>
          </div>

          {/* Blood Group */}
          <div className="flex items-center gap-3">
            <Droplet size={16} className="text-[#72AC9C] shrink-0" />
            <div className="flex items-center gap-1.5 text-sm font-sans flex-wrap">
              <span className="font-semibold text-[#72AC9C]">Blood Group:</span>
              <span className="font-medium text-text-primary">{details.bloodGroup}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Addresses Card */}
      <div className="bg-surface-card border border-border-light rounded-2xl shadow-sm flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-border-light">
          <h2 className="text-lg font-bold text-text-name font-sans">Addresses</h2>
          <Button variant="outline" size="sm" icon={Plus} onClick={() => {}}>
            Add
          </Button>
        </div>
        
        <div className="p-5 flex flex-col gap-4">
          {/* Home Address Card */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-page border border-border-light">
            <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-lg bg-[#B3D9CE]/20 text-[#016A4D]">
              <MapPin size={18} strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-text-name font-sans">{details.address.type}</h4>
                <span className="px-2 py-0.5 text-[10px] font-bold text-text-secondary bg-badge-role-bg border border-border-light rounded-md uppercase">
                  Default
                </span>
              </div>
              <div className="flex flex-col gap-1 text-sm font-medium text-text-body font-sans leading-relaxed">
                <span>{details.address.line1}</span>
                <span>{details.address.line2}</span>
                <span>{details.address.country}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
