import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { type ReactNode } from 'react'
import { IconArchive } from '@/assets/icons/IconArchive'
import { cn } from '@/helpers/cn'
import { useUpdateAchIsArchived } from './useUpdateAchIsArchived'

export const AchIsArchived: React.FC<{
    id: string
    isArchived: boolean
    label?: ReactNode
    onClose: () => void
    context?: 'drawer'
}> = ({ id, isArchived, label, onClose, context }) => {
    const { toggleArchived } = useUpdateAchIsArchived()

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
                className={cn(isArchived && '!bg-violet-600', context === 'drawer' && '!w-full !py-5')}
                startIcon={<IconArchive className='mb-0.5 h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#toggleArchiveStory'>{isArchived ? 'Unarchive' : 'Archive'}</XTooltip>}
        </>
    )
}
