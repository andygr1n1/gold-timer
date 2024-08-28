import { FormLabel } from '@/components/form/FormLabel'
import { SelectDayOfWeek } from './SelectDayOfWeek'
import { SelectDays } from './SelectDays'
import { RitualTypeSwitch } from './RitualTypeSwitch'
import { type IGoalSchema, goalRitualType } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'

export const GoalRitualEditMode = () => {
    const formikContext = useFormikContext<IGoalSchema>()
    const { goal_ritual } = formikContext.values
    const isIntervalDayOfWeek = goal_ritual?.ritual_type === goalRitualType.days_of_week

    if (!goal_ritual) return null

    return (
        <div>
            <FormLabel title='Ritual interval' />
            <div className='flex flex-col gap-2'>
                <RitualTypeSwitch />
                {isIntervalDayOfWeek ? <SelectDayOfWeek /> : <SelectDays />}
            </div>
        </div>
    )
}
