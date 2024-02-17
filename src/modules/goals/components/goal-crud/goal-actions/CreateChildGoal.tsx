import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { NewChildIcon } from '@/components/icons/NewChildIcon'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { useAtom } from 'jotai'
import { ReactNode } from 'react'

export const CreateChildGoal: React.FC<{ label?: ReactNode; parentGoalId: string }> = ({ label, parentGoalId }) => {
    const [_selectedGoal, setGoal] = useAtom(selectedGoalAtom)

    return (
        <>
            <StyledButton
                id='createChildGoal'
                size={'custom'}
                variant={'text'}
                onClick={() => {
                    if (!_selectedGoal) {
                        selectedGoalAtom$.set(selectedGoalAtom, {
                            id: crypto.randomUUID(),
                            is_edit: true,
                            is_new: true,
                            parent_goal_id: parentGoalId,
                        })
                    } else {
                        setGoal((goal) => ({
                            id: crypto.randomUUID(),
                            is_edit: true,
                            is_new: true,
                            parent_goal_id: parentGoalId,
                            is_redirect_from_view_mode: !goal?.is_edit,
                        }))
                    }
                }}
                startIcon={<NewChildIcon className='h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#createChildGoal'>{'Create child goal'}</XTooltip>}
        </>
    )
}
