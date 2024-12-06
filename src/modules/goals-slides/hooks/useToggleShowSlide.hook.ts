import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutation_updateGoalSlideIsActive } from '../service/mutation_updateGoalSlideIsActive'
import { type IGoalSlide } from '../service/types'
import { goalsSlidesService } from '../service/goalsSlidesService'
import { useUser$ } from '@/modules/app/mst/StoreProvider'

export const useToggleShowSlide = () => {
    const queryClient = useQueryClient()
    const { id: userId } = useUser$()

    const mutation = useMutation({
        mutationFn: ({ id, active }: { id: string; active: boolean }) =>
            mutation_updateGoalSlideIsActive({ id, active }),
        onSuccess: (res) => {
            if (!res) return

            queryClient.setQueryData<IGoalSlide[]>(goalsSlidesService.fetchGoalsSlides(userId), (oldData) =>
                oldData?.map((slide) => {
                    if (slide.id === res.id) {
                        return { ...slide, active: res.active }
                    }
                    return slide
                }),
            )
        },
    })

    const toggleShowSlide = (props: { id: string; active: boolean }) => {
        const { id, active } = props
        mutation.mutate({ id, active })
    }

    return { toggleShowSlide }
}
