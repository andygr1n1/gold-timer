import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import type { ValueType } from '@rc-component/mini-decimal'
import { InputNumber } from 'antd'

export const InputRitualInterval: React.FC = observer(() => {
    const {
        goals$: {
            is_creator_mode,
            new_goal: { goal_ritual },
        },
    } = useRootStore()

    if (!goal_ritual) return null
    const { onChangeField, ritual_interval } = goal_ritual

    const onRitualIntervalChange = (e: ValueType | null) => {
        onChangeField('ritual_interval', Number(e) || 0)
        return e
    }

    return (
        <div className='py-2'>
            <h5>Ritual interval: </h5>
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
        </div>
    )
})
