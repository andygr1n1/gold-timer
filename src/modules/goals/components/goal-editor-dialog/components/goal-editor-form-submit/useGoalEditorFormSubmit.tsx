import { isCompletedGoalStatus } from '@/modules/goals/helpers/goalsGuards'
import { calculateIsFromFuture } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { type IGoalSchema } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'

export const useGoalEditorFormSubmit = () => {
    const { viewMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()

    if (!viewMode) return { OkText: 'Save', tooltipText: '', disabled: false, isSubmitting: formikContext.isSubmitting }

    const isFromFuture = calculateIsFromFuture(formikContext.values)
    const isCompleted = isCompletedGoalStatus(formikContext.values.status)

    const deletedAt = !!formikContext.values.deleted_at

    const isRitual = !!formikContext.values.goal_ritual
    const futureRitual = !!isRitual && isFromFuture

    const disabled = deletedAt || (!isCompleted && futureRitual)

    let tooltipText = ''
    let OkText = <>Complete</>

    if (isRitual) {
        OkText = <>Ritualize</>
        tooltipText = 'Wait for estimation day'
    }

    if (deletedAt) {
        tooltipText = 'Goal is deleted'
    }

    if (isCompleted) {
        OkText = <>Reactivate</>
    }

    const OkComponent = <div className='flex items-center justify-center gap-2'>{OkText}</div>

    return { OkText: OkComponent, tooltipText, disabled, isSubmitting: formikContext.isSubmitting }
}
