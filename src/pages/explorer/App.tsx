import type { FC } from 'react'
import { View } from '@tarojs/components'
import { SectionItem } from './components/SectionItem'

export const App: FC = () => (
  <View className="h-screen bg-gray-100 pr-3 pl-3 pt-2">
    <SectionItem
      links={[{ url: '/sub-packages/web-components/antd-mobile/index', title: 'antd-mobile' }]}
      title="Web Components"
      description="描述内容"
    />

    <SectionItem links={[]} title="Taro Components" description="描述内容" />
    <SectionItem links={[]} title="Hooks" description="描述内容" />
    <SectionItem links={[]} title="State Management" description="描述内容" />
  </View>
)
