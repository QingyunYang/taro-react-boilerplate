import type { FC } from 'react'
import { View, Text, Navigator } from '@tarojs/components'

export const App: FC = () => (
  <View className="flex h-screen flex-col items-center justify-center">
    <Text className="text-xl">Taro React Boilerplate</Text>
    <Text className="mt-4">Hello world!</Text>
    <Navigator className="mt-10" url="/pages/explorer/index">
      <View className="flex h-10 w-48 items-center justify-center rounded-full bg-blue-500 text-white">
        <Text>开始探索</Text>
      </View>
    </Navigator>
  </View>
)
