import { useQuery } from '@tanstack/react-query'
import { query_fetchGoalsSlides } from './query_fetchGoalsSlides'
import { KEY_FetchGoalsSlides } from './types'

export const useFetchGoalsSlides = () => {

    const { data: goalsSlides, isLoading } = useQuery({
        queryKey: KEY_FetchGoalsSlides(),
        queryFn: async () => await query_fetchGoalsSlides(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
    })

    const visibleSlides = goalsSlides?.filter((slide) => slide.active)

    return {
        isLoading,
        goalsSlides,
        visibleSlides,
    }
}
