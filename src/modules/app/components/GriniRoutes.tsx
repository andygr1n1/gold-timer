import { APP_ROUTES_ENUM } from '@/helpers/globalEnums'
import { AndreiGriniIndex } from '@/modules/andreigrini/AndreiGriniIndex'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

export const GriniRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={`/${APP_ROUTES_ENUM.ANDREI_GRINI}`} element={<AndreiGriniIndex />} />
            {/*  */}
            <Route path={'/'} element={<Navigate replace to={`/${APP_ROUTES_ENUM.ANDREI_GRINI}`} />} />
            <Route path={'*'} element={<Navigate replace to={`/${APP_ROUTES_ENUM.ANDREI_GRINI}`} />} />
        </Routes>
    )
}

export const useIsPortfolioPage = (): boolean => {
    const location = useLocation()

    return (
        location.pathname.trim().toLowerCase().includes('grini') ||
        location.pathname.trim().toLowerCase().includes('andrei')
    )
}
