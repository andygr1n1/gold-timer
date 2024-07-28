import { useInfiniteQuery } from '@tanstack/react-query'
import { compact, flatten, last, uniqWith } from 'lodash-es'
import { useUser$ } from '@/services/user-store/userUser.store'
import { INoteSchema, INoteStatus, noteStatus } from '@/modules/notes/shared-services/types'
import { notesKeys } from '../keys'
import { query_favoriteNotes } from './query_favoriteNotes'
import { query_activeNotes } from './query_activeNotes'
import { query_archivedNotes } from './query_archivedNotes'
import { query_deletedNotes } from './query_deletedNotes'

export const useFetchNotes = (props: { queryFilter: INoteStatus; limit: number; serverSearchInput: string }) => {
    const { queryFilter = noteStatus.active, limit = 20, serverSearchInput = '' } = props
    const { userId } = useUser$()

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading } = useInfiniteQuery(
        {
            queryKey: notesKeys.useFetchNotes(limit, queryFilter, serverSearchInput, userId),
            queryFn: async (props) => {
                const offset = props.pageParam
                const nextCursor = props.pageParam + 5
                let data: INoteSchema[] | undefined = []

                if (queryFilter === noteStatus.favorite) {
                    data = await query_favoriteNotes({ userId, limit, offset, serverSearchInput })
                }
                if (queryFilter === noteStatus.active) {
                    data = await query_activeNotes({ userId, limit, offset, serverSearchInput })
                }

                if (queryFilter === noteStatus.archived) {
                    data = await query_archivedNotes({ userId, limit, offset, serverSearchInput })
                }
                if (queryFilter === noteStatus.deleted) {
                    data = await query_deletedNotes({ userId, limit, offset, serverSearchInput })
                }
                return { data, nextCursor }
            },
            initialPageParam: 0,
            getNextPageParam: (lastPage, pages) => {
                return last(pages)?.data?.length ? lastPage?.nextCursor : undefined
            },

            staleTime: 1000,
            refetchOnWindowFocus: false,
            refetchOnMount: true,
            enabled: !!userId,
        },
    )

    const notes = uniqWith(compact(flatten(data?.pages.map((page) => page.data))), (a, b) => a.id === b.id)
    return {
        isFetching,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
        notes: notes || [],
    }
}
