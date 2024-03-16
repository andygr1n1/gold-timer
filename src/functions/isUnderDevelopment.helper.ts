import { rootStore$ } from '@/StoreProvider'

export const isProd = () => import.meta.env.VITE_NODE_ENV === 'production'
export const isDev = () => import.meta.env.VITE_NODE_ENV !== 'production'

export const isUnderDevelopment = (): boolean => {
    // return false
    return (
        isDev() ||
        rootStore$.user$.id === 'f192b78e-399e-4fc5-9676-ce0bf65b220b' ||
        rootStore$.user$.id === 'c82d3a82-9cc4-48a5-9fc3-c78fd09a6c1b'
    )
}
