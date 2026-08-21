import type { Preview } from '@storybook/react'
import '../src/styles/figma-tokens.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: undefined,
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8F9FA' },
        { name: 'dark', value: '#131927' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
}

export default preview
