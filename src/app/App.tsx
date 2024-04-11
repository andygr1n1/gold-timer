import { BrowserRouter } from 'react-router-dom'
import { AnonymousRoutes } from './AnonymousRoutes'
import { ProtectedRoutes } from './ProtectedRoutes'
import { useUserId } from './service/useUserId'

export const App: React.FC = () => {
    const { isLoading, userId } = useUserId()

    if (isLoading) return null

    return (
        <>
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                {userId ? <ProtectedRoutes /> : <AnonymousRoutes />}
            </BrowserRouter>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </>
    )
}
