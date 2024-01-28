import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { loginAtom } from '@/modules/login/stores/login.store'
import { query_userCoinsInfo } from './query_userCoinsInfo'

type IRes = {
    isLoading: boolean
    coins: number
    totalRitualPower: number
}

export const useFetchUserCoinsInfo = (): IRes => {
    const [{ user_id }] = useAtom(loginAtom)

    const { data, isLoading } = useQuery({
        queryKey: ['useFetchUserCoinsInfo', user_id],
        queryFn: async () => await query_userCoinsInfo(user_id),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    return { isLoading, coins: data?.coins || 0, totalRitualPower: data?.totalRitualPower || 0 }
}
