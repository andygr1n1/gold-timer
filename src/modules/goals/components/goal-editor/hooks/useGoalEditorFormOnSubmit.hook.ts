import { FormikHelpers } from 'formik'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { useGoalEditor$ } from '../stores/useGoalEditor.store'
import { useRitualizeGoal } from './useRitualizeGoal.hook'
import { useUpdateGoalStatus } from './useUpdateGoalStatus.hook'

export const useGoalEditorFormOnSubmit = () => {
    const { viewMode } = useGoalEditor$()
    const { ritualizeGoal } = useRitualizeGoal()
    const { updateGoalStatus } = useUpdateGoalStatus()

    const onSubmit = (values: IGoalSchema, formikHelpers: FormikHelpers<IGoalSchema>) => {
        const { setSubmitting } = formikHelpers

        if (viewMode) {
            const isRitual = !!values.goal_ritual

            isRitual ? ritualizeGoal({ goal: values }) : updateGoalStatus({ goal: values })
        } else {
            //
        }
    }

    return { onSubmit }
}
