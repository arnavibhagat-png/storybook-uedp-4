import React from 'react'
import './ImageCard.css'
import defaultWorkoutImage from '../../assets/postpartum-workout.jpg'

export type ImageCardState =
  | 'Default'
  | 'Press'
  | 'Disabled'
  | 'default'
  | 'press'
  | 'pressed'
  | 'disabled'
  | 'Group 69'
  | 'Group 68'

export interface ImageCardProps {
  /** Figma variant state: Default | Press | Disabled */
  state?: ImageCardState
  /** Property 1 alias for Figma compatibility */
  'Property 1'?: ImageCardState
  property1?: ImageCardState
  /** Main card title (supports multi-line or standard text) */
  title?: string
  /** Subtitle / duration metadata text */
  meta?: string
  subtitle?: string
  /** Optional badge/watermark overlay text inside image */
  watermark?: string
  /** Image source URL */
  imageSrc?: string
  /** Image alt text */
  imageAlt?: string
  /** Custom icon for meta row */
  icon?: React.ReactNode
  /** Card click callback */
  onClick?: () => void
  /** Custom CSS classes */
  className?: string
}

const ScreenWatchIcon: React.FC = () => (
  <svg
    width='13'
    height='13'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='3' width='20' height='14' rx='2' ry='2' />
    <line x1='8' y1='21' x2='16' y2='21' />
    <line x1='12' y1='17' x2='12' y2='21' />
  </svg>
)

export const ImageCard: React.FC<ImageCardProps> = ({
  state,
  'Property 1': rawProp1,
  property1,
  title = 'Postpartum Workout',
  meta,
  subtitle,
  watermark = 'Pelvic Floor\nScience, Simplified.',
  imageSrc = defaultWorkoutImage,
  imageAlt = 'Postpartum Workout illustration',
  icon,
  onClick,
  className = '',
}) => {
  const rawState = state || rawProp1 || property1 || 'Default'
  const normalizedState = rawState.toLowerCase().replace(/\s+/g, '')

  const isPress = normalizedState === 'press' || normalizedState === 'pressed'
  const isDisabled =
    normalizedState === 'disabled' || normalizedState === 'group68'

  const metaText = meta || subtitle || '1 min Watch'

  // Render title with line break if it matches "Postpartum Workout" or has newlines
  const renderTitle = () => {
    if (title.includes('\n')) {
      return title.split('\n').map((line, idx) => (
        <span key={idx} className='ImageCard__title-line'>
          {line}
        </span>
      ))
    }
    if (title === 'Postpartum Workout') {
      return (
        <>
          <span className='ImageCard__title-line'>Postpartum</span>
          <span className='ImageCard__title-line'>Workout</span>
        </>
      )
    }
    return title
  }

  const handleCardClick = () => {
    if (isDisabled) return
    onClick?.()
  }

  return (
    <article
      id={'image-card-' + normalizedState}
      className={[
        'ImageCard',
        `ImageCard--${normalizedState}`,
        isPress ? 'ImageCard--press' : '',
        isDisabled ? 'ImageCard--disabled' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={handleCardClick}
      role={onClick && !isDisabled ? 'button' : 'article'}
      tabIndex={onClick && !isDisabled ? 0 : undefined}
      aria-disabled={isDisabled}
      aria-label={typeof title === 'string' ? title : 'Image Card'}
    >
      {/* Top Image Container */}
      <div className='ImageCard__image-container'>
        <img
          src={imageSrc}
          alt={imageAlt}
          className='ImageCard__image'
          loading='lazy'
        />
        {watermark && (
          <div className='ImageCard__watermark'>
            {watermark.split('\n').map((line, idx) => (
              <span key={idx} className='ImageCard__watermark-line'>
                {line}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Info Section */}
      <div className='ImageCard__info'>
        <h3 className='ImageCard__title'>{renderTitle()}</h3>
        <div className='ImageCard__meta'>
          <span className='ImageCard__meta-icon' aria-hidden='true'>
            {icon || <ScreenWatchIcon />}
          </span>
          <span className='ImageCard__meta-text'>{metaText}</span>
        </div>
      </div>
    </article>
  )
}

export default ImageCard
