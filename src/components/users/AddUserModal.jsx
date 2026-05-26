import { useState, useEffect } from 'react'
import { X, ChevronDown } from 'lucide-react'

export default function AddUserModal({ isOpen, onClose }) {
  const [gender, setGender] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [stateVal, setStateVal] = useState('')

  // Block page scroll behind the modal when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-[1.5px] transition-opacity" 
        onClick={onClose}
      />
      
      {/* Centered Modal Card with vertical margin and scroll constraints */}
      <div className="relative bg-white w-full max-w-[560px] max-h-[90vh] rounded-[24px] p-8 shadow-2xl flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between shrink-0">
          <div>
            <h2 className="text-[22px] font-bold text-[#101828] leading-tight font-sans">
              Add New User
            </h2>
            <p className="text-sm text-[#667085] mt-1 font-normal font-sans">
              Create a new user account with role and permissions
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-[#667085] hover:text-[#344054] p-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Form Body - resizable using min-h-0 */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6 min-h-0">
          
          {/* Scrollable Fields Grid */}
          <div className="flex-1 overflow-y-auto pr-1 grid grid-cols-2 gap-x-5 gap-y-4">
            
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#344054] font-sans">
                Full Name <span className="text-[#D92D20] ml-0.5">*</span>
              </label>
              <input 
                type="text" 
                placeholder="e.g., John Smith" 
                className="w-full px-4 py-2.5 rounded-lg bg-[#F2F4F7] border border-transparent text-[#101828] placeholder-[#667085] text-sm focus:outline-none focus:bg-white focus:border-[#D0D5DD] transition-all font-sans"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#344054] font-sans">
                Email <span className="text-[#D92D20] ml-0.5">*</span>
              </label>
              <input 
                type="email" 
                placeholder="john.smith@email.com" 
                className="w-full px-4 py-2.5 rounded-lg bg-[#F2F4F7] border border-transparent text-[#101828] placeholder-[#667085] text-sm focus:outline-none focus:bg-white focus:border-[#D0D5DD] transition-all font-sans"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#344054] font-sans">
                Phone Number
              </label>
              <input 
                type="tel" 
                placeholder="+91 98765 43210" 
                className="w-full px-4 py-2.5 rounded-lg bg-[#F2F4F7] border border-transparent text-[#101828] placeholder-[#667085] text-sm focus:outline-none focus:bg-white focus:border-[#D0D5DD] transition-all font-sans"
              />
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#344054] font-sans">
                Date of Birth
              </label>
              <input 
                type="date" 
                className="w-full px-4 py-2.5 rounded-lg bg-[#F2F4F7] border border-transparent text-[#101828] text-sm focus:outline-none focus:bg-white focus:border-[#D0D5DD] transition-all font-sans cursor-pointer"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-sm font-semibold text-[#344054] font-sans">
                Gender
              </label>
              <div className="relative">
                <select 
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-lg bg-[#F2F4F7] border border-transparent text-sm focus:outline-none focus:bg-white focus:border-[#D0D5DD] transition-all font-sans appearance-none pr-10 cursor-pointer ${
                    gender ? 'text-[#101828]' : 'text-[#667085]'
                  }`}
                >
                  <option value="" disabled>Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#667085]">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

            {/* Blood Group */}
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-sm font-semibold text-[#344054] font-sans">
                Blood Group
              </label>
              <div className="relative">
                <select 
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-lg bg-[#F2F4F7] border border-transparent text-sm focus:outline-none focus:bg-white focus:border-[#D0D5DD] transition-all font-sans appearance-none pr-10 cursor-pointer ${
                    bloodGroup ? 'text-[#101828]' : 'text-[#667085]'
                  }`}
                >
                  <option value="" disabled>Select blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#667085]">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

            {/* Area Detail */}
            <div className="col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#344054] font-sans">
                Area Detail
              </label>
              <input 
                type="text" 
                placeholder="House/Flat No., Building Name, Street" 
                className="w-full px-4 py-2.5 rounded-lg bg-[#F2F4F7] border border-transparent text-[#101828] placeholder-[#667085] text-sm focus:outline-none focus:bg-white focus:border-[#D0D5DD] transition-all font-sans"
              />
            </div>

            {/* Pin Code */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#344054] font-sans">
                Pin Code
              </label>
              <input 
                type="text" 
                placeholder="400001" 
                className="w-full px-4 py-2.5 rounded-lg bg-[#F2F4F7] border border-transparent text-[#101828] placeholder-[#667085] text-sm focus:outline-none focus:bg-white focus:border-[#D0D5DD] transition-all font-sans"
              />
            </div>

            {/* City */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#344054] font-sans">
                City
              </label>
              <input 
                type="text" 
                placeholder="Mumbai" 
                className="w-full px-4 py-2.5 rounded-lg bg-[#F2F4F7] border border-transparent text-[#101828] placeholder-[#667085] text-sm focus:outline-none focus:bg-white focus:border-[#D0D5DD] transition-all font-sans"
              />
            </div>

            {/* State */}
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-sm font-semibold text-[#344054] font-sans">
                State
              </label>
              <div className="relative">
                <select 
                  value={stateVal}
                  onChange={(e) => setStateVal(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-lg bg-[#F2F4F7] border border-transparent text-sm focus:outline-none focus:bg-white focus:border-[#D0D5DD] transition-all font-sans appearance-none pr-10 cursor-pointer ${
                    stateVal ? 'text-[#101828]' : 'text-[#667085]'
                  }`}
                >
                  <option value="" disabled>Select state</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#667085]">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

            {/* Country */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-[#344054] font-sans">
                Country
              </label>
              <input 
                type="text" 
                defaultValue="India" 
                className="w-full px-4 py-2.5 rounded-lg bg-[#F2F4F7] border border-transparent text-[#101828] placeholder-[#667085] text-sm focus:outline-none focus:bg-white focus:border-[#D0D5DD] transition-all font-sans font-medium"
              />
            </div>

          </div>

          {/* Footer Actions - Shrink-0 keeps it pinned inside the card container */}
          <div className="flex items-center justify-end gap-3 mt-2 shrink-0">
            <button 
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg font-semibold text-sm text-[#344054] border border-[#D0D5DD] bg-white hover:bg-gray-50 transition-colors cursor-pointer font-sans"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-[#101828] hover:bg-[#1D2939] transition-colors cursor-pointer font-sans"
            >
              Add User
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
