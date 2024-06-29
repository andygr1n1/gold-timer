import { FormikHelpers } from 'formik'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { goalEditorMode } from '../../stores/goal-editor-store/types'
import { useUpsertGoal } from '../../service/upsert-goal/useUpsertGoal.service'
import { useViewModeSubmit } from './useViewModeSubmit.hook'

export const useGoalEditorFormOnSubmit = () => {
    const { viewMode, onCancel, state, setState } = useGoalEditor$()
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
                    } else {
                        onCancel()
                    }
                },
            })
        }
    }

    return { onSubmit }
}
