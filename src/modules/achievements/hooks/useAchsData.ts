import { useLocation } from 'react-router-dom'
import { useAchFilter$ } from '../components/achs-by-filter/ach-header/components/search-ach-input/useAchFilter.store'
import { useFetchAchs } from '../services/fetch-achs/useFetchAchs'
import { type IArtifactStatus } from '@/services/types'
import { useUser$ } from '@/services/user-store/userUser.store'

export const useAchsData = () => {
    const { serverSearchInput } = useAchFilter$()
    const location = useLocation()
    const queryFilter: IArtifactStatus = location.state?.filter
    const { userId } = useUser$()

    const { achs, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useFetchAchs({
        serverSearchInput,
        limit: 20,
        userId,
        queryFilter,
    })

    return { achs, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage }
}
