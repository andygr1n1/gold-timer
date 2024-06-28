import { GoalCRUDProvider } from '../goals/components/goal-editor-dialog/GoalEditorDialog'
import { Dashboard } from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'

const DashboardIndex: React.FC = () => {
    return (
        <GoalCRUDProvider>
            <Routes>
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </GoalCRUDProvider>
    )
}

export default DashboardIndex
