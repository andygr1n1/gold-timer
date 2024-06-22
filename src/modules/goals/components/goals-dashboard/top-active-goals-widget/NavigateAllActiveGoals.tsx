import { IconFocus } from '@/assets/icons/IconFocus'
import { StyledButton } from '@/components/buttons/StyledButton'
import { setGoalsFilterParam } from '@/modules/goals/helpers/goalsFilterParamLocalForage'
import { useNavigate } from 'react-router-dom'

export const NavigateAllActiveGoals: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='absolute left-[-40px] top-[-43px]  cursor-pointer'>
            <StyledButton
                onClick={() => {
                    navigate(
                        { pathname: '/goals/filtered-goals', search: `?filter=active` },
                        { state: { filter: 'active' } },
                    )
                     setGoalsFilterParam('active')
                }}
                variant='text'
                className='!h-24 !w-24 !rounded-full'
                startIcon={<IconFocus width={76} height={76} className='min-h-[66px] min-w-[66px] text-blue-600' />}
            />
        </div>
    )
}
