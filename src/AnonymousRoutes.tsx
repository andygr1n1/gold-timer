import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from './helpers/enums'
import { LoginIndex } from './modules/login/LoginIndex'
import { RegisterIndex } from './modules/login/RegisterIndex'
import { RestoreAccountIndex } from './modules/login/RestoreAccountIndex'
import { NewPasswordIndex } from './modules/login/NewPasswordIndex'

export const AnonymousRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={`/${APP_ROUTES_ENUM.LOGIN}`} element={<LoginIndex />} />
            <Route path={`/${APP_ROUTES_ENUM.REGISTER}`} element={<RegisterIndex />} />
            <Route path={`/${APP_ROUTES_ENUM.RESTORE_ACCOUNT}`} element={<RestoreAccountIndex />} />
            <Route path={`/${APP_ROUTES_ENUM.NEW_PASSWORD}`} element={<NewPasswordIndex />} />
            <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.LOGIN}`} />} />
        </Routes>
    )
}
