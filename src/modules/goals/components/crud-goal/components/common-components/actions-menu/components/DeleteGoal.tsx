import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IGoal$ } from '@/modules/goals/mst/types'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const DeleteGoal: React.FC<{ goal: IGoal$; hide?: boolean }> = observer(({ goal, hide = false }) => {
    const { deleteGoal, deleted_at } = goal
    return !hide ? (
        <>
            <StyledButton
                id='toggleMoveGoalToBin'
                size={'custom'}
                className='h-7 w-10 opacity-70 hover:opacity-100 md:h-10 md:w-14'
                error={!!deleted_at}
                // variant={deleted_at ? 'contained' : 'outlined'}
                variant={'text'}
                onClick={deleteGoal}
            >
                <Icon icon='fluent:delete-dismiss-24-filled' width={30} height={30} />
            </StyledButton>
            <XTooltip anchorSelect='#toggleMoveGoalToBin'>{deleted_at ? 'Restore from bin' : 'Move to bin'}</XTooltip>
        </>
    ) : null
})
