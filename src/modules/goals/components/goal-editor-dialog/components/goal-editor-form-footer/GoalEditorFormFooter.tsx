import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { EditModeFooter } from './edit-mode-footer/EditModeFooter'
import { ViewModeFooter } from './view-mode-footer/ViewModeFooter'

export const GoalEditorFormFooter: React.FC = () => {
    const { viewMode } = useGoalEditor$()

    if (viewMode) {
        return <ViewModeFooter />
    }

    return <EditModeFooter />
}
