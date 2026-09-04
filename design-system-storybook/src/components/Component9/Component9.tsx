import React from 'react'
import {
  NavigationBar,
  type NavigationBarProps,
  type NavigationBarTab,
} from '../NavigationBar/NavigationBar'

export type Component9Property1 = NavigationBarTab

export interface Component9Props
  extends Omit<NavigationBarProps, 'property1' | 'Property 1' | 'activeTab'> {
  'Property 1'?: Component9Property1
  property1?: Component9Property1
  activeTab?: Component9Property1
}

export const Component9: React.FC<Component9Props> = ({
  'Property 1': rawProp1,
  property1 = rawProp1 || 'Home',
  activeTab,
  ...rest
}) => {
  return (
    <NavigationBar
      activeTab={activeTab || property1}
      {...rest}
    />
  )
}

export default Component9
