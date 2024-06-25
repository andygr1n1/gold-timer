import { IconCompletedFilled } from '@/assets/icons/IconCompleted'
import { IconFocus } from '@/assets/icons/IconFocus'
import { IconInfinity } from '@/assets/icons/IconInfinity'
import { calculateIsCompleted } from '@/modules/goals/helpers/goalsGuards'
import { calculateIsFromFuture } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'

export const useViewModeFooter = () => {
    const formikContext = useFormikContext<IGoalSchema>()

    const isFromFuture = calculateIsFromFuture(formikContext.values)
    const isCompleted = calculateIsCompleted(formikContext.values.status)

    const deletedAt = !!formikContext.values.deleted_at

    const isRitual = !!formikContext.values.goal_ritual
    const futureRitual = !!isRitual && isFromFuture

    const disabled = deletedAt || futureRitual

    let tooltipText = ''
    let OkText = (
        <>
            <IconCompletedFilled className='text-white' width={16} height={16} /> <div>Complete</div>
        </>
    )

    if (isRitual) {
        OkText = (
            <>
                <IconInfinity className='text-transparent' /> <div>Ritualize</div>
            </>
        )
        tooltipText = 'Wait for estimation day'
    }

    if (deletedAt) {
        tooltipText = 'Goal is deleted'
    }

    if (isCompleted) {
        OkText = (
            <>
                <IconFocus className='text-white' width={16} height={16} /> <div>Reactivate</div>
            </>
        )
    }

    const OkComponent = <div className='flex items-center justify-center gap-2'>{OkText}</div>

    return { OkText: OkComponent, tooltipText, disabled }
}
