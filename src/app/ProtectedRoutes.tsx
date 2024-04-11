import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '../helpers/enums'
import { GoalsCmsIndex } from '../modules/goals/components/goals-cms/GoalsCmsIndex'
import { ProfileIndex } from '../modules/profile/ProfileIndex'
import { NotesIndex } from '../modules/notes/NotesIndex'
import { SprintsIndex } from '../modules/sprints/SprintsIndex'
import { DashboardIndex } from '../modules/dashboard/DashboardIndex'

import { FocusGoalOfWeek } from '../components/components-modal-windows/focus-goal-of-week/FocusGoalOfWeek'
import { AchievementsIndex } from '../modules/achievements/AchievementsIndex'
import { StoriesIndex } from '../modules/stories/StoriesIndex'
import { LoadingDialogGlobal } from '../components/loading/LoadingDialogConstructor'
import { CryptoIndex } from '../modules/crypto/CryptoIndex'
import { ProtectedStoreProvider } from './StoreProvider'
import { SideMenu } from '../components/side-menu/SideMenu'
import { useUserId } from './service/useUserId'

export const ProtectedRoutes = () => {
    const { userId } = useUserId()

    return (
        <ProtectedStoreProvider userId={userId}>
            <div className='bg-global-bg flex w-full'>
                <SideMenu />
                <div className='bg-global-bg flex w-full flex-auto flex-col pb-5'>
                    <div className='animate-opacity scrollbar-thumb-blue-500 scrollbar-track-global-bg scrollbar-thin relative flex h-full w-full flex-col overflow-auto overflow-y-scroll bg-transparent transition-all duration-300'>
                        <Routes>
                            <Route path={`/${APP_ROUTES_ENUM.PROFILE}`} element={<ProfileIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.ACHIEVEMENTS}`} element={<AchievementsIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.STORIES}/*`} element={<StoriesIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.NOTES}`} element={<NotesIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.GOALS}/*`} element={<GoalsCmsIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.SPRINTS}`} element={<SprintsIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.CRYPTO}`} element={<CryptoIndex />} />
                            {/*  */}
                            <Route path={`/${APP_ROUTES_ENUM.DASHBOARD}/*`} element={<DashboardIndex />} />
                            <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                            <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                        </Routes>
                        {/*  */}
                        {/* D I A L O G */}
                        {/*  */}
                        <FocusGoalOfWeek />

                        <LoadingDialogGlobal />
                    </div>
                </div>
            </div>
        </ProtectedStoreProvider>
    )
}
