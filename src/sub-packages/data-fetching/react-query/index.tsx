import type { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PageLayout } from '@/layouts/PageLayout'
import { App } from './App'

const queryClient = new QueryClient()

const Page: FC = () => (
  <PageLayout>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </PageLayout>
)

export default Page
