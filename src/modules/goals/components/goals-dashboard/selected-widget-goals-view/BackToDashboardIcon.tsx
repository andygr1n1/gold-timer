import { IconBack } from '@/assets/icons/IconBack'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useNavigate } from 'react-router-dom'

export const BackToDashboardIcon: React.FC = () => {
    const navigate = useNavigate()
    return (
        <StyledButton
            variant='text'
            startIcon={<IconBack className={' !h-10 !w-10 opacity-70'} />}
            onClick={() => {
                navigate({ pathname: '/dashboard' })
            }}
        />
    )
}
