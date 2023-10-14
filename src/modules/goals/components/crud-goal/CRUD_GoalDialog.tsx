import { observer } from 'mobx-react-lite'
import { XModal } from '@/components-x/x-modal/XModal'
import { useGoalsStore } from '@/StoreProvider'
import { NewGoalDialogTitle } from './components/new-goal/NewGoalDialogTitle'
import { NewGoalDialogBody } from './components/new-goal/NewGoalDialogBody'
import { EditGoalDialogTitle } from './components/edit-goal/EditGoalDialogTitle'
import { EditGoalDialogBody } from './components/edit-goal/EditGoalDialogBody'
import { ViewGoalDialogTitle } from './components/view-goal/ViewGoalDialogTitle'
import { ViewGoalDialogBody } from './components/view-goal/ViewGoalDialogBody'

export const CRUD_GoalDialog: React.FC = observer(function CRUD_GoalDialog() {
    const { onChangeField, selected_goal, new_goal, edit_goal } = useGoalsStore()

    const isOpen = new_goal || edit_goal || selected_goal

    const onCancel = () => {
        onChangeField('new_goal', undefined)
        onChangeField('edit_goal', undefined)
        onChangeField('selected_goal', undefined)
    }

    return (
        <XModal
            open={!!isOpen}
            onCancel={onCancel}
            title={
                <div tabIndex={0} className='flex items-center justify-center gap-5'>
                    {new_goal && <NewGoalDialogTitle />}
                    {edit_goal && <EditGoalDialogTitle />}
                    {selected_goal && <ViewGoalDialogTitle />}
                </div>
            }
        >
            <>
                {new_goal && <NewGoalDialogBody />}
                {edit_goal && <EditGoalDialogBody />}
                {selected_goal && <ViewGoalDialogBody />}
            </>
        </XModal>
    )
})
