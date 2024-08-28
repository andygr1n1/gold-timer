import { useFormikContext } from 'formik'
import { type IGoalSchema } from '@/modules/goals/shared-service'
import { useGoalEditor$ } from '../../../../stores/goal-editor-store/useGoalEditor.store'
import { GoalRitualViewMode } from './components/GoalRitualViewMode'
import { GoalRitualEditMode } from './components/goal-ritual-edit-mode/GoalRitualEditMode'
import { GoalRitualNewMode } from './components/GoalRitualNewMode'
import { useMemo } from 'react'

export const GoalRitual: React.FC = () => {
    const formikContext = useFormikContext<IGoalSchema>()

    const { viewMode } = useGoalEditor$()
    const { goal_ritual } = formikContext.values

    const goalRitualInitState = useMemo(() => goal_ritual, []) // initial constant value

    if (viewMode && goalRitualInitState) return <GoalRitualViewMode />

    if (!goalRitualInitState) {
        return <GoalRitualNewMode />
    }

    return <GoalRitualEditMode />
}
