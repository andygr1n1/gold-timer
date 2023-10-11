import { useGoalsStore } from '@/StoreProvider'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const ToggleFavorite: React.FC<{ hide?: boolean }> = observer(({ hide }) => {
    const { new_goal } = useGoalsStore()
    useEffect(() => {}, [new_goal?.id])
    if (!new_goal || hide) return null
    const { is_favorite, favoriteGoal, edit_mode, view_mode } = new_goal

    const noRequest = !edit_mode && !view_mode

    return (
        <>
            <StyledButton
                id='toggleFavoriteGoal'
                error={is_favorite}
                variant={is_favorite ? 'contained' : 'outlined'}
                size={'custom'}
                className='h-7 w-10  opacity-70 hover:opacity-100 md:h-10 md:w-14'
                onClick={() =>
                    favoriteGoal({
                        noRequest,
                    })
                }
            >
                <Icon icon='material-symbols:ecg-heart' width={24} height={24} />
            </StyledButton>
            <XTooltip anchorSelect='#toggleFavoriteGoal'>{is_favorite ? 'Unfavorite' : 'Favorite'}</XTooltip>
        </>
    )
})
