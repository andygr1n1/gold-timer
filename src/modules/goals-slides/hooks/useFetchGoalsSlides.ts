import { useUser$ } from '@/modules/app/mst/StoreProvider'
import { useGetGoalsSlidesQuery } from '@/modules/goals-slides/service/apiGoalsSlidesSlice'

export const useFetchGoalsSlides = () => {
    const { id } = useUser$()
    const {
        data: goalsSlides = [],
        isLoading,
        isFetching,
    } = useGetGoalsSlidesQuery(id, {
        skip: !id,
    })

    const visibleSlides = goalsSlides?.filter((slide) => slide.active)

    return {
        isLoading: isLoading || isFetching,
        goalsSlides,
        visibleSlides,
    }
}
