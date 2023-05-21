import { useRootStore } from '@/StoreProvider'
import { InputNumber } from 'antd'
import { observer } from 'mobx-react-lite'
import type { ValueType } from '@rc-component/mini-decimal'
import { useEffect } from 'react'

export const SelectDays: React.FC = observer(() => {
    const {
        goals$: {
            is_creator_mode,
            new_goal: { goal_ritual },
        },
    } = useRootStore()

    useEffect(() => {
        if (goal_ritual?.ritual_interval === 0) {
            goal_ritual?.onChangeField('ritual_interval', 1)
        }
    }, [])

    if (!goal_ritual) return null
    const { onChangeField, ritual_interval } = goal_ritual

    const onRitualIntervalChange = (e: ValueType | null) => {
        onChangeField('ritual_interval', Number(e) || 0)
        return e
    }

    return (
        <div className='flex items-center gap-2'>
            <div className='flex w-16 items-center gap-2'>
                <InputNumber
                    size='large'
                    disabled={!is_creator_mode}
                    min={1}
                    max={31}
                    keyboard={true}
                    value={ritual_interval}
                    onChange={onRitualIntervalChange}
                />
            </div>
            {ritual_interval === 1 ? 'day' : 'days'}
        </div>
    )
})
