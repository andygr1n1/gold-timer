import { useQuery } from '@tanstack/react-query'
import { KEY_FetchNotepad } from './keys'
import { query_fetchNotepad } from './query_fetchNotepad'

type IRes = {
    isLoading: boolean
    description: string
}

export const useFetchNotepad = (): IRes => {
    const { data, isLoading } = useQuery({
        queryKey: KEY_FetchNotepad(),
        queryFn: async () => await query_fetchNotepad(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    return { isLoading, description: data || '' }
}
