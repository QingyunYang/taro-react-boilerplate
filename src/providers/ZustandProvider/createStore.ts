import create from 'zustand'
import { persist } from 'zustand/middleware'
import { getStorageSync, setStorageSync, removeStorageSync } from '@tarojs/taro'

export const createStore = () =>
  create(
    persist(() => ({}), {
      name: 'zustand/persist',
      getStorage: () => ({
        getItem: getStorageSync,
        setItem: setStorageSync,
        removeItem: removeStorageSync,
      }),
    }),
  )
