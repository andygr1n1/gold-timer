import { IconPhoenix } from '@/assets/icons/IconPhoenix'
import { Story } from '../components/Story'

export const PhoenixConnectionPreview: React.FC = () => {
    return (
        <Story
            title={<span className='text-orange-600 '>Phoenix Connection</span>}
            path='phoenix-connection'
            logo={<IconPhoenix className='text-orange-600  w-[24px] h-[24px]' />}
            date={'16th July 2024'}
            author='Healer AG'
        />
    )
}
