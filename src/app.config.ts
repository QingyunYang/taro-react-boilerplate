import type { AppConfig } from '@tarojs/taro'

const appConfig: AppConfig = {
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  style: 'v2'
}

export default appConfig
