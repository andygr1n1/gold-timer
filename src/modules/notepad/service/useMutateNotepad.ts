import { useMutation, useQueryClient } from '@tanstack/react-query'
import { mutation_notepadDescription } from './mutation_notepadDescription'
import { KEY_FetchNotepad } from './keys'

export const useMutateNotepad = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: ({ description }: { description: string }) => mutation_notepadDescription(description),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: KEY_FetchNotepad() })
        },
    })

    const updateDescription = ({ description }: { description: string }) => {
        return mutation.mutate({ description })
    }

    return { updateDescription }
}
