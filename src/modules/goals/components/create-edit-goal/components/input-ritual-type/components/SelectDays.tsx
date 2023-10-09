import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { XInput } from '@/components-x/x-input/XInput'
import { generateNewRitualCircle } from '@/helpers/ritual-circle/generateNewRitualCircle'

export const SelectDays: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null
    const { goal_ritual, view_mode } = new_goal
    if (!goal_ritual) return null

    useEffect(() => {
        if (goal_ritual?.ritual_interval === 0) {
            goal_ritual?.onChangeField('ritual_interval', 1)
        }
    }, [])

    if (!goal_ritual) return null
    const { onChangeField, ritual_interval } = goal_ritual

    const onRitualIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = +e.target.value || 0
        if (+value > 31) {
            value = 31
        }
        onChangeField('ritual_interval', value)
        const { ritual_goal_finished_at } = generateNewRitualCircle({
            ritual_type: new_goal.ritualGoalType,
            new_ritual_interval: value || 1,
            goal_created_at: new_goal.created_at,
            goal_finished_at: new_goal.finished_at,
            edit: true,
        })
        new_goal?.onChangeField('finished_at', ritual_goal_finished_at)
        return e
    }

    return (
        <XInput
            readOnly={view_mode}
            min={1}
            type='number'
            max={31}
            value={ritual_interval || ''}
            onChange={onRitualIntervalChange}
        />
    )
})
