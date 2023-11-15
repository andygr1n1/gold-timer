import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { IGoal$ } from '@/modules/goals/mst/types'
import { PopoverGoalActions } from '@/components/popover-goal-actions/PopoverGoalActions'

export const PanelGoalMenuActions: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    return (
        <PopoverGoalActions goal={goal}>
            <Icon
                className='cursor-pointer text-gray-600 duration-300 hover:text-blue-700'
                icon='material-symbols:settings-rounded'
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
            />
        </PopoverGoalActions>
    )
})
