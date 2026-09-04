import React from 'react'
import { LogSleepCard, type LogSleepCardProps, type LogSleepCardState } from '../LogSleepCard/LogSleepCard'

export type Component7Property1 = 'active' | 'inactive'

export interface Component7Props extends Omit<LogSleepCardProps, 'property1' | 'Property 1'> {
  'Property 1'?: Component7Property1
  property1?: Component7Property1
}

export const Component7: React.FC<Component7Props> = ({
  'Property 1': rawProp1,
  property1 = rawProp1 || 'active',
  ...rest
}) => {
  return (
    <LogSleepCard
      state={property1 as LogSleepCardState}
      {...rest}
    />
  )
}

export default Component7
