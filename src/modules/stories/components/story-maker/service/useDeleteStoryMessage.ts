import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutation_deleteStoryMessage } from './mutation_deleteStoryMessage'

export const useDeleteStoryMessage = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ id }: { id: string }) => mutation_deleteStoryMessage({ id }),
        onSuccess: () => {
            queryClient.invalidateQueries()
        },
    })

    const deleteStoryMessage = ({ id }: { id: string }) => {
        mutation.mutate({ id })
    }

    return { deleteStoryMessage }
}
