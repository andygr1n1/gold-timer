import { useQuery } from '@tanstack/react-query'
import { type IFetchUserDetails, KEY_FetchUserDetails } from './types'
import { query_userDetails } from './query_userDetails'

export const useFetchUserDetails = (props: { userId: string }): IFetchUserDetails => {
    const { data, isLoading } = useQuery({
        queryKey: KEY_FetchUserDetails(props.userId),
        queryFn: async () => await query_userDetails({ userId: props.userId }),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!props.userId,
    })
    return { isLoading, user: data?.user, ritualPower: data?.ritualPower || 0, coins: data?.user?.coins || 0 }
}
