import { Switch } from 'antd'
import { SelectDayOfWeek } from './components/SelectDayOfWeek'
import { SelectDays } from './components/SelectDays'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { RITUAL_TYPE_ENUM } from '@/helpers/enums'

export const InputRitualInterval: React.FC = observer(() => {
    const {
        goals$: {
            new_goal: { goal_ritual },
        },
    } = useRootStore()

    if (!goal_ritual) return null
    const { ritual_type, onChangeField, isIntervalDayOfWeek } = goal_ritual

    return (
        <div className='py-2'>
            <h5>Ritual interval: </h5>
            <div className='relative flex items-center justify-start gap-5 py-2'>
                <Switch
                    className='w-5'
                    checked={ritual_type === RITUAL_TYPE_ENUM.DAYS_OF_WEEK}
                    onChange={(e) =>
                        onChangeField(
                            'ritual_type',
                            e ? RITUAL_TYPE_ENUM.DAYS_OF_WEEK : RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS,
                        )
                    }
                />
                <h5>Day of week</h5>
            </div>
            {isIntervalDayOfWeek ? <SelectDayOfWeek /> : <SelectDays />}
        </div>
    )
})
