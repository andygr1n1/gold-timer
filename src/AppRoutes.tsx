import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from './helpers/enums'
import { GoalCompleteModeModal } from './modules/dashboard/components/goal-complete-mode-modal/GoalCompleteModeModal'
import { Dashboard } from './modules/dashboard/Dashboard'
import { GoalCreatorIndex } from './modules/goal-creator/GoalCreatorIndex'
import { Statistics } from './modules/statistics/Statistics'

export const AppRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Navigate to={`/${APP_ROUTES_ENUM.DASHBOARD}`} />} />
                <Route path={`/${APP_ROUTES_ENUM.DASHBOARD}`} element={<Dashboard />} />
                <Route path={`/${APP_ROUTES_ENUM.E_MONEY}`} element={<Statistics />} />
            </Routes>
            <GoalCreatorIndex />
            <GoalCompleteModeModal />
        </>
    )
}
