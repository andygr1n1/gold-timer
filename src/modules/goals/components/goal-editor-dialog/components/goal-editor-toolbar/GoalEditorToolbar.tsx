import { ToggleEditGoal } from '../../../../shared-components/ToggleEditGoal'
import { GoalIsFavorite } from '../../../../shared-components/goal-is-favorite/GoalIsFavorite'
import { GoalDeletedAt } from '../../../../shared-components/goal-deleted-at/GoalDeletedAt'
import { CreateChildGoal } from '../../../../shared-components/CreateChildGoal'
import { ToggleFavoriteNewGoal } from './components/ToggleFavoriteNewGoal'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'
import { CompleteRitualGoal } from './components/CompleteRitualGoal'

export const GoalEditorToolbar = () => {
    const { state } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()

    return (
        <div className='relative flex w-full min-h-[32px] flex-wrap items-center justify-center gap-5'>
            {state.goalId && <ToggleEditGoal goalId={state.goalId} />}
            {!state.goalId ? (
                <ToggleFavoriteNewGoal />
            ) : (
                <GoalIsFavorite goalId={state.goalId} isFavorite={!!formikContext.values.is_favorite} />
            )}
            {<CreateChildGoal parentGoalId={state.goalId} />}
            {state.goalId && <GoalDeletedAt goalId={state.goalId} deletedAt={!!formikContext.values.deleted_at} />}
            <CompleteRitualGoal goal={formikContext.values} />
        </div>
    )
}
