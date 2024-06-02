import { BrowserRouter } from 'react-router-dom'
import { AnonymousRoutes } from './components/AnonymousRoutes'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import { useUserId } from './service/useUserId'

export const App = () => {
    const { userId } = useUserId()

    return (
        <>
            <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
                {userId ? <ProtectedRoutes /> : <AnonymousRoutes />}
            </BrowserRouter>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </>
    )
}
