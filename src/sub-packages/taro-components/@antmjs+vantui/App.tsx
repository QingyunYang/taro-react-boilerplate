import type { FC } from 'react'
import { View } from '@tarojs/components'
import { Button } from '@antmjs/vantui'

export const App: FC = () => (
  <View className="flex h-screen flex-col items-center justify-center">
    <Button type="primary">@antmjs/vantui</Button>
  </View>
)
