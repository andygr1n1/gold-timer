/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly PORT: number
    readonly VITE_CLIENT_ENDPOINT: string
    readonly VITE_X_HASURA_ADMIN_SECRET: string
    readonly VITE_NODE_ENV: string
    readonly VITE_NODE_HEROKU_ORIGIN: string
    readonly VITE_X_API_KEY: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
