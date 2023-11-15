import { observer } from 'mobx-react-lite'
import { ToggleFavorite } from '../common-components/actions-menu/components/ToggleFavoriteGoal'
import { useGoalsStore } from '@/StoreProvider'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Icon } from '@iconify/react'

export const NewGoalDialogTitle: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    return new_goal ? (
        <div className='flex w-full items-center gap-3'>
            {new_goal.parent_goal_id && (
                <StyledButton
                    disabled
                    variant={'text'}
                    className='opacity-70'
                    startIcon={<Icon icon='bxs:layer-plus' width={34} height={34} />}
                />
            )}
            <div className='max-w-[200px] truncate'>New Goal</div>
            {<ToggleFavorite goal={new_goal} noRequest={true} />}
        </div>
    ) : null
})
