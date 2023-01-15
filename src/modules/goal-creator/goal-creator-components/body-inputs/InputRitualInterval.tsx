import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import type { ValueType } from '@rc-component/mini-decimal'
import { Divider } from 'antd'
import { RdInputNumber } from '@/components/rd/rd-inputs/RdInputNumber'

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
        <>
            <h3 className='py-2'>Ritual interval: </h3>
            <div className='flex items-center gap-5'>
                <RdInputNumber
                    disabled={!is_creator_mode}
                    min={1}
                    max={31}
                    keyboard={true}
                    value={ritual_interval}
                    onChange={onRitualIntervalChange}
                />
                {ritual_interval === 1 ? 'day' : 'days'}
            </div>
            <Divider />
        </>
    )
})
