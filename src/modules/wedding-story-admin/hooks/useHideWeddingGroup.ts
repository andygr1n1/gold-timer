import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { IWeddingGroup } from '../types'
import { mutation_hideWeddingGroup } from '../services/mutation_hideWeddingGroup'
import { notifySuccess } from '@/helpers/processMessage'

export const useHideWeddingGroup = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async ({ weddingGroup }: { weddingGroup: IWeddingGroup }) => {
            await mutation_hideWeddingGroup({ values: weddingGroup })
        },
    })

    const toggleHideGroup = async ({ weddingGroup }: { weddingGroup: IWeddingGroup }) => {
        mutation.mutate(
            { weddingGroup },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries()
                    notifySuccess('Group status changed successfully')
                },
            },
        )
    }

    return { toggleHideGroup }
}
