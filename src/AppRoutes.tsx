import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from './modules/dashboard/Dashboard'
import { Statistics } from './modules/statistics/Statistics'

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/dashboard'} />} />
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'/statistics'} element={<Statistics />} />
        </Routes>
    )
}
