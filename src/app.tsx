import { StrictMode } from 'react'
import type { FC, PropsWithChildren } from 'react'
import './app.css'

const App: FC<PropsWithChildren<{}>> = ({ children }) => <StrictMode>{children}</StrictMode>

export default App
