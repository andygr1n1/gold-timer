import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { observer } from 'mobx-react-lite'
import { StyledButton } from '../buttons/StyledButton'
import { IconMenu } from '@/assets/icons/IconMenu'

export const OpenSideMenu: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    return !isDesktop ? (
        <StyledButton
            className='text-cText opacity-70 hover:opacity-100'
            variant='text'
            onClick={useSideMenu.onChange}
            startIcon={<IconMenu width={28} height={28} />}
        />
    ) : null
})
