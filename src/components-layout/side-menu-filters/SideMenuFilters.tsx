import { observer } from 'mobx-react-lite'
import { useRef } from 'react'
import { Transition } from '@headlessui/react'
import { useMenuFiltersClickOutside } from './useMenuFiltersClickOutside.hook'
import clsx from 'clsx'
import { useSideMenuStore } from '../../StoreProvider'
import { CloseSideMenu } from '@/components-icons/CloseSideMenu'
import { NewSprintButtonMobile } from '@/modules/sprints/components/ new-sprint-button/NewSprintButtonMobile'
import { SprintsFiltersMobile } from '@/modules/sprints/components/filters/SprintsFiltersMobile'
import { XDivider } from '@/components-x/x-divider/XDivider'

export const SideMenuFilters: React.FC = observer(() => {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const {
        sprints_side_menu: { visible, onChangeField },
    } = useSideMenuStore()

    useMenuFiltersClickOutside(wrapperRef)

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
                className={'fixed  left-0 top-0 z-40 h-full w-full'}
            >
                <div className='fixed z-40 h-full w-full bg-gray-500 ' />
            </Transition>
            <div
                ref={wrapperRef}
                className={clsx(
                    'fixed -left-0 top-0 z-50 h-[100vh]',
                    visible && 'animate-slide-in ml-0',
                    !visible && 'animate-slide-out ml-[-320px] ',
                    !wrapperRef.current && '!ml-[-320px] ',
                    'text-global-text bg-global-2-bg font-sofia left-0 z-50 flex h-full rounded-r-lg ',
                )}
            >
                <div className='flex w-[170px] min-w-[170px] flex-col overflow-auto py-5 '>
                    <div className='relative flex flex-col items-center justify-center pl-4 pt-10'>
                        <NewSprintButtonMobile />
                        <CloseSideMenu onClose={() => onChangeField('visible', false)} />
                        <XDivider className='my-5 w-[125px] bg-gray-700' />
                        <SprintsFiltersMobile />
                    </div>
                </div>
            </div>
        </>
    )
})
