import { useQueryClient } from '@tanstack/react-query'
import { storiesService } from '@/modules/stories/services/storiesService'

export const useInvalidateStories = () => {
    const queryClient = useQueryClient()

    const onSuccess = () => {
        queryClient.invalidateQueries({
            predicate: (query) => {
                const queryKey = query.queryKey
                return queryKey[0] === storiesService.instance
            },
        })
    }

    return { onSuccess }
}
