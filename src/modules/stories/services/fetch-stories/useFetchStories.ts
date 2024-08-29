import { useInfiniteQuery } from '@tanstack/react-query'
import { compact, flatten, last, uniqWith } from 'lodash-es'
import { useUser$ } from '@/services/user-store/userUser.store'
// import { query_favoriteNotes } from './query_favoriteNotes'
import { query_activeStories } from './query_activeStories'
// import { query_archivedNotes } from './query_archivedNotes'
// import { query_deletedNotes } from './query_deletedNotes'
// import { query_allNotes } from './query_allNotes'
import { artifactStatus, type IArtifactStatus } from '@/services/types'
import { type IStory } from '../types'
import { storiesService } from '../storiesService'
import { query_allStories } from './query_allStories'
import { query_favoriteStories } from './query_favoriteStories'
import { query_archivedStories } from './query_archivedStories'
import { query_deletedStories } from './query_deletedStories'

export const useFetchStories = (props: { queryFilter: IArtifactStatus; limit: number; serverSearchInput: string }) => {
    const { queryFilter = artifactStatus.active, limit = 20, serverSearchInput = '' } = props
    const { userId } = useUser$()

    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isLoading } = useInfiniteQuery({
        queryKey: storiesService.fetchStories(`${limit}${queryFilter}${serverSearchInput}${userId}`),
        queryFn: async (props) => {
            const offset = props.pageParam
            const nextCursor = props.pageParam + 5
            let data: IStory[] | undefined = []

            if (queryFilter === artifactStatus.all) {
                data = await query_allStories({ userId, limit, offset, serverSearchInput })
            }

            if (queryFilter === artifactStatus.favorite) {
                data = await query_favoriteStories({ userId, limit, offset, serverSearchInput })
            }
            if (queryFilter === artifactStatus.active) {
                data = await query_activeStories({ userId, limit, offset, serverSearchInput })
            }

            if (queryFilter === artifactStatus.archived) {
                data = await query_archivedStories({ userId, limit, offset, serverSearchInput })
            }
            if (queryFilter === artifactStatus.deleted) {
                data = await query_deletedStories({ userId, limit, offset, serverSearchInput })
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
    })

    const stories = uniqWith(compact(flatten(data?.pages.map((page) => page.data))), (a, b) => a.id === b.id)
    return {
        isFetching,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isLoading,
        stories: stories || [],
    }
}
