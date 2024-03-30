import { IconRitual } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useNavigate } from 'react-router-dom'

export const NavigateRitualGoals: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='absolute left-[-40px] top-[-40px] cursor-pointer'>
            <StyledButton
                onClick={() => {
                    navigate(
                        { pathname: '/goals/filtered-goals', search: `?filter=ritual` },
                        { state: { filter: 'ritual' } },
                    )
                }}
                variant='text'
                className='!h-24 !w-24 !rounded-full'
                startIcon={<IconRitual width={75} height={75} className='min-h-[65px] min-w-[65px] text-teal-600' />}
            />
        </div>
    )
}
