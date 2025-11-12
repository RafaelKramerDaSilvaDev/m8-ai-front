import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Page } from './Page'

export const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  )
}
