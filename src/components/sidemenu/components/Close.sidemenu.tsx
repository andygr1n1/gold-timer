import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const CloseSideMenu: React.FC<{ className?: string }> = observer(({ className = '' }) => {
    return (
        <Icon
            icon='line-md:menu-to-close-transition'
            className={`text-navlink hover:text-navlink-active absolute right-4 top-0 cursor-pointer font-bold lg:hidden ${className}`}
            width={23}
            height={23}
            onClick={useSideMenu.onChange}
        />
    )
})
