import { useQuery } from '@tanstack/react-query'
import { notesKeys } from '../keys'
import { query_fetchNote } from './query_fetchNote'

export const useFetchNote = (props: { id: string | null }) => {
    const { id } = props
    const { isLoading, data } = useQuery({
        queryKey: notesKeys.useFetchNote({ id }),
        queryFn: async () => await query_fetchNote({ id }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!id,
    })

    return {
        isLoading,
        data,
    }
}
