import { useState } from 'react'
import { Phone, Calendar, Edit, Trash2, Plus } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import AddUserModal from './AddUserModal'

export default function FamilyMembersTab({ user }) {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)

  // Mock details for family members matching the design pattern
  const familyMembers = [
    {
      id: 1,
      initials: 'JW',
      name: 'John Williams',
      relation: 'Son',
      phone: '+1 (555) 111-1112',
      dob: '3/20/1988',
      avatarColor: 'bg-[#B3D9CE]',
      textColor: 'text-[#016A4D]'
    },
    {
      id: 2,
      initials: 'MW',
      name: 'Mary Williams',
      relation: 'Daughter',
      phone: '+1 (555) 111-1113',
      dob: '5/15/1992',
      avatarColor: 'bg-[#E8F0FE]',
      textColor: 'text-[#155DFC]'
    }
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-surface-card border border-border-light rounded-2xl shadow-sm flex flex-col">
        <div className="p-5 border-b border-border-light flex items-center justify-between">
          <h3 className="text-lg font-bold text-text-name font-sans">Family Members</h3>
          <Button variant="primary" className="text-sm px-4 py-2 flex items-center gap-2" onClick={() => setIsAddUserModalOpen(true)}>
            <Plus size={16} />
            Add Member
          </Button>
        </div>
        
        <div className="p-5 flex flex-col gap-4">
          {familyMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-page border border-border-light rounded-xl hover:border-brand-green/20 transition-all"
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className={`flex items-center justify-center shrink-0 w-12 h-12 rounded-full ${member.avatarColor} ${member.textColor} text-lg font-bold font-sans`}>
                  {member.initials}
                </div>
                
                {/* User Info */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-base font-bold text-text-name font-sans">{member.name}</span>
                    <Badge variant="role">{member.relation}</Badge>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 text-sm font-semibold text-text-secondary">
                    <div className="flex items-center gap-1.5">
                      <Phone size={14} className="text-text-muted" />
                      {member.phone}
                    </div>
                    <div className="flex items-center gap-1.5 sm:border-l sm:border-border-light sm:pl-4">
                      <Calendar size={14} className="text-text-muted" />
                      <span className="text-text-muted">DOB:</span> <span className="text-text-secondary">{member.dob}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 self-end md:self-center">
                {/* Edit action */}
                <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-border-light bg-white text-text-secondary hover:bg-[#F0F1F2] hover:text-text-primary transition-colors shrink-0 cursor-pointer">
                  <Edit size={16} strokeWidth={2} />
                </button>
                
                {/* Delete action */}
                <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-border-light bg-white text-[#DC2626] hover:bg-red-50 transition-colors shrink-0 cursor-pointer">
                  <Trash2 size={16} strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Add User Modal ── */}
      <AddUserModal isOpen={isAddUserModalOpen} onClose={() => setIsAddUserModalOpen(false)} />
    </div>
  )
}

