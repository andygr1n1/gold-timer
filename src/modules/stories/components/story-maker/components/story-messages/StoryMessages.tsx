import { StoryTipTap } from '../story-tip-tap/StoryTipTap'
import { StoryMessagesList } from '../story-messages-list/StoryMessagesList'

export const StoryMessages = () => {
    return (
        <div className='h-full flex flex-col gap-5 w-full '>
            <StoryTipTap />
            <div className='flex flex-col flex-auto h-full'>
                <StoryMessagesList />
            </div>
        </div>
    )
}
