import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useMutateGoalDeletedAt } from '@/modules/goals/service'
import { IconDeleteTemp } from '@/assets/icons/IconDeleteTemp'
import { ReactNode } from 'react'

export const DeleteGoal: React.FC<{ goalId: string; deletedAt: boolean; label?: ReactNode }> = ({
    goalId,
    deletedAt,
    label,
}) => {
    const { mutate } = useMutateGoalDeletedAt()

    return (
        <>
            <StyledButton
                id='toggleMoveGoalToBin'
                size={'small'}
                error={!!deletedAt}
                variant={'text'}
                onClick={() => mutate({ deleted_at: !deletedAt, goal_id: goalId })}
                startIcon={
                    <IconDeleteTemp width={24} height={24} className='mb-0.5 h-6 w-6 opacity-70 hover:opacity-100' />
                }
            >
                {label}
            </StyledButton>
            {!label && (
                <XTooltip anchorSelect='#toggleMoveGoalToBin'>
                    {deletedAt ? 'Restore from bin' : 'Move to bin'}
                </XTooltip>
            )}
        </>
    )
}
