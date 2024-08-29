import { useLocation } from 'react-router-dom'
import { useFetchStoryMessages } from '../service/useFetchStoryMessages'

export const useStoryMessagesData = () => {
    const location = useLocation()
    const uuidRegex = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
    const match = location.pathname.match(uuidRegex)
    const { data: story, isLoading } = useFetchStoryMessages({ storyId: match?.[0] })
    return { story, isLoading }
}
