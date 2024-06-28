import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { observer } from 'mobx-react-lite'
import { useGoalEditor$ } from '../../goal-editor-dialog/stores/goal-editor-store/useGoalEditor.store'
import { goalEditorMode } from '../../goal-editor-dialog/stores/goal-editor-store/types'

export const AddGoal: React.FC = observer(() => {
    const { setState } = useGoalEditor$()

    const addGoal = () => {
        setState({ goalEditorMode: goalEditorMode.new, goalId: null, open: true })
    }

    return (
        <div className='opacity-70'>
            <StyledButton startIcon={<IconNew width={24} height={24} />} onClick={addGoal} className='' variant='text'>
                Add goal
            </StyledButton>
        </div>
    )
})
