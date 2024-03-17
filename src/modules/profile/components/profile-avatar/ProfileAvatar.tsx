import { IconAvatar } from '@/assets/icons'

export const ProfileAvatar: React.FC<{ avatar: string }> = ({ avatar }) => {
    return (
        <div className='relative flex h-32 w-32 items-center justify-center  rounded-full font-bold text-gray-500 md:h-40 md:w-40'>
            <div className='relative group mx-auto flex md:h-40 md:w-40 h-32 w-32 items-center justify-center rounded-full '>
                <div className='animate-ping-bg absolute left-0 top-0 !z-0 h-full w-full  rounded-full bg-blue-500/30 opacity-100 transition'></div>
                {avatar ? (
                    <img
                        title={'avatar'}
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/avatars/${avatar}`}
                        className='absolute left-0 top-0 z-10 h-32 w-32 rounded-full md:h-40 md:w-40'
                    />
                ) : (
                    <IconAvatar
                        width={64}
                        height={64}
                        className='text-cText opacity-70 duration-300 group-hover:text-blue-600 group-hover:opacity-100'
                    />
                )}
            </div>
        </div>
    )
}
