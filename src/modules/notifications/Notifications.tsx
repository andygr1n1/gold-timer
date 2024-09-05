import { ModuleWrapper } from '@/components/ModuleWrapper'
import { PhoenixConnectionPreview } from './previews/PhoenixConnectionPreview'
import { EyeTrainingPreview } from './previews/HealingEyePreview'

export const Notifications: React.FC = () => {
    return (
        <ModuleWrapper>
            <div className='flex flex-col gap-5 w-full max-w-[600px] mx-auto'>
                <PhoenixConnectionPreview />
                <EyeTrainingPreview />
            </div>
        </ModuleWrapper>
    )
}
