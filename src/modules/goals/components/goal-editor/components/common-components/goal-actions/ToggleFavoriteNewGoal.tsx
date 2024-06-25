import { StyledButton } from '@/components/buttons/StyledButton'
import { IconHeart } from '@/assets/icons/IconHeart'
import { useAtom } from 'jotai'
import { editGoalAtom_is_favorite } from '@/modules/goals/stores/editGoal.store'

export const ToggleFavoriteNewGoal = () => {
    const [_editGoalAtom_is_favorite, setEditGoalAtom_is_favorite] = useAtom(editGoalAtom_is_favorite)
    return (
        <>
            <StyledButton
                id='toggleFavoriteGoal'
                error={!!_editGoalAtom_is_favorite}
                variant={_editGoalAtom_is_favorite ? 'contained' : 'text'}
                size={'small'}
                onClick={() => {
                    setEditGoalAtom_is_favorite((prev) => !prev)
                }}
                startIcon={<IconHeart className='mb-0.5 h-6 w-6 opacity-70 hover:opacity-100' />}
            />
        </>
    )
}
