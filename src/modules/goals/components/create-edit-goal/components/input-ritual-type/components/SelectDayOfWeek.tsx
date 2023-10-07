import { useGoalsStore } from '@/StoreProvider'
import { XSelect } from '@/components-x/x-select/XSelect'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const SelectDayOfWeek: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null
    const { goal_ritual } = new_goal
    if (!goal_ritual) return null

    useEffect(() => {
        if ((goal_ritual?.ritual_interval || 0) > 6) {
            goal_ritual?.onChangeField('ritual_interval', 1)
        }
    }, [])

    if (!goal_ritual) return null
    const { onChangeField, ritual_interval } = goal_ritual
    const handleChange = (value: string) => {
        onChangeField('ritual_interval', +value)
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

    return <XSelect value={ritual_interval} onChange={handleChange} options={options} />
})
