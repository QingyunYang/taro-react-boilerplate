import type { AppConfig } from '@tarojs/taro'

const pages = ['pages/index/index', 'pages/explorer/index']

// 微信小程序最多支持100个子包
const subPackages = [
  { root: 'pages/antd-mobile', pages: ['index'] },
  { root: 'pages/404', pages: ['index'] },
]

const getPages = () => {
  if (process.env.NODE_ENV === 'production') {
    return pages
  }
  return [...pages, ...subPackages.map((item) => `${item.root}/${item.pages[0]}`)]
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
