import type { FC } from 'react'
import '@taroify/core/index.scss'
import '@taroify/icons/index.scss'

import { PageLayout } from '@/layouts/PageLayout'

import './index.less'
import { App } from './App'

const Page: FC = () => (
  <PageLayout>
    <App />
  </PageLayout>
)

export default Page
