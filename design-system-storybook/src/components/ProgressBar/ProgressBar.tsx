import React from 'react'
import './ProgressBar.css'

export type ProgressBarState = 'disabled' | '10%' | '50%' | '80%' | '100%'

export interface ProgressBarProps {
  /**
   * Figma variant state: 'disabled' | '10%' | '50%' | '80%' | '100%'
   */
  state?: ProgressBarState
  /**
   * Numeric progress percentage (0 - 100).
   * Overridden if `state` is explicitly provided.
   */
  value?: number
  /**
   * Total number of segmented dashes (default: 4 from Figma design)
   */
  totalSegments?: number
  /**
   * Disables the progress bar and displays neutral grey dashes
   */
  disabled?: boolean
  /**
   * Accessible ARIA label
   */
  ariaLabel?: string
  /**
   * Additional CSS class name
   */
  className?: string
  /**
   * Inline styling
   */
  style?: React.CSSProperties
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  state,
  value,
  totalSegments = 4,
  disabled = false,
  ariaLabel,
  className = '',
  style,
}) => {
  const isDisabled = state === 'disabled' || disabled

  // Calculate filled segments count based on state or value
  let filledCount = 0
  let progressPercent = 0

  if (isDisabled) {
    filledCount = 0
    progressPercent = 0
  } else if (state) {
    switch (state) {
      case '10%':
        filledCount = 1
        progressPercent = 10
        break
      case '50%':
        filledCount = 2
        progressPercent = 50
        break
      case '80%':
        filledCount = 3
        progressPercent = 80
        break
      case '100%':
        filledCount = totalSegments
        progressPercent = 100
        break
      default:
        filledCount = 0
        progressPercent = 0
    }
  } else if (typeof value === 'number') {
    const clampedValue = Math.max(0, Math.min(100, value))
    progressPercent = clampedValue
    if (clampedValue === 0) {
      filledCount = 0
    } else if (clampedValue <= 25) {
      filledCount = 1
    } else if (clampedValue <= 50) {
      filledCount = 2
    } else if (clampedValue <= 80) {
      filledCount = 3
    } else {
      filledCount = totalSegments
    }
  }

  const effectiveState = isDisabled ? 'disabled' : state || `${progressPercent}%`

  return (
    <div
      role="progressbar"
      aria-valuenow={progressPercent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel || `Progress ${effectiveState}`}
      aria-disabled={isDisabled}
      className={[
        'ProgressBar',
        isDisabled ? 'ProgressBar--disabled' : '',
        `ProgressBar--state-${state || 'custom'}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {Array.from({ length: totalSegments }).map((_, index) => {
        const isFilled = !isDisabled && index < filledCount
        return (
          <div
            key={index}
            className={[
              'ProgressBar__segment',
              isFilled ? 'ProgressBar__segment--filled' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          />
        )
      })}
    </div>
  )
}

export default ProgressBar
