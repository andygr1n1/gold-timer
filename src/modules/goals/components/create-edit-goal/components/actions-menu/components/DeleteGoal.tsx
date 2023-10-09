import { useGoalsStore } from '@/StoreProvider'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const DeleteGoal: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null
    const { deleteGoal, deleted_at } = new_goal
    return (
        <StyledButton
            size={'custom'}
            className='h-7 w-10 opacity-70 hover:opacity-100 md:h-10 md:w-14'
            error
            variant={deleted_at ? 'contained' : 'outlined'}
            onClick={deleteGoal}
        >
            <Icon icon='fluent:delete-dismiss-24-filled' width={24} height={24} />
        </StyledButton>
    )
})
