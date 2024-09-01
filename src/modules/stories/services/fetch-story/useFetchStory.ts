import { useQuery } from '@tanstack/react-query'
import { query_story } from './query_story'
import { storiesService } from '../storiesService'
import { cast } from '@/helpers'

export const useFetchStory = ({ storyId }: { storyId?: string }) => {
    const { data, isLoading } = useQuery({
        queryKey: storiesService.fetchStory(storyId),
        queryFn: () => query_story({ storyId: cast(storyId) }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!storyId,
    })

    return {
        isLoading,
        story: data,
    }
}
