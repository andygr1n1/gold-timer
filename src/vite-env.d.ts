/// <reference types="vite/client" />

import { QueryClient } from '@tanstack/react-query'

declare global {
    interface Window {
        queryClient: QueryClient
    }
}

interface ImportMetaEnv {
    readonly PORT: number
    readonly VITE_CLIENT_ENDPOINT: string
    readonly VITE_X_HASURA_ADMIN_SECRET: string
    readonly VITE_OWNER_ID: string
    readonly VITE_NODE_ENV: string
    readonly VITE_NODE_HEROKU_ORIGIN: string
    readonly VITE_X_API_KEY: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
