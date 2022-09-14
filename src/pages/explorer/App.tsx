import { View } from '@tarojs/components'
import type { FC } from 'react'
import { SectionItem } from './components/SectionItem'

const taroComponents = [
  { url: '/sub-packages/taro-components/@antmjs+vantui/index', title: '@antmjs/vantui' },
  { url: '/sub-packages/taro-components/ossaui/index', title: 'ossaui' },
  { url: '/sub-packages/taro-components/taroify/index', title: '@taroify/core' },
]

const stateManagement = [
  { url: '/sub-packages/state-management/redux/index', title: 'redux' },
  { url: '/sub-packages/state-management/zustand/index', title: 'zustand' },
  { url: '/sub-packages/state-management/recoil/index', title: 'recoil' },
  { url: '/sub-packages/state-management/jotai/index', title: 'jotai' },
]

const dataFetching = [
  { url: '/sub-packages/data-fetching/react-query/index', title: 'react-query' },
]

const useHooks = [{ url: '/sub-packages/use-hooks/ahooks/index', title: 'ahooks' }]

export const App: FC = () => (
  <View className="h-screen bg-gray-100 pr-3 pl-3 pt-2 pb-2">
    <SectionItem
      links={taroComponents}
      title="Taro Components"
      description="基于 Taro 的跨端组件库"
    />
    <SectionItem links={stateManagement} title="State Management" description="流行的状态管理库" />
    <SectionItem links={dataFetching} title="Data Fetching" description="数据请求库" />
    <SectionItem links={useHooks} title="Use Hooks" description="可用的 react hook 库" />
    <SectionItem links={[]} title="Drag And Drop" description="拖拽能力" />
    <SectionItem links={[]} title="Animation" description="动画效果" />
    <SectionItem links={[]} title="Game Engine" description="游戏引擎" />
  </View>
)
