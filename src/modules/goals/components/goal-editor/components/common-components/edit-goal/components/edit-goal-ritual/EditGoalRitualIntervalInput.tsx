import { FormLabel } from '@/components/form/FormLabel'
import { RITUAL_TYPE_ENUM } from '@/services/enums'
import { SelectDayOfWeek } from './SelectDayOfWeek'
import { SelectDays } from './SelectDays'
import { RitualTypeSwitch } from './RitualTypeSwitch'
import { useAtom } from 'jotai'
import { editGoalAtom_goal_ritual___ritual_type } from '@/modules/goals/stores/editGoal.store'

export const EditGoalRitualIntervalInput = () => {
    const [_editGoalAtom_goal_ritual_ritual_type] = useAtom(editGoalAtom_goal_ritual___ritual_type)
    const isIntervalDayOfWeek = _editGoalAtom_goal_ritual_ritual_type === RITUAL_TYPE_ENUM.DAYS_OF_WEEK

    return _editGoalAtom_goal_ritual_ritual_type ? (
        <div>
            <FormLabel title='Ritual interval' />
            <div className='flex flex-col gap-2'>
                <RitualTypeSwitch />
                {isIntervalDayOfWeek ? <SelectDayOfWeek /> : <SelectDays />}
            </div>
        </div>
    ) : null
}
