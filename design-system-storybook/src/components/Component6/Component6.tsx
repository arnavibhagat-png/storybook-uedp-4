import React from 'react'
import './Component6.css'

export type Component6Property1 = 'default' | 'pressed' | 'disabled'

export interface Component6Props {
  'Property 1'?: Component6Property1
  property1?: Component6Property1
  label?: string
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
}

export const Component6: React.FC<Component6Props> = ({
  'Property 1': rawProp1,
  property1 = rawProp1 || 'default',
  label = 'Quiz',
  icon,
  onClick,
  className = '',
}) => {
  const isDisabled = property1 === 'disabled'

  return (
    <button
      id={'component6-' + property1}
      className={['Component6', 'Component6--' + property1, className].filter(Boolean).join(' ')}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      type='button'
    >
      <span className='Component6__icon'>
        {icon || (
          <svg width='28' height='28' viewBox='0 0 28 28' fill='none'>
            <path
              d='M14 4C8.48 4 4 8.48 4 14s4.48 10 10 10 10-4.48 10-10S19.52 4 14 4zm1 15h-2v-6h2v6zm0-8h-2V9h2v2z'
              fill='currentColor'
            />
          </svg>
        )}
      </span>
      <span className='Component6__label'>{label}</span>
    </button>
  )
}

export default Component6
