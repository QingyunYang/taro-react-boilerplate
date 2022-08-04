import type { FC } from 'react'
import { View } from '@tarojs/components'
import { SectionItem } from './components/SectionItem'

export const App: FC = () => (
  <View className="h-screen bg-gray-100 pr-3 pl-3 pt-2">
    <SectionItem
      links={[{ url: '/pages/antd-mobile/index', title: 'antd-mobile' }]}
      title="web components/web 组件库"
      description="描述内容"
    />

    <SectionItem links={[]} title="taro components/taro 组件库" description="描述内容" />
    <SectionItem links={[]} title="state manage/状态管理" description="描述内容" />
    <SectionItem links={[]} title="animate/动画" description="描述内容" />
  </View>
)
