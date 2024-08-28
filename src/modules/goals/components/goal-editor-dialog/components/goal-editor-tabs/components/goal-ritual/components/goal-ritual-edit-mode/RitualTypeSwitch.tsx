import { XSwitch } from '@/components-x/x-switch/XSwitch'
import { type IGoalSchema, goalRitualType } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'

export const RitualTypeSwitch = () => {
    const formikContext = useFormikContext<IGoalSchema>()
    const { goal_ritual } = formikContext.values
    const isIntervalDayOfWeek = goal_ritual?.ritual_type === goalRitualType.days_of_week

    if (!goal_ritual) return null

    return (
        <div className='relative flex items-center justify-start gap-2'>
            <div className='font-extralight'>Interval between days</div>
            <XSwitch
                checked={isIntervalDayOfWeek}
                onChange={(e) =>
                    formikContext.setFieldValue('goal_ritual', {
                        ...formikContext.values.goal_ritual,
                        ritual_type: e ? goalRitualType.days_of_week : goalRitualType.interval_in_days,
                    })
                }
            />
            <div className='font-extralight'>Day of week</div>
        </div>
    )
}
