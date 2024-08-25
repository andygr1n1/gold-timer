import { useUser$ } from '@/services/user-store/userUser.store'
import { useQueryClient } from '@tanstack/react-query'
import { noteLabelsService } from '../service/noteLabelsService'

export const useInvalidateNotesLabels = () => {
    const queryClient = useQueryClient()
    const { userId } = useUser$()

    const onSuccess = () => {
        queryClient.invalidateQueries({ queryKey: noteLabelsService.KEY_fetchNotesLabels({ userId }) })
    }

    return { onSuccess }
}
