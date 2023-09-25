import { observer } from 'mobx-react-lite'
import { useRef } from 'react'
import { Transition } from '@headlessui/react'
import { useMenuFiltersClickOutside } from './useMenuFiltersClickOutside.hook'
import clsx from 'clsx'
import { useRootStore } from '../../StoreProvider'
import { CloseSideMenu } from '@/components/icons/CloseSideMenuIcon'
import { useLocation } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '../../helpers/enums'
import { CreateNewItems } from './components/CreateNewItems'
import { SprintsSettings } from './components/SprintsSettings'
import { NotesSettings } from './components/NotesSettings'

export const SideMenuSettings: React.FC = observer(() => {
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    const {
        side_menu$: { visible, onChangeField: onChangeSideMenu },
    } = useRootStore()

    const location = useLocation()

    const route = validateDynamicSearchRoute(location.pathname)

    useMenuFiltersClickOutside(wrapperRef)

    if (!route) return null

    return (
        <>
            <Transition
                appear={true}
                show={visible}
                enter='transition-opacity duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-40'
                leave='transition-opacity duration-300'
                leaveFrom='opacity-40'
                leaveTo='opacity-0'
                className={'fixed left-0 top-0 z-40 h-full w-full'}
            >
                <div className='fixed z-40 h-full w-full bg-gray-500 ' />
            </Transition>
            <div
                ref={wrapperRef}
                className={clsx(
                    visible && 'animate-slide-in ml-0',
                    !visible && 'animate-slide-out ml-[-320px] ',
                    !wrapperRef.current && '!ml-[-320px] ',
                    'text-global-text bg-global-2-bg font-kzen fixed bottom-0 left-0 top-0 z-50 flex w-[230px] min-w-[230px] rounded-r-lg md:w-[210px] md:min-w-[210px] ',
                )}
            >
                <div className='relative mt-5 flex w-full flex-col gap-5 px-5 pt-10'>
                    <CloseSideMenu onClose={() => onChangeSideMenu('visible', false)} />
                    {route === APP_ROUTES_ENUM.DASHBOARD && <CreateNewItems />}
                    {route === APP_ROUTES_ENUM.SPRINTS && <SprintsSettings />}
                    {route === APP_ROUTES_ENUM.NOTES && <NotesSettings />}
                </div>
            </div>
        </>
    )
})

export const validateDynamicSearchRoute = (pathname: string): APP_ROUTES_ENUM | undefined => {
    switch (pathname) {
        case `/${APP_ROUTES_ENUM.SPRINTS}`:
            return APP_ROUTES_ENUM.SPRINTS
        case `/${APP_ROUTES_ENUM.GOALS}`:
            return APP_ROUTES_ENUM.GOALS
        case `/${APP_ROUTES_ENUM.NOTES}`:
            return APP_ROUTES_ENUM.NOTES
        case `/${APP_ROUTES_ENUM.DASHBOARD}`:
            return APP_ROUTES_ENUM.DASHBOARD
        default:
            return APP_ROUTES_ENUM.DASHBOARD
    }
}
