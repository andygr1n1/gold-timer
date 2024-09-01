import { IconAvatar } from '@/assets/icons/IconAvatar'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import type { IStoryMessage } from '@/modules/stories/services/types'

export const StoryMessageAvatar: React.FC<{ message: IStoryMessage }> = ({ message }) => {
    if (!message.story?.users?.length) return null

    return (
        <>
            <div
                id={`storyMessageAvatar-${message.id}`}
                className='w-10 opacity-0 duration-300 group-hover:opacity-100 flex absolute -left-14 top-2 h-10 rounded-full shadow-xl items-center justify-center text-base'
            >
                {message.updated_by_user?.avatar ? (
                    <img
                        data-testid='image-avatar'
                        alt={'avatar'}
                        src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}/avatars/${message.updated_by_user?.avatar}`}
                        className='w-full h-full rounded-full '
                    />
                ) : (
                    <IconAvatar
                        data-testid='icon-avatar'
                        width={20}
                        height={20}
                        className='text-cText opacity-70 duration-300 '
                    />
                )}
            </div>
            <XTooltip anchorSelect={`#storyMessageAvatar-${message.id}`}>
                {message.updated_by_user?.name || ''}
            </XTooltip>
        </>
    )
}
