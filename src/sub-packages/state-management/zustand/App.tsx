import type { FC } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { useCounterStore } from './hooks/useCounterStore'

const Increment: FC = () => {
  const { value, increment } = useCounterStore()
  return (
    <>
      <Text>{value}</Text>
      <Button className="mt-2" onClick={increment}>
        +
      </Button>
    </>
  )
}

const Decrement: FC = () => {
  const { value, decrement } = useCounterStore()
  return (
    <>
      <Text className="mt-2">{value}</Text>
      <Button className="mt-2" onClick={decrement}>
        -
      </Button>
    </>
  )
}

const IncrementByAmount: FC = () => {
  const { value, incrementByAmount } = useCounterStore()
  return (
    <>
      <Text className="mt-2">{value}</Text>
      <Button className="mt-2" onClick={() => incrementByAmount(3)}>
        +3
      </Button>
    </>
  )
}

export const App: FC = () => (
  <View className="flex h-screen flex-col items-center justify-center">
    <Increment />
    <Decrement />
    <IncrementByAmount />
  </View>
)
