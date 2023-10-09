import { SelectDayOfWeek } from './components/SelectDayOfWeek'
import { SelectDays } from './components/SelectDays'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { RITUAL_TYPE_ENUM } from '@/helpers/enums'
import { FormLabel } from '@/components/form/FormLabel'
import { XSwitch } from '@/components-x/x-switch/XSwitch'

export const GoalRitualIntervalInput: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null
    const { goal_ritual, view_mode } = new_goal
    if (!goal_ritual) return null
    const { ritual_type, onChangeField, isIntervalDayOfWeek } = goal_ritual

    return (
        <div>
            <FormLabel title='Ritual interval' />
            <div className='flex flex-col gap-2'>
                <div className='relative flex items-center justify-start gap-2'>
                    {(!view_mode || (view_mode && !isIntervalDayOfWeek)) && (
                        <div className='font-extralight'>Interval between days</div>
                    )}
                    {!view_mode && (
                        <XSwitch
                            checked={ritual_type === RITUAL_TYPE_ENUM.DAYS_OF_WEEK}
                            onChange={(e) =>
                                onChangeField(
                                    'ritual_type',
                                    e ? RITUAL_TYPE_ENUM.DAYS_OF_WEEK : RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS,
                                )
                            }
                        />
                    )}
                    {(!view_mode || (view_mode && isIntervalDayOfWeek)) && (
                        <div className='font-extralight'>Day of week</div>
                    )}
                </div>
                {isIntervalDayOfWeek ? <SelectDayOfWeek /> : <SelectDays />}
            </div>
        </div>
    )
})
