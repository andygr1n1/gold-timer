import { parseJwt } from '@/helpers/parseJwt'
import { server_getSessionCredentials } from '@/services/server_getSessionCredentials'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { IUserSchema } from './types'
import { KEY_useUserStore } from './keys'
import { setAccessIdInCookie } from '@/helpers/universalCookie'

export const useUserStore$ = (): {
    store?: IUserSchema | null
    selectUser: (props: { user: Partial<IUserSchema> }) => void
    autoLogin: () => Promise<void>
    logout: () => void
    userId: string
} => {
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
        /* double KEY_useUserStore for reactivity  */
        queryClient.setQueryData(KEY_useUserStore(), { userId: null, role: null, isLoading: false })
        queryClient.clear()
        queryClient.setQueryData(KEY_useUserStore(), { userId: null, role: null, isLoading: false })
    }

    const autoLogin = async () => {
        const jwtToken = await server_getSessionCredentials()
        jwtToken && setAccessIdInCookie(jwtToken)
        const data = parseJwt(jwtToken)
        selectUser({
            user: { userId: data?.id, role: data?.role, isLoading: false },
        })
    }

    const userId = store.userId || ''

    return { store, selectUser, autoLogin, logout, userId }
}
