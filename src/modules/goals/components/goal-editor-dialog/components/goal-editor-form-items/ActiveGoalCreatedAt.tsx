import { calculateCreatedDaysAgo } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { type IGoalSchema } from '@/modules/goals/shared-service/types'
import { useFormikContext } from 'formik'

export const ActiveGoalCreatedAt = () => {
    const formikContext = useFormikContext<IGoalSchema>()

    const { created_at } = formikContext.values
    const createdDaysAgo = calculateCreatedDaysAgo(formikContext.values)

    const createString = !!createdDaysAgo ? `${createdDaysAgo} ${createdDaysAgo === 1 ? 'day' : 'days'} ago` : 'today'

    return (
        <>
            {created_at && (
                <div className='flex items-center gap-2 font-extralight text-xs min-w-fit'>
                    {/* <span>created </span> */}
                    {createString}
                </div>
            )}
        </>
    )
}
