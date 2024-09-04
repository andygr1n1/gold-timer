import { useQuery } from '@tanstack/react-query'
import { query_fetchNotepad } from './query_fetchNotepad'
import { useUser$ } from '@/services/user-store/userUser.store'
import { notepadService } from './notepadService'

type IRes = {
    isLoading: boolean
    description: string
}

export const useFetchNotepad = (): IRes => {
    const { userId } = useUser$()
    const { data, isLoading } = useQuery({
        queryKey: notepadService.KEY_useFetchNotepad(userId),
        queryFn: async () => await query_fetchNotepad({ userId }),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!userId,
    })

    return { isLoading, description: data || '' }
}
