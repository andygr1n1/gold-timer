import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { XDivider } from '../../components-x/x-divider/XDivider'
import { CloseSideMenu } from '../icons/CloseSideMenuIcon'
import { UserAvatarSideMenu } from './components/UserAvatar'
import { SideMenuLink } from './components/SideMenuLink'
import { useOutsideAlerter } from '@/hooks/useClickOutside.hook'
import { useEffect, useRef } from 'react'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { Transition } from '@headlessui/react'
import { UserCoins } from './components/UserCoins'
import { GoToDashboard } from './components/GoToDashboard'

export const SideMenu: React.FC = observer(() => {
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
                className={'fixed z-40 h-full w-full lg:hidden'}
            >
                <div className='fixed z-40 h-full w-full bg-gray-500 lg:hidden' />
            </Transition>
            {/*  */}
            <div
                ref={wrapperRef}
                className={`${
                    useSideMenu.is_open ? 'animate-slide-in' : 'animate-slide-out lg:animate-opacity ml-[-320px] '
                }
                text-global-text bg-global-2-bg font-sofia  absolute left-0 z-50 flex h-full
                rounded-r-lg  lg:static  lg:m-5 lg:mr-0 lg:flex lg:h-[calc(100%-40px)] lg:rounded-lg
            `}
            >
                <div className='flex w-[190px] min-w-[190px] flex-col overflow-auto py-5'>
                    <div className='flex flex-auto flex-col gap-5 overflow-auto  '>
                        <div className='relative flex flex-col items-center justify-center'>
                            <UserAvatarSideMenu />
                            <UserCoins />
                            <CloseSideMenu onClose={useSideMenu.onChange} />
                        </div>
                        <div className='ml-5 mt-5 flex flex-auto flex-col gap-5 overflow-auto'>
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
                            <XDivider className='w-[125px] bg-gray-700' />
                            <SideMenuLink
                                to={APP_ROUTES_ENUM.SPRINTS}
                                title='Sprints'
                                icon={<Icon icon='game-icons:sprint' width={25} height={25} />}
                            />
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
                        </div>
                    </div>

                    <GoToDashboard />
                </div>
            </div>
        </>
    )
})
