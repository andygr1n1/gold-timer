import { observer } from 'mobx-react-lite'

import { useRootStore } from '@/StoreProvider'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { ReactNode } from 'react'
import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/lib/enums'

export const SprintsCounterDropdown: React.FC<{ button: ReactNode }> = observer(({ button }) => {
    return (
        <XDropdown
            trigger={['hover']}
            dropdownRender={() => <DropdownRender />}
            placement='bottomLeft'
            overlayClassName='!z-[55]'
        >
            <div>{button}</div>
        </XDropdown>
    )
})

const DropdownRender = observer(() => {
    const {
        sprints$: { openSprintCreateMode },
    } = useRootStore()
    return (
        <XMenuDropdown>
            <XMenuItem
                onClick={() => {
                    openSprintCreateMode()
                }}
            >
                <Icon
                    icon='ic:round-fiber-new'
                    width={24}
                    height={24}
                    className='duration-300 group-hover:text-amber-500'
                />
                <span>New sprint</span>
            </XMenuItem>
            <NavLink to={`/${APP_ROUTES_ENUM.SPRINTS}`}>
                <XMenuItem className='!opacity-100'>
                    <Icon
                        icon='fluent:folder-28-filled'
                        width={24}
                        height={24}
                        className='duration-300 group-hover:text-blue-500'
                    />
                    <span>My Sprints</span>
                </XMenuItem>
            </NavLink>
        </XMenuDropdown>
    )
})
