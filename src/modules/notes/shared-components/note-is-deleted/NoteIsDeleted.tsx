import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconDeleteTemp } from '@/assets/icons/IconDeleteTemp'
import { type ReactNode } from 'react'
import { useUpdateNoteDeletedAt } from './useUpdateNoteDeletedAt'
import { formatDateWithTimezone } from '@/helpers/date.helpers'

export const NoteIsDeleted: React.FC<{ id: string; deletedAt: boolean; label?: ReactNode }> = ({
    id,
    deletedAt,
    label,
}) => {
    const { updateNoteDeletedAt } = useUpdateNoteDeletedAt()

    return (
        <>
            <StyledButton
                id='toggleMoveNoteToBin'
                size={'small'}
                error={!!deletedAt}
                variant={'text'}
                onClick={() => updateNoteDeletedAt({ id, deletedAt: !!deletedAt ? null : formatDateWithTimezone() })}
                startIcon={<IconDeleteTemp width={24} height={24} className='h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#toggleMoveNoteToBin'>{deletedAt ? 'Restore' : 'Move to bin'}</XTooltip>}
        </>
    )
}
