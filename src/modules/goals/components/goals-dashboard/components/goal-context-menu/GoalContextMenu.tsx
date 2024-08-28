import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { IconEye } from '@/assets/icons/IconEye'
import { type IGoalSchema } from '@/modules/goals/shared-service/types'
import { GoalIsFavorite } from '../../../../shared-components/goal-is-favorite/GoalIsFavorite'
import { GoalDeletedAt } from '../../../../shared-components/goal-deleted-at/GoalDeletedAt'
import { StyledButton } from '@/components/buttons/StyledButton'
import { ToggleEditGoal } from '../../../../shared-components/ToggleEditGoal'
import { CreateChildGoal } from '../../../../shared-components/CreateChildGoal'
import { useGoalEditor$ } from '../../../goal-editor-dialog/stores/goal-editor-store/useGoalEditor.store'
import { goalEditorMode } from '../../../goal-editor-dialog/stores/goal-editor-store/types'
import { RitualizeGoalMenuItem } from './components/RitualizeGoalMenuItem'
import { CompleteGoalMenuItem } from './components/CompleteGoalMenuItem'

export const GoalContextMenu: React.FC<{ goal: IGoalSchema; action: () => void; forceMode?: boolean }> = ({
    goal,
    action: onClose,
}) => {
    const { setStore: setState } = useGoalEditor$()

    return (
        <XMenuDropdown>
            <CompleteGoalMenuItem goal={goal} onClose={onClose} />
            <RitualizeGoalMenuItem goal={goal} onClose={onClose} />
            <XMenuItem>
                <GoalIsFavorite
                    goalId={goal.id}
                    isFavorite={!!goal.is_favorite}
                    label={
                        <span className='flex w-[120px] justify-start capitalize'>
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
                    label={<span className='flex w-[120px] justify-start capitalize'>New child goal</span>}
                />
            </XMenuItem>
        </XMenuDropdown>
    )
}
