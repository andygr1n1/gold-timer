import { useAtom } from 'jotai'
import { loginAtom } from '@/modules/login/stores/login.store'
import { useQuery } from '@tanstack/react-query'
import { IActiveGoalOptimized, query_activeGoals } from './query_activeGoals'

type IActiveGoals = { isLoading: boolean; activeGoals: IActiveGoalOptimized[] }

export const useFetchActiveGoals = (): IActiveGoals => {
    const [{ user_id }] = useAtom(loginAtom)

    const { isLoading, data: activeGoals } = useQuery({
        queryKey: ['useFetchActiveGoals', user_id],
        queryFn: async () => await query_activeGoals(user_id),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
    return {
        isLoading,
        activeGoals: activeGoals || [],
    }
}
