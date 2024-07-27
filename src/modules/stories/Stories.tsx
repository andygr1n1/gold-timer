import { ModuleWrapper } from '@/components/ModuleWrapper'
import { PhoenixConnectionPreview } from './previews/PhoenixConnectionPreview'
import { LoveStoryPreview } from './previews/LoveStoryPreview'
import { EyeTrainingPreview } from './previews/HealingEye'

export const Stories: React.FC = () => {
    return (
        <ModuleWrapper>
            <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto'>
                <EyeTrainingPreview />
                <PhoenixConnectionPreview />
                <LoveStoryPreview />
            </div>
        </ModuleWrapper>
    )
}
