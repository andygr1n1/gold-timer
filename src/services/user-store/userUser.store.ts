import { parseJwt } from '@/helpers/parseJwt'
import { server_getSessionCredentials } from '@/services/server_getSessionCredentials'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { IUserSchema } from './types'
import { KEY_useUserStore } from './keys'
import { removeSessionJWTFromCookie, setAccessIdInCookie, setSessionJWTInCookie } from '@/helpers/universalCookie'

export const useUser$ = () => {
    const queryClient = useQueryClient()

    const { data: store } = useQuery<IUserSchema>({
        queryKey: KEY_useUserStore(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { isLoading: true, role: 'guest' },
    })

    const selectUser = (props: { user: Partial<IUserSchema> }) => {
        queryClient.setQueryData(KEY_useUserStore(), { ...store, ...props.user })
    }

    const logout = () => {
        removeSessionJWTFromCookie()
        /* double KEY_useUserStore for reactivity  */
        queryClient.setQueryData(KEY_useUserStore(), { userId: null, role: null, isLoading: false })
        queryClient.clear()
        queryClient.setQueryData(KEY_useUserStore(), { userId: null, role: null, isLoading: false })
    }

    const autoLogin = async () => {
        if (!store.isLoading) return

        const res = await server_getSessionCredentials()
        const credentials = res?.serverCredentials
        if (!credentials) return
        setAccessIdInCookie(credentials.accessJWT)
        setSessionJWTInCookie(credentials.sessionJWT)
        const data = parseJwt(credentials.accessJWT)
        selectUser({
            user: { userId: data?.id, role: data?.role, isLoading: false },
        })
    }

    const userId = store.userId || ''

    const isSuperHero = store.role === 'super_hero'

    return { store, selectUser, autoLogin, logout, userId, isSuperHero }
}
