import { useQuery } from '@tanstack/react-query'
import { query_fetchNotepadLockedStatus } from './query_fetchNotepadLockedStatus'
import { useUser$ } from '@/modules/app/mst/StoreProvider'
import { notepadService } from './notepadService'

type IRes = {
    isLoading: boolean
    isLocked: boolean
}

export const useFetchLockedStatus = (): IRes => {
    const { id: userId } = useUser$()
    const { data: isLocked, isLoading } = useQuery({
        queryKey: notepadService.KEY_useFetchLockedStatus(userId),
        queryFn: async () => await query_fetchNotepadLockedStatus({ userId }),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!userId,
    })

    return { isLoading, isLocked: isLocked || false }
}
