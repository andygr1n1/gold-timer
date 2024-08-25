import { mutation_deleteNoteLabel } from '@/modules/notes/shared-services/mutation_deleteNoteLabel'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteNoteLabel = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ id }: { id: string }) => mutation_deleteNoteLabel({ id }),
        onSuccess: () => {
            queryClient.invalidateQueries()
        },
    })

    const deleteNoteLabel = ({ id }: { id: string }) => {
        mutation.mutate({ id })
    }

    return { deleteNoteLabel }
}
