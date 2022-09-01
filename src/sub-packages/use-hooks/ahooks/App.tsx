import type { FC } from 'react'
import { useBoolean } from 'ahooks'
import { View, Button } from '@tarojs/components'

export const App: FC = () => {
  const [value, actions] = useBoolean()

  return (
    <View className="flex h-screen flex-col items-center justify-center">
      <View>{value ? 'true' : 'false'}</View>
      <Button className="mt-2" onClick={actions.toggle}>
        toggle
      </Button>
      <Button className="mt-2" onClick={actions.setTrue}>
        setTrue
      </Button>
      <Button className="mt-2" onClick={actions.setFalse}>
        setFalse
      </Button>
    </View>
  )
}
