import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Creator } from './modules/creator/Creator'
import { Dashboard } from './modules/dashboard/Dashboard'
import { useRootStore } from './StoreProvider'

export const AppRoutes: React.FC = () => {
    const { fetchUserId } = useRootStore()

    useEffect(() => {
        console.log('AppRoutes')
        fetchUserId()
    }, [])

    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/dashboard'} />} />
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'/creator'} element={<Creator />} />
        </Routes>
    )
}
