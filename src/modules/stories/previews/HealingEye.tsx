import { IconRoyalLove } from '@/assets/icons/IconRoyalLove'
import { Story } from '../components/Story'

export const EyeTrainingPreview: React.FC = () => {
    return (
        <Story
            title={<span className='text-amber-500 '>Healing eye</span>}
            path='healing-eye'
            logo={<IconRoyalLove className='text-amber-500 w-10 h-10' />}
        />
    )
}
