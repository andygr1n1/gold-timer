import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const CloseSideMenu: React.FC = observer(() => {
    return (
        <Icon
            icon='line-md:menu-to-close-transition'
            className='absolute right-4 top-0 cursor-pointer font-bold hover:text-blue-500 lg:hidden'
            width={23}
            height={23}
            onClick={useSideMenu.onChange}
        />
    )
})
