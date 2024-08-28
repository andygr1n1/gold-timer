import { type FormikHelpers } from 'formik'
import { type IGoalSchema, goalStatusEnum } from '@/modules/goals/shared-service'
import { isActiveGoalStatus, isActiveRitualStatus, isCompletedGoalStatus } from '@/modules/goals/helpers/goalsGuards'
import { useUpdateGoalStatus } from '../../service/update-goal-status/useUpdateGoalStatus.service'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { useRitualizeGoal } from '../../service/ritualize-goal/useRitualizeGoal'

export const useViewModeSubmit = () => {
    const { onCancel } = useGoalEditor$()
    const { updateGoalStatus } = useUpdateGoalStatus()
    const { ritualizeGoal } = useRitualizeGoal()

    const onViewModeSubmit = (values: IGoalSchema, formikHelpers: FormikHelpers<IGoalSchema>) => {
        const { setSubmitting } = formikHelpers
        setSubmitting(false)
        const isActiveRitual = isActiveRitualStatus(values)
        const isActiveGoal = isActiveGoalStatus(values.status)
        const isCompletedGoal = isCompletedGoalStatus(values.status)

        if (isCompletedGoal) {
            updateGoalStatus({
                goal: values,
                status: goalStatusEnum.active,
                onSettled: () => {
                    setSubmitting(false)
                    onCancel()
                },
            })
        } else if (isActiveRitual) {
            ritualizeGoal({
                goal: values,
                onSettled: () => {
                    setSubmitting(false)
                    onCancel()
                },
            })
        } else if (isActiveGoal)
            updateGoalStatus({
                goal: values,
                status: goalStatusEnum.completed,
                onSettled: () => {
                    setSubmitting(false)
                    onCancel()
                },
            })
    }

    return { onViewModeSubmit }
}
