import React from 'react'
import './Component11.css'

export type Component11Property1 = 'default' | 'hover' | 'pressed' | 'disabled' | 'grp tired'

export interface Component11Props {
  'Property 1'?: Component11Property1
  property1?: Component11Property1
  label?: string
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
}

export const Component11: React.FC<Component11Props> = ({
  'Property 1': rawProp1,
  property1 = rawProp1 || 'default',
  label = 'Button',
  icon,
  onClick,
  className = '',
}) => {
  const variantClass = 'Component11--' + (property1 === 'grp tired' ? 'grp-tired' : property1)
  const isDisabled = property1 === 'disabled'

  return (
    <button
      id={'component11-' + property1.replace(/\s+/g, '-')}
      className={['Component11', variantClass, className].filter(Boolean).join(' ')}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      type='button'
    >
      {icon && <span className='Component11__icon'>{icon}</span>}
      {label}
    </button>
  )
}

export default Component11
