import { useMutation } from '@tanstack/react-query'
import { mutation_notepadDescription } from './mutation_notepadDescription'

export const useMutateNotepad = () => {
    return useMutation({
        mutationFn: ({ description }: { description: string }) => mutation_notepadDescription(description),
    })
}
