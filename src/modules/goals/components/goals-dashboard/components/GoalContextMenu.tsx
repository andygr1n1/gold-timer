import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { IconEye } from '@/assets/icons/IconEye'
import { IGoalSchema } from '@/modules/goals/shared-service/types'
import { GoalIsFavorite } from '../../../shared-components/goal-is-favorite/GoalIsFavorite'
import { GoalDeletedAt } from '../../../shared-components/goal-deleted-at/GoalDeletedAt'
import { StyledButton } from '@/components/buttons/StyledButton'
import { ToggleEditGoal } from '../../goal-editor/components/common-components/goal-actions/ToggleEditGoal'
import { CreateChildGoal } from '../../goal-editor/components/common-components/goal-actions/CreateChildGoal'
import { useGoalEditor$ } from '../../goal-editor/stores/useGoalEditor.store'
import { goalEditorMode } from '../../goal-editor/stores/types'

export const GoalContextMenu: React.FC<{ goal: IGoalSchema; action: () => void; forceMode?: boolean }> = ({
    goal,
    action: onClose,
}) => {
    const { setState } = useGoalEditor$()

    return (
        <XMenuDropdown>
            <XMenuItem>
                <GoalIsFavorite
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
                    setState({ goalEditorMode: goalEditorMode.view, goalId: goal.id, open: true })
                    onClose()
                }}
            >
                <StyledButton variant='text' size='small' startIcon={<IconEye width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>open</span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    setState({ goalEditorMode: goalEditorMode.edit, goalId: goal.id, open: true })
                    onClose()
                }}
            >
                <ToggleEditGoal
                    goalId={goal.id}
                    label={<span className='flex w-[110px] justify-start capitalize'>edit</span>}
                />
            </XMenuItem>

            <XMenuItem onClick={onClose}>
                <GoalDeletedAt
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
            <XMenuItem
                onClick={() => {
                    setState({
                        goalEditorMode: goalEditorMode.new,
                        metadata: { parentGoalId: goal.id },
                        open: true,
                        goalId: null,
                    })
                    onClose()
                }}
            >
                <CreateChildGoal
                    parentGoalId={goal.id}
                    label={<span className='flex w-[110px] justify-start capitalize'>New child goal</span>}
                />
            </XMenuItem>
        </XMenuDropdown>
    )
}
