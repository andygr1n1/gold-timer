import { useQuery } from '@tanstack/react-query'
import { query_fetchAch } from './query_fetchAch'
import { achService } from '../achService'
import { cast } from '@/helpers'

export const useFetchAch = (props: { id?: string }) => {
    const { id } = props
    const { isLoading, data } = useQuery({
        queryKey: achService.fetchAchKey(`${id}`),
        queryFn: async () => await query_fetchAch({ id: cast(id) }),
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
