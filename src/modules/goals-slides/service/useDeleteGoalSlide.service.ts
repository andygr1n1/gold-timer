import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutation_deleteGoalSlide } from './mutation_deleteGoalSlide'
import { type IGoalSlide, KEY_FetchGoalsSlides } from './types'

export const useDeleteGoalSlide = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ id }: { id: string }) => mutation_deleteGoalSlide({ id }),
        onSuccess: (res) => {
            if (!res) return
            queryClient.setQueryData<IGoalSlide[]>(KEY_FetchGoalsSlides(), (oldData) =>
                oldData?.filter((slide) => slide.id !== res.id),
            )
        },
    })

    const deleteGoalSlide = (props: { id: string }) => {
        const { id } = props
        mutation.mutate({ id })
    }

    return { deleteGoalSlide }
}
