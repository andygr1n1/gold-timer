import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconHeart } from '@/assets/icons/IconHeart'
import { type ReactNode } from 'react'
import { useUpdateAchIsFavorite } from './useUpdateAchIsFavorite'

export const AchIsFavorite: React.FC<{ id: string; isFavorite: boolean; label?: ReactNode; onClose?: () => void }> = ({
    id,
    isFavorite,
    label,
    onClose,
}) => {
    const { toggleFavorite } = useUpdateAchIsFavorite()

    return (
        <>
            <StyledButton
                id='toggleFavoriteAch'
                error={!!isFavorite}
                variant={isFavorite ? 'contained' : 'text'}
                size={'small'}
                onClick={() => {
                    toggleFavorite({ id, isFavorite: !isFavorite })
                    onClose?.()
                }}
                startIcon={<IconHeart className='mb-0.5 h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#toggleFavoriteAch'>{isFavorite ? 'Unfavorite' : 'Favorite'}</XTooltip>}
        </>
    )
}
