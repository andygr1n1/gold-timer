import { observer } from 'mobx-react-lite'
import { useStoryMessagesData } from '../../hooks/useStoryMessagesData'
import { XSkeleton } from '@/components-x/x-skeleton/XSkeleton'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { StoryMessageIndex } from '../story-message/StoryMessageIndex'

export const StoryMessagesList: React.FC = observer(() => {
    const { story, isLoading } = useStoryMessagesData()
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    return (
        <div className='flex flex-col flex-auto h-full'>
            {isLoading && <XSkeleton length={4} />}
            <div>
                {story?.stories_messages?.map((message) => (
                    <StoryMessageIndex key={message.id} message={message} isMobile={isMobile} />
                ))}
            </div>
        </div>
    )
})
