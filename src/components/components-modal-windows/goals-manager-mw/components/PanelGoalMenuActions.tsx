import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { IGoal$ } from '@/mst/types'
import { PopoverGoalActions } from '@/components/popover-goal-actions/PopoverGoalActions'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState'

export const PanelGoalMenuActions: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { popoverState, setPopoverState } = useTogglePopoverState()

    return (
        <PopoverGoalActions popoverState={popoverState} setPopoverState={setPopoverState} goal={goal}>
            <div>
                <Icon
                    className='cursor-pointer text-gray-600 duration-300 hover:text-sky-600'
                    icon='material-symbols:settings-rounded'
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setPopoverState(true)
                    }}
                />
            </div>
        </PopoverGoalActions>
    )
})
