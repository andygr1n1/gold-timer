export const isProd = () => import.meta.env.VITE_NODE_ENV === 'production'
export const isDev = () => import.meta.env.VITE_NODE_ENV !== 'production'

export const isUnderDevelopment = (): boolean => {
    // return false
    return isDev()
}
