import create from 'zustand'
import { persist } from 'zustand/middleware'
import { getStorageSync, setStorageSync, removeStorageSync } from '@tarojs/taro'

interface CounterState {
  value: number
  increment: () => void
  decrement: () => void
  incrementByAmount: (payload: number) => void
}

export const useCounterStore = create(
  persist<CounterState>(
    (set) => ({
      value: 0,
      increment: () => set((state) => ({ value: state.value + 1 })),
      decrement: () => set((state) => ({ value: state.value - 1 })),
      incrementByAmount: (payload: number) => set((state) => ({ value: state.value + payload })),
    }),
    {
      name: 'zustand/persist/counter',
      getStorage: () => ({
        getItem: getStorageSync,
        setItem: setStorageSync,
        removeItem: removeStorageSync,
      }),
    },
  ),
)
