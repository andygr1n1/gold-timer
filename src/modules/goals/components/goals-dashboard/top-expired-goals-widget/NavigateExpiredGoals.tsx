import { IconExpired } from '@/assets/icons/IconExpired'
import { StyledButton } from '@/components/buttons/StyledButton'
import { setGoalsFilterParam } from '@/modules/goals/helpers/goalsFilterParamLocalForage'
import { useNavigate } from 'react-router-dom'

export const NavigateExpiredGoals: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='absolute left-[-40px] top-[-42px]  cursor-pointer '>
            <StyledButton
                onClick={() => {
                    navigate(
                        { pathname: '/goals/filtered-goals', search: `?filter=expired` },
                        { state: { filter: 'expired' } },
                    )
                    setGoalsFilterParam('expired')
                }}
                variant='text'
                className='!h-24 !w-24 !rounded-full'
                startIcon={<IconExpired width={65} height={65} className='min-h-[65px] min-w-[65px] text-amber-600' />}
            />
        </div>
    )
}
