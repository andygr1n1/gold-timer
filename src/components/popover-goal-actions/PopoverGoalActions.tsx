import { PopoverProps } from 'antd'
import { observer } from 'mobx-react-lite'
import { PopoverGoalActionsContent } from './PopoverGoalActionsContent'
import { IGoal$ } from '@/modules/goals/mst/types'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState'

export const PopoverGoalActions: React.FC<
    PopoverProps & {
        goal: IGoal$
        forceMode?: boolean
    }
> = observer(({ goal, children, forceMode = false }) => {
    const { popoverState, setPopoverState } = useTogglePopoverState()
    return (
        <XDropdown
            trigger={['hover']}
            open={popoverState}
            onOpenChange={() => setPopoverState(!popoverState)}
            dropdownRender={() => (
                <PopoverGoalActionsContent action={() => setPopoverState(false)} goal={goal} forceMode={forceMode} />
            )}
            placement='bottomLeft'
        >
            {children}
        </XDropdown>
    )
})
