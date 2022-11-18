import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from './helpers/enums'
import { GoalCompleteModeModal } from './modules/dashboard/components/goal-complete-mode-modal/GoalCompleteModeModal'
import { GoalsDashboard } from './modules/dashboard/GoalsDashboard'
import { GoalCreatorIndex } from './modules/goal-creator/GoalCreatorIndex'
import { Statistics } from './modules/statistics/Statistics'

export const AppRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.GOALS}`} />} />
                <Route path={`/${APP_ROUTES_ENUM.GOALS}`} element={<GoalsDashboard />} />
                <Route path={`/${APP_ROUTES_ENUM.E_MONEY}`} element={<Statistics />} />
            </Routes>
            <GoalCreatorIndex />
            <GoalCompleteModeModal />
        </>
    )
}
