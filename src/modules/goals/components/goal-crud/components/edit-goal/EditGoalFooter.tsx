import { FormFooter } from '@/components/form/FormFooter'
import { cancelEditMode } from '@/modules/goals/stores/selected-goal/selectedGoal.store'
import { useAtom } from 'jotai'
import { editGoalAtom, goalHasTitle } from '../../../../stores/editGoal.store'
import { useUpsertGoal } from '@/modules/goals/service/upsertGoal/useUpsertGoal'

export const EditGoalFooter = () => {
    const [_editGoalAtom] = useAtom(editGoalAtom)
    const [_goalHasTitle] = useAtom(goalHasTitle)
    const [, _cancelEditMode] = useAtom(cancelEditMode)
    const _useUpsertGoal = useUpsertGoal()

    return (
        <FormFooter
            onOk={() => {
                _editGoalAtom && _useUpsertGoal.mutate({ editGoal: _editGoalAtom })
                _cancelEditMode()
            }}
            cancelTitle='Cancel'
            okTitle='Save'
            disabled={!_goalHasTitle}
            onCancel={() => _cancelEditMode()}
        />
    )
}
