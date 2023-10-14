import { observer } from 'mobx-react-lite'
import { ToggleFavorite } from './components/ToggleFavoriteGoal'
import { DeleteGoal } from './components/DeleteGoal'
import { ToggleEditGoal } from './components/ToggleEditGoal'
import { CreateChildGoal } from './components/CreateChildGoal'
import { ConvertToRitualGoal } from './components/ConvertToRitualGoal'
import { IGoal$ } from '@/modules/goals/mst/types'

export const GoalActionsMenu: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    return (
        <>
            <div className='relative flex w-full flex-wrap items-center justify-center gap-4'>
                <ConvertToRitualGoal goal={goal} hide={!!goal.goal_ritual} />
                <CreateChildGoal goal={goal} hide={!!goal.goal_ritual && !!!goal.hasRitualPower} />
                <ToggleEditGoal goal={goal} hide={!!goal.goal_ritual && !!!goal.hasRitualPower} />
                <ToggleFavorite goal={goal} hide={!!goal.goal_ritual && !!!goal.hasRitualPower} />
                <DeleteGoal goal={goal} hide={!!goal.goal_ritual && !!!goal.hasRitualPower} />
            </div>
        </>
    )
})
