import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutation_deleteStoryMessage } from './mutation_deleteStoryMessage'
import { useUuidFromPath } from '@/hooks/useUuidFromPath'
import { cast } from '@/helpers'

export const useDeleteStoryMessage = () => {
    const queryClient = useQueryClient()
    const { id: storyId } = useUuidFromPath()

    const mutation = useMutation({
        mutationFn: ({ id }: { id: string }) => mutation_deleteStoryMessage({ id, storyId: cast(storyId) }),
        onSuccess: () => {
            queryClient.invalidateQueries()
        },
    })

    const deleteStoryMessage = ({ id }: { id: string }) => {
        mutation.mutate({ id })
    }

    return { deleteStoryMessage }
}
