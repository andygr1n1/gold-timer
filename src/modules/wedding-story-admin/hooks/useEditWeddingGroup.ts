import { useMutation } from '@tanstack/react-query'
import type { IInvitationEditorSchema, IWeddingGroup } from '../types'
import { mutation_editWeddingGroup } from '../services/mutation_editWeddingGroup'
import { processError } from '@/helpers/processMessage'

export const useEditWeddingGroup = () => {
    const mutation = useMutation({
        mutationFn: async ({
            values,
            weddingGroup,
        }: {
            values: IInvitationEditorSchema
            weddingGroup: IWeddingGroup
        }) => {
            await mutation_editWeddingGroup({ values, weddingGroup })
        },
        onError: (error) => {
            console.error(error)
            const regex = /"table":"(\d+)"/
            const match = error.message.match(regex)
            const tableValue = match && match[1] ? match[1]?.replace('"', '').replace('"', '') : null
            if (tableValue) {
                processError(`table already taken: ${tableValue}`)
            }
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
