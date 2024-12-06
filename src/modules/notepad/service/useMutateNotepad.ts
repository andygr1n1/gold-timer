import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutation_notepadDescription } from './mutation_notepadDescription'
import { useUser$ } from '@/modules/app/mst/StoreProvider'
import { notepadService } from './notepadService'

export const useMutateNotepad = () => {
    const queryClient = useQueryClient()
    const { id: userId } = useUser$()
    const mutation = useMutation({
        mutationFn: ({ description }: { description: string }) => mutation_notepadDescription(description),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: notepadService.KEY_useFetchNotepad(userId) })
        },
    })

    const updateDescription = ({ description }: { description: string }) => {
        if (!userId) return
        return mutation.mutate({ description })
    }

    return { updateDescription }
}
