import { useRoot$ } from './../../modules/app/mst/StoreProvider'

export const useUser$ = () => {
    const { userId, isSuperHero, logout, selectUser } = useRoot$()

    return { logout, userId, isSuperHero, selectUser }
}
