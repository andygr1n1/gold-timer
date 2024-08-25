import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutation_updateNoteLabel } from '@/modules/notes/shared-services/mutation_updateNoteLabel'

export const useUpdateNoteLabel = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ id, name }: { id: string; name: string }) => mutation_updateNoteLabel({ id, name }),
        onSuccess: () => {
            queryClient.invalidateQueries()
        },
    })

    const updateNoteLabel = ({ id, name }: { id: string; name: string }) => {
        mutation.mutate({ id, name })
    }

    return { updateNoteLabel }
}
