import { IGoalSchema, goalStatus } from '@/modules/goals/shared-service'
import { useGoalEditor$ } from '../stores/goal-editor-store/useGoalEditor.store.ts'
import { useFetchGoal } from '../service/useFetchGoal.service.ts'
import { formatDateWithTimezone } from '@/helpers/date.helpers'

export const useGoalEditorFormInitialValues = () => {
    const { state } = useGoalEditor$()
    const { isLoading, data } = useFetchGoal({ goalId: state.goalId })
    const initialValues: IGoalSchema = initialGoal({ parentGoalId: state.metadata?.parentGoalId })

    return { initialValues: data || initialValues, isLoading, goalEditorMode: state.goalEditorMode }
}

const initialGoal = (props: { parentGoalId?: string | null }) => ({
    id: crypto.randomUUID(),
    created_at: formatDateWithTimezone(),
    deleted_at: null,
    finished_at: formatDateWithTimezone(),
    is_favorite: false,
    title: '',
    slogan: '',
    description: '',
    status: goalStatus.active,
    difficulty: '',
    goal_ritual: null,
    parent_goal_id: props.parentGoalId || null,
})
