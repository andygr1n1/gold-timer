import { useQueryClient } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { INoteStatus } from '../shared-services/types'

export const useInvalidateNotes = () => {
    const queryClient = useQueryClient()
    const location = useLocation()

    const onSuccess = () => {
        const queryFilter: INoteStatus = location.state?.filter

        queryClient.invalidateQueries({
            predicate: (query) => {
                const queryKey = query.queryKey
                return (
                    (queryKey[1] === 'useFetchNotes' && queryKey[2] === 5 && queryKey[3] === queryFilter) ||
                    queryKey[1] === 'useFetchNote'
                )
            },
        })

        /* dashboard counter */
        queryClient.invalidateQueries({
            predicate: (query) => {
                const queryKey = query.queryKey
                return queryKey[1] === 'useFetchArtifactsCount'
            },
        })
    }

    return { onSuccess }
}
