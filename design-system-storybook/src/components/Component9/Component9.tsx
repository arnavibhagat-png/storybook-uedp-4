import React from 'react'
import './Component9.css'

export type Component9Property1 = 'Home' | 'Community' | 'Awareness' | 'Specialist'

export interface Component9Props {
  'Property 1'?: Component9Property1
  property1?: Component9Property1
  onTabChange?: (tab: Component9Property1) => void
  className?: string
}

const HomeIcon: React.FC = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
    <path d='M10 2L2 8v10h5v-5h6v5h5V8L10 2z' fill='currentColor' />
  </svg>
)

const CommunityIcon: React.FC = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
    <circle cx='7' cy='7' r='3' fill='currentColor' />
    <circle cx='13' cy='7' r='3' fill='currentColor' opacity='0.6' />
    <path d='M1 17c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6' stroke='currentColor' strokeWidth='1.5' fill='none' />
  </svg>
)

const AwarenessIcon: React.FC = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
    <circle cx='10' cy='10' r='7' stroke='currentColor' strokeWidth='1.5' fill='none' />
    <path d='M10 6v4l3 3' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
  </svg>
)

const SpecialistIcon: React.FC = () => (
  <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
    <path d='M10 2l2.4 5 5.6.8-4 3.9.9 5.3L10 14.5 5.1 17l.9-5.3L2 7.8l5.6-.8L10 2z' fill='currentColor' />
  </svg>
)

const NAV_ITEMS: { id: Component9Property1; label: string; icon: React.FC }[] = [
  { id: 'Home', label: 'Home', icon: HomeIcon },
  { id: 'Community', label: 'Community', icon: CommunityIcon },
  { id: 'Awareness', label: 'Awareness', icon: AwarenessIcon },
  { id: 'Specialist', label: 'Specialist', icon: SpecialistIcon },
]

export const Component9: React.FC<Component9Props> = ({
  'Property 1': rawProp1,
  property1 = rawProp1 || 'Home',
  onTabChange,
  className = '',
}) => {
  const [active, setActive] = React.useState<Component9Property1>(property1)

  React.useEffect(() => {
    setActive(property1)
  }, [property1])

  const handleClick = (tab: Component9Property1) => {
    setActive(tab)
    onTabChange?.(tab)
  }

  return (
    <nav
      id='component9-navbar'
      className={['Component9', className].filter(Boolean).join(' ')}
      aria-label='Main navigation'
    >
      <div className='Component9__items'>
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            id={'component9-item-' + id.toLowerCase()}
            className={['Component9__item', active === id ? 'Component9__item--active' : ''].filter(Boolean).join(' ')}
            onClick={() => handleClick(id)}
            aria-current={active === id ? 'page' : undefined}
            type='button'
          >
            <span className='Component9__icon'><Icon /></span>
            <span className='Component9__label'>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Component9
