import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { loginAtom } from '@/modules/login/stores/login.store'
import { query_baseUserInfo } from './query_baseUserInfo'

type IRes = {
    isLoading: boolean
    name: string
    avatar: string
}

export const useFetchUserArtifactsInfo = (): IRes => {
    const [{ user_id }] = useAtom(loginAtom)

    const { data, isLoading } = useQuery({
        queryKey: ['useFetchUserArtifactsInfo', user_id],
        queryFn: async () => await query_baseUserInfo(user_id),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    return { isLoading, name: data?.name || '', avatar: data?.avatar || '' }
}
