import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useSideMenu } from '@/hooks/useToggleSideMenu.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { Divider } from '../divider/Divider'
import { CloseSideMenu } from './components/Close.sidemenu'
import { UserAvatarSidemenu } from './components/UserAvatar.sidemenu'
import { SidemenuLink } from './components/SidemenuLink'

export const Sidemenu: React.FC = observer(() => {
    return (
        <div
            className={`
            absolute left-0 z-20  flex h-full rounded-r-lg bg-[#151c2c] font-sofia
            text-white  lg:static  lg:m-5 lg:flex lg:h-[calc(100%-40px)] lg:rounded-lg
            ${useSideMenu.is_open ? 'animate-slide-in' : 'ml-[-320px] animate-slide-out lg:animate-opacity '}
            `}
        >
            <div className='flex w-[200px] min-w-[200px] flex-col  gap-10 overflow-auto py-5'>
                <div className='relative'>
                    <UserAvatarSidemenu />
                    <CloseSideMenu />
                </div>
                <div className='ml-4 flex flex-col gap-5 overflow-auto  pl-5'>
                    <SidemenuLink
                        to={APP_ROUTES_ENUM.PROFILE}
                        title='Profile'
                        icon={<Icon icon='fluent:share-screen-person-16-regular' width={25} height={25} />}
                    />
                    <SidemenuLink
                        to={APP_ROUTES_ENUM.FRIENDS}
                        title='Friends'
                        icon={<Icon icon='fluent:people-community-24-regular' width={25} height={25} />}
                        disabled
                    />
                    {/*  */}
                    <Divider className='bg-gray-700' />
                    <SidemenuLink
                        to={APP_ROUTES_ENUM.SEARCH}
                        title='Search'
                        icon={<Icon icon='material-symbols:screen-search-desktop' width={23} height={23} />}
                        disabled
                    />
                    {/*  */}
                    <Divider className='bg-gray-700' />
                    {/*  */}

                    <SidemenuLink
                        to={APP_ROUTES_ENUM.TASKS}
                        title='Tasks'
                        icon={<Icon icon='fluent:task-list-square-ltr-16-filled' width={25} height={25} />}
                        disabled
                    />
                    <SidemenuLink
                        to={APP_ROUTES_ENUM.GOALS}
                        title='Goals'
                        icon={<Icon icon='octicon:goal-16' width={20} height={20} />}
                        badge={99}
                    />
                    <SidemenuLink
                        to={APP_ROUTES_ENUM.SPRINTS}
                        title='Sprints'
                        icon={<Icon icon='game-icons:sprint' width={25} height={25} />}
                        disabled
                    />
                    <SidemenuLink
                        to={APP_ROUTES_ENUM.ACHIEVEMENTS}
                        title='Achievements'
                        icon={<Icon icon='game-icons:achievement' width={23} height={23} />}
                    />
                    {/*  */}
                    <Divider className='bg-gray-700' />
                    {/*  */}
                    <SidemenuLink
                        to={APP_ROUTES_ENUM.SANCTUARY}
                        title='Sanctuary'
                        icon={<Icon icon='ph:books-fill' width={23} height={23} />}
                        disabled
                    />
                    {/*  */}
                    <Divider className='bg-gray-700' />
                    {/*  */}
                    <SidemenuLink
                        to={APP_ROUTES_ENUM.BIT_WARDEN}
                        title='Bit Warden'
                        icon={<Icon icon='mdi:shield-network' width={25} height={25} />}
                        disabled
                    />
                    <SidemenuLink
                        to={APP_ROUTES_ENUM.WALLET}
                        title='Wallet'
                        icon={<Icon icon='ion:wallet' width={23} height={23} />}
                        disabled
                    />
                    {/*  */}
                    <Divider className='bg-gray-700' />
                    {/*  */}
                    <SidemenuLink
                        to={APP_ROUTES_ENUM.SUGGESTIONS}
                        title='Suggestions'
                        icon={<Icon icon='mdi:present' width={23} height={23} />}
                        disabled
                    />
                    <SidemenuLink
                        to={APP_ROUTES_ENUM.SETTINGS}
                        title='Settings'
                        icon={<Icon icon='material-symbols:settings-applications' width={25} height={25} />}
                        disabled
                    />
                </div>

                <SidemenuLink to={APP_ROUTES_ENUM.DASHBOARD}>
                    <button
                        className='relative h-[46px] w-[125px] cursor-pointer rounded-sm border border-transparent bg-blue-600 
                        p-3 text-sm text-inherit  outline-none duration-300 hover:bg-blue-700 hover:text-white
                        focus:border-blue-700 focus:bg-blue-700 focus:text-white focus:shadow-sm focus:shadow-blue-700 active:border-blue-700 active:bg-blue-700 active:text-gray-200'
                    >
                        <span className='absolute left-1/2 top-1/2 w-[125px] -translate-x-1/2 -translate-y-1/2 '>
                            Go to Dashboard
                        </span>
                    </button>
                </SidemenuLink>
            </div>
        </div>
    )
})
