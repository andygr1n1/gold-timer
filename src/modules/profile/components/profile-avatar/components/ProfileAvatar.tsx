import { CircleBreathAnimation } from './CircleBreathAnimation'
import { AvatarContainer } from './AvatarContainer'
import { useFetchAvatar } from '@/modules/profile/service/fetch-avatar/useFetchAvatar'

export const ProfileAvatar = () => {
    const { avatar } = useFetchAvatar()

    return (
        <div
            data-testId='profile-avatar'
            className='relative flex h-32 w-32 items-center justify-center
            rounded-full font-bold text-gray-500 md:h-40 md:w-40'
        >
            <AvatarContainer avatar={avatar} />
            <CircleBreathAnimation />
        </div>
    )
}
