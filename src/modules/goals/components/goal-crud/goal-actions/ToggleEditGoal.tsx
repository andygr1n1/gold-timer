import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useAtom } from 'jotai'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selected-goal/selectedGoal.store'
import { IconEdit } from '@/assets/icons/IconEdit'
import { ReactNode } from 'react'

export const ToggleEditGoal: React.FC<{ label?: ReactNode; goalId?: string }> = ({ label, goalId }) => {
    const [_selectedGoal, setGoal] = useAtom(selectedGoalAtom)

    return (
        <>
            <StyledButton
                id='editGoal'
                variant={_selectedGoal?.is_edit ? 'contained' : 'text'}
                size={'custom'}
                startIcon={<IconEdit className='h-6 w-6 opacity-70 hover:opacity-100' />}
                onClick={() => {
                    if (!_selectedGoal && goalId) {
                        selectedGoalAtom$.set(selectedGoalAtom, {
                            id: goalId,
                            is_edit: true,
                            is_new: false,
                            is_new_ritual: false,
                        })
                    } else {
                        setGoal((goal) => ({
                            ...goal,
                            is_edit: !goal?.is_edit,
                            is_redirect_from_view_mode: !goal?.is_edit,
                            is_new_ritual: false,
                        }))
                    }
                }}
            >
                {label}
            </StyledButton>
            {!label && _selectedGoal && (
                <XTooltip anchorSelect='#editGoal'>{!!_selectedGoal?.is_edit ? 'Cancel' : 'Edit'}</XTooltip>
            )}
        </>
    )
}
