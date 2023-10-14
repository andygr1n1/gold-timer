import { useGoalsStore } from '@/StoreProvider'
import { XSelect } from '@/components-x/x-select/XSelect'
import { generateNewRitualCircle } from '@/helpers/ritual-circle/generateNewRitualCircle'
import { IGoal$ } from '@/modules/goals/mst/types'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const SelectDayOfWeek: React.FC<{ goal: IGoal$; view_mode?: boolean }> = observer(({ goal, view_mode }) => {
    const { goal_ritual } = goal

    useEffect(() => {
        if ((goal_ritual?.ritual_interval || 0) > 6) {
            goal_ritual?.onChangeField('ritual_interval', 1)
        }
    }, [])

    if (!goal_ritual) return null
    const { onChangeField, ritual_interval } = goal_ritual

    const handleChange = (value: string) => {
        onChangeField('ritual_interval', +value)
        const { ritual_goal_finished_at } = generateNewRitualCircle({
            ritual_type: goal.ritualGoalType,
            new_ritual_interval: goal.ritualGoalInterval,
            goal_created_at: goal.created_at,
            goal_finished_at: goal.finished_at,
            edit: true,
        })
        goal?.onChangeField('finished_at', ritual_goal_finished_at)
    }

    const options = [
        { value: '1', label: 'Monday' },
        { value: '2', label: 'Tuesday' },
        { value: '3', label: 'Wednesday' },
        { value: '4', label: 'Thursday' },
        { value: '5', label: 'Friday' },
        { value: '6', label: 'Saturday' },
        { value: '0', label: 'Sunday' },
    ]

    return <XSelect readOnly={view_mode} value={ritual_interval} onChange={handleChange} options={options} />
})
