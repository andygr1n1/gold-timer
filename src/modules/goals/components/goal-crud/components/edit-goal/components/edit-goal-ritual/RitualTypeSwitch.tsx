import { XSwitch } from '@/components-x/x-switch/XSwitch'
import { RITUAL_TYPE_ENUM } from '@/helpers/globalEnums'
import { editGoalAtom_goal_ritual___ritual_type } from '@/modules/goals/stores/editGoal.store'
import { useAtom } from 'jotai'

export const RitualTypeSwitch = () => {
    const [_editGoalAtom_goal_ritual___ritual_type, _setEditGoalAtom_goal_ritual_ritual_type] = useAtom(
        editGoalAtom_goal_ritual___ritual_type,
    )
    const isIntervalDayOfWeek = _editGoalAtom_goal_ritual___ritual_type === RITUAL_TYPE_ENUM.DAYS_OF_WEEK

    return (
        <div className='relative flex items-center justify-start gap-2'>
            <div className='font-extralight'>Interval between days</div>
            <XSwitch
                checked={isIntervalDayOfWeek}
                onChange={(e) =>
                    // *
                    // ritual_type
                    _setEditGoalAtom_goal_ritual_ritual_type(() =>
                        e ? RITUAL_TYPE_ENUM.DAYS_OF_WEEK : RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS,
                    )
                }
            />
            <div className='font-extralight'>Day of week</div>
        </div>
    )
}
