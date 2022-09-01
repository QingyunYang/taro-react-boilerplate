import type { FC, PropsWithChildren } from 'react'

import { AppLayout } from '@/layouts/AppLayout'

import './app.css'

const App: FC<PropsWithChildren<{}>> = ({ children }) => <AppLayout>{children}</AppLayout>

export default App
