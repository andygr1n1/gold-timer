import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const MenuIcon: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    return !isDesktop ? (
        <Icon
            icon='line-md:close-to-menu-transition'
            className={`text-cText cursor-pointer hover:text-blue-700 2xl:hidden`}
            width={33}
            height={33}
            onClick={useSideMenu.onChange}
        />
    ) : null
})
