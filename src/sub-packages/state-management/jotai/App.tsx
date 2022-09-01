import type { FC } from 'react'
import { atom, useAtom } from 'jotai'
import { View, Text, Button } from '@tarojs/components'

const counterAtom = atom(0)

export const App: FC = () => {
  const [counter, setCounter] = useAtom(counterAtom)

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
