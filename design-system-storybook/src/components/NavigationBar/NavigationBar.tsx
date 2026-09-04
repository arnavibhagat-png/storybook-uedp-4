import React from 'react'
import './NavigationBar.css'

export type NavigationBarTab = 'Home' | 'Community' | 'Awareness' | 'Specialist'

export interface NavigationBarProps {
  /** Selected active tab: Home | Community | Awareness | Specialist */
  activeTab?: NavigationBarTab
  /** Property 1 alias for Figma compatibility */
  'Property 1'?: NavigationBarTab
  property1?: NavigationBarTab
  /** Callback triggered when a tab is selected */
  onTabChange?: (tab: NavigationBarTab) => void
  /** Callback triggered when center mic button is clicked */
  onCenterButtonClick?: () => void
  /** Additional CSS class names */
  className?: string
}

const HomeIcon: React.FC = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M3 10.5L12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5H15v-6h-6v6H4.5A1.5 1.5 0 0 1 3 20v-9.5z' />
  </svg>
)

const CommunityIcon: React.FC = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='6' cy='6' r='2' fill='currentColor' />
    <circle cx='18' cy='6' r='2' fill='currentColor' />
    <circle cx='6' cy='18' r='2' fill='currentColor' />
    <circle cx='18' cy='18' r='2' fill='currentColor' />
    <path d='M6 8v4a3 3 0 0 0 3 3h4' />
    <path d='M18 8v4a3 3 0 0 1-3 3h-4' />
    <path d='M8 6h4a3 3 0 0 1 3 3v4' />
  </svg>
)

const AwarenessIcon: React.FC = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z' />
    <circle cx='12' cy='12' r='3.2' fill='none' stroke='currentColor' strokeWidth='1.8' />
  </svg>
)

const SpecialistIcon: React.FC = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z' />
  </svg>
)

const MicSparkleIcon: React.FC = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'
    stroke='#ffffff'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='10' y='5' width='8' height='12' rx='4' />
    <path d='M6 13a8 8 0 0 0 16 0' />
    <line x1='14' y1='21' x2='14' y2='25' />
    <line x1='10' y1='25' x2='18' y2='25' />
    <path
      d='M22.5 2.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z'
      fill='#ffffff'
      stroke='none'
    />
  </svg>
)

interface NavItemConfig {
  id: NavigationBarTab
  label: string
  icon: React.FC
}

const LEFT_ITEMS: NavItemConfig[] = [
  { id: 'Home', label: 'Home', icon: HomeIcon },
  { id: 'Community', label: 'Community', icon: CommunityIcon },
]

const RIGHT_ITEMS: NavItemConfig[] = [
  { id: 'Awareness', label: 'Awareness', icon: AwarenessIcon },
  { id: 'Specialist', label: 'Specialist', icon: SpecialistIcon },
]

export const NavigationBar: React.FC<NavigationBarProps> = ({
  activeTab,
  'Property 1': rawProp1,
  property1,
  onTabChange,
  onCenterButtonClick,
  className = '',
}) => {
  const currentTab: NavigationBarTab =
    activeTab || rawProp1 || property1 || 'Home'

  const [selected, setSelected] = React.useState<NavigationBarTab>(currentTab)

  React.useEffect(() => {
    setSelected(currentTab)
  }, [currentTab])

  const handleSelect = (tab: NavigationBarTab) => {
    setSelected(tab)
    onTabChange?.(tab)
  }

  const renderItem = ({ id, label, icon: Icon }: NavItemConfig) => {
    const isActive = selected === id

    return (
      <button
        key={id}
        id={'nav-item-' + id.toLowerCase()}
        type='button'
        className={[
          'NavigationBar__item',
          isActive ? 'NavigationBar__item--active' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={() => handleSelect(id)}
        aria-current={isActive ? 'page' : undefined}
        aria-label={label}
      >
        <span className='NavigationBar__icon-container'>
          {isActive && <span className='NavigationBar__glow' aria-hidden='true' />}
          <span className='NavigationBar__icon'>
            <Icon />
          </span>
        </span>
        <span className='NavigationBar__label'>{label}</span>
      </button>
    )
  }

  return (
    <nav
      id={'navigation-bar-' + selected.toLowerCase()}
      className={['NavigationBar', className].filter(Boolean).join(' ')}
      aria-label='Primary bottom navigation'
    >
      {/* Center Arch / Dome Backdrop */}
      <div className='NavigationBar__dome-backdrop' />

      {/* Left Items */}
      <div className='NavigationBar__section NavigationBar__section--left'>
        {LEFT_ITEMS.map(renderItem)}
      </div>

      {/* Center Floating Mic + Sparkle Button */}
      <div className='NavigationBar__center-slot'>
        <button
          id='nav-center-mic-button'
          type='button'
          className='NavigationBar__center-button'
          onClick={onCenterButtonClick}
          aria-label='Voice search & assistant'
        >
          <MicSparkleIcon />
        </button>
      </div>

      {/* Right Items */}
      <div className='NavigationBar__section NavigationBar__section--right'>
        {RIGHT_ITEMS.map(renderItem)}
      </div>
    </nav>
  )
}

export default NavigationBar
