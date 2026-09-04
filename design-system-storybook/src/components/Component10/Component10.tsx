import React from 'react'
import { ImageCard, type ImageCardProps, type ImageCardState } from '../ImageCard/ImageCard'

export type Component10Property1 = 'Default' | 'Press' | 'Disabled' | 'Group 69' | 'Group 68'

export interface Component10Props extends Omit<ImageCardProps, 'property1' | 'Property 1'> {
  'Property 1'?: Component10Property1
  property1?: Component10Property1
}

export const Component10: React.FC<Component10Props> = ({
  'Property 1': rawProp1,
  property1 = rawProp1 || 'Default',
  ...rest
}) => {
  return (
    <ImageCard
      state={property1 as ImageCardState}
      {...rest}
    />
  )
}

export default Component10
