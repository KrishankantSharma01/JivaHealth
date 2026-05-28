export default function UserDetailTabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex items-center gap-1 border-b border-border-light overflow-x-auto hide-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        const Icon = tab.icon
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={[
              'flex items-center gap-2 px-4 py-3 text-sm font-semibold font-sans whitespace-nowrap transition-colors duration-150 border-b-2',
              isActive
                ? 'text-brand-green border-brand-green'
                : 'text-text-secondary border-transparent hover:text-text-primary',
            ].join(' ')}
          >
            {Icon && (
              <Icon 
                size={16} 
                strokeWidth={2} 
                className={isActive ? 'text-brand-green' : 'text-text-secondary'} 
              />
            )}
            <span>{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
