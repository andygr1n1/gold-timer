import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from './helpers/enums'
import { GoalsCmsIndex } from './modules/goals/components/goals-cms/GoalsCmsIndex'
import { ProfileIndex } from './modules/profile/ProfileIndex'
import { NotesIndex } from './modules/notes/NotesIndex'
import { SprintsIndex } from './modules/sprints/SprintsIndex'
import { DashboardIndex } from './modules/dashboard/DashboardIndex'

import { FocusGoalOfWeek } from './components/components-modal-windows/focus-goal-of-week/FocusGoalOfWeek'
import { AchievementsIndex } from './modules/achievements/AchievementsIndex'
import { StoriesIndex } from './modules/stories/StoriesIndex'
import { LoadingDialogGlobal } from './components/loading/LoadingDialogConstructor'
import { CryptoIndex } from './modules/crypto/CryptoIndex'

export const AppProtectedRoutes: React.FC = () => {
    return (
        <>
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
        </>
    )
}
