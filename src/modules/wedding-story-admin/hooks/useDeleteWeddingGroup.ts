import type { IWeddingGroup } from '../services/types'
import { notifySuccess } from '@/helpers/processMessage'
import { useDeleteWeddingGroupMutation } from '../services/apiWeddingStorySlice'

export const useDeleteWeddingGroup = () => {
    const [actionDeleteGroup] = useDeleteWeddingGroupMutation()

    const deleteGroup = async ({ weddingGroup }: { weddingGroup: IWeddingGroup }) => {
        await actionDeleteGroup({ groupId: weddingGroup.id })
            .unwrap()
            .then(() => {
                notifySuccess('Group deleted successfully')
            })
    }

    return { deleteGroup }
}
