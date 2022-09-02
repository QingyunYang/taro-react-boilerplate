// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
const config = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@antmjs/vantui',
        libraryDirectory: 'es',
        style: true,
      },
      '@antmjs/vantui',
    ],
    [
      'import',
      {
        libraryName: '@taroify/core',
        libraryDirectory: '',
        style: true,
      },
      '@taroify/core',
    ],
    [
      'import',
      {
        libraryName: '@taroify/icons',
        libraryDirectory: '',
        camel2DashComponentName: false,
        style: () => '@taroify/icons/style',
      },
      '@taroify/icons',
    ],
    [
      'import',
      {
        libraryName: 'ossaui',
        customName: (name) => `ossaui/lib/components/${name.replace(/^os-/, '')}`,
        customStyleName: (name) => `ossaui/dist/style/components/${name.replace(/^os-/, '')}.scss`,
      },
      'ossaui',
    ],
  ],
}

module.exports = config
