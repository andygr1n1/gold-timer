import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconDeleteTemp } from '@/assets/icons/IconDeleteTemp'
import { type ReactNode } from 'react'
import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { useUpdateStoryDeletedAt } from './useUpdateStoryDeletedAt'

export const StoryIsDeleted: React.FC<{ id: string; deletedAt: boolean; label?: ReactNode }> = ({
    id,
    deletedAt,
    label,
}) => {
    const { updateStoryDeletedAt } = useUpdateStoryDeletedAt()

    return (
        <>
            <StyledButton
                id='toggleMoveStoryToBin'
                size={'small'}
                error={!!deletedAt}
                variant={'text'}
                onClick={() => updateStoryDeletedAt({ id, deletedAt: !!deletedAt ? null : formatDateWithTimezone() })}
                startIcon={<IconDeleteTemp width={24} height={24} className='h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && (
                <XTooltip anchorSelect='#toggleMoveStoryToBin'>{deletedAt ? 'Restore' : 'Move to bin'}</XTooltip>
            )}
        </>
    )
}
