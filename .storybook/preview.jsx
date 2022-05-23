import { defineCustomElements, applyPolyfills } from '@tarojs/components/loader'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    applyPolyfills().then(() => {
      defineCustomElements(window)
    })
    return <Story />
  },
]
