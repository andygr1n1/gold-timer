import { useAtom } from 'jotai'
import { GoalDetails } from '../../GoalDetails'
import { editGoalAtom } from '@/modules/goals/stores/editGoal.store'

export const EditModeGoalDetails: React.FC = () => {
    const [_editGoal] = useAtom(editGoalAtom)
    if (!_editGoal) return null

    return <GoalDetails goal={_editGoal} />
}
