import React, { useState } from 'react'
import './ToggleButton.css'

export type ToggleButtonVariant = 'mama' | 'baby'
export type ToggleButtonState = 'on' | 'off'

export interface ToggleButtonProps {
  /** Figma variant — 'mama' uses rose/pink knob, 'baby' uses gold/yellow knob */
  variant?: ToggleButtonVariant
  /** Controlled toggle state */
  toggled?: boolean
  /** Default state when uncontrolled */
  defaultToggled?: boolean
  /** Label text. Defaults to the variant name capitalised */
  label?: string
  /** Called with the new toggled value on each click */
  onChange?: (toggled: boolean) => void
  /** Disables interaction */
  disabled?: boolean
  /** Accessible label */
  ariaLabel?: string
  /** Additional class name */
  className?: string
  /** Inline styles */
  style?: React.CSSProperties
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  variant = 'mama',
  toggled,
  defaultToggled = false,
  label,
  onChange,
  disabled = false,
  ariaLabel,
  className = '',
  style,
}) => {
  // Support both controlled & uncontrolled usage
  const isControlled = toggled !== undefined
  const [internalToggled, setInternalToggled] = useState(defaultToggled)
  const isOn = isControlled ? toggled! : internalToggled

  const handleClick = () => {
    if (disabled) return
    const next = !isOn
    if (!isControlled) setInternalToggled(next)
    onChange?.(next)
  }

  const displayLabel = label ?? (variant === 'mama' ? 'Mama' : 'Baby')
  const stateClass = isOn ? 'ToggleButton--on' : 'ToggleButton--off'

  return (
    <button
      id={`toggle-button-${variant}`}
      role="switch"
      aria-checked={isOn}
      aria-label={ariaLabel ?? `${displayLabel} toggle, ${isOn ? 'on' : 'off'}`}
      aria-disabled={disabled}
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={[
        'ToggleButton',
        `ToggleButton--${variant}`,
        stateClass,
        disabled ? 'ToggleButton--disabled' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <span className="ToggleButton__label">{displayLabel}</span>
      <span className="ToggleButton__knob" aria-hidden="true" />
    </button>
  )
}

export default ToggleButton
