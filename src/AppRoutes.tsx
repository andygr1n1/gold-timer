import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from './helpers/enums'
import { CreateNewGoalModal } from './components-modals/create-new-goal-modal/CreateNewGoalModal'
import { GoalsListModal } from './components-modals/goals-list-modal/GoalsListModal'
import { AchievementsIndex } from './pages/achievements/AchievementsIndex'
import { DashboardIndex } from './pages/dashboard/DashboardIndex'
import { GoalsIndex } from './pages/goals/GoalsIndex'
import { ProfileIndex } from './pages/profile/ProfileIndex'
import { TasksIndex } from './pages/tasks/TasksIndex'

export const AppRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={`/${APP_ROUTES_ENUM.PROFILE}`} element={<ProfileIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.ACHIEVEMENTS}`} element={<AchievementsIndex />} />
                {/*  */}
                <Route path={`/${APP_ROUTES_ENUM.GOALS}`} element={<GoalsIndex />} />
                <Route path={`/${APP_ROUTES_ENUM.TASKS}`} element={<TasksIndex />} />
                {/*  */}
                <Route path={`/${APP_ROUTES_ENUM.DASHBOARD}`} element={<DashboardIndex />} />
            </Routes>
            <CreateNewGoalModal />
            <GoalsListModal />
        </>
    )
}
