import { parseJwt } from '@/helpers/parseJwt'
import { getSessionCredentials } from '@/modules/app/service/server_getSessionCredentials'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { IUserSchema } from './types'
import { KEY_useUserStore } from './keys'

export const useUserStore = (): {
    store?: IUserSchema | null
    selectUser: (props: { user: Partial<IUserSchema>; rerender: boolean }) => void
    autoLogin: () => Promise<void>
} => {
    const queryClient = useQueryClient()

    const { data: store } = useQuery<IUserSchema>({
        queryKey: KEY_useUserStore(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { storeId: crypto.randomUUID(), isLoading: true },
    })

    const selectUser = (props: { user: Partial<IUserSchema>; rerender: boolean }) => {
        queryClient.setQueryData(
            KEY_useUserStore(),
            props.rerender ? { storeId: crypto.randomUUID(), ...props.user } : { ...store, ...props.user },
        )
    }

    const autoLogin = async () => {
        const jwtToken = await getSessionCredentials()
        const data = parseJwt(jwtToken)

        selectUser({
            user: { userId: data?.id, role: data?.role, isLoading: false },
            rerender: false,
        })
    }

    return { store, selectUser, autoLogin }
}
