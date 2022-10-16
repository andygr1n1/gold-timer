/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly PORT: number
    readonly VITE_CLIENT_ENDPOINT: string
    readonly VITE_X_HASURA_ADMIN_SECRET: string
    readonly VITE_OWNER_ID: string
    readonly VITE_NODE_ENV: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module 'passive-events-support/src/utils' {
    type ISupport = ({ debug: boolean }) => void
    let passiveSupport: ISupport
}
