import { useGoalsStore } from '@/StoreProvider'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { ToggleFavorite } from '../common-components/actions-menu/components/ToggleFavoriteGoal'

export const EditGoalDialogTitle: React.FC = observer(() => {
    const { edit_goal } = useGoalsStore()
    if (!edit_goal) return null
    const ritualMode = edit_goal.goal_ritual && !edit_goal.hasRitualPower
    return edit_goal ? (
        <div className='flex w-full items-center gap-3'>
            <StyledButton
                disabled
                variant={'text'}
                className='opacity-70'
                startIcon={
                    <Icon
                        icon={ritualMode ? 'icon-park-outline:auto-focus' : 'material-symbols:edit'}
                        width={24}
                        height={24}
                    />
                }
            />
            <div className='max-w-[200px] truncate'>{edit_goal.title}</div>
            {ritualMode && <ToggleFavorite goal={edit_goal} />}
        </div>
    ) : null
})
