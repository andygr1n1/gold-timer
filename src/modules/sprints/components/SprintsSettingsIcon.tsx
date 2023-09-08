import { useSideMenuStore } from '@/StoreProvider'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const SprintsSettingsIcon: React.FC = observer(() => {
    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])
    const { openSprintsMenu } = useSideMenuStore()

    return !isLargeDesktop ? (
        <Icon
            icon='ph:plus-fill'
            width={24}
            height={24}
            className='text-navLink hover:text-navLink-active min-w-[24px] cursor-pointer duration-300 md:hidden'
            onClick={openSprintsMenu}
        />
    ) : null
})
