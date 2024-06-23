import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { IconEye } from '@/assets/icons/IconEye'
import {  IGoalSchema } from '@/modules/goals/service/types'
import { ToggleFavorite } from '../../goal-crud/goal-actions/ToggleFavoriteGoal'
import { DeleteGoal } from '../../goal-crud/goal-actions/DeleteGoal'
import { StyledButton } from '@/components/buttons/StyledButton'
import { ToggleEditGoal } from '../../goal-crud/goal-actions/ToggleEditGoal'
import { CreateChildGoal } from '../../goal-crud/goal-actions/CreateChildGoal'

export const GoalContextMenu: React.FC<{ goal: IGoalSchema; action: () => void; forceMode?: boolean }> = ({
    goal,
    action: onClose,
}) => {
    return (
        <XMenuDropdown>
            <XMenuItem>
                <ToggleFavorite
                    goalId={goal.id}
                    isFavorite={!!goal.is_favorite}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {goal.is_favorite ? 'Unfavorite' : 'Favorite'}
                        </span>
                    }
                />
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    selectedGoalAtom$.set(selectedGoalAtom, { id: goal.id, is_edit: false, is_new: false })
                    onClose()
                }}
            >
                <StyledButton variant='text' size='small' startIcon={<IconEye width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>open</span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem onClick={onClose}>
                <ToggleEditGoal
                    goalId={goal.id}
                    label={<span className='flex w-[110px] justify-start capitalize'>edit</span>}
                />
            </XMenuItem>

            <XMenuItem onClick={onClose}>
                <DeleteGoal
                    goalId={goal.id}
                    deletedAt={!!goal.deleted_at}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {goal.deleted_at ? 'Restore' : 'Move to bin'}
                        </span>
                    }
                />
            </XMenuItem>
            <XMenuDivider />
            <XMenuItem onClick={onClose}>
                <CreateChildGoal
                    parentGoalId={goal.id}
                    label={<span className='flex w-[110px] justify-start capitalize'>New child goal</span>}
                />
            </XMenuItem>
        </XMenuDropdown>
    )
}
