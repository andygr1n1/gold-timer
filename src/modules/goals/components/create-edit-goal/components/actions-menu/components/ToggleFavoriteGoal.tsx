import { useGoalsStore } from '@/StoreProvider'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const ToggleFavorite: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null
    const { is_favorite, favoriteGoal } = new_goal
    return (
        <StyledButton
            error={is_favorite}
            variant={is_favorite ? 'contained' : 'outlined'}
            size={'custom'}
            className='h-7 w-10  opacity-70 hover:opacity-100 md:h-10 md:w-14'
            onClick={favoriteGoal}
        >
            <Icon icon='material-symbols:ecg-heart' width={24} height={24} />
        </StyledButton>
    )
})
