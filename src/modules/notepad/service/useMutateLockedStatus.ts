import { useMutation } from '@tanstack/react-query'

import { mutation_notepadStatus } from './mutation_notepadStatus'
import { KEY_FetchNotepadLockedStatus } from './keys'

export const useMutateLockedStatus = () => {
    return useMutation({
        mutationFn: ({ locked }: { locked: boolean }) => mutation_notepadStatus(locked),

        onSettled: () => {
            window.queryClient?.invalidateQueries({ queryKey: KEY_FetchNotepadLockedStatus() })
        },
    })
}
