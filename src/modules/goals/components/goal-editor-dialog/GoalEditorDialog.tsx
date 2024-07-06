import { XModal } from '@/components-x/x-modal/XModal'
import { useGoalEditor$ } from './stores/goal-editor-store/useGoalEditor.store'
import { GoalEditorTitle } from './components/goal-editor-form-title/GoalEditorTitle'
import { GoalEditor } from './components/GoalEditor'

export const GoalEditorDialog: React.FC = () => {
    const { store: state, onCancel } = useGoalEditor$()

    return (
        <XModal open={state.open} fullHeight onCancel={onCancel} title={<GoalEditorTitle />}>
            {state.open && <GoalEditor />}
        </XModal>
    )
}
