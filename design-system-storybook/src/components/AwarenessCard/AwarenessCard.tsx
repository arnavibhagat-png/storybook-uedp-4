import React from 'react'
import './AwarenessCard.css'
import defaultHeroImage from '../../assets/awareness-tired-woman.jpg'

export type AwarenessCardState = 'default' | 'hover' | 'pressed' | 'disabled'

export interface AwarenessCardItem {
  id?: string
  text: string
  icon?: React.ReactNode
}

export interface AwarenessCardProps {
  /** Figma variant state */
  state?: AwarenessCardState
  /** Property 1 alias for Figma compatibility */
  'Property 1'?: AwarenessCardState
  /** Card main headline */
  title?: string
  /** List of bullet items with icons */
  items?: (string | AwarenessCardItem)[]
  /** Call-to-action button label */
  buttonText?: string
  /** Image source url */
  imageSrc?: string
  /** Image alt text */
  imageAlt?: string
  /** Callback on button click */
  onButtonClick?: () => void
  /** Callback on card click */
  onClick?: () => void
  /** Additional CSS class names */
  className?: string
}

const InfoCircleIcon: React.FC = () => (
  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <circle cx='12' cy='12' r='10' />
    <path d='M12 16v-4' />
    <path d='M12 8h.01' />
  </svg>
)

const PenFeatherIcon: React.FC = () => (
  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M12 20h9' />
    <path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
  </svg>
)

const CalendarIcon: React.FC = () => (
  <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
    <line x1='16' y1='2' x2='16' y2='6' />
    <line x1='8' y1='2' x2='8' y2='6' />
    <line x1='3' y1='10' x2='21' y2='10' />
  </svg>
)

const DEFAULT_ITEMS: AwarenessCardItem[] = [
  { text: 'Postpartum fatigue causes', icon: <InfoCircleIcon /> },
  { text: 'Energy recovery tips', icon: <PenFeatherIcon /> },
  { text: 'Sleep patterns with newborn', icon: <CalendarIcon /> },
]

export const AwarenessCard: React.FC<AwarenessCardProps> = ({
  state,
  'Property 1': rawProp1,
  title = 'Why am I always tired?',
  items = DEFAULT_ITEMS,
  buttonText = 'Boost energy',
  imageSrc = defaultHeroImage,
  imageAlt = 'Tired woman resting head with sunlight through blinds',
  onButtonClick,
  onClick,
  className = '',
}) => {
  const currentState: AwarenessCardState = state || rawProp1 || 'default'
  const isDisabled = currentState === 'disabled'

  const normalizedItems: AwarenessCardItem[] = items.map((item, index) => {
    if (typeof item === 'string') {
      const defaultIcons = [<InfoCircleIcon key="1" />, <PenFeatherIcon key="2" />, <CalendarIcon key="3" />]
      return {
        text: item,
        icon: defaultIcons[index % defaultIcons.length],
      }
    }
    return item
  })

  const handleCardClick = () => {
    if (isDisabled) return
    onClick?.()
  }

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isDisabled) return
    onButtonClick?.()
  }

  return (
    <article
      id={'awareness-card-' + currentState}
      className={[
        'AwarenessCard',
        `AwarenessCard--${currentState}`,
        isDisabled ? 'AwarenessCard--disabled' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={handleCardClick}
      aria-disabled={isDisabled}
      role='region'
      aria-label={title}
    >
      {/* Background Image & Visual Blending Layer */}
      <div className='AwarenessCard__image-container'>
        <img
          src={imageSrc}
          alt={imageAlt}
          className='AwarenessCard__image'
          loading='lazy'
        />
        <div className='AwarenessCard__gradient-overlay' />
      </div>

      {/* Content Column */}
      <div className='AwarenessCard__content'>
        <h3 className='AwarenessCard__title'>{title}</h3>

        <ul className='AwarenessCard__list'>
          {normalizedItems.map((item, idx) => (
            <li key={item.id || idx} className='AwarenessCard__list-item'>
              <span className='AwarenessCard__item-icon' aria-hidden='true'>
                {item.icon || <InfoCircleIcon />}
              </span>
              <span className='AwarenessCard__item-text'>{item.text}</span>
            </li>
          ))}
        </ul>

        <button
          type='button'
          className='AwarenessCard__button'
          onClick={handleButtonClick}
          disabled={isDisabled}
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      </div>
    </article>
  )
}

export default AwarenessCard
