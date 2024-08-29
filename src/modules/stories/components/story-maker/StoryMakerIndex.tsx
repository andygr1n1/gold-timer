import { ModuleWrapper } from '@/components/ModuleWrapper'
import { StoryMakerDetails } from './components/story-maker-details/StoryMakerDetails'
import { StoryMessages } from './components/story-messages/StoryMessages'

const StoryMakerIndex = () => {
    return (
        <ModuleWrapper>
            <div className='flex flex-col gap-10 w-full h-full max-w-[600px] mx-auto relative'>
                <StoryMakerDetails />
                <StoryMessages />
            </div>
        </ModuleWrapper>
    )
}

export default StoryMakerIndex
