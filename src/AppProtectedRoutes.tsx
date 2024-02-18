import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from './lib/enums'
import { GoalsCms } from './modules/goals/components/goals-cms/GoalsCms'
import { ProfileIndex } from './modules/profile/ProfileIndex'
import { NotesIndex } from './modules/notes/NotesIndex'
import { SprintsIndex } from './modules/sprints/SprintsIndex'
import { DashboardIndex } from './modules/dashboard/DashboardIndex'

import { FocusGoalOfWeek } from './components/components-modal-windows/focus-goal-of-week/FocusGoalOfWeek'
import { ProfileImageCropDialog } from './modules/profile/components/profile-avatar/ProfileImageCropDialog'
import { AchievementsIndex } from './modules/achievements/AchievementsIndex'
import { StoriesIndex } from './modules/stories/StoriesIndex'
import { SmartContractsIndex } from './modules/smart-contracts/SmartContractsIndex'
import { LoadingDialogGlobal } from './components/LoadingDialogConstructor'

export const AppProtectedRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={`/${APP_ROUTES_ENUM.PROFILE}`} element={<ProfileIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.ACHIEVEMENTS}`} element={<AchievementsIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.STORIES}/*`} element={<StoriesIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.NOTES}`} element={<NotesIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.GOALS}`} element={<GoalsCms />} />
                <Route path={`/${APP_ROUTES_ENUM.SPRINTS}`} element={<SprintsIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.SMART_CONTRACTS}`} element={<SmartContractsIndex />} />
                {/*  */}
                <Route path={`/${APP_ROUTES_ENUM.DASHBOARD}/*`} element={<DashboardIndex />} />
            </Routes>
            {/*  */}
            {/* D I A L O G */}
            {/*  */}
            <FocusGoalOfWeek />

            <ProfileImageCropDialog />
            <LoadingDialogGlobal />
        </>
    )
}
