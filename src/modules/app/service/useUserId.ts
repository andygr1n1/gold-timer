import { useQuery } from '@tanstack/react-query'
import { KEY_VerifyUserId } from './keys'
import { query_verifyUserId } from './query_verifyUserId'

export const useUserId = (): { userId: string; isLoading: boolean } => {
    const userId = ''
    const { isLoading, data } = useQuery({
        queryKey: KEY_VerifyUserId(userId),
        queryFn: async () => await query_verifyUserId(userId),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!userId,
    })

    return {
        isLoading,
        userId: data || '',
    }
}
