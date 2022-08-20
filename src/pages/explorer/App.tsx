import type { FC } from 'react'
import { View } from '@tarojs/components'
import { SectionItem } from './components/SectionItem'

export const App: FC = () => (
  <View className="h-screen bg-gray-100 pr-3 pl-3 pt-2 pb-2">
    <SectionItem
      links={[{ url: '/sub-packages/h5-components/antd-mobile/index', title: 'antd-mobile' }]}
      title="H5 Components"
      description="在 @tarojs/plugin-html 插件的支持下，可以一定程度上复用 web 端的组件"
    />
    <SectionItem
      links={[
        { url: '/sub-packages/taro-components/taroify/index', title: 'taroify' },
        { url: '/sub-packages/taro-components/antmjs-vantui/index', title: '@antmjs/vantui' },
      ]}
      title="Taro Components"
      description="基于 Taro 的跨端组件库"
    />
    <SectionItem links={[]} title="Hooks" description="描述内容" />
    <SectionItem
      links={[
        { url: '/sub-packages/state-management/redux/index', title: 'redux' },
        { url: '/sub-packages/state-management/zustand/index', title: 'zustand' },
        { url: '/sub-packages/state-management/recoil/index', title: 'recoil' },
        { url: '/sub-packages/state-management/jotai/index', title: 'jotai' },
      ]}
      title="State Management"
      description="流行的状态管理库"
    />
    <SectionItem links={[]} title="Drag And Drop" description="描述内容" />
  </View>
)
