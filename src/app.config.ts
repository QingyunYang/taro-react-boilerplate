import type { AppConfig } from '@tarojs/taro'

const pages = ['pages/index/index', 'pages/explorer/index']

// 微信小程序最多支持100个子包
const subPackages = [
  {
    root: 'sub-packages/taro-components',
    pages: ['ossaui/index', 'taroify/index', '@antmjs+vantui/index'],
  },
  {
    root: 'sub-packages/state-management',
    pages: ['redux/index', 'zustand/index', 'recoil/index', 'jotai/index'],
  },
  { root: 'sub-packages/data-fetching', pages: ['react-query/index'] },
  { root: 'sub-packages/use-hooks', pages: ['ahooks/index'] },
  { root: 'pages/404', pages: ['index'] },
]

const getPages = () => {
  if (process.env.NODE_ENV === 'production') {
    return pages
  }
  return [
    ...pages,
    ...subPackages.reduce((previous: string[], subPackage) => {
      subPackage.pages.forEach((page) => {
        previous.push(`${subPackage.root}/${page}`)
      })
      return previous
    }, []),
  ]
}

const getSubPackages = () => {
  if (process.env.NODE_ENV === 'production') {
    return subPackages
  }
  return []
}

const appConfig: AppConfig = {
  pages: getPages(),
  subPackages: getSubPackages(),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  style: 'v2',
}

export default appConfig
