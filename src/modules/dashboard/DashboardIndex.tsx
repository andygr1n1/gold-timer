import { Dashboard } from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'

const DashboardIndex: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
        </Routes>
    )
}

export default DashboardIndex
