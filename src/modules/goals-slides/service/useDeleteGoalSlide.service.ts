import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutation_deleteGoalSlide } from './mutation_deleteGoalSlide'
import { deleteImageFromServer } from '@/services/image/image.service'
import { SERVER_ROUTES } from '@/services/enums'
import { IGoalSlideSchema, KEY_FetchGoalsSlides } from './types'

export const useDeleteGoalSlide = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ id }: { id: string }) => mutation_deleteGoalSlide({ id }),
        onSuccess: (res) => {
            if (!res) return
            deleteImageFromServer(res.img_path, SERVER_ROUTES.GOAL_SLIDE_IMAGE_DELETE)

            queryClient.setQueryData<IGoalSlideSchema[]>(KEY_FetchGoalsSlides(), (oldData) =>
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
