import { SelectDayOfWeek } from './components/SelectDayOfWeek'
import { SelectDays } from './components/SelectDays'
import { observer } from 'mobx-react-lite'
import { RITUAL_TYPE_ENUM } from '@/helpers/enums'
import { FormLabel } from '@/components/form/FormLabel'
import { XSwitch } from '@/components-x/x-switch/XSwitch'
import { IGoal$ } from '@/modules/goals/mst/types'

export const GoalRitualIntervalInput: React.FC<{ goal: IGoal$; view_mode?: boolean; hide?: boolean }> = observer(
    ({ goal, view_mode = false, hide = false }) => {
        const { goal_ritual } = goal
        if (!goal_ritual) return null

        const { ritual_type, onChangeField, isIntervalDayOfWeek } = goal_ritual

        return !hide ? (
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
                    {isIntervalDayOfWeek ? (
                        <SelectDayOfWeek goal={goal} view_mode={view_mode} />
                    ) : (
                        <SelectDays goal={goal} view_mode={view_mode} />
                    )}
                </div>
            </div>
        ) : null
    },
)
