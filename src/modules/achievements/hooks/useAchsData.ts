import { useLocation } from 'react-router-dom'
import { useAchFilter$ } from '../components/achs-by-filter/ach-header/components/search-ach-input/useAchFilter.store'
import { useFetchAchs } from '../services/fetch-achs/useFetchAchs'
import { type IArtifactStatus } from '@/services/types'
import { useUser$ } from '@/modules/app/mst/StoreProvider'

export const useAchsData = () => {
    const { serverSearchInput } = useAchFilter$()
    const location = useLocation()
    const queryFilter: IArtifactStatus = location.state?.filter
    const { id: userId } = useUser$()

    const { achs, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useFetchAchs({
        serverSearchInput,
        limit: 20,
        userId,
        queryFilter,
    })

    return { achs, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage }
}
