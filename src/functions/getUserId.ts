import { rootStore$ } from '@/StoreProvider'

export const getUserId = (): string => {
    return rootStore$.user$.id
}
