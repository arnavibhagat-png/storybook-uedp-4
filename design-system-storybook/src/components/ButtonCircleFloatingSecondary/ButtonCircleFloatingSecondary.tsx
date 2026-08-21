import React from 'react'
import './ButtonCircleFloatingSecondary.css'

/**
 * Button Circle Floating Secondary
 *
 * Figma: ComponentSet "Button-circle-floating-secondary" in frame "components" (21:27)
 * Size: 50×50px | cornerRadius: 25px (full circle)
 *
 * Variants (State):
 *   - Default  → fill: --uedp-yellow-400 (VariableID:1:86), icon: --uedp-black (VariableID:1:3)
 *   - Pressed  → fill: --uedp-yellow-400 with scale-down interaction
 *   - Disabled → fill: --uedp-neutral-300 (VariableID:1:30), icon: --uedp-neutral-400 (VariableID:1:31)
 */
export type ButtonCircleFloatingSecondaryState = 'default' | 'pressed' | 'disabled'

export interface ButtonCircleFloatingSecondaryProps {
  /** Figma variant property: State */
  state?: ButtonCircleFloatingSecondaryState
  /** Icon element (SVG or ReactNode) */
  icon?: React.ReactNode
  /** Aria label for accessibility */
  ariaLabel?: string
  /** Click handler */
  onClick?: () => void
  /** Additional CSS class */
  className?: string
}

export const ButtonCircleFloatingSecondary: React.FC<ButtonCircleFloatingSecondaryProps> = ({
  state = 'default',
  icon,
  ariaLabel = 'Floating action button',
  onClick,
  className = '',
}) => {
  const isDisabled = state === 'disabled'

  return (
    <button
      id={`button-circle-floating-secondary-${state}`}
      className={`ButtonCircleFloatingSecondary ButtonCircleFloatingSecondary--${state} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={ariaLabel}
      type="button"
    >
      <span className="ButtonCircleFloatingSecondary__icon">
        {icon || (
          /* Default SVG icon (add icon) */
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
          </svg>
        )}
      </span>
    </button>
  )
}

export default ButtonCircleFloatingSecondary
