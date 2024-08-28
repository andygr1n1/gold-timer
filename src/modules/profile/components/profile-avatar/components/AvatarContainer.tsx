import { IconAvatar } from '@/assets/icons/IconAvatar'

export const AvatarContainer: React.FC<{ avatar?: string | null }> = ({ avatar }) => {
    return (
        <div
            data-testid='avatar-container'
            className='relative group mx-auto flex z-10 md:h-40 md:w-40 h-32 w-32 items-center justify-center rounded-full '
        >
            {avatar ? (
                <img
                    data-testid='image-avatar'
                    alt={'avatar'}
                    src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}/avatars/${avatar}`}
                    className='w-full h-full rounded-full '
                />
            ) : (
                <IconAvatar
                    data-testid='icon-avatar'
                    width={64}
                    height={64}
                    className='text-cText opacity-70 duration-300 group-hover:text-blue-600 group-hover:opacity-100'
                />
            )}
        </div>
    )
}
