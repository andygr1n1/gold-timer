import { type IGoalSchema, goalStatusEnum } from '@/modules/goals/shared-service'
import { useGoalEditor$ } from '../stores/goal-editor-store/useGoalEditor.store.ts'
import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { useGoalData } from './useGoalData.ts'

export const useGoalEditorFormInitialValues = () => {
    const { store } = useGoalEditor$()
    const { isLoading, data } = useGoalData()
    const initialValues: IGoalSchema = initialGoal({ parentGoalId: store.metadata?.parentGoalId })

    return { store, initialValues: data || initialValues, isLoading, goalEditorMode: store.goalEditorMode }
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
    status: goalStatusEnum.active,
    difficulty: '',
    goal_ritual: null,
    parent_goal_id: props.parentGoalId || null,
})
