import { StrictMode } from 'react'
import type { FC, PropsWithChildren } from 'react'
import { ZustandProvider } from '@/providers/ZustandProvider'
import './app.css'

const App: FC<PropsWithChildren<{}>> = ({ children }) => (
  <ZustandProvider>
    <StrictMode>{children}</StrictMode>
  </ZustandProvider>
)

export default App
