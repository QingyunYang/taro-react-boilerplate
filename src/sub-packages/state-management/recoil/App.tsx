import type { FC } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { atom, useRecoilState } from 'recoil'

const counterState = atom({ key: 'counterState', default: 0 })

export const App: FC = () => {
  const [counter, setCounter] = useRecoilState(counterState)

  return (
    <View className="flex h-screen flex-col items-center justify-center">
      <Text>{counter}</Text>
      <Button className="mt-2" onClick={() => setCounter((prev) => prev + 1)}>
        +
      </Button>
      <Button className="mt-2" onClick={() => setCounter((prev) => prev - 1)}>
        1
      </Button>
      <Button className="mt-2" onClick={() => setCounter((prev) => prev + 3)}>
        +3
      </Button>
    </View>
  )
}
