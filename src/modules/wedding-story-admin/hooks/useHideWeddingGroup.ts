import { useQueryClient } from '@tanstack/react-query'
import type { IWeddingGroup } from '../services/types'
import { notifySuccess } from '@/helpers/processMessage'
import { useHideWeddingGroupMutation } from '../services/apiWeddingStorySlice'

export const useHideWeddingGroup = () => {
    const [actionHideGroup] = useHideWeddingGroupMutation()
    const queryClient = useQueryClient()

    const toggleHideGroup = async ({ weddingGroup }: { weddingGroup: IWeddingGroup }) => {
        await actionHideGroup({ groupId: weddingGroup.id, hide: !weddingGroup.hide })
            .unwrap()
            .then(() => {
                notifySuccess('Group status changed successfully')
                queryClient.invalidateQueries()
            })
    }

    return { toggleHideGroup }
}
