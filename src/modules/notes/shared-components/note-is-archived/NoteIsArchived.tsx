import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { ReactNode } from 'react'
import { useUpdateNoteIsArchived } from './useUpdateNoteIsArchived'
import { IconArchive } from '@/assets/icons/IconArchive'
import { cn } from '@/helpers/cn'

export const NoteIsArchived: React.FC<{ id: string; isArchived: boolean; label?: ReactNode }> = ({
    id,
    isArchived,
    label,
}) => {
    const { toggleArchived } = useUpdateNoteIsArchived()

    return (
        <>
            <StyledButton
                id='toggleArchiveNote'
                variant={isArchived ? 'contained' : 'text'}
                size={'small'}
                onClick={() => toggleArchived({ id, isArchived: !isArchived })}
                className={cn(isArchived && '!bg-violet-600')}
                startIcon={<IconArchive className='mb-0.5 h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#toggleArchiveNote'>{isArchived ? 'Unarchive' : 'Archive'}</XTooltip>}
        </>
    )
}
