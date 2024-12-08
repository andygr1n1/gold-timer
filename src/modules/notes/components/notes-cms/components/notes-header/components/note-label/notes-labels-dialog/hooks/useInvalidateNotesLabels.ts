import { useUser$ } from '@/modules/app/mst/StoreProvider'
import { useQueryClient } from '@tanstack/react-query'
import { noteLabelsService } from '../service/noteLabelsService'

export const useInvalidateNotesLabels = () => {
    const queryClient = useQueryClient()
    const { id: userId } = useUser$()

    const onSuccess = () => {
        queryClient.invalidateQueries({ queryKey: noteLabelsService.KEY_fetchNotesLabels({ userId }) })
    }

    return { onSuccess }
}
