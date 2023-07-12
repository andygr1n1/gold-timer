import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { XDivider } from '../../components-x/x-divider/XDivider'
import { CloseSideMenu } from './components/Close.sideMenu'
import { UserAvatarSideMenu } from './components/UserAvatar.sideMenu'
import { SideMenuLink } from './components/MenuLink'
import { useOutsideAlerter } from '@/hooks/useClickOutside.hook'
import { useEffect, useRef } from 'react'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { Transition } from '@headlessui/react'
import { useUserStore } from '@/StoreProvider'

export const SideMenu: React.FC = observer(() => {
    const { hasWalletAddon, hasLinksAddon } = useUserStore()
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    useOutsideAlerter(wrapperRef, useSideMenu.onChange, isDesktop)

    useEffect(() => {
        isDesktop && useSideMenu.is_open && useSideMenu.onChange()
    }, [isDesktop])

    if (!isDesktop && useSideMenu.is_detached_from_DOM) return null

    return (
        <>
            <Transition
                appear={true}
                show={useSideMenu.is_open}
                enter='transition-opacity duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-40'
                leave='transition-opacity duration-300'
                leaveFrom='opacity-40'
                leaveTo='opacity-0'
                className={'fixed z-40 h-full w-full xl:hidden'}
            >
                <div className='fixed z-40 h-full w-full bg-gray-500 xl:hidden' />
            </Transition>
            {/*  */}
            <div
                ref={wrapperRef}
                className={`
                text-global-text absolute left-0  z-50 flex h-full rounded-r-lg bg-global-2-bg
                font-sofia  xl:static  xl:m-5 xl:flex xl:h-[calc(100%-40px)] xl:rounded-lg
                ${useSideMenu.is_open ? 'animate-slide-in' : 'ml-[-320px] animate-slide-out xl:animate-opacity '}
            `}
            >
                <div className='flex w-[200px] min-w-[200px] flex-col  gap-10 overflow-auto py-5'>
                    <div className='relative'>
                        <UserAvatarSideMenu />
                        <CloseSideMenu />
                    </div>
                    <div className='ml-4 flex flex-auto flex-col gap-5 overflow-auto  pl-5'>
                        <SideMenuLink
                            to={APP_ROUTES_ENUM.PROFILE}
                            title='Profile'
                            icon={<Icon icon='fluent:share-screen-person-16-regular' width={25} height={25} />}
                        />
                        <SideMenuLink
                            to={APP_ROUTES_ENUM.ACHIEVEMENTS}
                            title='Achievements'
                            icon={<Icon icon='game-icons:achievement' width={23} height={23} />}
                        />
                        {/* <SidemenuLink
                            to={APP_ROUTES_ENUM.FRIENDS}
                            title='Friends'
                            icon={<Icon icon='fluent:people-community-24-regular' width={25} height={25} />}
                            disabled
                        /> */}
                        {/*  */}
                        <XDivider className='w-[125px] bg-gray-700' />
                        {/* <SidemenuLink
                            to={APP_ROUTES_ENUM.SEARCH}
                            title='Search'
                            icon={<Icon icon='material-symbols:screen-search-desktop' width={23} height={23} />}
                            disabled
                        /> */}
                        {/*  */}
                        {/* <Divider className='w-[125px] bg-gray-700' /> */}
                        {/*  */}

                        <SideMenuLink
                            to={APP_ROUTES_ENUM.SPRINTS}
                            title='Sprints'
                            icon={<Icon icon='game-icons:sprint' width={25} height={25} />}
                        />

                        {/* <SideMenuLink
                            to={APP_ROUTES_ENUM.MISSIONS}
                            title='Missions'
                            icon={<Icon icon='game-icons:sprint' width={25} height={25} />}
                            disabled
                        /> */}

                        <SideMenuLink
                            to={APP_ROUTES_ENUM.GOALS}
                            title='Goals'
                            icon={<Icon icon='octicon:goal-16' width={20} height={20} />}
                        />

                        <SideMenuLink
                            to={APP_ROUTES_ENUM.NOTES}
                            title='Notes'
                            icon={<Icon icon='fluent:task-list-square-ltr-16-filled' width={25} height={25} />}
                        />

                        {/*  */}
                        {/* <Divider className='w-[125px] bg-gray-700' /> */}
                        {/*  */}
                        {/* <SidemenuLink
                            to={APP_ROUTES_ENUM.SANCTUARY}
                            title='Sanctuary'
                            icon={<Icon icon='ph:books-fill' width={23} height={23} />}
                            disabled
                        /> */}
                        {/*  */}
                        {/* <Divider className='w-[125px] bg-gray-700' /> */}
                        {/*  */}
                        {/* <SidemenuLink
                            to={APP_ROUTES_ENUM.BIT_WARDEN}
                            title='Bit Warden'
                            icon={<Icon icon='mdi:shield-network' width={25} height={25} />}
                            disabled
                        /> */}
                        <SideMenuLink
                            disabled={!hasWalletAddon}
                            to={APP_ROUTES_ENUM.WALLET}
                            title='Wallet'
                            icon={<Icon icon='ion:wallet' width={23} height={23} />}
                        />
                        {/*  */}
                        <XDivider className='w-[125px] bg-gray-700' />
                        {/*  */}
                        {/* <SidemenuLink
                            to={APP_ROUTES_ENUM.SUGGESTIONS}
                            title='Suggestions'
                            icon={<Icon icon='mdi:present' width={23} height={23} />}
                            disabled
                        /> */}
                        {/* <SidemenuLink
                            to={APP_ROUTES_ENUM.SETTINGS}
                            title='Settings'
                            icon={<Icon icon='material-symbols:settings-applications' width={25} height={25} />}
                            disabled
                        /> */}
                        <SideMenuLink
                            disabled={!hasLinksAddon}
                            to={APP_ROUTES_ENUM.LINKS}
                            title='Links'
                            icon={<Icon icon='solar:link-square-bold' width={25} height={25} />}
                        />
                        <SideMenuLink
                            to={APP_ROUTES_ENUM.DOCUMENTATION}
                            title='Documentation'
                            icon={<Icon icon='subway:book' width={25} height={25} />}
                        />
                    </div>

                    <SideMenuLink to={APP_ROUTES_ENUM.DASHBOARD}>
                        <button
                            className='relative h-[46px] w-[125px] cursor-pointer rounded-sm border border-transparent bg-button-bg
                            p-3 text-sm text-button-text  outline-none duration-300 
                            hover:bg-button-bg-focus hover:to-button-text-focus
                            focus:border-button-border-focus focus:bg-button-bg-focus focus:text-button-text-focus
                            focus:shadow-sm focus:shadow-button-bg-focus 
                            active:border-button-border-active active:bg-button-bg-active active:text-button-text-active'
                        >
                            <span className='absolute left-1/2 top-1/2 w-[125px] -translate-x-1/2 -translate-y-1/2 '>
                                Go to Dashboard
                            </span>
                        </button>
                    </SideMenuLink>
                </div>
            </div>
        </>
    )
})
