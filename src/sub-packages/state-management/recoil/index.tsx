import type { FC } from 'react'
import { RecoilRoot } from 'recoil'
import { PageLayout } from '@/layouts/PageLayout'
import { App } from './App'

const Page: FC = () => (
  <PageLayout>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </PageLayout>
)

export default Page
