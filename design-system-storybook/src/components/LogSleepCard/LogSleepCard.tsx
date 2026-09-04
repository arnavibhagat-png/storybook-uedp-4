import React from 'react'
import './LogSleepCard.css'

export type LogSleepCardState = 'active' | 'inactive'

export interface LogSleepCardProps {
  /** Figma variant state: active | inactive */
  state?: LogSleepCardState
  /** Property 1 alias for Figma compatibility */
  'Property 1'?: LogSleepCardState
  property1?: LogSleepCardState
  /** Prefix text for stat banner */
  statText?: string
  /** Highlighted percentage/stat text */
  statHighlight?: string
  /** Suffix text for stat banner */
  statSuffix?: string
  /** Main motivational quote/heading */
  heading?: string
  /** CTA button label */
  buttonText?: string
  /** Callback on button click */
  onButtonClick?: () => void
  /** Callback on card click */
  onClick?: () => void
  /** Custom CSS class names */
  className?: string
}

export const LogSleepCard: React.FC<LogSleepCardProps> = ({
  state,
  'Property 1': rawProp1,
  property1,
  statText = 'Sleep improved by ',
  statHighlight = '15%',
  statSuffix = ' since April 10th',
  heading = 'You are doing amazing Mama!\nOne day at a time',
  buttonText = 'Log Sleep',
  onButtonClick,
  onClick,
  className = '',
}) => {
  const currentState: LogSleepCardState = state || rawProp1 || property1 || 'active'
  const isActive = currentState === 'active'

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isActive) return
    onButtonClick?.()
  }

  const handleCardClick = () => {
    if (!isActive) return
    onClick?.()
  }

  return (
    <article
      id={'log-sleep-card-' + currentState}
      className={[
        'LogSleepCard',
        `LogSleepCard--${currentState}`,
        isActive ? 'LogSleepCard--active' : 'LogSleepCard--inactive',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={handleCardClick}
      role={onClick && isActive ? 'button' : 'article'}
      aria-label='Sleep tracker status card'
    >
      <div className='LogSleepCard__content'>
        {/* Metric / Stat Header */}
        <p className='LogSleepCard__stat'>
          {statText}
          <span className='LogSleepCard__stat-highlight'>{statHighlight}</span>
          {statSuffix}
        </p>

        {/* Serif Italic Motivational Heading */}
        <h3 className='LogSleepCard__heading'>
          {heading.split('\n').map((line, idx) => (
            <span key={idx} className='LogSleepCard__heading-line'>
              {line}
            </span>
          ))}
        </h3>

        {/* CTA Button */}
        <button
          type='button'
          className={[
            'LogSleepCard__button',
            `LogSleepCard__button--${currentState}`,
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={handleButtonClick}
          disabled={!isActive}
          aria-disabled={!isActive}
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      </div>
    </article>
  )
}

export default LogSleepCard
