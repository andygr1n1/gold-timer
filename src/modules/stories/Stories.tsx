import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/globalEnums'
import { PhoenixConnectionPreview } from './previews/PhoenixConnectionPreview'
import { LoveStoryPreview } from './previews/LoveStoryPreview'
import { EyeTrainingPreview } from './previews/HealingEye'

export const Stories: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.STORIES}>
            <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto'>
                <EyeTrainingPreview />
                <PhoenixConnectionPreview />
                <LoveStoryPreview />
            </div>
        </ModuleWrapper>
    )
}
