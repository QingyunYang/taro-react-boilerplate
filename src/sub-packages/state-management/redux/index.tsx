import type { FC } from 'react'
import { Provider } from 'react-redux'
import { PageLayout } from '@/layouts/PageLayout'

import { App } from './App'
import { store } from './store'

const Page: FC = () => (
  <PageLayout>
    <Provider store={store}>
      <App />
    </Provider>
  </PageLayout>
)

export default Page
