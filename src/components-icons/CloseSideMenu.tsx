import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const CloseSideMenu: React.FC<{ className?: string; onClose: () => void }> = observer(
    ({ className = '', onClose }) => {
        return (
            <Icon
                icon='line-md:menu-to-close-transition'
                className={`text-nav-link hover:text-nav-link-active absolute right-4 top-2 cursor-pointer font-bold lg:hidden ${className}`}
                width={15}
                height={15}
                onClick={onClose}
            />
        )
    },
)
