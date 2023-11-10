import { useSideMenuStore } from '@/StoreProvider'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const SprintsSettingsIcon: React.FC = observer(() => {
    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])
    const { openSprintsMenu } = useSideMenuStore()

    return !isLargeDesktop ? (
        <Icon
            icon='ph:plus-fill'
            width={28}
            height={28}
            className='text-cText min-w-[28px] cursor-pointer duration-300 hover:text-blue-700 md:hidden'
            onClick={openSprintsMenu}
        />
    ) : null
})
