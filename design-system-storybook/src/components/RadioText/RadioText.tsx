import React, { useState } from 'react'
import './RadioText.css'

/**
 * Radio + Text
 *
 * Figma: ComponentSet "Radio + Text" in frame "components" (70:33)
 * Size: varies based on text length (radio: 20×20px + label)
 *
 * Variants (State):
 *   - Unselected → radio: empty circle, fill: --uedp-white (VariableID:1:4), border: --uedp-slate-900 (VariableID:51a...)
 *   - Selected   → radio: filled with --uedp-slate-900, dot visible
 *   - Disabled   → radio: --uedp-neutral-300 (VariableID:1:30), text: --uedp-neutral-400 (VariableID:1:31)
 */
export type RadioTextState = 'unselected' | 'selected' | 'disabled'

export interface RadioTextProps {
  /** Figma variant property: State */
  state?: RadioTextState
  /** Label text for the radio button */
  label?: string
  /** Radio group name (for native radio behavior) */
  name?: string
  /** Controlled selected state (optional, if not provided will be uncontrolled) */
  selected?: boolean
  /** Callback when radio state changes */
  onChange?: (selected: boolean) => void
  /** Disabled state */
  disabled?: boolean
  /** Unique identifier for accessibility */
  id?: string
  /** Additional CSS class */
  className?: string
}

export const RadioText: React.FC<RadioTextProps> = ({
  state = 'unselected',
  label = 'Radio label',
  name = 'radio-group',
  selected: controlledSelected,
  onChange,
  disabled = state === 'disabled',
  id = 'radio-text',
  className = '',
}) => {
  const [internalSelected, setInternalSelected] = useState(state === 'selected')
  const isControlled = controlledSelected !== undefined
  const isSelected = isControlled ? controlledSelected : internalSelected
  const isDisabled = state === 'disabled' || disabled

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalSelected(e.target.checked)
    }
    onChange?.(e.target.checked)
  }

  const stateClass = isDisabled ? 'disabled' : isSelected ? 'selected' : 'unselected'

  return (
    <label
      htmlFor={id}
      className={`RadioText RadioText--${stateClass} ${className}`}
    >
      <input
        id={id}
        type="radio"
        name={name}
        className="RadioText__input"
        checked={isSelected}
        onChange={handleChange}
        disabled={isDisabled}
        aria-label={label}
      />
      <span className="RadioText__circle">
        {isSelected && (
          <span className="RadioText__dot" />
        )}
      </span>
      <span className="RadioText__label">{label}</span>
    </label>
  )
}

export default RadioText
