import React, { useState } from 'react'
import './CheckboxText.css'

/**
 * Checkbox + Text
 *
 * Figma: ComponentSet "Checkbox + Text" in frame "components" (22:73)
 * Size: varies based on text length (checkbox: 20×20px + label)
 *
 * Variants (State):
 *   - Unchecked  → checkbox: empty, fill: --uedp-white (VariableID:1:4), border: --uedp-slate-900 (VariableID:51a...)
 *   - Checked    → checkbox: filled with --uedp-slate-900, label text visible
 *   - Disabled   → checkbox: --uedp-neutral-300 (VariableID:1:30), text: --uedp-neutral-400 (VariableID:1:31)
 */
export type CheckboxTextState = 'unchecked' | 'checked' | 'disabled'

export interface CheckboxTextProps {
  /** Figma variant property: State */
  state?: CheckboxTextState
  /** Label text for the checkbox */
  label?: string
  /** Controlled checked state (optional, if not provided will be uncontrolled) */
  checked?: boolean
  /** Callback when checkbox state changes */
  onChange?: (checked: boolean) => void
  /** Disabled state */
  disabled?: boolean
  /** Unique identifier for accessibility */
  id?: string
  /** Additional CSS class */
  className?: string
}

export const CheckboxText: React.FC<CheckboxTextProps> = ({
  state = 'unchecked',
  label = 'Checkbox label',
  checked: controlledChecked,
  onChange,
  disabled = state === 'disabled',
  id = 'checkbox-text',
  className = '',
}) => {
  const [internalChecked, setInternalChecked] = useState(state === 'checked')
  const isControlled = controlledChecked !== undefined
  const isChecked = isControlled ? controlledChecked : internalChecked
  const isDisabled = state === 'disabled' || disabled

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(e.target.checked)
    }
    onChange?.(e.target.checked)
  }

  const stateClass = isDisabled ? 'disabled' : isChecked ? 'checked' : 'unchecked'

  return (
    <label
      htmlFor={id}
      className={`CheckboxText CheckboxText--${stateClass} ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        className="CheckboxText__input"
        checked={isChecked}
        onChange={handleChange}
        disabled={isDisabled}
        aria-label={label}
      />
      <span className="CheckboxText__box">
        {isChecked && (
          <svg
            className="CheckboxText__checkmark"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 8L6.5 11.5L13 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="CheckboxText__label">{label}</span>
    </label>
  )
}

export default CheckboxText
