import type { FC } from 'react'
import { View } from '@tarojs/components'
import { Button } from '@taroify/core'

export const App: FC = () => (
  <View className="flex h-screen flex-col items-center justify-center">
    <Button color="primary">taroify</Button>
  </View>
)
