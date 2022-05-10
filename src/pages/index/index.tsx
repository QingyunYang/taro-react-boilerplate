import type { FC } from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import './index.css'

const Page: FC = () => (
  <View className="flex flex-col items-center justify-center h-screen">
    <Text className="text-xl">Taro React Boilerplate</Text>
    <Text className="mt-4">Hello world!</Text>
    <Navigator className="mt-10">
      <View className="w-48 h-10 bg-blue-500 flex items-center justify-center rounded-full text-white">
        Start
      </View>
    </Navigator>
  </View>
)

export default Page
