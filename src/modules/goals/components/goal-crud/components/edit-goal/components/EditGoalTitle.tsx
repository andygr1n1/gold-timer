import { useAtom } from 'jotai'
import { GoalTitleInput } from '../../common-components/GoalTitleInput'
import { editGoalAtom_title } from '../../../../../stores/editGoal.store'

export const EditGoalTitle: React.FC = () => {
    const [_editGoalAtom_title, _setEditGoalAtom_title] = useAtom(editGoalAtom_title)
    return <GoalTitleInput value={_editGoalAtom_title} onChange={_setEditGoalAtom_title} />
}
