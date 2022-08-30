import type { FC, PropsWithChildren } from 'react'

import { AppLayout } from '@/layouts/AppLayout'
import { QueryProvider } from '@/providers/QueryProvider'

import './app.css'

const App: FC<PropsWithChildren<{}>> = ({ children }) => (
  <QueryProvider>
    <AppLayout>{children}</AppLayout>
  </QueryProvider>
)

export default App
