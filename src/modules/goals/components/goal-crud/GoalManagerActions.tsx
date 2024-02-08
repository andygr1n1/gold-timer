import { useAtom } from 'jotai'
import { selectedGoalAtom } from '../../stores/selectedGoal.store'
import { IActiveGoalOptimized } from '../../interfaces/types'
import { ToggleEditGoal } from './goal-actions/ToggleEditGoal'
import { ToggleFavorite } from './goal-actions/ToggleFavoriteGoal'
import { DeleteGoal } from './goal-actions/DeleteGoal'

export const GoalManagerActions: React.FC<{ goal: IActiveGoalOptimized }> = ({ goal }) => {
    const [_selectedGoal] = useAtom(selectedGoalAtom)

    return !_selectedGoal?.is_new ? (
        <div className='relative flex w-full flex-wrap items-center justify-center gap-5'>
            {/* <ConvertToRitualGoal goal={goal} hide={!!goal.goal_ritual || goal.isCompleted} /> */}
            {/* <CreateChildGoal goal={goal} hide={!!goal.goal_ritual && !!!goal.isRitualGoal} /> */}

            <ToggleEditGoal />
            <ToggleFavorite goalId={goal.id} isFavorite={!!goal.is_favorite} />
            <DeleteGoal goalId={goal.id} deletedAt={!!goal.deleted_at} />
        </div>
    ) : null
}
