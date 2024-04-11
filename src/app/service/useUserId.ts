import { useQuery } from '@tanstack/react-query'
import { KEY_VerifyUserId } from './keys'
import { query_verifyUserId } from './query_verifyUserId'

export const useUserId = (): { userId: string; isLoading: boolean } => {
    const { isLoading, data: userId } = useQuery({
        queryKey: KEY_VerifyUserId(),
        queryFn: async () => await query_verifyUserId(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    return {
        isLoading,
        userId: userId || '',
    }
}
