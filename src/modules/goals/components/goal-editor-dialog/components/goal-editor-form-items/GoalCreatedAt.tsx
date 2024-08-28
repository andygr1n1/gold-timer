import { ActiveGoalCreatedAt } from '@/modules/goals/components/goal-editor-dialog/components/goal-editor-form-items/ActiveGoalCreatedAt'
import { format } from 'date-fns'
import { convertStringDate } from '@/helpers/date.helpers'
import { useFormikContext } from 'formik'
import { type IGoalSchema } from '@/modules/goals/shared-service'

export const GoalCreatedAt = () => {
    const formikContext = useFormikContext<IGoalSchema>()

    const created = formikContext.values?.goal_ritual?.created_at
        ? formikContext.values?.goal_ritual?.created_at
        : formikContext.values.created_at

    return created ? (
        <div className='flex items-center gap-2 mb-5 opacity-80 flex-wrap'>
            <div className='font-extralight text-xs min-w-fit'>created</div>
            <ActiveGoalCreatedAt />
            <div className='font-extralight text-xs min-w-fit'>
                on {format(convertStringDate(created), 'do MMMM yyyy, EEEE')}
            </div>
        </div>
    ) : null
}
