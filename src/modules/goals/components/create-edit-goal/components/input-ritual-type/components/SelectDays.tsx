import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { XInput } from '@/components-x/x-input/XInput'

export const SelectDays: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null
    const { goal_ritual } = new_goal
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
        return e
    }

    return <XInput min={1} type='number' max={31} value={ritual_interval || ''} onChange={onRitualIntervalChange} />
})
