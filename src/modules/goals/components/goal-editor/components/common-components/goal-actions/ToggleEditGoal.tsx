import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconEdit } from '@/assets/icons/IconEdit'
import { ReactNode } from 'react'
import { useGoalEditor$ } from '../../../stores/useGoalEditor.store'
import { goalEditorMode } from '../../../stores/types'

export const ToggleEditGoal: React.FC<{ label?: ReactNode; goalId: string }> = ({ label, goalId }) => {
    const { setState, editMode } = useGoalEditor$()

    return (
        <>
            <StyledButton
                id='editGoal'
                variant={editMode ? 'contained' : 'text'}
                size={'custom'}
                startIcon={<IconEdit className='h-6 w-6 opacity-70 hover:opacity-100' />}
                onClick={() => {
                    setState({
                        goalEditorMode: editMode ? goalEditorMode.view : goalEditorMode.edit,
                        open: true,
                        goalId,
                    })
                }}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#editGoal'>{editMode ? 'Cancel' : 'Edit'}</XTooltip>}
        </>
    )
}
