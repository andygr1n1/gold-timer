import { CreateGoalForm } from '@/components/goal-create-form/CreateGoalForm'
import { EditGoalForm } from '@/components/goal-edit-form/EditGoalForm'
import { GoalRitualForm } from '@/components/goal-ritual-form/GoalRitualForm'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Breadcrumbs } from './components/Breadcrumbs'
import { GoalOnDelete } from './components/GoalOnDelete'

export const EditableGoalMode: React.FC = observer(() => {
    return (
        <>
            <Breadcrumbs />
            <EditableGoalForm />
        </>
    )
})

const EditableGoalForm = observer(() => {
    const {
        goal_on_delete,
        new_goal: { isChildGoal, goal_ritualized_mode },
    } = useGoalsStore()

    if (goal_ritualized_mode) {
        return <GoalRitualForm />
    }
    if (isChildGoal) return <CreateGoalForm />

    return goal_on_delete ? <GoalOnDelete /> : <EditGoalForm />
})
