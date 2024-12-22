import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutation_deleteGoalSlide } from '../service/graphql/mutation_deleteGoalSlide'

export const useDeleteGoalSlide = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ id }: { id: string }) => mutation_deleteGoalSlide({ id }),
        onSuccess: (res) => {
            if (!res) return
            queryClient.invalidateQueries()
        },
    })

    const deleteGoalSlide = (props: { id: string }) => {
        const { id } = props
        mutation.mutate({ id })
    }

    return { deleteGoalSlide }
}
