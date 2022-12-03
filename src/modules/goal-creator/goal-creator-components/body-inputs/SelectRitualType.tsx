import { RdSelect } from '@/components/rd/rd-select/RdSelect'
import { RITUAL_TYPE_ENUM } from '@/helpers/enums'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const SelectRitualType: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    if (!new_goal) return null

    const { goal_ritual } = new_goal

    if (!goal_ritual) return null
    const { ritual_type, onChangeField } = goal_ritual

    let options = [
        {
            value: 'Interval',
            label: RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS,
            key: RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS,
        },
        {
            value: 'Days of week',
            label: RITUAL_TYPE_ENUM.DAYS_OF_WEEK,
            key: RITUAL_TYPE_ENUM.DAYS_OF_WEEK,
        },
    ]

    return (
        <>
            <div>
                <h3 className='py-2'>Ritual type: </h3>
                <RdSelect
                    disabled={true}
                    value={options.find((opt) => opt.key === ritual_type)?.value ?? RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS}
                    options={options}
                    onSelect={(value) => {
                        console.log('val', value)
                        onChangeField(
                            'ritual_type',
                            options.find((opt) => opt.value === value)?.key ?? RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS,
                        )
                    }}
                />
            </div>
            <Divider />
        </>
    )
})
