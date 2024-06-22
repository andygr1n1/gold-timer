import { Suspense, lazy } from 'react'
import { useIsPortfolioPage } from './hooks/useIsPortfolioPage'
import { useJwtAuth } from './hooks/useJwtAuth.hook'
const GriniRoutes = lazy(() => import('./components/portfolio-routes/PortfolioRoutes'))
const AnonymousRoutes = lazy(() => import('./components/anonymous-routes/AnonymousRoutes'))
const ProtectedRoutes = lazy(() => import('./components/protected-routes/ProtectedRoutes'))

export const AppRoutes: React.FC = () => {
    const { userId } = useJwtAuth()
    const isPortfolioPage = useIsPortfolioPage()

    if (isPortfolioPage)
        return (
            <Suspense>
                <GriniRoutes />
            </Suspense>
        )

    return (
        !isPortfolioPage &&
        (userId ? (
            <Suspense>
                <ProtectedRoutes />
            </Suspense>
        ) : (
            <Suspense>
                <AnonymousRoutes />
            </Suspense>
        ))
    )
}
