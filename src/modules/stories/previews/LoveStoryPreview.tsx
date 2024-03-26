import { IconLuxuryHeart } from '@/assets/icons'
import { Story } from '../components/Story'

export const LoveStoryPreview: React.FC = () => {
    return (
        <Story
            title={<span className='text-rose-500 '>Love Story</span>}
            path='love-story'
            logo={<IconLuxuryHeart className='text-rose-500 w-10 h-10' />}
        />
    )
}
