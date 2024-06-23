import { useAtom } from 'jotai'
import { selectedGoalAtom } from '../../stores/selectedGoal.store'
import { IGoalSchema } from '../../service/types'
import { ToggleEditGoal } from './goal-actions/ToggleEditGoal'
import { ToggleFavorite } from './goal-actions/ToggleFavoriteGoal'
import { DeleteGoal } from './goal-actions/DeleteGoal'
import { CreateChildGoal } from './goal-actions/CreateChildGoal'
import { ToggleFavoriteNewGoal } from './goal-actions/ToggleFavoriteNewGoal'

export const GoalCRUDActions: React.FC<{ goal: IGoalSchema }> = ({ goal }) => {
    const [_selectedGoal] = useAtom(selectedGoalAtom)

    return (
        <div className='relative flex w-full flex-wrap items-center justify-center gap-5'>
            {!_selectedGoal?.is_new && <ToggleEditGoal />}
            {_selectedGoal?.is_new ? (
                <ToggleFavoriteNewGoal />
            ) : (
                <ToggleFavorite goalId={goal.id} isFavorite={!!goal.is_favorite} />
            )}
            {!_selectedGoal?.is_new && <DeleteGoal goalId={goal.id} deletedAt={!!goal.deleted_at} />}
            {!_selectedGoal?.is_new && <CreateChildGoal parentGoalId={goal.id} />}
        </div>
    )
}
