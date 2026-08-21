import React from 'react'
import './Component10.css'

export type Component10Property1 = 'Default' | 'Group 69' | 'Group 68'

export interface Component10Props {
  'Property 1'?: Component10Property1
  property1?: Component10Property1
  title?: string
  subtitle?: string
  imageSrc?: string
  imageAlt?: string
  className?: string
  onClick?: () => void
}

const ImagePlaceholder: React.FC = () => (
  <svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
    <rect width='40' height='40' rx='8' fill='#e5e6eb' />
    <path d='M12 28l7-9 5 6 3-4 5 7H12z' fill='#a1a3aa' />
    <circle cx='27' cy='16' r='3' fill='#a1a3aa' />
  </svg>
)

export const Component10: React.FC<Component10Props> = ({
  'Property 1': rawProp1,
  property1 = rawProp1 || 'Default',
  title = 'Card Title',
  subtitle = 'Subtitle',
  imageSrc,
  imageAlt = '',
  className = '',
  onClick,
}) => {
  const variantClass = 'Component10--' + property1.replace(/\s+/g, '')

  return (
    <article
      id={'component10-' + property1.replace(/\s+/g, '-')}
      className={['Component10', variantClass, className].filter(Boolean).join(' ')}
      onClick={onClick}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      <div className='Component10__image'>
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} />
        ) : (
          <div className='Component10__image-placeholder'>
            <ImagePlaceholder />
          </div>
        )}
      </div>
      <div className='Component10__info'>
        <p className='Component10__title'>{title}</p>
        <p className='Component10__subtitle'>{subtitle}</p>
      </div>
    </article>
  )
}

export default Component10
