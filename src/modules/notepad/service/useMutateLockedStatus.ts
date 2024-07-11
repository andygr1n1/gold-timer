import { useMutation, useQueryClient } from '@tanstack/react-query'

import { mutation_notepadStatus } from './mutation_notepadStatus'
import { KEY_FetchNotepadLockedStatus } from './keys'

export const useMutateLockedStatus = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ locked }: { locked: boolean }) => mutation_notepadStatus(locked),

        onSettled: () => {
         queryClient.invalidateQueries({ queryKey: KEY_FetchNotepadLockedStatus() })
        },
    })
}
