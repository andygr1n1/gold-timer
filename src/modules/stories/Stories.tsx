import { ModuleWrapper } from '@/components/ModuleWrapper'
import { isUnderDevelopment } from '@/functions/isUnderDevelopment.helper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { PhoenixConnectionPreview } from './previews/PhoenixConnectionPreview'
import { LoveStoryPreview } from './previews/LoveStoryPreview'
import { EyeTrainingPreview } from './previews/HealingEye'

export const Stories: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.STORIES}>
            {isUnderDevelopment() ? (
                <>
                    <EyeTrainingPreview />

                    <PhoenixConnectionPreview />

                    <LoveStoryPreview />
                    {/* stabilized */}
                    <div className='flex max-h-[1px] flex-[100%] 2lg:flex-[45%]' />
                </>
            ) : null}
        </ModuleWrapper>
    )
}
