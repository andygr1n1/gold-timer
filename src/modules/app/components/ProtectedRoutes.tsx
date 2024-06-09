import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '../../../helpers/globalEnums'

const GoalsCmsIndex = lazy(() => import('../../goals/components/goals-cms/GoalsCmsIndex'))
const ProfileIndex = lazy(() => import('../../profile/ProfileIndex'))
const NotesIndex = lazy(() => import('../../notes/NotesIndex'))
const SprintsIndex = lazy(() => import('../../sprints/SprintsIndex'))
const DashboardIndex = lazy(() => import('../../dashboard/DashboardIndex'))
const AchievementsIndex = lazy(() => import('../../achievements/AchievementsIndex'))
const StoriesIndex = lazy(() => import('../../stories/StoriesIndex'))
const GriniRoutes = lazy(() => import('./GriniRoutes'))
const SideMenu = lazy(() => import('../../../components/side-menu/SideMenu'))

// import { FocusGoalOfWeek } from '../../../components/components-modal-windows/focus-goal-of-week/FocusGoalOfWeek'
import { LoadingDialogGlobal } from '../../../components/loading/LoadingDialogConstructor'
import { ProtectedStoreProvider } from '../mst/StoreProvider'
import { useIsPortfolioPage } from '../hooks/useIsPortfolioPage'
// import { useUserId } from './service/useUserId'

export const ProtectedRoutes = () => {
    // const { userId } = useUserId()

    const isPortfolioPage = useIsPortfolioPage()

    return isPortfolioPage ? (
        <GriniRoutes />
    ) : (
        <ProtectedStoreProvider userId={'123'}>
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
                            {/*  */}
                            <Route path={`/${APP_ROUTES_ENUM.DASHBOARD}/*`} element={<DashboardIndex />} />
                            <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                            <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                        </Routes>
                        {/*  */}
                        {/* D I A L O G */}
                        {/*  */}
                        {/* <FocusGoalOfWeek /> */}

                        <LoadingDialogGlobal />
                    </div>
                </div>
            </div>
        </ProtectedStoreProvider>
    )
}
