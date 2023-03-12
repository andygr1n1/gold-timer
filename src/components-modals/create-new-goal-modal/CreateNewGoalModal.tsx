import { RdModal } from '@/components-rd/rdmodal/RdModal'
import { CreateGoalForm } from '@/components/goal-create-form/CreateGoalForm'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const CreateNewGoalModal: React.FC = observer(() => {
    const {
        goals$: { editable_goal, closeGoalCreator, active_collapse_key },
    } = useRootStore()

    return (
        <RdModal
            title={'Create Goal'}
            open={!!editable_goal?.id && !editable_goal?.created_at && !active_collapse_key}
            footer={null}
            onOk={closeGoalCreator}
            onCancel={closeGoalCreator}
        >
            <CreateGoalForm />
        </RdModal>
    )
})
