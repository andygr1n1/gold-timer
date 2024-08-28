import { XSelect } from '@/components-x/x-select/XSelect'
import { DaysOfTheWeek, formatDateWithTimezone, convertStringDate, setMidnightTime } from '@/helpers/date.helpers'
import { generateNewRitualCircle } from '@/helpers/generateNewRitualCircle'
import { type IGoalSchema } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'
import { useEffect } from 'react'

export const SelectDayOfWeek = () => {
    const formikContext = useFormikContext<IGoalSchema>()
    const { goal_ritual } = formikContext.values

    useEffect(() => {
        if (goal_ritual && (goal_ritual?.ritual_interval || 0) > 6) {
            formikContext.setFieldValue('goal_ritual', {
                ...formikContext.values.goal_ritual,
                ritual_interval: 1,
            })
        }
    }, [])

    if (!goal_ritual) return null

    const handleChange = (value: string) => {
        if (!goal_ritual) return
        const new_ritual_interval = +value
        const ritual_type = goal_ritual.ritual_type

        const immutableFinishedAt = formikContext.values.finished_at
        const goal_finished_at = setMidnightTime(
            immutableFinishedAt ? convertStringDate(immutableFinishedAt) : new Date(),
        )

        const { ritual_goal_finished_at } = generateNewRitualCircle({
            ritual_type,
            new_ritual_interval,
            goal_finished_at,
            edit: true,
        })

        formikContext.setFieldValue('finished_at', formatDateWithTimezone(ritual_goal_finished_at))
        formikContext.setFieldValue('goal_ritual', {
            ...formikContext.values.goal_ritual,
            ritual_interval: new_ritual_interval,
        })
    }

    return <XSelect value={goal_ritual.ritual_interval} onChange={handleChange} options={DaysOfTheWeek} />
}
