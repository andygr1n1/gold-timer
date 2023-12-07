import { rootStore$ } from '@/StoreProvider'

export const getOwnerId = (): string => {
    return rootStore$.user$.id
}
