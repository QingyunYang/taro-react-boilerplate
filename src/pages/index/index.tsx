import type {FC} from "react"
import {View, Text, Navigator} from "@tarojs/components"
import "./index.css"

const Page: FC = () => (
  <View className="flex flex-col items-center justify-center h-screen">
    <Text className="mt-1">Hello world!</Text>
    <Text className="mt-2">Taro React Boilerplate</Text>
    <Navigator className="mt-4 w-48 h-10 bg-gray-500 flex items-center justify-center text-light-500 rounded">
      Start
    </Navigator>
  </View>
)

export default Page
