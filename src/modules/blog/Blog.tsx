import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { PhoenixConnectionPreview } from './previews/PhoenixConnectionPreview'
import { EyeTrainingPreview } from './previews/HealingEyePreview'

export const Blog: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.BLOG}>
            <div className='flex flex-col gap-5 w-full max-w-[600px] mx-auto'>
                <PhoenixConnectionPreview />
                <EyeTrainingPreview />
            </div>
        </ModuleWrapper>
    )
}
