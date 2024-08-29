import { useQuery } from '@tanstack/react-query'
import { cast } from '@/helpers'
import { query_fetchStoryInfo } from './query_fetchStoryInfo'
import { storyMakerService } from './storyMakerService'

export const useFetchStoryInfo = ({ storyId }: { storyId?: string }) => {
    const { data, isLoading } = useQuery({
        queryKey: storyMakerService.useFetchStoryInfo(storyId),
        queryFn: () => query_fetchStoryInfo({ storyId: cast(storyId) }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!storyId,
    })

    return { data, isLoading }
}
