import { IconNew } from '@/assets/icons'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useGoalEditor$ } from '../../../stores/useGoalEditor.store'
import { goalEditorMode } from '../../../stores/types'

export const CreateChildGoal: React.FC<{ label?: React.ReactNode; parentGoalId: string | null }> = ({
    label,
    parentGoalId,
}) => {
    const { setState, state } = useGoalEditor$()

    const metadataParentGoalId = state.metadata?.parentGoalId
    const metadataParentGoalEditorMode = state.metadata?.parentGoalEditorMode

    return (
        <>
            <StyledButton
                id='createChildGoal'
                size={'custom'}
                variant={metadataParentGoalId ? 'contained' : 'text'}
                onClick={() => {
                    metadataParentGoalId
                        ? setState({
                              goalEditorMode: metadataParentGoalEditorMode || goalEditorMode.view,
                              open: true,
                              goalId: metadataParentGoalId,
                          })
                        : setState({
                              goalEditorMode: goalEditorMode.new,
                              open: true,
                              goalId: null,
                              metadata: { parentGoalId, parentGoalEditorMode: state.goalEditorMode },
                          })
                }}
                startIcon={<IconNew className='h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#createChildGoal'>{'Create child goal'}</XTooltip>}
        </>
    )
}
