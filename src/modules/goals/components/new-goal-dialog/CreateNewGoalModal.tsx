import { XModal } from '@/components-x/x-modal/XModal'
import { CreateGoalForm } from '@/modules/goals/components/new-goal-dialog/CreateGoalForm'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const CreateNewGoalDialog: React.FC = observer(function CreateNewGoalModal() {
    const {
        goals$: { editable_goal, closeGoalCreator, active_collapse_key },
    } = useRootStore()

    return (
        <XModal
            title={'Create Goal'}
            open={!!editable_goal?.id && !editable_goal?.created_at && !active_collapse_key}
            // footer={null}
            // onOk={closeGoalCreator}
            onCancel={closeGoalCreator}
        >
            <CreateGoalForm />
        </XModal>
    )
})
