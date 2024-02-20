import { useQuery } from '@tanstack/react-query'
import { query_userCoinsInfo } from './query_userCoinsInfo'
import { getUserId } from '@/functions/universalCookie.helper'

type IRes = {
    isLoading: boolean
    coins: number
    totalRitualPower: number
}

export const useFetchUserCoinsInfo = (): IRes => {
    const { data, isLoading } = useQuery({
        queryKey: ['useFetchUserCoinsInfo'],
        queryFn: async () => await query_userCoinsInfo(getUserId()),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    return { isLoading, coins: data?.coins || 0, totalRitualPower: data?.totalRitualPower || 0 }
}
