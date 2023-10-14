import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IGoal$ } from '@/modules/goals/mst/types'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const ToggleFavorite: React.FC<{ goal: IGoal$; noRequest?: boolean; hide?: boolean }> = observer(
    ({ goal, noRequest = false, hide = false }) => {
        const { is_favorite, favoriteGoal } = goal

        return !hide ? (
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
        ) : null
    },
)
