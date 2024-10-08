import { useInfiniteQuery } from '@tanstack/react-query'
import { compact, flatten, last, uniqWith } from 'lodash-es'
import { artifactStatus } from '@/services/types'
import { achService } from '../achService'
import { type IAch, type IUseFetchAchs } from '../types'
import { query_allAchs } from './query_allAchs'
import { query_favoriteAchs } from './query_favoriteAchs'
import { query_activeAchs } from './query_activeAchs'
import { query_deletedAchs } from './query_deletedAchs'
import { query_archivedAchs } from './query_archivedAchs'

export const useFetchAchs = (props: IUseFetchAchs) => {
    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
        queryKey: achService.fetchAchsKey(JSON.stringify(props)),
        queryFn: async (queryProps) => {
            const { queryFilter = artifactStatus.active, limit = 20, serverSearchInput = '' } = props
            const offset = queryProps.pageParam
            const nextCursor = queryProps.pageParam + 5
            let data: IAch[] | undefined = []

            if (queryFilter === artifactStatus.all) {
                data = await query_allAchs({ limit, offset, serverSearchInput })
            }
            if (queryFilter === artifactStatus.favorite) {
                data = await query_favoriteAchs({ limit, offset, serverSearchInput })
            }
            if (queryFilter === artifactStatus.active) {
                data = await query_activeAchs({ limit, offset, serverSearchInput })
            }

            if (queryFilter === artifactStatus.deleted) {
                data = await query_deletedAchs({ limit, offset, serverSearchInput })
            }

            if (queryFilter === artifactStatus.archived) {
                data = await query_archivedAchs({ limit, offset, serverSearchInput })
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
        enabled: !!props.userId,
    })

    const achs = uniqWith(compact(flatten(data?.pages.map((page) => page.data))), (a, b) => a.id === b.id)

    return {
        isLoading: isFetching,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        achs: achs || [],
    }
}
