import { type FormikHelpers } from 'formik'
import { type IGoalSchema } from '@/modules/goals/shared-service'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { goalEditorMode } from '../../stores/goal-editor-store/types'
import { useUpsertGoal } from '../../service/upsert-goal/useUpsertGoal'
import { useViewModeSubmit } from './useViewModeSubmit'

export const useGoalEditorFormOnSubmit = () => {
    const { viewMode, onCancel, store: state, setStore: setState } = useGoalEditor$()
    const { onViewModeSubmit } = useViewModeSubmit()
    const { upsertGoal } = useUpsertGoal()

    const onSubmit = (values: IGoalSchema, formikHelpers: FormikHelpers<IGoalSchema>) => {
        const { setSubmitting } = formikHelpers

        if (viewMode) {
            onViewModeSubmit(values, formikHelpers)
        } else {
            upsertGoal({
                goal: values,
                onSettled: () => {
                    setSubmitting(false)
                    if (state.metadata?.parentGoalId) {
                        setState({
                            goalId: state.metadata?.parentGoalId,
                            goalEditorMode: state.metadata?.parentGoalEditorMode || goalEditorMode.view,
                            open: true,
                        })
                    } else if (state.metadata?.viewModeRedirect) {
                        setState({
                            goalId: values.id,
                            goalEditorMode: goalEditorMode.view,
                            open: true,
                        })
                    } else {
                        onCancel()
                    }
                },
            })
        }
    }

    return { onSubmit }
}
