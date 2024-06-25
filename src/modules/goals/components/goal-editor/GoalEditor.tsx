import { XModal } from '@/components-x/x-modal/XModal'
import { useGoalEditor$ } from './stores/useGoalEditor.store'
import { GoalEditorTitle } from './components/goal-editor-form-title/GoalEditorTitle'
import { GoalEditorForm } from './components/GoalEditorForm'

export const GoalCRUDProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            {children}
            <GoalEditor />
        </>
    )
}

const GoalEditor: React.FC = () => {
    const { state, onCancel } = useGoalEditor$()

    return (
        <XModal open={state.open} onCancel={onCancel} title={<GoalEditorTitle />}>
            {state.open && <GoalEditorForm />}
        </XModal>
    )
}
