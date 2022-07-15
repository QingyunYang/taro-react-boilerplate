import { View } from '@tarojs/components'
import { Button } from 'antd-mobile'
import type { FC } from 'react'
import './App.css'

export const App: FC = () => (
  <View className="flex h-screen flex-col items-center justify-center">
    <Button color="primary">Button</Button>
  </View>
)
