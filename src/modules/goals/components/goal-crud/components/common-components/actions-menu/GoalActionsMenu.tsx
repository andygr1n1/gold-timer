import { IGoal$ } from '@/modules/goals/mst/types'
import { observer } from 'mobx-react-lite'
// import { DeleteGoal } from './components/DeleteGoal'
// import { CreateChildGoal } from './components/CreateChildGoal'
// import { ConvertToRitualGoal } from './components/ConvertToRitualGoal'

export const GoalActionsMenu: React.FC<{ goal: IGoal$ }> = observer(() => {
    return (
        <>
            <div className='relative flex w-full flex-wrap items-center justify-center gap-5'>
                {/* <ConvertToRitualGoal goal={goal} hide={!!goal.goal_ritual || goal.isCompleted} /> */}
                {/* <CreateChildGoal goal={goal} hide={!!goal.goal_ritual && !!!goal.isRitualGoal} /> */}
                {/* <ToggleEditGoal goal={goal} hide={!!goal.goal_ritual && !!!goal.isRitualGoal} /> */}
                {/* <DeleteGoal goal={goal} hide={!!goal.goal_ritual && !!!goal.isRitualGoal} /> */}
            </div>
        </>
    )
})
