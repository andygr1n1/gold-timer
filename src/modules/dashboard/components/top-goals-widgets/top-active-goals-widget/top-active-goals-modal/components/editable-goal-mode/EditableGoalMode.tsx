import { CreateGoalForm } from '@/components/goal-create-form/CreateGoalForm'
import { EditGoalForm } from '@/components/goal-edit-form/EditGoalForm'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Breadcrumbs } from './components/Breadcrumbs'

export const EditableGoalMode: React.FC = observer(() => {
    const {
        new_goal: { isChildGoal },
    } = useGoalsStore()

    return (
        <div className='h-[70vh]'>
            <Breadcrumbs />
            {isChildGoal ? <CreateGoalForm /> : <EditGoalForm />}
        </div>
    )
})
