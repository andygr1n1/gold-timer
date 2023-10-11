import { Popover, PopoverProps } from 'antd'
import { observer } from 'mobx-react-lite'
import { PopoverGoalActionsContent } from './PopoverGoalActionsContent'
import { IGoal$ } from '@/modules/goals/mst/types'

export const PopoverGoalActions: React.FC<
    PopoverProps & {
        goal: IGoal$
        forceMode?: boolean
        popoverState: boolean
        setPopoverState: React.Dispatch<React.SetStateAction<boolean>>
    }
> = observer(({ goal, children, forceMode = false, popoverState, setPopoverState }) => {
    return (
        <Popover
            open={popoverState}
            onOpenChange={() => popoverState && setPopoverState(!popoverState)}
            overlayClassName=''
            className=''
            content={
                <PopoverGoalActionsContent action={() => setPopoverState(false)} goal={goal} forceMode={forceMode} />
            }
            placement='bottom'
        >
            {children}
        </Popover>
    )
})
