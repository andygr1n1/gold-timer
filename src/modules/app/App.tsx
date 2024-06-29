import { BrowserRouter } from 'react-router-dom'
import { useJwtAuth } from './hooks/useJwtAuth.hook'
import { useTheming } from './hooks/useTheming.hook'
import { AppRoutes } from './AppRoutes'

export const App = () => {
    useTheming()
    const { isLoading } = useJwtAuth()

    if (isLoading) return <div className='authorization-page' />
    
    return (
        <BrowserRouter basename='/' future={{ v7_startTransition: true }}>
            <AppRoutes />
        </BrowserRouter>
    )
}
