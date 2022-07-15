import type { AppConfig } from '@tarojs/taro'

const subPackages = [
  { root: 'pages/antd-mobile', pages: ['index'] },
  { root: 'pages/404', pages: ['index'] },
]

const appConfig: AppConfig = {
  pages: ['pages/index/index'],
  subPackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  style: 'v2',
}

export default appConfig
