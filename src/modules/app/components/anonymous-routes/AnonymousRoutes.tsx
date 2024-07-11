import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '../../../../services/enums'
const LoginIndex = lazy(() => import('@/modules/auth/login/Login'))
const RegisterIndex = lazy(() => import('@/modules/auth/register/Register'))
const RestoreAccountIndex = lazy(() => import('@/modules/auth/restore/Restore'))
const NewPasswordIndex = lazy(() => import('@/modules/auth/new-password/NewPassword'))
const Activation = lazy(() => import('@/modules/auth/activation/Activation'))
const ActivationPending = lazy(() => import('@/modules/auth/activation-pending/ActivationPending'))
const AnonymousFooter = lazy(() => import('@/modules/auth/shared-components/AnonymousFooter'))
const LoginContainer = lazy(() => import('@/modules/auth/shared-components/LoginContainer'))

export const AnonymousRoutes: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <div className={'authorization-page'}>
                <LoginContainer>
                    <Routes>
                        <Route path={`/${APP_ROUTES_ENUM.LOGIN}`} element={<LoginIndex />} />
                        <Route path={`/${APP_ROUTES_ENUM.REGISTER}/*`} element={<RegisterIndex />} />
                        <Route
                            path={`/${APP_ROUTES_ENUM.ACTIVATE_PENDING_REGISTERED_USER}`}
                            element={<ActivationPending />}
                        />
                        <Route path={`/${APP_ROUTES_ENUM.ACTIVATE_REGISTERED_USER}`} element={<Activation />} />
                        <Route path={`/${APP_ROUTES_ENUM.RESTORE_ACCOUNT}`} element={<RestoreAccountIndex />} />
                        <Route path={`/${APP_ROUTES_ENUM.NEW_PASSWORD}`} element={<NewPasswordIndex />} />
                        <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.LOGIN}`} />} />
                    </Routes>
                </LoginContainer>
                <AnonymousFooter />
            </div>
        </Suspense>
    )
}

export default AnonymousRoutes
