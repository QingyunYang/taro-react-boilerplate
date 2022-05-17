import type { FC, PropsWithChildren } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

export const QueryProvider: FC<PropsWithChildren<{}>> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
