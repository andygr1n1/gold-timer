import { APP_ROUTES_ENUM } from '@/lib/enums'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { observer } from 'mobx-react-lite'
import { SideMenuLink } from './components/SideMenuLink'
import { useOutsideAlerter } from '@/hooks/useClickOutside.hook'
import { useEffect, useRef } from 'react'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { Transition } from '@headlessui/react'
import { GoToDashboard } from './components/GoToDashboard'
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { isUnderDevelopment } from '@/functions/isUnderDevelopment.helper'
import { UserInfo } from './components/user-info/UserInfo'
import { IconAchievements, IconBook, IconFocus, IconLandscape, IconProfile, IconSprint } from '@/assets/icons'

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
                className={'fixed z-[110] h-full w-full lg:hidden'}
            >
                <div className='fixed z-[110] h-full w-full bg-gray-500 lg:hidden' />
            </Transition>
            {/*  */}
            <div
                ref={wrapperRef}
                className={`${
                    useSideMenu.is_open ? 'animate-slide-in' : 'animate-slide-out lg:animate-opacity ml-[-320px] '
                }
                text-cText bg-global-2-bg font-kzen  absolute left-0 z-[120] flex h-full shadow-md shadow-black/20
               lg:static  lg:m-0 lg:mr-0 lg:flex
            `}
            >
                <div className='md:p2-10 flex w-[230px] min-w-[230px] flex-col overflow-auto py-5 '>
                    <div className='flex flex-auto flex-col gap-5 overflow-auto  '>
                        <UserInfo />
                        <div className='w-[calc(100%-32px)] pl-8'>
                            <div className='mx-auto flex w-[180px] flex-auto flex-col gap-5 overflow-auto '>
                                <SideMenuLink
                                    to={APP_ROUTES_ENUM.PROFILE}
                                    title='Profile'
                                    icon={<IconProfile width={26} height={26} className='ml-[-3px]' />}
                                />
                                {isUnderDevelopment() && (
                                    <SideMenuLink
                                        to={APP_ROUTES_ENUM.ACHIEVEMENTS}
                                        title='Achievements'
                                        icon={<IconAchievements width={24} height={24} className='ml-[-3px]' />}
                                    />
                                )}
                                {isUnderDevelopment() && (
                                    <SideMenuLink
                                        to={APP_ROUTES_ENUM.STORIES}
                                        title='Stories'
                                        icon={<IconLandscape width={24} height={24} className='ml-[-2px]' />}
                                    />
                                )}
                                <XMenuDivider />

                                {isUnderDevelopment() && (
                                    <SideMenuLink
                                        to={APP_ROUTES_ENUM.GOALS}
                                        title='Goals'
                                        icon={<IconFocus width={24} height={24} />}
                                    />
                                )}
                                {isUnderDevelopment() && (
                                    <SideMenuLink
                                        to={APP_ROUTES_ENUM.NOTES}
                                        title='Notes'
                                        icon={<IconBook width={24} height={24} />}
                                    />
                                )}
                                {isUnderDevelopment() && (
                                    <SideMenuLink
                                        to={APP_ROUTES_ENUM.SPRINTS}
                                        title='Sprints'
                                        icon={<IconSprint width={24} height={24} />}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <GoToDashboard />
                </div>
            </div>
        </>
    )
})
