import { StyledButton } from '@/components/buttons/StyledButton'
import { useGoalEditor$ } from '../../stores/useGoalEditor.store'
import { ViewModeFooter } from './view-mode-footer/ViewModeFooter'

export const GoalEditorFormFooter: React.FC = () => {
    const { state } = useGoalEditor$()

    if (!state.edit) {
        return <ViewModeFooter />
    }

    return <EditModeFooter />
}

const EditModeFooter = () => {
    const { onCancel } = useGoalEditor$()
    return (
        <StyledButton
            type='button'
            error
            rounded
            onClick={onCancel}
            variant='outlined'
            size='extraLarge'
            className='!w-28'
        >
            Return
        </StyledButton>
    )
}
