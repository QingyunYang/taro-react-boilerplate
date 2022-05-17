import createContext from 'zustand/context'
import type { FC, PropsWithChildren } from 'react'

import { createStore } from './createStore'

const { Provider, useStore } = createContext()

export const ZustandProvider: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Provider createStore={createStore}>{children}</Provider>
)

export const useZustandStore = useStore
