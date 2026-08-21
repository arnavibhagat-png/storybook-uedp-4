import React from 'react'
import './PaginationItem.css'

export type PaginationItemState = 'default' | 'active' | 'disabled' | 'next' | 'previous'

export interface PaginationItemProps {
  state?: PaginationItemState
  label?: string | number
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
  className?: string
}

const PreviousIcon: React.FC = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      d='M10 2L4 8L10 14'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const NextIcon: React.FC = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      d='M6 2L12 8L6 14'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const PaginationItem: React.FC<PaginationItemProps> = ({
  state = 'default',
  label = '1',
  onClick,
  disabled = state === 'disabled',
  ariaLabel,
  className = '',
}) => {
  const isDisabled = state === 'disabled' || disabled
  const isPrevious = state === 'previous'
  const isNext = state === 'next'

  const defaultAriaLabel = isNext
    ? 'Next page'
    : isPrevious
      ? 'Previous page'
      : 'Page ' + label

  return (
    <button
      id={'pagination-item-' + state}
      className={['PaginationItem', 'PaginationItem--' + state, className].filter(Boolean).join(' ')}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={ariaLabel || defaultAriaLabel}
      aria-current={state === 'active' ? 'page' : undefined}
      type='button'
    >
      {isPrevious ? <PreviousIcon /> : isNext ? <NextIcon /> : label}
    </button>
  )
}

export default PaginationItem
