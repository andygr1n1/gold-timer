import { useMutation } from '@tanstack/react-query'
import { type INoteSchema } from '../types'
import { mutation_upsertNote } from './mutation_upsertNote'
import { useInvalidateNotes } from '@/modules/notes/shared-hooks/useInvalidateNotes'

export const useUpsertNote = () => {
    const { onSuccess } = useInvalidateNotes()

    const mutation = useMutation({
        mutationFn: ({ note }: { note: INoteSchema }) => {
            return mutation_upsertNote({ note })
        },
        onSuccess: () => {
            onSuccess()
        },
    })

    const upsertNote = (props: { note: INoteSchema; onSuccess?: () => void; onSettled?: () => void }) => {
        mutation.mutate({ note: props.note }, { onSuccess: props.onSuccess, onSettled: props.onSettled })
    }

    return { upsertNote }
}
