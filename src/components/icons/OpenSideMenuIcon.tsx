import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { StyledButton } from '../buttons/StyledButton'

export const MenuIcon: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    return !isDesktop ? (
        <StyledButton
            className='text-cText opacity-70 hover:opacity-100'
            variant='text'
            onClick={useSideMenu.onChange}
            startIcon={<Icon icon='line-md:close-to-menu-transition' width={28} height={28} />}
        />
    ) : null
})
