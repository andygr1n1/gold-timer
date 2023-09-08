import { useSideMenuStore } from '@/StoreProvider'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const CreateNewItemIcon: React.FC = observer(() => {
    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])
    const { openDashboardMenu } = useSideMenuStore()

    return !isLargeDesktop ? (
        <Icon
            icon='ph:plus-fill'
            width={34}
            height={34}
            className='text-navLink hover:text-navLink-active cursor-pointer duration-300'
            onClick={openDashboardMenu}
        />
    ) : null
})
