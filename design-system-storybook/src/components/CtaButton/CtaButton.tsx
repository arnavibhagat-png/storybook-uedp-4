import React from 'react'
import './CtaButton.css'

export type CtaButtonState = 'default' | 'pressed' | 'disabled'

export interface CtaButtonProps {
  /** Figma variant property: 'default' | 'pressed' | 'disabled' */
  state?: CtaButtonState
  /** Text label displayed below the icon */
  label?: string
  /** Custom icon node. Defaults to the Quiz clipboard SVG from Figma */
  icon?: React.ReactNode
  /** Click handler */
  onClick?: () => void
  /** Accessible label */
  ariaLabel?: string
  /** Additional class name */
  className?: string
  /** Inline styles */
  style?: React.CSSProperties
}

/** Default Quiz clipboard icon — matches Figma "Cta buttton" icon+text */
const QuizIcon: React.FC<{ color?: string }> = ({ color = 'currentColor' }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Clipboard body */}
    <rect x="5" y="6" width="18" height="20" rx="2" stroke={color} strokeWidth="1.8" fill="none" />
    {/* Clipboard clip */}
    <path
      d="M10 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
    {/* Checkmark line 1 */}
    <line x1="9" y1="13" x2="19" y2="13" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    {/* Checkmark line 2 */}
    <line x1="9" y1="17" x2="16" y2="17" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    {/* Checkmark line 3 */}
    <line x1="9" y1="21" x2="14" y2="21" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const CtaButton: React.FC<CtaButtonProps> = ({
  state = 'default',
  label = 'Quiz',
  icon,
  onClick,
  ariaLabel,
  className = '',
  style,
}) => {
  const isDisabled = state === 'disabled'

  return (
    <button
      id={`cta-button-${state}`}
      type="button"
      role="button"
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={ariaLabel ?? `${label} button`}
      onClick={isDisabled ? undefined : onClick}
      className={[
        'CtaButton',
        `CtaButton--${state}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <span className="CtaButton__icon">
        {icon ?? <QuizIcon />}
      </span>
      <span className="CtaButton__label">{label}</span>
    </button>
  )
}

export default CtaButton
