import React from 'react'
import './Component7.css'

export type Component7Property1 = 'active' | 'inactive'

export interface Component7Props {
  'Property 1'?: Component7Property1
  property1?: Component7Property1
  heading?: string
  body?: string
  footer?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export const Component7: React.FC<Component7Props> = ({
  'Property 1': rawProp1,
  property1 = rawProp1 || 'inactive',
  heading = 'Card Title',
  body = 'Card description text goes here.',
  footer,
  children,
  className = '',
}) => {
  const isActive = property1 === 'active'

  return (
    <div
      id={'component7-' + property1}
      className={['Component7', 'Component7--' + property1, className].filter(Boolean).join(' ')}
      role='article'
      aria-selected={isActive}
    >
      <div className='Component7__content'>
        {children || (
          <>
            <h3 className='Component7__heading'>{heading}</h3>
            <p className='Component7__body'>{body}</p>
          </>
        )}
        {footer}
      </div>
      {isActive && <div className='Component7__indicator' aria-label='Active indicator' />}
    </div>
  )
}

export default Component7
