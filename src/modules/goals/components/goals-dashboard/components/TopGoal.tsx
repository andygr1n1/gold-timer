import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { GoalContextMenu } from './GoalContextMenu'
import { TopGoalBody } from './TopGoalBody'

import { IGoalSchema } from '@/modules/goals/shared-service/types'
import { useGoalEditor$ } from '../../goal-editor/stores/useGoalEditor.store'
import { goalEditorMode } from '../../goal-editor/stores/types'

export const TopGoal: React.FC<{ goal: IGoalSchema; className?: string; zIndex?: number }> = ({
    goal,
    className = '',
    zIndex,
}) => {
    const { setState } = useGoalEditor$()
    const { popoverState, setPopoverState } = useTogglePopoverState()

    return (
        <XDropdown
            open={popoverState}
            onOpenChange={() => {
                setPopoverState(!popoverState)
            }}
            overlayStyle={{ zIndex }}
            trigger={['click', 'contextMenu']}
            dropdownRender={() => <GoalContextMenu action={() => setPopoverState(false)} goal={goal} />}
        >
            {/* div is important for context menu positioning */}
            <div>
                <TopGoalBody
                    goal={goal}
                    selectGoal={() => {
                        setState({ goalEditorMode: goalEditorMode.view, goalId: goal.id, open: true })
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
