import { rootStore$ } from '@/StoreProvider'

export const isDev = () => import.meta.env.VITE_NODE_ENV === 'prod'

export const isUnderDevelopment = (): boolean => {
    return isDev() || rootStore$.user$.id === 'f192b78e-399e-4fc5-9676-ce0bf65b220b'
}
