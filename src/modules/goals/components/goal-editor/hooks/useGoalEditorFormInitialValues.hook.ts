import { IGoalSchema, goalStatus } from '@/modules/goals/shared-service'
import { useGoalEditor$ } from '../stores/useGoalEditor.store'
import { useFetchGoal } from '../service/useFetchGoal.service.ts'
import { formatDateWithTimezone } from '@/helpers/date.helpers'

export const useGoalEditorFormInitialValues = () => {
    const { state } = useGoalEditor$()
    const { isLoading, data } = useFetchGoal({ goalId: state.goalId })
    const initialValues: IGoalSchema = initialGoal()

    return { initialValues: data || initialValues, isLoading }
}

const initialGoal = () => ({
    id: crypto.randomUUID(),
    created_at: formatDateWithTimezone(),
    deleted_at: null,
    finished_at: null,
    is_favorite: false,
    title: '',
    slogan: '',
    description: '',
    status: goalStatus.active,
    difficulty: '',
    goal_ritual: null,
})
