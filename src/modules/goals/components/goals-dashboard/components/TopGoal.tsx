import { useTogglePopoverState } from '@/hooks/useTogglePopoverState'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { TopGoalMenu } from './TopGoalMenu'
import { TopGoalBody } from './TopGoalBody'

import { type IGoal } from '@/modules/goals/service/types'

export const TopGoal: React.FC<{ goal: IGoal; className?: string; zIndex?: number }> = ({
    goal,
    className = '',
    zIndex,
}) => {
    const { popoverState, setPopoverState } = useTogglePopoverState()

    return (
        <XDropdown
            open={popoverState}
            onOpenChange={() => {
                setPopoverState(!popoverState)
            }}
            overlayStyle={{ zIndex }}
            trigger={['click', 'contextMenu']}
            dropdownRender={() => <TopGoalMenu action={() => setPopoverState(false)} goal={goal} />}
        >
            {/* div is important for context menu positioning */}
            <div className='animate-opacity-5'>
                <TopGoalBody
                    goal={goal}
                    selectGoal={() => {
                        selectedGoalAtom$.set(selectedGoalAtom, { id: goal.id, is_edit: false, is_new: false })
                        setPopoverState(false)
                    }}
                    onRightClick={() => {
                        setPopoverState(!popoverState)
                    }}
                    className={className}
                />
            </div>
        </XDropdown>
    )
}
