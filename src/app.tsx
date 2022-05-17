import { StrictMode } from 'react'
import type { FC, PropsWithChildren } from 'react'

import { AppLayout } from '@/layouts/AppLayout'
import { QueryProvider } from '@/providers/QueryProvider'
import { ZustandProvider } from '@/providers/ZustandProvider'

import './app.css'

const App: FC<PropsWithChildren<{}>> = ({ children }) => (
  <QueryProvider>
    <ZustandProvider>
      <StrictMode>
        <AppLayout>{children}</AppLayout>
      </StrictMode>
    </ZustandProvider>
  </QueryProvider>
)

export default App
