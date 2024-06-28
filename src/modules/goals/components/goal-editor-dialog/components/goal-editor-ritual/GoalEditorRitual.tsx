import { useFormikContext } from 'formik'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { GoalRitualViewMode } from './components/GoalRitualViewMode'
import { GoalRitualEditMode } from './components/goal-ritual-edit-mode/GoalRitualEditMode'
import { GoalRitualNewMode } from './components/GoalRitualNewMode'
import { useMemo } from 'react'

export const GoalEditorRitual: React.FC = () => {
    const formikContext = useFormikContext<IGoalSchema>()

    const { viewMode } = useGoalEditor$()
    const { goal_ritual } = formikContext.values

    const goalRitualInitState = useMemo(() => goal_ritual, []) // initial constant value

    if (viewMode) return <GoalRitualViewMode />

    if (!viewMode && !goalRitualInitState) {
        return <GoalRitualNewMode />
    }

    return <GoalRitualEditMode />
}
