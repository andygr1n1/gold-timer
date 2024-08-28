import { ToggleEditGoal } from '../../../../shared-components/ToggleEditGoal'
import { GoalIsFavorite } from '../../../../shared-components/goal-is-favorite/GoalIsFavorite'
import { GoalDeletedAt } from '../../../../shared-components/goal-deleted-at/GoalDeletedAt'
import { CreateChildGoal } from '../../../../shared-components/CreateChildGoal'
import { ToggleFavoriteNewGoal } from './components/ToggleFavoriteNewGoal'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { type IGoalSchema } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'

export const GoalEditorToolbar = () => {
    const { store: state, newMode, viewMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()

    return (
        <div className='relative flex w-full min-h-[32px] flex-wrap items-center justify-center gap-5'>
            {state.goalId && <ToggleEditGoal goalId={state.goalId} />}
            {!state.goalId || !viewMode ? (
                <ToggleFavoriteNewGoal />
            ) : (
                <GoalIsFavorite goalId={state.goalId} isFavorite={!!formikContext.values.is_favorite} />
            )}
            {!newMode && <CreateChildGoal parentGoalId={state.goalId} />}
            {state.goalId && <GoalDeletedAt goalId={state.goalId} deletedAt={!!formikContext.values.deleted_at} />}
        </div>
    )
}
