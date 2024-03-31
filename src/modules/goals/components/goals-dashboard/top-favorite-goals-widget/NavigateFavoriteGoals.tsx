import { IconFavorite } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { setGoalsFilterParam } from '@/modules/goals/helpers/goalsFilterParamLocalForage'
import { useNavigate } from 'react-router-dom'

export const NavigateFavoriteGoals: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='absolute left-[-39px] top-[-44px]  cursor-pointer'>
            <StyledButton
                onClick={() => {
                    navigate(
                        { pathname: '/goals/filtered-goals', search: `?filter=favorite` },
                        { state: { filter: 'favorite' } },
                    )
                     setGoalsFilterParam('favorite')
                }}
                variant='text'
                className='!h-24 !w-24 !rounded-full'
                startIcon={<IconFavorite width={70} height={70} className='min-h-[70px] min-w-[70px] text-rose-600' />}
            />
        </div>
    )
}
