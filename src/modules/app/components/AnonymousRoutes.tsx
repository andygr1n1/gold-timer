import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '../../../helpers/globalEnums'
import { LoginIndex } from '../../authentication/LoginIndex'
import { RegisterIndex } from '../../authentication/RegisterIndex'
import { RestoreAccountIndex } from '../../authentication/RestoreAccountIndex'
import { NewPasswordIndex } from '../../authentication/NewPasswordIndex'
import { GriniRoutes, useIsPortfolioPage } from './GriniRoutes'
import { AnonymousFooter } from '@/modules/authentication/components/AnonymousFooter'
import { LoginContainer } from '@/modules/authentication/components/LoginContainer'
import { ActivationPending } from '@/modules/authentication/components/activation-pending/ActivationPending'
import { Activation } from '@/modules/authentication/components/activation/Activation'

export const AnonymousRoutes: React.FC = () => {
    const isPortfolioPage = useIsPortfolioPage()

    return isPortfolioPage ? (
        <GriniRoutes />
    ) : (
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
                    {/* <Route path={`/${APP_ROUTES_ENUM.ACTIVATE_REGISTERED_USER}`} element={<Activation />} /> */}
                    <Route path={`/${APP_ROUTES_ENUM.RESTORE_ACCOUNT}`} element={<RestoreAccountIndex />} />
                    <Route path={`/${APP_ROUTES_ENUM.NEW_PASSWORD}`} element={<NewPasswordIndex />} />
                    <Route path={'*'} element={<Navigate to={`/${APP_ROUTES_ENUM.LOGIN}`} />} />
                </Routes>
            </LoginContainer>

            <AnonymousFooter />
        </div>
    )
}
