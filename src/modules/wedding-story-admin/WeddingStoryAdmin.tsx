import { StyledButton } from '@/components/buttons/StyledButton'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { GuestsIndex } from './components/guests/GuestsIndex'

export const WeddingStoryAdmin: React.FC = () => {
    return (
        <ModuleWrapper>
            <div className='w-full justify-end flex'>
                <StyledButton>Create an Invitation</StyledButton>
            </div>
            <GuestsIndex />
        </ModuleWrapper>
    )
}
