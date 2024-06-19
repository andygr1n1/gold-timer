import { BrowserRouter } from 'react-router-dom'
import { AnonymousRoutes } from './components/AnonymousRoutes'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import { useTheming } from '@/hooks/useTheming.hook'
import { useJwtAuth } from './hooks/useJwtAuth.hook'

export const App = () => {
    const { userId, isLoading } = useJwtAuth()
    useTheming()

    if (isLoading) return null

    return (
        <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
            {userId ? <ProtectedRoutes /> : <AnonymousRoutes />}
        </BrowserRouter>
    )
}
