import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { type ReactNode } from 'react'
import { useUpdateStoryIsArchived } from './useUpdateStoryIsArchived'
import { IconArchive } from '@/assets/icons/IconArchive'
import { cn } from '@/helpers/cn'

export const StoryIsArchived: React.FC<{ id: string; isArchived: boolean; label?: ReactNode; onClose: () => void }> = ({
    id,
    isArchived,
    label,
    onClose,
}) => {
    const { toggleArchived } = useUpdateStoryIsArchived()

    return (
        <>
            <StyledButton
                id='toggleArchiveStory'
                variant={isArchived ? 'contained' : 'text'}
                size={'small'}
                onClick={() => {
                    toggleArchived({ id, isArchived: !isArchived })
                    onClose()
                }}
                className={cn(isArchived && '!bg-violet-600')}
                startIcon={<IconArchive className='mb-0.5 h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#toggleArchiveStory'>{isArchived ? 'Unarchive' : 'Archive'}</XTooltip>}
        </>
    )
}
