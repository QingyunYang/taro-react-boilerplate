import type { FC } from 'react'
import { useCallback } from 'react'
import { View, Text, Button } from '@tarojs/components'

import { useAppDispatch } from './hooks/useAppDispatch'
import { useAppSelector } from './hooks/useAppSelector'
import { counterActions } from './store/slices/counter'

export const App: FC = () => {
  const dispatch = useAppDispatch()

  const counter = useAppSelector((state) => state.counter)

  const increment = useCallback(() => {
    dispatch(counterActions.increment())
  }, [dispatch])

  const decrement = useCallback(() => {
    dispatch(counterActions.decrement())
  }, [dispatch])

  const incrementByAmount = useCallback(() => {
    dispatch(counterActions.incrementByAmount(3))
  }, [dispatch])

  return (
    <View className="flex h-screen flex-col items-center justify-center">
      <Text>{counter.value}</Text>
      <Button className="mt-2" onClick={increment}>
        +
      </Button>
      <Button className="mt-2" onClick={decrement}>
        -
      </Button>
      <Button className="mt-2" onClick={incrementByAmount}>
        +3
      </Button>
    </View>
  )
}
