import { View } from '@tarojs/components'
import type { FC } from 'react'
import { OsButton } from 'ossaui'

export const App: FC = () => (
  <View className="flex h-screen flex-col items-center justify-center">
    <OsButton type="primary">ossaui</OsButton>
  </View>
)
