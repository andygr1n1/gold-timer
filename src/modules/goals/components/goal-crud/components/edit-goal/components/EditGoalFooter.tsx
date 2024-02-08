import { FormFooter } from '@/components/form/FormFooter'
import { cancelEditMode } from '@/modules/goals/stores/selectedGoal.store'
import { useAtom } from 'jotai'
import { editGoalAtom, goalHasTitle, upsertGoal } from '../../../../../stores/editGoal.store'

export const EditGoalFooter = () => {
    const [_editGoalAtom] = useAtom(editGoalAtom)
    const [_goalHasTitle] = useAtom(goalHasTitle)
    const [, _cancelEditMode] = useAtom(cancelEditMode)
    const [{ mutate }] = useAtom(upsertGoal)

    return (
        <FormFooter
            onOk={() => {
                mutate({ editGoal: _editGoalAtom })
                _cancelEditMode()
            }}
            cancelTitle='Cancel'
            okTitle='Save'
            disabled={!_goalHasTitle}
            onCancel={() => _cancelEditMode()}
        />
    )
}
