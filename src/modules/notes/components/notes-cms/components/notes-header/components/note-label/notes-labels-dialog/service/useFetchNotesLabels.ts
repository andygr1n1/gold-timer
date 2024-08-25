import { useQuery } from '@tanstack/react-query'
import { query_fetchNotesLabels } from './query_fetchNotesLabels'
import { useUser$ } from '@/services/user-store/userUser.store'
import { noteLabelsService } from './noteLabelsService'
import { useState } from 'react'

export const useFetchNotesLabels = () => {
    const [filter, setFilter] = useState('')
    const { userId } = useUser$()
    const { isLoading, data } = useQuery({
        queryKey: noteLabelsService.KEY_fetchNotesLabels({ userId }),
        queryFn: () => query_fetchNotesLabels(),
        staleTime: 1000,
        refetchOnWindowFocus: true,
        refetchOnMount: false,
        enabled: !!userId,
    })

    return {
        notesLabels: data || [],
        isLoading,
        filter,
        data:
            data?.filter((label) => label.name?.toLocaleLowerCase().includes(filter.trim().toLocaleLowerCase())) || [],
        onChange: (value: string) => setFilter(value),
    }
}
