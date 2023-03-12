import { CreateGoalForm } from '@/components/goal-create-form/CreateGoalForm'
import { EditGoalForm } from '@/components/goal-edit-form/EditGoalForm'
import { GoalRitualForm } from '@/components/goal-ritual-form/GoalRitualForm'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Breadcrumbs } from './components/Breadcrumbs'

export const EditableGoalMode: React.FC = observer(() => {
    return (
        <div className='h-[70vh]'>
            <Breadcrumbs />
            <EditableGoalForm />
        </div>
    )
})

const EditableGoalForm = observer(() => {
    const {
        new_goal: { isChildGoal, goal_ritualized_mode },
    } = useGoalsStore()

    if (goal_ritualized_mode) {
        return <GoalRitualForm />
    }
    if (isChildGoal) return <CreateGoalForm />

    return <EditGoalForm />
})
