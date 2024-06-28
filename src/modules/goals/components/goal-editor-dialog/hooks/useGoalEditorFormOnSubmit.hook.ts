import { FormikHelpers } from 'formik'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { useGoalEditor$ } from '../stores/goal-editor-store/useGoalEditor.store'
import { useRitualizeGoal } from '../service/ritualize-goal/useRitualizeGoal.service'
import { useUpdateGoalStatus } from '../service/update-goal-status/useUpdateGoalStatus.service'

export const useGoalEditorFormOnSubmit = () => {
    const { viewMode, onCancel } = useGoalEditor$()
    const { ritualizeGoal } = useRitualizeGoal()
    const { updateGoalStatus } = useUpdateGoalStatus()

    const onSubmit = (values: IGoalSchema, formikHelpers: FormikHelpers<IGoalSchema>) => {
        const { setSubmitting } = formikHelpers

        if (viewMode) {
            const isRitual = !!values.goal_ritual
            isRitual
                ? ritualizeGoal({
                      goal: values,
                      onSettled: () => {
                          setSubmitting(false)
                          onCancel()
                      },
                  })
                : updateGoalStatus({
                      goal: values,
                      onSettled: () => {
                          setSubmitting(false)
                          onCancel()
                      },
                  })
        } else {
            //
        }
    }

    return { onSubmit }
}
