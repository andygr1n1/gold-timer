import { useQuery } from '@tanstack/react-query'
import { query_fetchGoalsSlides } from './query_fetchGoalsSlides'
import { goalsSlidesService } from './goalsSlidesService'
import { useUser$ } from '@/modules/app/mst/StoreProvider'

export const useFetchGoalsSlides = () => {
    const { id } = useUser$()
    const { data: goalsSlides, isLoading } = useQuery({
        queryKey: goalsSlidesService.fetchGoalsSlides(id),
        queryFn: query_fetchGoalsSlides,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!id,
    })

    const visibleSlides = goalsSlides?.filter((slide) => slide.active)

    return {
        isLoading,
        goalsSlides,
        visibleSlides,
    }
}
