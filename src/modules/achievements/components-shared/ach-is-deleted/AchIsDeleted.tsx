import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconDeleteTemp } from '@/assets/icons/IconDeleteTemp'
import { type ReactNode } from 'react'
import { useUpdateAchDeletedAt } from './useUpdateAchDeletedAt'
import { formatDateWithTimezone } from '@/helpers/date.helpers'

export const AchIsDeleted: React.FC<{ id: string; deletedAt: boolean; label?: ReactNode; onClose?: () => void }> = ({
    id,
    deletedAt,
    label,
    onClose,
}) => {
    const { updateDeletedAt } = useUpdateAchDeletedAt()

    return (
        <>
            <StyledButton
                id='toggleMoveAchToBin'
                size={'small'}
                error={!!deletedAt}
                variant={'text'}
                onClick={() => {
                    updateDeletedAt({ id, deletedAt: !!deletedAt ? null : formatDateWithTimezone() })
                    onClose?.()
                }}
                startIcon={<IconDeleteTemp width={24} height={24} className='h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#toggleMoveAchToBin'>{deletedAt ? 'Restore' : 'Move to bin'}</XTooltip>}
        </>
    )
}
