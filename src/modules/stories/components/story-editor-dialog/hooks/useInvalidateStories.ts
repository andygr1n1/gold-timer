import { useQueryClient } from '@tanstack/react-query'
import { storiesService } from '@/modules/stories/services/storiesService'
import { storyMakerService } from '../../story-maker/service/storyMakerService'

export const useInvalidateStories = () => {
    const queryClient = useQueryClient()

    const onSuccess = () => {
        queryClient.invalidateQueries({
            predicate: (query) => {
                const queryKey = query.queryKey
                return queryKey[0] === storiesService.instance
            },
        })

        queryClient.invalidateQueries({
            predicate: (query) => {
                const queryKey = query.queryKey
                return queryKey[0] === storyMakerService.instance && queryKey[1] === 'useFetchStoryInfo'
            },
        })
    }

    return { onSuccess }
}
