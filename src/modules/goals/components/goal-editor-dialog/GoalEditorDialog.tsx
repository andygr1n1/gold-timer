import { XModal } from '@/components-x/x-modal/XModal'
import { useGoalEditor$ } from './stores/goal-editor-store/useGoalEditor.store'
import { GoalEditorTitle } from './components/goal-editor-form-title/GoalEditorTitle'
import { GoalEditor } from './components/GoalEditor'

export const GoalCRUDProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            {children}
            <GoalEditorDialog />
        </>
    )
}

const GoalEditorDialog: React.FC = () => {
    const { state, onCancel } = useGoalEditor$()

    return (
        <XModal open={state.open} onCancel={onCancel} title={<GoalEditorTitle />}>
            {state.open && <GoalEditor />}
        </XModal>
    )
}
