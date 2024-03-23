import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    })

export function createWrapper() {
    const testQueryClient = createTestQueryClient()
    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
    )
}
