import { useQuery } from '@tanstack/react-query'
import { KEY_FetchGoal } from './types'
import { query_fetchGoal } from './query_fetchGoal'

export const useFetchGoal = (props: { goalId: string | null }) => {
    const { goalId } = props
    const { isLoading, data } = useQuery({
        queryKey: KEY_FetchGoal(goalId),
        queryFn: async () => await query_fetchGoal({ goalId }),
        staleTime: 1000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        enabled: !!goalId,
    })

    return {
        isLoading,
        data,
    }
}
