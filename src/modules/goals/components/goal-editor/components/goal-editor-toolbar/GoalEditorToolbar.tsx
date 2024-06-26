import { ToggleEditGoal } from '../common-components/goal-actions/ToggleEditGoal'
import { GoalIsFavorite } from '../../../../shared-components/goal-is-favorite/GoalIsFavorite'
import { GoalDeletedAt } from '../../../../shared-components/goal-deleted-at/GoalDeletedAt'
import { CreateChildGoal } from '../common-components/goal-actions/CreateChildGoal'
import { ToggleFavoriteNewGoal } from '../common-components/goal-actions/ToggleFavoriteNewGoal'
import { useGoalEditor$ } from '../../stores/useGoalEditor.store'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'

export const GoalEditorToolbar = () => {
    const { state } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()

    return (
        <div className='relative flex w-full flex-wrap items-center justify-center gap-5'>
            {state.goalId && <ToggleEditGoal goalId={state.goalId} />}
            {!state.goalId ? (
                <ToggleFavoriteNewGoal />
            ) : (
                <GoalIsFavorite goalId={state.goalId} isFavorite={!!formikContext.values.is_favorite} />
            )}
            {state.goalId && <GoalDeletedAt goalId={state.goalId} deletedAt={!!formikContext.values.deleted_at} />}
            {<CreateChildGoal parentGoalId={state.goalId} />}
        </div>
    )
}
