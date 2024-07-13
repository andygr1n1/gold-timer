import { CircleBreathAnimation } from './CircleBreathAnimation'
import { AvatarContainer } from './AvatarContainer'
import { useFetchProfileInfo } from '@/modules/profile/services'

export const ProfileAvatar = () => {
    const { data } = useFetchProfileInfo()

    return (
        <div
            data-testid='profile-avatar'
            className='relative flex h-32 w-32 items-center justify-center
            rounded-full font-bold text-gray-500 md:h-40 md:w-40'
        >
            <AvatarContainer avatar={data?.avatar} />
            <CircleBreathAnimation />
        </div>
    )
}
