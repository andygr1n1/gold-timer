import { Navigate, Route, Routes } from 'react-router-dom'
import { GoalsFilterModal } from './components/modals/goals-filter-modal/GoalsFilterModal'
import { APP_ROUTES_ENUM } from './helpers/enums'
import { CreateNewGoalModal } from './modules/create-new-goal-modal/CreateNewGoalModal'
import { GoalCreatorIndex } from './modules/create-new-goal-modal/GoalCreatorIndex'
import { GoalCompleteModeModal } from './modules/dashboard/components/goal-complete-mode-modal/GoalCompleteModeModal'
import { GoalsDashboard } from './modules/dashboard/GoalsDashboard'
import { PageGoals } from './modules/page-goals/PageGoals'
import { TasksModal } from './widgets-modals/tasks/TasksModal'

export const AppRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={`/${APP_ROUTES_ENUM.GOALS}`} element={<PageGoals />} />
                <Route path={`/${APP_ROUTES_ENUM.DASHBOARD}`} element={<GoalsDashboard />} />
                <Route path={`/${APP_ROUTES_ENUM.ACHIEVEMENTS}`} element={<GoalsDashboard />} />
            </Routes>
            <CreateNewGoalModal />
            <GoalCreatorIndex />
            <GoalCompleteModeModal />
            <GoalsFilterModal />
            <TasksModal />
        </>
    )
}
