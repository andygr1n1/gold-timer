import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutation_updateGoalSlideIsActive } from '../service/mutation_updateGoalSlideIsActive'
import { type IGoalSlide, KEY_FetchGoalsSlides } from '../service/types'

export const useToggleShowSlide = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ id, active }: { id: string; active: boolean }) =>
            mutation_updateGoalSlideIsActive({ id, active }),
        onSuccess: (res) => {
            if (!res) return

            queryClient.setQueryData<IGoalSlide[]>(KEY_FetchGoalsSlides(), (oldData) =>
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
