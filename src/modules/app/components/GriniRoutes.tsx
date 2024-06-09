import { APP_ROUTES_ENUM } from '@/helpers/globalEnums'
import { AndreiGriniIndex } from '@/modules/andreigrini/AndreiGriniIndex'
import { Navigate, Route, Routes } from 'react-router-dom'

const GriniRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={`/${APP_ROUTES_ENUM.ANDREI_GRINI}`} element={<AndreiGriniIndex />} />
            {/*  */}
            <Route path={'/'} element={<Navigate replace to={`/${APP_ROUTES_ENUM.ANDREI_GRINI}`} />} />
            <Route path={'*'} element={<Navigate replace to={`/${APP_ROUTES_ENUM.ANDREI_GRINI}`} />} />
        </Routes>
    )
}

export default GriniRoutes
