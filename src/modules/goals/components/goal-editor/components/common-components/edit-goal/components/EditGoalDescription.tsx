import { useAtom } from 'jotai'
import { editGoalAtom_description } from '../../../../../../stores/editGoal.store'
import { GoalDescriptionRichInput } from '../../GoalDescriptionRichInput'

export const EditGoalDescription: React.FC = () => {
    const [_editGoalAtom_description, _setEditGoalAtom_description] = useAtom(editGoalAtom_description)
    return <GoalDescriptionRichInput value={_editGoalAtom_description} onChange={_setEditGoalAtom_description} />
}
