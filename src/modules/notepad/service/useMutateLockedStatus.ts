import { useMutation, useQueryClient } from '@tanstack/react-query'

import { mutation_notepadStatus } from './mutation_notepadStatus'
import { notepadService } from './notepadService'
import { useUser$ } from '@/modules/app/mst/StoreProvider'

export const useMutateLockedStatus = () => {
    const queryClient = useQueryClient()
    const { id: userId } = useUser$()
    return useMutation({
        mutationFn: ({ locked }: { locked: boolean }) => mutation_notepadStatus(locked),

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: notepadService.KEY_useFetchLockedStatus(userId) })
        },
    })
}
