import { useQuery } from '@tanstack/react-query'
import { cast } from '@/helpers'
import { query_fetchStoryMessages } from './query_fetchStoryMessages'
import { storyMakerService } from './storyMakerService'

export const useFetchStoryMessages = ({ storyId }: { storyId?: string }) => {
    const { data, isLoading } = useQuery({
        queryKey: storyMakerService.useFetchStoryMessages(storyId),
        queryFn: () => query_fetchStoryMessages({ storyId: cast(storyId) }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!storyId,
    })

    return { data, isLoading }
}
