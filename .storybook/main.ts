import { resolve } from 'path'
import { DefinePlugin } from '../node_modules/.pnpm/webpack@4.46.0/node_modules/webpack'

export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/preset-scss',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          // eslint-disable-next-line import/no-commonjs
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  babel: (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      [
        require('babel-plugin-transform-taroapi').default,
        {
          apis: require(require.resolve('@tarojs/taro-h5/dist/taroApis', {
            paths: [resolve(__dirname, '..')],
          })),
          packageName: '@tarojs/taro',
        },
      ],
    ],
  }),
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@tarojs/taro': '@tarojs/taro-h5',
          ['@tarojs/components$']: '@tarojs/components/dist-h5/react',
        },
      },
      plugins: [
        ...config.plugins,
        new DefinePlugin({
          'process.env.TARO_ENV': JSON.stringify('h5'),
          ENABLE_INNER_HTML: JSON.stringify(false),
          ENABLE_ADJACENT_HTML: JSON.stringify(false),
          ENABLE_SIZE_APIS: JSON.stringify(false),
          ENABLE_TEMPLATE_CONTENT: JSON.stringify(false),
          ENABLE_CLONE_NODE: JSON.stringify(false),
          ENABLE_CONTAINS: JSON.stringify(false),
          ENABLE_MUTATION_OBSERVER: JSON.stringify(false),
        }),
      ],
    }
  },
}
