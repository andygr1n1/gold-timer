import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconDeleteTemp } from '@/assets/icons/IconDeleteTemp'
import { ReactNode } from 'react'
import { useUpdateAchDeletedAt } from '../services/update-ach-deleted-at/useUpdateAchDeletedAt'
import { formatDateWithTimezone } from '@/helpers/date.helpers'

export const AchIsDeleted: React.FC<{ id: string; deletedAt: boolean; label?: ReactNode }> = ({
    id,
    deletedAt,
    label,
}) => {
    const { updateDeletedAt } = useUpdateAchDeletedAt()

    return (
        <>
            <StyledButton
                id='toggleMoveAchToBin'
                size={'small'}
                error={!!deletedAt}
                variant={'text'}
                onClick={() => updateDeletedAt({ id, deletedAt: !!deletedAt ? null : formatDateWithTimezone() })}
                startIcon={<IconDeleteTemp width={24} height={24} className='h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#toggleMoveAchToBin'>{deletedAt ? 'Restore' : 'Move to bin'}</XTooltip>}
        </>
    )
}
