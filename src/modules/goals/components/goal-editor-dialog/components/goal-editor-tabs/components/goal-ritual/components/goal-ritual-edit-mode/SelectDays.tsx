import { useEffect } from 'react'
import { XInput } from '@/components-x/x-input/XInput'
import { generateNewRitualCircle } from '@/helpers/generateNewRitualCircle'
import { formatDateWithTimezone, convertStringDate, setMidnightTime } from '@/helpers/date.helpers'
import { useFormikContext } from 'formik'
import { type IGoalSchema } from '@/modules/goals/shared-service'

export const SelectDays = () => {
    const formikContext = useFormikContext<IGoalSchema>()
    const { goal_ritual } = formikContext.values

    useEffect(() => {
        if (goal_ritual?.ritual_interval === 0) {
            formikContext.setFieldValue('goal_ritual', {
                ...formikContext.values.goal_ritual,
                ritual_interval: 1,
            })
        }
    }, [])

    if (!goal_ritual) return null

    const onRitualIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +e.target.value || 0
        if (+value > 31) {
            value = 31
        }

        const ritual_type = goal_ritual.ritual_type

        const goal_finished_at = formikContext.values.finished_at
            ? setMidnightTime(convertStringDate(formikContext.values.finished_at))
            : setMidnightTime(new Date())

        if (!ritual_type) return

        const { ritual_goal_finished_at } = generateNewRitualCircle({
            ritual_type,
            new_ritual_interval: value || 1,
            goal_finished_at,
            edit: true,
        })

        formikContext.setFieldValue('finished_at', formatDateWithTimezone(ritual_goal_finished_at))
        formikContext.setFieldValue('goal_ritual', {
            ...formikContext.values.goal_ritual,
            ritual_interval: +value,
        })

        return e
    }

    return (
        <XInput min={1} type='number' max={31} value={goal_ritual.ritual_interval} onChange={onRitualIntervalChange} />
    )
}
