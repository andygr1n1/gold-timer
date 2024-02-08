import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { NewChildIcon } from '@/components/icons/NewChildIcon'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { ReactNode } from 'react'

export const CreateChildGoal: React.FC<{ label?: ReactNode; parentGoalId: string }> = ({ label, parentGoalId }) => {
    return (
        <>
            <StyledButton
                id='createChildGoal'
                size={'small'}
                variant={'text'}
                onClick={() =>
                    selectedGoalAtom$.set(selectedGoalAtom, {
                        id: crypto.randomUUID(),
                        is_edit: true,
                        is_new: true,
                        parent_goal_id: parentGoalId,
                    })
                }
                startIcon={<NewChildIcon className='h-6 w-6' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#createChildGoal'>{'Create child goal'}</XTooltip>}
        </>
    )
}
