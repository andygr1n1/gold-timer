import { useLocation } from 'react-router-dom'
import { useFetchStoryInfo } from '../service/useFetchStory'

export const useStoryData = () => {
    const location = useLocation()
    const uuidRegex = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
    const match = location.pathname.match(uuidRegex)
    const { data: story, isLoading } = useFetchStoryInfo({ storyId: match?.[0] })
    return { story, isLoading }
}
