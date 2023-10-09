import { useGoalsStore } from '@/StoreProvider'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const ToggleEditGoal: React.FC = observer(() => {
    const { cancelGoalCreator, new_goal } = useGoalsStore()
    if (!new_goal) return null
    const { edit_mode, view_mode } = new_goal
    return (
        <StyledButton
            variant={edit_mode ? 'contained' : 'outlined'}
            size={'custom'}
            className='h-7 w-10  opacity-70 hover:opacity-100 md:h-10 md:w-14'
            startIcon={<Icon icon='material-symbols:edit' width={24} height={24} />}
            onClick={() =>
                cancelGoalCreator({ redirectId: new_goal.id, redirectMode: view_mode ? 'edit_mode' : 'view_mode' })
            }
        />
    )
})
