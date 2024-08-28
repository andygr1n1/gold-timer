import { IconDeleteTemp, IconHeart } from '@/assets/icons'
import { IconArchive } from '@/assets/icons/IconArchive'
import { StyledButton } from '@/components/buttons/StyledButton'
import { type IStorySchema } from '@/modules/stories/services/types'

export const StoryStatus: React.FC<{ story: IStorySchema }> = ({ story }) => {
    return (
        <div className='flex gap items-center self-end justify-end w-full'>
            {story.is_favorite && (
                <StyledButton
                    className='!pointer-events-none'
                    size='small'
                    variant='text'
                    startIcon={<IconHeart width={24} height={24} className='text-rose-500' />}
                />
            )}
            {story.archived && (
                <StyledButton
                    className='!pointer-events-none'
                    size='small'
                    variant='text'
                    startIcon={<IconArchive width={24} height={24} className='text-violet-600' />}
                />
            )}
            {story.deleted_at && (
                <StyledButton
                    className='!pointer-events-none'
                    size='small'
                    variant='text'
                    startIcon={<IconDeleteTemp width={24} height={24} className='text-gray-700 ' />}
                />
            )}
        </div>
    )
}
