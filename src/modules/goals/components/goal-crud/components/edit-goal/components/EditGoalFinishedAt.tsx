import { useAtom } from 'jotai'
import { editGoalAtom_finished_at } from '../../../../../stores/editGoal.store'
import { GoalFinishCalendarInput } from '../../common-components/GoalFinishCalendarInput'

export const EditGoalFinishedAt: React.FC = () => {
    const [_editGoalAtom_finished_at, _setEditGoalAtom_finished_at] = useAtom(editGoalAtom_finished_at)
    return (
        <GoalFinishCalendarInput
            value={_editGoalAtom_finished_at || new Date(Date.now()).toUTCString()}
            onChange={_setEditGoalAtom_finished_at}
        />
    )
}
