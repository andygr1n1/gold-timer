import { useGoalsStore } from '@/StoreProvider'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IGoal$ } from '@/modules/goals/mst/types'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'

export const ToggleEditGoal: React.FC<{ goal: IGoal$; hide?: boolean }> = observer(({ goal, hide = false }) => {
    const { openEditMode, openViewMode, edit_goal } = useGoalsStore()
    const { id } = goal
    return !hide ? (
        <>
            <StyledButton
                id='editGoal'
                // variant={!!edit_goal ? 'contained' : 'outlined'}
                variant={'text'}
                size={'custom'}
                className={clsx(
                    !!edit_goal && '!text-blue-600',
                    'h-7 w-10  opacity-70 hover:opacity-100 md:h-10 md:w-14',
                )}
                startIcon={<Icon icon='material-symbols:edit' width={32} height={32} />}
                onClick={() => (!!edit_goal ? openViewMode(id) : openEditMode(id, true))}
            />
            <XTooltip anchorSelect='#editGoal'>{!!edit_goal ? 'Cancel edit' : 'Edit goal'}</XTooltip>
        </>
    ) : null
})
