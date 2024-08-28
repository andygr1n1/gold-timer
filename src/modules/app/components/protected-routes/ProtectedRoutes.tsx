import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '../../../../services/enums'
import SideMenu from '@/components/side-menu/SideMenu'

const GoalsCmsIndex = lazy(() => import('../../../goals/components/goals-cms/GoalsCmsIndex'))
const ProfileIndex = lazy(() => import('../../../profile/ProfileIndex'))
const NotesCmsIndex = lazy(() => import('../../../notes/components/notes-cms/NotesCmsIndex'))
const SprintsIndex = lazy(() => import('../../../sprints/SprintsIndex'))
const DashboardIndex = lazy(() => import('../../../dashboard/DashboardIndex'))
const AchievementsIndex = lazy(() => import('../../../achievements/AchievementsIndex'))
const StoriesIndex = lazy(() => import('../../../stories/StoriesIndex'))
const BlogIndex = lazy(() => import('../../../blog/BlogIndex'))

const ProtectedRoutes = () => {
    return (
        <div className='bg-transparent flex w-full'>
            <SideMenu />
            <div className='bg-transparent flex w-full flex-auto flex-col pb-5'>
                <div className='animate-opacity scroll-style relative flex h-full w-full flex-col overflow-auto overflow-y-scroll bg-transparent transition-all duration-300'>
                    <Suspense fallback={null}>
                        <Routes>
                            <Route path={`/${APP_ROUTES_ENUM.PROFILE}`} element={<ProfileIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.ACHIEVEMENTS}/*`} element={<AchievementsIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.STORIES}/*`} element={<StoriesIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.BLOG}/*`} element={<BlogIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.NOTES}/*`} element={<NotesCmsIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.GOALS}/*`} element={<GoalsCmsIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.SPRINTS}`} element={<SprintsIndex />} />
                            <Route path={`/${APP_ROUTES_ENUM.DASHBOARD}/*`} element={<DashboardIndex />} />
                            <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                            <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default ProtectedRoutes
