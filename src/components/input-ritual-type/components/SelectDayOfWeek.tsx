import { useRootStore } from '@/StoreProvider'
import { Select } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const SelectDayOfWeek: React.FC = observer(() => {
    const {
        goals$: {
            new_goal: { goal_ritual },
        },
    } = useRootStore()

    useEffect(() => {
        if ((goal_ritual?.ritual_interval || 0) > 6) {
            goal_ritual?.onChangeField('ritual_interval', 1)
        }
    }, [])

    if (!goal_ritual) return null
    const { onChangeField, ritual_interval } = goal_ritual
    const handleChange = (value: number) => {
        onChangeField('ritual_interval', value)
    }

    const options = [
        { value: 1, label: 'Monday' },
        { value: 2, label: 'Tuesday' },
        { value: 3, label: 'Wednesday' },
        { value: 4, label: 'Thursday' },
        { value: 5, label: 'Friday' },
        { value: 6, label: 'Saturday' },
        { value: 0, label: 'Sunday' },
    ]

    return (
        <div>
            <Select
                size='large'
                value={ritual_interval}
                style={{ width: 300 }}
                onChange={handleChange}
                options={options}
            />
        </div>
    )
})
