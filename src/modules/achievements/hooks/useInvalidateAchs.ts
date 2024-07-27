import { useQueryClient } from '@tanstack/react-query'
import { achService } from '../services/achService'

export const useInvalidateAchs = () => {
    const queryClient = useQueryClient()

    const onSuccess = () => {
        queryClient.invalidateQueries({
            predicate: (query) => {
                const queryKey = query.queryKey
                return queryKey[0] === achService.instance
            },
        })
    }

    return { onSuccess }
}
