import { useQuery } from '@tanstack/react-query'
import { query_fetchAch } from './query_fetchAch'
import { achService } from '../achService'

export const useFetchAch = (props: { id: string | null }) => {
    const { id } = props
    const { isLoading, data } = useQuery({
        queryKey: achService.fetchAchKey(id),
        queryFn: async () => await query_fetchAch({ id }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!id,
    })

    return {
        isLoading,
        data,
    }
}
