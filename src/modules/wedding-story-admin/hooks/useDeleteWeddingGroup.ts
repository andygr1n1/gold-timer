import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { IWeddingGroup } from '../types'
import { mutation_deleteWeddingGroup } from '../services/mutation_deleteWeddingGroup'
import { notifySuccess } from '@/helpers/processMessage'

export const useDeleteWeddingGroup = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async ({ weddingGroup }: { weddingGroup: IWeddingGroup }) => {
            await mutation_deleteWeddingGroup({ values: weddingGroup })
        },
    })

    const deleteGroup = async ({ weddingGroup }: { weddingGroup: IWeddingGroup }) => {
        mutation.mutate(
            { weddingGroup },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries()
                    notifySuccess('Group deleted successfully')
                },
            },
        )
    }

    return { deleteGroup }
}
