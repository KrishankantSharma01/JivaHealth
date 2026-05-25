import { NavLink } from 'react-router-dom'
import logoUrl from '../../assets/logo.svg'
import {
  LayoutDashboard, Building2, Users, Stethoscope,
  FlaskConical, Pill, Truck, Store,
  BarChart3, ShieldCheck, Settings, MessageSquare,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard',        to: '/'              },
  { icon: Building2,       label: 'Organization',     to: '/organization'  },
  { icon: Users,           label: 'User',              to: '/users'         },
  { icon: Stethoscope,     label: 'Service',           to: '/service'       },
  { icon: MessageSquare,   label: 'Consultation',      to: '/consultation'  },
  { icon: FlaskConical,    label: 'Lab test Booking',  to: '/lab-test'      },
  { icon: Pill,            label: 'Medicine Orders',   to: '/medicine'      },
  { icon: Truck,           label: 'Ambulance booking', to: '/ambulance'     },
  { icon: Store,           label: 'Vendor & Partners', to: '/vendors'       },
  { icon: BarChart3,       label: 'Report',            to: '/report'        },
  { icon: ShieldCheck,     label: 'User Access',       to: '/user-access'   },
  { icon: Settings,        label: 'Setting',           to: '/settings'      },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-30 flex flex-col sidebar-width h-screen bg-surface-card border-r border-border-light">

      {/* Logo */}
      <div className="flex justify-center items-center shrink-0 topbar-height border-b border-border-light px-4 ">
        <img src={logoUrl} alt="JivaHealth" className="h-14 w-auto object-contain" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="flex flex-col gap-0.5">
          {navItems.map(({ icon: Icon, label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium font-sans',
                    'transition-colors duration-150 truncate',
                    isActive
                      ? 'bg-[#E8F5F1] text-brand-green'
                      : 'text-text-secondary hover:bg-surface-page hover:text-text-primary',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className={`shrink-0 ${isActive ? 'text-brand-green' : 'text-text-secondary'}`}
                    />
                    <span className="truncate">{label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Profile footer */}
      <div className="shrink-0 border-t border-border-light p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-green text-white text-xs font-bold shrink-0">
            AD
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium font-sans text-text-primary truncate">Admin User</span>
            <span className="text-xs font-medium font-sans text-text-muted truncate">Admin@healthcare.com</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
