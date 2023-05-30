import { AppRoutes } from './AppRoutes'
import { useRootStore } from './StoreProvider'
import { observer } from 'mobx-react-lite'
import { SideMenu } from './components-layout/side-menu/SideMenu'
import { useAppInit } from './hooks/useAppInit.hook'
import { XLoader } from './components-x/x-loader/XLoader'
import { FocusGoalOfWeek } from './components-modal-windows/focus-goal-of-week/FocusGoalOfWeek'

export const App = observer(() => {
    const { isValidating } = useRootStore()

    useAppInit()

    return isValidating ? (
        <XLoader />
    ) : (
        <>
            <FocusGoalOfWeek />
            <div className='app'>
                <SideMenu />
                <div className='app-body w-full flex-auto flex-col'>
                    <div className='module-wrapper'>
                        <AppRoutes />
                    </div>
                </div>
            </div>
        </>
    )
})
