import { observer } from 'mobx-react-lite'
import { XModal } from '@/components-x/x-modal/XModal'
import { GoalFormIsFavoriteOption } from '@/components/goal-form-options/GoalFormIsFavoriteOption'
import { CreateGoalForm } from '@/modules/goals/components/create-edit-goal/CreateGoalForm'
import { useRootStore } from '@/StoreProvider'

export const CreateNewGoalDialog: React.FC = observer(function CreateNewGoalModal() {
    const {
        goals$: { editable_goal, closeGoalCreator, active_collapse_key },
    } = useRootStore()

    return (
        <XModal
            title={
                <div className='flex items-center justify-center gap-5'>
                    <div>Create Goal</div>
                    <GoalFormIsFavoriteOption />
                </div>
            }
            open={!!editable_goal?.id && !editable_goal?.created_at && !active_collapse_key}
            // footer={null}
            // onOk={closeGoalCreator}
            onCancel={closeGoalCreator}
        >
            <CreateGoalForm />
        </XModal>
    )
})
