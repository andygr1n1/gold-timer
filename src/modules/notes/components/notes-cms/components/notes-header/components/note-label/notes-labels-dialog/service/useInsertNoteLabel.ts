import { useMutation } from '@tanstack/react-query'
import { type ICreateLabelForm } from './types'
import { mutation_insertNoteLabel } from './mutation_insertNoteLabel'
import { useInvalidateNotesLabels } from '../hooks/useInvalidateNotesLabels'

export const useInsertNoteLabel = () => {
    const { onSuccess: invalidateNoteLabels } = useInvalidateNotesLabels()

    const mutation = useMutation({
        mutationFn: ({ values }: { values: ICreateLabelForm }) => {
            return mutation_insertNoteLabel({ values })
        },
    })

    const insertNoteLabel = ({
        values,
        onSuccess,
        onSettled,
    }: {
        values: ICreateLabelForm
        onSuccess?: () => void
        onSettled?: () => void
    }) => {
        mutation.mutate(
            { values },
            {
                onSuccess: () => {
                    invalidateNoteLabels()
                    onSuccess?.()
                },
                onSettled,
            },
        )
    }

    return { insertNoteLabel }
}
