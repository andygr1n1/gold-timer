import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from './helpers/enums'
import { CreateNewGoalModal } from './components-modal-windows/create-new-goal-modal/CreateNewGoalModal'
import { GoalsManagerMw } from './components-modal-windows/goals-manager-mw/GoalsManagerMw'
import { AchievementsIndex } from './pages/achievements/AchievementsIndex'
import { DashboardIndex } from './pages/dashboard/DashboardIndex'
import { GoalsIndex } from './pages/goals/GoalsIndex'
import { ProfileIndex } from './modules/profile/ProfileIndex'
import { TasksIndex } from './modules/notes/NotesIndex'
import { SprintsIndex } from './modules/sprints/SprintsIndex'

export const AppProtectedRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={`/${APP_ROUTES_ENUM.PROFILE}`} element={<ProfileIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.ACHIEVEMENTS}`} element={<AchievementsIndex />} />
                {/*  */}
                <Route path={`/${APP_ROUTES_ENUM.SPRINTS}`} element={<SprintsIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.GOALS}`} element={<GoalsIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.NOTES}`} element={<TasksIndex />} />
                {/*  */}
                <Route path={`/${APP_ROUTES_ENUM.DASHBOARD}`} element={<DashboardIndex />} />
            </Routes>
            <CreateNewGoalModal />
            <GoalsManagerMw />
        </>
    )
}
