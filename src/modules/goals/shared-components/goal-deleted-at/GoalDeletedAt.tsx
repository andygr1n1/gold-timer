import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
// import { useMutateGoalDeletedAt } from '@/modules/goals/service'
import { IconDeleteTemp } from '@/assets/icons/IconDeleteTemp'
import { type ReactNode } from 'react'
import { useUpdateGoalDeletedAt } from './hook/useUpdateGoalDeletedAt.hook'
import { formatDateWithTimezone } from '@/helpers/date.helpers'

export const GoalDeletedAt: React.FC<{ goalId: string; deletedAt: boolean; label?: ReactNode }> = ({
    goalId,
    deletedAt,
    label,
}) => {
    const { updateGoalDeletedAt } = useUpdateGoalDeletedAt()

    return (
        <>
            <StyledButton
                id='toggleMoveGoalToBin'
                size={'small'}
                error={!!deletedAt}
                variant={'text'}
                onClick={() =>
                    updateGoalDeletedAt({ goalId, deletedAt: !!deletedAt ? null : formatDateWithTimezone() })
                }
                startIcon={<IconDeleteTemp width={24} height={24} className='h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#toggleMoveGoalToBin'>{deletedAt ? 'Restore' : 'Move to bin'}</XTooltip>}
        </>
    )
}
