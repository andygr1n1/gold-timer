import { observer } from 'mobx-react-lite'
import { useRootStore } from './StoreProvider'
import { useAppInit } from './hooks/useAppInit.hook'
import { XLoader } from './components-x/x-loader/XLoader'
import { FocusGoalOfWeek } from './components/components-modal-windows/focus-goal-of-week/FocusGoalOfWeek'
import { SideMenu } from './components/side-menu/SideMenu'
import { AppProtectedRoutes } from './AppProtectedRoutes'

export const AppProtected = observer(() => {
    const { isValidating } = useRootStore()

    useAppInit()

    return isValidating ? (
        <XLoader />
    ) : (
        <>
            <div className='bg-global-bg flex w-full'>
                <SideMenu />
                <div className='bg-global-bg flex  w-full flex-auto flex-col'>
                    <div className='animate-opacity relative flex h-full w-full flex-col overflow-auto bg-transparent transition-all duration-300'>
                        <AppProtectedRoutes />
                    </div>
                </div>
            </div>
        </>
    )
})
