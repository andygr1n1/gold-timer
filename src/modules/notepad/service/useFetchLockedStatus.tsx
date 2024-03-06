import { useQuery } from '@tanstack/react-query'
import { KEY_FetchNotepadLockedStatus } from './keys'
import { query_fetchNotepadLockedStatus } from './query_fetchNotepadLockedStatus'

type IRes = {
    isLoading: boolean
    isLocked: boolean
}

export const useFetchLockedStatus = (): IRes => {
    const { data: isLocked, isLoading } = useQuery({
        queryKey: KEY_FetchNotepadLockedStatus(),
        queryFn: async () => await query_fetchNotepadLockedStatus(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    return { isLoading, isLocked: isLocked || false }
}
