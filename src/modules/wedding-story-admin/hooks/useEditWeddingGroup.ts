import { useMutation } from '@tanstack/react-query'
import type { IInvitationEditorSchema, IWeddingGroup } from '../types'
import { mutation_editWeddingGroup } from '../services/mutation_editWeddingGroup'

export const useEditWeddingGroup = () => {
    const mutation = useMutation({
        mutationFn: async ({ values, weddingGroup }: { values: IInvitationEditorSchema; weddingGroup: IWeddingGroup }) => {
            await mutation_editWeddingGroup({ values, weddingGroup })
        },
    })

    const editWeddingGroup = async ({
        values,
        weddingGroup,
        onSuccess,
    }: {
        values: IInvitationEditorSchema
        weddingGroup: IWeddingGroup
        onSuccess: () => void
    }) => {
        mutation.mutate(
            { values, weddingGroup },
            {
                onSuccess,
            },
        )
    }

    return { editWeddingGroup }
}
