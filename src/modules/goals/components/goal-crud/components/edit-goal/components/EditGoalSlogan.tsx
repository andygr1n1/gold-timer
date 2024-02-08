import { useAtom } from 'jotai'
import { editGoalAtom_slogan } from '../../../../../stores/editGoal.store'
import { GoalSloganInput } from '../../common-components/GoalSloganInput'

export const EditGoalSlogan: React.FC = () => {
    const [_editGoalAtom_slogan, _setEditGoalAtom_slogan] = useAtom(editGoalAtom_slogan)
    return <GoalSloganInput value={_editGoalAtom_slogan} onChange={_setEditGoalAtom_slogan} />
}
